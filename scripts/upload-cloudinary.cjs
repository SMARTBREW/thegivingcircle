/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;

try { require('dotenv').config(); } catch (_) {}

// Read creds from env vars. Set in PowerShell before running:
// $env:CLOUDINARY_CLOUD_NAME="..."; $env:CLOUDINARY_API_KEY="..."; $env:CLOUDINARY_API_SECRET="..."
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error('Missing Cloudinary credentials. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET.');
  process.exit(1);
}

const LOCAL_ROOT = path.join(process.cwd(), 'public', 'images');
const CLOUD_ROOT = process.env.CLD_DEST_FOLDER || 'images'; // destination root folder in Cloudinary
const OVERWRITE = (process.env.CLD_OVERWRITE || 'false').toLowerCase() === 'true';
const FORCE_REUPLOAD = (process.env.CLD_FORCE_REUPLOAD || 'false').toLowerCase() === 'true';
const MAX_BYTES = Number(process.env.CLD_MAX_BYTES || 10 * 1024 * 1024); // 10MB default (Cloudinary free-tier)

// Optional local downscaling for too-large files
let sharp;
try { sharp = require('sharp'); } catch (_) { console.warn('sharp not installed; oversized images will fail. Run: npm i sharp'); }

async function tryCompress(absPath, filename, targetBytes) {
  if (!sharp) return null;
  const tmpBase = path.join(require('os').tmpdir(), `cld-${Date.now()}-${filename}`);
  const attempts = [
    { width: 2200, quality: 80, format: 'webp' },
    { width: 1800, quality: 78, format: 'webp' },
    { width: 1600, quality: 75, format: 'webp' },
    { width: 1280, quality: 72, format: 'webp' },
    { width: 1024, quality: 70, format: 'webp' },
  ];
  for (let i = 0; i < attempts.length; i++) {
    const a = attempts[i];
    const out = `${tmpBase}-${a.width}.${a.format}`;
    try {
      const img = sharp(absPath).resize({ width: a.width, withoutEnlargement: true });
      if (a.format === 'webp') await img.webp({ quality: a.quality }).toFile(out);
      else await img.jpeg({ quality: a.quality, mozjpeg: true }).toFile(out);
      const size = fs.statSync(out).size;
      if (size <= targetBytes) return out;
    } catch (e) {
      console.warn(`! Compress attempt failed (${a.width}px @ q${a.quality}): ${e.message}`);
    }
  }
  return null;
}
const OUTPUT_FILE = path.join(process.cwd(), 'cloudinary-urls.json');

/**
 * Recursively walk a directory and return file paths (images only)
 */
function walkDir(dirPath, results = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, results);
    } else if (/\.(png|jpe?g|webp|gif|avif|heic)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

async function uploadAll() {
  const files = walkDir(LOCAL_ROOT);
  console.log(`Found ${files.length} image files under ${LOCAL_ROOT}`);

  // Load existing URL map (skip already uploaded files)
  let existingMap = {};
  if (fs.existsSync(OUTPUT_FILE)) {
    try { existingMap = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8')); } catch (_) {}
  }

  const urlMap = { ...existingMap }; // preserve existing mappings

  for (const absPath of files) {
    const relFromImages = path.relative(LOCAL_ROOT, absPath).replace(/\\/g, '/');
    const folder = path.posix.join(CLOUD_ROOT, path.posix.dirname(relFromImages));
    const filename = path.basename(relFromImages);

    // Skip if we already have a URL and not forcing re-upload
    if (!FORCE_REUPLOAD && urlMap[relFromImages]) {
      console.log(`↷ Skipping (already uploaded): ${relFromImages}`);
      continue;
    }

    try {
      console.log(`Uploading ${relFromImages} -> ${folder}/${filename}`);
      let uploadPath = absPath;

      // If file too large, downscale/compress to fit (tries multiple passes)
      const stat = fs.statSync(absPath);
      if (stat.size > MAX_BYTES) {
        const compressed = await tryCompress(absPath, filename, MAX_BYTES);
        if (compressed) uploadPath = compressed;
        else console.warn(`! Could not compress under ${(MAX_BYTES/1024/1024).toFixed(1)}MB: ${relFromImages}`);
      }

      const res = await cloudinary.uploader.upload(uploadPath, {
        folder,
        use_filename: true,
        unique_filename: false,
        overwrite: OVERWRITE,
        resource_type: 'image',
      });
      urlMap[relFromImages] = res.secure_url;
      console.log(`✓ ${res.secure_url}`);
    } catch (e) {
      const msg = (e && e.message) || (e && e.error && e.error.message) || 'unknown error';
      const code = (e && e.http_code) || (e && e.error && e.error.http_code) || '';
      console.error(`✗ Failed ${relFromImages}: ${msg} ${code}`);
    }
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(urlMap, null, 2), 'utf8');
  console.log(`\nSaved URL map to ${OUTPUT_FILE}`);
}

uploadAll().catch((e) => {
  console.error(e);
  process.exit(1);
});


