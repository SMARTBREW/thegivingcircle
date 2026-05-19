/**
 * #PehliClass / JWP — Cloudinary delivery URLs.
 * Hero uses the existing programme photo; other assets from `npm run upload:images:pehli-class`.
 */
export const PEHLI_CLASS_HERO_IMAGE =
  'https://res.cloudinary.com/dcdhhylin/image/upload/v1758200608/images/_DSC9857.jpg';

export const PEHLI_CLASS_IMAGES = {
  hero: PEHLI_CLASS_HERO_IMAGE,
  classroomWhatsApp:
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1779181641/images/pehli-class/WhatsApp_Image_2026-05-18_at_4.24.50_PM.jpg',
  programmeWebp:
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1779181640/images/pehli-class/JWP-PehliClass.webp',
  campaignBanner:
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1779181638/images/pehli-class/App-Ban.png',
  campaignBannerAlt:
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1779181640/images/pehli-class/App-BannerWOH.png',
} as const;

export const PEHLI_CLASS_OG_IMAGE = PEHLI_CLASS_IMAGES.hero;
