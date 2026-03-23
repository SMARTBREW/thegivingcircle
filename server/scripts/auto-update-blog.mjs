import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { connectMongo, closeMongo } from '../config/mongo.js';
import { loadBlogPosts, saveBlogPosts } from '../services/blogStore.js';
import { generateUpdatedBlogPost } from '../services/openaiBlogGenerator.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

function getArgValue(name) {
  const prefix = `--${name}=`;
  const found = process.argv.find((a) => a.startsWith(prefix));
  if (found) return found.slice(prefix.length);
  const exact = process.argv.find((a) => a === `--${name}`);
  return exact ? true : undefined;
}

function printUsageAndExit() {
  // eslint-disable-next-line no-console
  console.log('Usage: node server/scripts/auto-update-blog.mjs --slug=<post-slug> --purpose=weekly');
  process.exit(1);
}

async function main() {
  await connectMongo();

  try {
    const slug = getArgValue('slug');
    const purpose = getArgValue('purpose') || 'weekly';

    if (!slug && purpose !== 'weekly' && purpose !== 'monthly' && purpose !== 'on_demand') {
      // eslint-disable-next-line no-console
      console.log('Invalid --purpose. Use weekly|monthly|on_demand');
    }

    const posts = await loadBlogPosts();
    if (!posts.length) printUsageAndExit();

    const targets = slug ? posts.filter((p) => p.slug === slug) : posts;
    if (!targets.length) {
      // eslint-disable-next-line no-console
      console.log(`No post found for slug: ${slug}`);
      process.exit(2);
    }

    // eslint-disable-next-line no-console
    console.log(`Auto-updating ${targets.length} blog post(s) with purpose="${purpose}"...`);

    const updatedPosts = [...posts];
    let updatedCount = 0;

    for (const target of targets) {
      const updated = await generateUpdatedBlogPost({
        existingPost: target,
        updatePurpose: purpose,
      });
      const idx = updatedPosts.findIndex((p) => p.slug === updated.slug);
      if (idx !== -1) updatedPosts[idx] = updated;
      updatedCount += 1;
    }

    await saveBlogPosts(updatedPosts);
    // eslint-disable-next-line no-console
    console.log(`Done. Updated ${updatedCount} post(s).`);
  } finally {
    await closeMongo();
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Blog auto-update failed:', err?.message || err);
  process.exit(1);
});
