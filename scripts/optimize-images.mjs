import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToOptimize = [
  { 
    input: 'public/Smileshero.jpg', 
    output: 'public/Smileshero.webp', 
    quality: 80,
    description: 'Hero image'
  },
  { 
    input: 'public/android-chrome-512x512.png', 
    output: 'public/android-chrome-512x512.webp', 
    quality: 90,
    description: 'App icon 512x512'
  },
  { 
    input: 'public/Giving_Circle..-removebg-preview.png', 
    output: 'public/Giving_Circle..-removebg-preview.webp', 
    quality: 90,
    description: 'Logo with transparent background'
  },
  { 
    input: 'public/images/Uttarakhand-rescue.jpg', 
    output: 'public/images/Uttarakhand-rescue.webp', 
    quality: 80,
    description: 'Uttarakhand rescue image'
  },
  { 
    input: 'public/Giving Circle logo.png', 
    output: 'public/Giving Circle logo.webp', 
    quality: 90,
    description: 'Main logo'
  },
  { 
    input: 'public/khushii.jpg', 
    output: 'public/khushii.webp', 
    quality: 80,
    description: 'Khushii NGO image'
  },
  { 
    input: 'public/JWP.jpg', 
    output: 'public/JWP.webp', 
    quality: 80,
    description: 'JWP NGO image'
  },
  { 
    input: 'public/kokan.jpg', 
    output: 'public/kokan.webp', 
    quality: 80,
    description: 'Kokan NGO image'
  },
  { 
    input: 'public/mamta.jpg', 
    output: 'public/mamta.webp', 
    quality: 80,
    description: 'Mamta NGO image'
  },
  { 
    input: 'public/Animal care.jpg', 
    output: 'public/Animal care.webp', 
    quality: 80,
    description: 'Animal care image'
  },
];

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');
  
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let successCount = 0;
  let failCount = 0;

  for (const img of imagesToOptimize) {
    try {
      const inputPath = path.join(__dirname, '..', img.input);
      const outputPath = path.join(__dirname, '..', img.output);

      // Check if input file exists
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  Skipping ${img.input} - File not found\n`);
        failCount++;
        continue;
      }

      // Convert to WebP
      await sharp(inputPath)
        .webp({ quality: img.quality, effort: 6 })
        .toFile(outputPath);
      
      const originalSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      
      totalOriginalSize += originalSize;
      totalNewSize += newSize;
      successCount++;
      
      console.log(`✅ ${img.description}`);
      console.log(`   ${img.input}`);
      console.log(`   ${(originalSize/1024).toFixed(1)}KB → ${(newSize/1024).toFixed(1)}KB (${savings}% smaller)\n`);
    } catch (error) {
      console.error(`❌ Failed: ${img.input}`);
      console.error(`   ${error.message}\n`);
      failCount++;
    }
  }

  const totalSavings = ((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1);
  
  console.log('━'.repeat(60));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('━'.repeat(60));
  console.log(`✅ Successfully optimized: ${successCount} images`);
  console.log(`❌ Failed: ${failCount} images`);
  console.log(`📦 Original size: ${(totalOriginalSize/1024).toFixed(1)}KB`);
  console.log(`📦 New size: ${(totalNewSize/1024).toFixed(1)}KB`);
  console.log(`💾 Total savings: ${((totalOriginalSize - totalNewSize)/1024).toFixed(1)}KB (${totalSavings}% smaller)`);
  console.log('━'.repeat(60));
  console.log('\n✨ Done! WebP images created successfully.');
  console.log('💡 Next: Update your code to use .webp files instead of .jpg/.png');
}

optimizeImages().catch(console.error);
