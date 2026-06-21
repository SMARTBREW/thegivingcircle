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
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1781946760/images/pehli-class/App-Ban.png',
  campaignBannerAlt:
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1779181640/images/pehli-class/App-BannerWOH.png',
  presidentLetter:
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1779181640/images/pehli-class/App-BannerWOH.png',
  /** #PehliClass at a glance — 12 months from out-of-school to first class */
  promiseOneYearInfographic:
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1781946536/images/pehli-class/App-B.png',
  /** What sponsorship covers — champion / donor context */
  championSponsorshipCard:
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1781946760/images/pehli-class/App-Ban.png',
  /** JWP organisation icon / logo mark */
  jwpIcon:
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1782040238/images/pehli-class/Scre.webp',
  /** JWP children in red uniform — used below "Who we're doing this for" */
  jwpStudentsRed:
    'https://res.cloudinary.com/dcdhhylin/image/upload/v1782041135/images/pehli-class/App-BannerW.png',
} as const;

export const PEHLI_CLASS_OG_IMAGE = PEHLI_CLASS_IMAGES.hero;
