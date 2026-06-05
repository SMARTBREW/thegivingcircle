/**
 * Load animal welfare partners from server/data/*.json into MongoDB.
 *
 * Usage (from server/):
 *   npm run seed:animal-welfare          # only if city has no rows
 *   npm run seed:animal-welfare:force        # replace all seeded cities from JSON
 */
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { connectMongo, closeMongo } from '../config/mongo.js';
import {
  seedAnimalWelfarePartnersIfEmpty,
  reseedCityFromJson,
  CITY_SEED_FILES,
} from '../services/animalWelfarePartnersStore.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

const force = process.argv.includes('--force');

async function main() {
  await connectMongo();

  let results;
  if (force) {
    results = {};
    for (const citySlug of Object.keys(CITY_SEED_FILES)) {
      results[citySlug] = await reseedCityFromJson(citySlug);
    }
    console.log('Force reseeded all cities with seed JSON files');
  } else {
    results = await seedAnimalWelfarePartnersIfEmpty();
  }

  console.log('Animal welfare seed results:', JSON.stringify(results, null, 2));
  await closeMongo();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
