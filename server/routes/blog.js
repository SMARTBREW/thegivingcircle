import express from 'express';
import fs from 'fs/promises';
import { loadBlogPosts, saveBlogPosts, getBlogPostBySlug } from '../services/blogStore.js';
import { generateUpdatedBlogPost } from '../services/openaiBlogGenerator.js';

const router = express.Router();

function isSecretValid(req) {
  const expected = process.env.BLOG_UPDATE_SECRET;
  if (!expected) {
    // In development you might not set a secret; allow requests but log a warning.
    return process.env.NODE_ENV !== 'production';
  }
  const provided =
    req.headers['x-blog-update-secret'] ||
    req.headers['X-Blog-Update-Secret'] ||
    req.body?.secret;
  return provided === expected;
}

router.get('/posts', async (req, res) => {
  try {
    const posts = await loadBlogPosts();
    res.json({ success: true, posts });
  } catch (err) {
    res.status(500).json({ success: false, message: err?.message || 'Failed to load blog posts' });
  }
});

router.get('/post/:slug', async (req, res) => {
  try {
    const post = await getBlogPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.json({ success: true, post });
  } catch (err) {
    res.status(500).json({ success: false, message: err?.message || 'Failed to load blog post' });
  }
});

router.post('/generate', async (req, res) => {
  try {
    if (!isSecretValid(req)) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }

    const { slug, updatePurpose } = req.body || {};
    const purpose = updatePurpose || 'weekly';

    const posts = await loadBlogPosts();
    if (!posts.length) {
      return res.status(400).json({ success: false, message: 'No blog posts found in storage' });
    }

    const targets = slug ? posts.filter((p) => p.slug === slug) : posts;
    if (!targets.length) {
      return res.status(404).json({ success: false, message: 'No matching post(s) found' });
    }

    let updatedCount = 0;
    const updatedPosts = [...posts];

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
    res.json({ success: true, updatedCount, posts: updatedPosts });
  } catch (err) {
    res.status(500).json({ success: false, message: err?.message || 'Blog generation failed' });
  }
});

// Admin utility: import legacy JSON into Mongo (for adding new posts)
router.post('/import-from-json', async (req, res) => {
  try {
    if (!isSecretValid(req)) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }

    const legacyJsonPath = new URL('../data/blog-posts.json', import.meta.url);
    const raw = await fs.readFile(legacyJsonPath, 'utf-8');
    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return res.status(400).json({
        success: false,
        message: 'blog-posts.json must be an array',
      });
    }

    await saveBlogPosts(parsed);
    return res.json({ success: true, importedCount: parsed.length });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err?.message || 'Import failed',
    });
  }
});

export default router;

