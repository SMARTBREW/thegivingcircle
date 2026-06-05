import { readFile } from 'fs/promises';
import { randomUUID } from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getDb } from '../config/mongo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const COLLECTION = 'animal_welfare_partners';

/** @type {Record<string, string>} citySlug → seed JSON filename under server/data/ */
/** Seed JSON removed — partners live in MongoDB only. */
export const CITY_SEED_FILES = {};

function seedFilePath(filename) {
  return join(__dirname, '..', 'data', filename);
}

/** @type {readonly string[]} */
export const VALID_CITY_SLUGS = [
  'andhra-pradesh',
  'arunachal-pradesh',
  'bihar',
  'chandigarh',
  'delhi-ncr',
  'goa',
  'haryana',
  'pune',
  'karnataka',
  'kerala',
  'mumbai',
  'rajasthan',
  'tamil-nadu',
  'telangana',
  'pan-india',
];

/**
 * @param {Record<string, unknown>} doc
 */
function sanitizeDoc(doc) {
  if (!doc) return doc;
  const { _id, ...rest } = doc;
  return {
    ...rest,
    address: rest.address ?? '',
    email: rest.email ?? '',
  };
}

function getCollection() {
  return getDb().collection(COLLECTION);
}

export function isValidCitySlug(slug) {
  return typeof slug === 'string' && VALID_CITY_SLUGS.includes(slug);
}

function defaultCityName(citySlug) {
  if (citySlug === 'pune') return 'Pune';
  return citySlug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/**
 * @param {string} citySlug
 * @param {unknown[]} parsed
 */
function buildSeedDocs(citySlug, parsed) {
  const defaultCity = defaultCityName(citySlug);
  const baseTime = Date.now();
  return parsed.map((row, index) => ({
    id: randomUUID(),
    citySlug,
    person: row.person || '',
    organisation: row.organisation || '',
    contact: row.contact || '',
    city: row.city || defaultCity,
    area: row.area || '',
    address: row.address || '',
    email: row.email || '',
    services: row.services || '',
    sortOrder: index + 1,
    createdAt: new Date(baseTime - index),
    updatedAt: new Date(baseTime - index),
  }));
}

/**
 * Load seed JSON and insert rows (caller handles delete / empty checks).
 * @returns {Promise<{ count: number } | { count: 0, skipped: true }>}
 */
async function insertCitySeedFromFile(citySlug) {
  const seedFile = CITY_SEED_FILES[citySlug];
  if (!seedFile) {
    return { count: 0, skipped: true };
  }

  const raw = await readFile(seedFilePath(seedFile), 'utf-8');
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    return { count: 0, skipped: true };
  }

  const docs = buildSeedDocs(citySlug, parsed);
  await getCollection().insertMany(docs);
  console.log(
    `📥 Seeded ${docs.length} animal welfare partner(s) for ${citySlug} → MongoDB (${COLLECTION})`
  );
  return { count: docs.length };
}

/**
 * Replace all partners for a city with the canonical JSON seed (sheet data).
 * @returns {Promise<{ reseeded: boolean, deleted: number, count: number }>}
 */
export async function reseedCityFromJson(citySlug) {
  if (!CITY_SEED_FILES[citySlug]) {
    return { reseeded: false, deleted: 0, count: 0 };
  }

  const coll = getCollection();
  const deleted = await coll.deleteMany({ citySlug });
  const inserted = await insertCitySeedFromFile(citySlug);
  return {
    reseeded: true,
    deleted: deleted.deletedCount,
    count: inserted.count,
  };
}

/**
 * Insert seed rows for a city when the collection has none for that citySlug.
 * @returns {Promise<{ seeded: boolean, count: number }>}
 */
export async function ensureCitySeeded(citySlug) {
  const coll = getCollection();
  const existing = await coll.countDocuments({ citySlug });
  if (existing > 0) {
    return { seeded: false, count: existing };
  }

  try {
    const inserted = await insertCitySeedFromFile(citySlug);
    if (inserted.skipped) {
      return { seeded: false, count: 0 };
    }
    return { seeded: true, count: inserted.count };
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      console.warn(`⚠️  Seed file missing for ${citySlug}`);
      return { seeded: false, count: 0 };
    }
    throw err;
  }
}

