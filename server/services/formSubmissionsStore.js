import { getDb } from '../config/mongo.js';

const COLLECTION = 'form_submissions';

/** @typedef {'cause_champion' | 'ngo_partner'} FormType */

function getCollection() {
  return getDb().collection(COLLECTION);
}

/**
 * Ensure indexes for listing by time and form type.
 */
async function ensureIndexes() {
  const coll = getCollection();
  await coll.createIndex({ createdAt: -1 }, { background: true });
  await coll.createIndex({ formType: 1, createdAt: -1 }, { background: true });
}

/**
 * Persist a form submission before notifying the user (and before email).
 * @param {{ formType: FormType, payload: Record<string, unknown> }} doc
 * @returns {Promise<import('mongodb').ObjectId>}
 */
export async function insertFormSubmission({ formType, payload }) {
  await ensureIndexes();
  const coll = getCollection();
  const now = new Date();
  const { insertedId } = await coll.insertOne({
    formType,
    payload,
    emailSent: false,
    emailError: null,
    createdAt: now,
    updatedAt: now,
  });
  return insertedId;
}

/**
 * Update delivery status after background SMTP attempt.
 * @param {import('mongodb').ObjectId} id
 * @param {{ emailSent: boolean, emailError?: string | null }} status
 */
export async function updateFormSubmissionEmailStatus(id, { emailSent, emailError = null }) {
  const coll = getCollection();
  await coll.updateOne(
    { _id: id },
    {
      $set: {
        emailSent,
        emailError: emailError ?? null,
        updatedAt: new Date(),
      },
    }
  );
}
