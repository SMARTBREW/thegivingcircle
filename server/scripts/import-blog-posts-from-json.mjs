import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';
import { connectMongo, closeMongo } from '../config/mongo.js';
import { saveBlogPosts } from '../services/blogStore.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load server/.env so Mongo URI + DB name are available
dotenv.config({ path: join(__dirname, '..', '.env') });

async function main() {
  await connectMongo();

  try {
    const legacyPath = join(__dirname, '..', 'data', 'blog-posts.json');
    const raw = await fs.readFile(legacyPath, 'utf-8');
    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      throw new Error('blog-posts.json must export an array of blog posts');
    }

    await saveBlogPosts(parsed);
    // eslint-disable-next-line no-console
    console.log(`Imported/updated ${parsed.length} blog post(s) into MongoDB.`);
  } finally {
    await closeMongo();
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Import failed:', err?.message || err);
  process.exit(1);
});