/**
 * Seed all cities that have JSON seed files (run on server startup).
 * @returns {Promise<Record<string, { seeded: boolean, count: number }>>}
 */
export async function seedAnimalWelfarePartnersIfEmpty() {
  const results = {};
  for (const citySlug of Object.keys(CITY_SEED_FILES)) {
    results[citySlug] = await ensureCitySeeded(citySlug);
  }
  return results;
}

/**
 * @param {string} citySlug
 * @param {{ page?: number, limit?: number, q?: string }} options
 */
export async function listPartnersByCity(citySlug, options = {}) {
  await ensureCitySeeded(citySlug);

  const page = Math.max(1, Number(options.page) || 1);
  const limit = Math.min(100, Math.max(1, Number(options.limit) || 10));
  const skip = (page - 1) * limit;
  const q = (options.q || '').trim();

  const filter = { citySlug };
  if (q) {
    const regex = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    filter.$or = [
      { person: regex },
      { organisation: regex },
      { contact: regex },
      { area: regex },
      { address: regex },
      { email: regex },
      { services: regex },
      { city: regex },
    ];
  }

  const coll = getCollection();
  const [items, total] = await Promise.all([
    coll
      .find(filter)
      .sort({ createdAt: -1, sortOrder: 1 })
      .skip(skip)
      .limit(limit)
      .toArray(),
    coll.countDocuments(filter),
  ]);

  return {
    partners: items.map(sanitizeDoc),
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.max(1, Math.ceil(total / limit)),
    },
  };
}

export async function getPartnerById(id) {
  const doc = await getCollection().findOne({ id });
  return doc ? sanitizeDoc(doc) : null;
}

/**
 * @param {{ citySlug: string, person?: string, organisation?: string, contact?: string, city?: string, area?: string, services?: string }} data
 */
export async function createPartner(data) {
  const now = new Date();
  const coll = getCollection();
  const maxSort = await coll
    .find({ citySlug: data.citySlug })
    .sort({ sortOrder: -1 })
    .limit(1)
    .toArray();
  const sortOrder = (maxSort[0]?.sortOrder ?? 0) + 1;

  const doc = {
    id: randomUUID(),
    citySlug: data.citySlug,
    person: data.person || '',
    organisation: data.organisation || '',
    contact: data.contact || '',
    city: data.city || '',
    area: data.area || '',
    address: data.address || '',
    email: data.email || '',
    services: data.services || '',
    sortOrder,
    createdAt: now,
    updatedAt: now,
  };

  await coll.insertOne(doc);
  return sanitizeDoc(doc);
}

/**
 * @param {string} id
 * @param {Partial<Record<string, string>>} updates
 */
export async function updatePartner(id, updates) {
  const coll = getCollection();
  const existing = await coll.findOne({ id });
  if (!existing) return null;

  const allowed = ['person', 'organisation', 'contact', 'city', 'area', 'address', 'email', 'services'];
  const patch = { updatedAt: new Date() };
  for (const key of allowed) {
    if (updates[key] !== undefined) {
      patch[key] = updates[key];
    }
  }

  await coll.updateOne({ id }, { $set: patch });
  const doc = await coll.findOne({ id });
  return sanitizeDoc(doc);
}

export async function deletePartner(id) {
  const result = await getCollection().deleteOne({ id });
  return result.deletedCount > 0;
}

export async function getCitySummaries() {
  const coll = getCollection();
  const rows = await coll
    .aggregate([
      { $group: { _id: '$citySlug', count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ])
    .toArray();

  const countBySlug = Object.fromEntries(rows.map((r) => [r._id, r.count]));

  return VALID_CITY_SLUGS.map((slug) => ({
    citySlug: slug,
    count: countBySlug[slug] || 0,
  }));
}
