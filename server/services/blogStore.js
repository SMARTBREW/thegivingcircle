import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getDb } from '../config/mongo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const COLLECTION = 'blog_posts';
const LEGACY_JSON_PATH = join(__dirname, '..', 'data', 'blog-posts.json');

/**
 * Strip MongoDB-only fields so API responses match the frontend BlogPost shape.
 * @param {Record<string, unknown>} doc
 */
function sanitizeDoc(doc) {
  if (!doc) return doc;
  const { _id, createdAt, updatedAt, ...rest } = doc;
  return rest;
}

function getCollection() {
  return getDb().collection(COLLECTION);
}

/**
 * If MongoDB has no posts, import from legacy `server/data/blog-posts.json` once.
 */
export async function seedBlogPostsFromJsonIfEmpty() {
  const coll = getCollection();
  const count = await coll.countDocuments();
  if (count > 0) return;

  try {
    const raw = await readFile(LEGACY_JSON_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return;

    const now = new Date();
    await coll.insertMany(
      parsed.map((p) => ({
        ...p,
        createdAt: now,
        updatedAt: now,
      }))
    );
    console.log(
      `📥 Seeded ${parsed.length} blog post(s) from blog-posts.json → MongoDB (${COLLECTION})`
    );
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      console.warn(
        '⚠️  Blog collection is empty and no blog-posts.json found add posts via API or seed file.'
      );
      return;
    }
    throw err;
  }
}

export async function loadBlogPosts() {
  const coll = getCollection();
  const docs = await coll
    .find({})
    .sort({ datePublished: -1 })
    .toArray();
  return docs.map((d) => sanitizeDoc(d));
}

export async function saveBlogPosts(posts) {
  const coll = getCollection();
  const normalized = Array.isArray(posts) ? posts : [];
  const now = new Date();

  await Promise.all(
    normalized.map(async (post) => {
      const existing = await coll.findOne({ slug: post.slug });
      await coll.replaceOne(
        { slug: post.slug },
        {
          ...post,
          createdAt: existing?.createdAt || now,
          updatedAt: now,
        },
        { upsert: true }
      );
    })
  );
}

export async function getBlogPostBySlug(slug) {
  const coll = getCollection();
  const doc = await coll.findOne({ slug });
  return doc ? sanitizeDoc(doc) : undefined;
}
