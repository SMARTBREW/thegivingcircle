import express from 'express';
import {
  isValidCitySlug,
  listPartnersByCity,
  getPartnerById,
  createPartner,
  updatePartner,
  deletePartner,
  getCitySummaries,
  ensureCitySeeded,
  seedAnimalWelfarePartnersIfEmpty,
  reseedCityFromJson,
} from '../services/animalWelfarePartnersStore.js';

const router = express.Router();

function parsePagination(query) {
  return {
    page: query.page,
    limit: query.limit,
    q: query.q,
  };
}

router.post('/seed', async (_req, res) => {
  try {
    const results = await seedAnimalWelfarePartnersIfEmpty();
    res.json({ success: true, results });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || 'Seed failed',
    });
  }
});

router.post('/seed/:citySlug', async (req, res) => {
  try {
    const { citySlug } = req.params;
    if (!isValidCitySlug(citySlug)) {
      return res.status(400).json({ success: false, message: 'Invalid city' });
    }
    const force = req.query.force === 'true' || req.body?.force === true;
    const result = force
      ? await reseedCityFromJson(citySlug)
      : await ensureCitySeeded(citySlug);
    res.json({ success: true, citySlug, ...result });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || 'Seed failed',
    });
  }
});

router.get('/cities', async (_req, res) => {
  try {
    await seedAnimalWelfarePartnersIfEmpty();
    const cities = await getCitySummaries();
    res.json({ success: true, cities });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || 'Failed to load city summaries',
    });
  }
});

router.get('/partners/:citySlug', async (req, res) => {
  try {
    const { citySlug } = req.params;
    if (!isValidCitySlug(citySlug)) {
      return res.status(400).json({ success: false, message: 'Invalid city' });
    }

    const result = await listPartnersByCity(citySlug, parsePagination(req.query));
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || 'Failed to load partners',
    });
  }
});

router.get('/partner/:id', async (req, res) => {
  try {
    const partner = await getPartnerById(req.params.id);
    if (!partner) {
      return res.status(404).json({ success: false, message: 'Partner not found' });
    }
    res.json({ success: true, partner });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || 'Failed to load partner',
    });
  }
});

router.post('/partners', async (req, res) => {
  try {
    const { citySlug, person, organisation, contact, city, area, address, email, services } =
      req.body || {};

    if (!isValidCitySlug(citySlug)) {
      return res.status(400).json({ success: false, message: 'Invalid citySlug' });
    }

    const partner = await createPartner({
      citySlug,
      person,
      organisation,
      contact,
      city,
      area,
      address,
      email,
      services,
    });

    res.status(201).json({ success: true, partner });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || 'Failed to create partner',
    });
  }
});

router.put('/partners/:id', async (req, res) => {
  try {
    const existing = await getPartnerById(req.params.id);
    if (!existing) {
      return res.status(404).json({ success: false, message: 'Partner not found' });
    }

    const { person, organisation, contact, city, area, address, email, services } = req.body || {};
    const partner = await updatePartner(req.params.id, {
      person,
      organisation,
      contact,
      city,
      area,
      address,
      email,
      services,
    });

    res.json({ success: true, partner });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || 'Failed to update partner',
    });
  }
});

router.delete('/partners/:id', async (req, res) => {
  try {
    const deleted = await deletePartner(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Partner not found' });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || 'Failed to delete partner',
    });
  }
});

export default router;
