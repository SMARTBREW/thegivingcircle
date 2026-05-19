/**
 * Brick by Brick (Animal Care Gurgaon) — Cloudinary delivery URLs.
 * Upload / refresh: `npm run upload:images:bricks` (requires CLOUDINARY_* in .env).
 */
export const BRICKS_CAMPAIGN_IMAGES = {
  hero: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1779181538/images/bricks/WhatsApp_Image_2026-05-19_at_2.09.10_PM.jpg',
  siteA: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1779181540/images/bricks/WhatsApp_Image_2026-05-19_at_2.09.11_PM.jpg',
  siteB: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1779181539/images/bricks/WhatsApp_Image_2026-05-19_at_2.09.11_PM_1.jpg',
  sceneA: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1779181534/images/bricks/WhatsApp_Image_2026-05-18_at_4.40.56_PM.jpg',
  sceneB: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1779181535/images/bricks/WhatsApp_Image_2026-05-18_at_4.45.33_PM.jpg',
  sceneC: 'https://res.cloudinary.com/dcdhhylin/image/upload/v1779181537/images/bricks/WhatsApp_Image_2026-05-18_at_4.59.56_PM.jpg',
} as const;

/** Open Graph / Twitter card — absolute CDN URL */
export const BRICKS_CAMPAIGN_OG_IMAGE = BRICKS_CAMPAIGN_IMAGES.hero;
