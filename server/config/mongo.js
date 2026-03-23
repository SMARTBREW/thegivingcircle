import { MongoClient } from 'mongodb';

let client;
let db;

/**
 * @returns {string}
 */
export function getMongoUri() {
  return process.env.MONGODB_URI || process.env.MONGO_URI || '';
}

/**
 * @returns {import('mongodb').Db}
 */
export function getDb() {
  if (!db) {
    throw new Error('MongoDB is not connected. Call connectMongo() first.');
  }
  return db;
}

/**
 * @returns {Promise<void>}
 */
export async function connectMongo() {
  const uri = getMongoUri();
  if (!uri) {
    throw new Error(
      'Missing MongoDB connection string. Set MONGODB_URI or MONGO_URI in server/.env'
    );
  }

  const dbName = process.env.MONGODB_DB_NAME || 'thegivingcircle';

  client = new MongoClient(uri);
  await client.connect();
  db = client.db(dbName);

  const coll = db.collection('blog_posts');
  await coll.createIndex({ slug: 1 }, { unique: true });

  console.log(`🍃 MongoDB connected (database: ${dbName})`);
}

/**
 * @returns {Promise<void>}
 */
export async function closeMongo() {
  if (client) {
    await client.close();
    client = undefined;
    db = undefined;
    console.log('🍃 MongoDB connection closed');
  }
}
