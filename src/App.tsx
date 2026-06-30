import { Suspense, lazy } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import type { RouteRecord } from 'vite-react-ssg';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import AnalyticsListener from './components/AnalyticsListener';
import ScrollToTopButton from './components/ScrollToTopButton';
import Breadcrumbs from './components/ui/Breadcrumbs';
import { ANIMAL_WELFARE_CITY_SLUGS } from './constants/animalWelfareCities';

import { Home } from './pages/Home';
// Lazy load pages
const CauseChampionOnboarding = lazy(() => import('./pages/CauseChampionOnboarding'));
const ImpactStories = lazy(() => import('./pages/ImpactStories'));
const ImpactStoriesDetails = lazy(() => import('./pages/ImpactStoriesDetails'));
const NGOPartner = lazy(() => import('./pages/NGOPartner').then(module => ({ default: module.NGOPartner })));
const NGOList = lazy(() => import('./pages/ngo-list').then(module => ({ default: module.NGOList })));
const ChampionStoryDetail = lazy(() => import('./pages/ChampionStoryDetail'));
const AnimalCareNGODetailContainer = lazy(() => import('./pages/AnimalCareNGODetailContainer'));
const GivingCircleLanding = lazy(() => import('./pages/seo/GivingCircleLanding'));
const NonprofitOrganizationsLanding = lazy(() => import('./pages/seo/NonprofitOrganizationsLanding'));
const LiveCausesPage = lazy(() => import('./components/liveCauses/browseCauses'));
const JwpCauseDetailPage = lazy(() => import('./components/liveCauses/jwpCauseDetails'));
const PawsitiveProtectorsCauseDetailPage = lazy(() => import('./components/liveCauses/pawsitiveProtectorsCauseDetails'));
const BowlsOfHopeCauseDetailPage = lazy(() => import('./components/liveCauses/bowlsOfHopeCauseDetails'));
const FloodAnimalRescueCauseDetailPage = lazy(() => import('./components/liveCauses/floodAnimalRescueCauseDetails'));
const FloodReliefCauseDetailPage = lazy(() => import('./components/liveCauses/floodReliefCauseDetails'));
const PehliClassCauseDetailPage = lazy(() => import('./components/liveCauses/pehliClassCauseDetails'));
const PehliClassCauseChampionPage = lazy(() => import('./pages/pehli-class/PehliClassCauseChampionPage'));
const BricksByBricksCauseDetailPage = lazy(() => import('./components/liveCauses/bricksByBricksCauseDetails'));
const AboutChampions = lazy(() => import('./pages/aboutChampion').then(module => ({ default: module.AboutChampions })));
const OurStory = lazy(() => import('./pages/aboutGivingCircle').then(module => ({ default: module.OurStory })));
const YoungChampions = lazy(() => import('./pages/YoungChampions'));
const NotFoundPage = lazy(() => import('./pages/notFoundPage'));

// Lazy load SEO Hub Pages
// SEOHubIndex removed — it duplicated /ngos and linked to variant URLs Google should not index.
// One canonical city page is kept per city. The adjective variants
// (top/verified/trusted/leading-ngo-in-*) 301-redirect to these to remove
// near-duplicate "doorway" pages and keyword cannibalization.
const BestNGOInDelhi = lazy(() => import('./pages/local-seo/BestNGOInDelhi'));
const BestNGOInGurugram = lazy(() => import('./pages/local-seo/BestNGOInGurugram'));
const BestNGOInNoida = lazy(() => import('./pages/local-seo/BestNGOInNoida'));
const BestNGOInFaridabad = lazy(() => import('./pages/local-seo/BestNGOInFaridabad'));

// NGO Index & Cause SEO Pages
const NGOIndexPage = lazy(() => import('./pages/local-seo/NGOIndexPage'));
import {
  LocalSEOSlugRedirect,
  NGODetailLegacyRedirect,
  NGOLocationFallbackRedirect,
  NGOSlugLegacyRedirect,
} from './pages/SEORedirects';
const NGOForWomenEmpowerment = lazy(() => import('./pages/cause-seo/NGOForWomenEmpowerment'));
const VerifiedNGOsInDelhi = lazy(() => import('./pages/cause-seo/VerifiedNGOsInDelhi'));
const CSRProjectsInIndia = lazy(() => import('./pages/cause-seo/CSRProjectsInIndia'));

// Article Pages
const TopVerifiedNGOsIndia2026 = lazy(() => import('./pages/articles/TopVerifiedNGOsIndia2026'));
const WhatIsAGivingCircle = lazy(() => import('./pages/articles/WhatIsAGivingCircle'));
const TopNGOsInDelhi2026 = lazy(() => import('./pages/articles/TopNGOsInDelhi2026'));
const VolunteerOpportunitiesDelhi = lazy(() => import('./pages/articles/VolunteerOpportunitiesDelhi'));
const HowToVolunteerIndia = lazy(() => import('./pages/articles/HowToVolunteerIndia'));
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const BlogPost = lazy(() => import('./pages/blog/BlogPost'));
const AnimalWelfareCityPage = lazy(() => import('./pages/animal-welfare/AnimalWelfareCityPage'));

// Slugs that should be pre-rendered for /blog/:slug at build time.
const BLOG_SLUGS = [
  'meaningful-summer-projects-india',
  'community-service-college-applications-india',
  'cas-duke-of-edinburgh-volunteer-certificate-india',
  'volunteer-project-ideas-students-india',
  'parents-guide-meaningful-summer-india',
  'how-to-donate-for-child-education-in-india-80g',
  'verified-ngos-in-delhi',
  'csr-projects-in-india',
  'what-is-a-philanthropist-india',
  'what-is-philanthropy-india',
  'how-to-donate-to-ngos-india',
  'how-to-donate-for-women-empowerment-india',
];

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
  </div>
);

function Layout() {
  // Smooth scrolling intentionally disabled (forced-reflow perf issues).
  return (
    <>
      <ScrollToTop />
      <AnalyticsListener />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Breadcrumbs />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/App.tsx',
    children: [
      { index: true, element: <Home /> },
      { path: 'onboarding', element: <CauseChampionOnboarding /> },
      { path: 'impact-stories', element: <ImpactStories /> },
      { path: 'impact-stories/wings-of-hope', element: <ImpactStoriesDetails /> },
      { path: 'impact-stories-details', element: <Navigate to="/impact-stories/wings-of-hope" replace /> },

      // Legacy SEO redirects (server 301s handled by CloudFront; these are client fallbacks)
      { path: 'local-seo', element: <Navigate to="/ngos" replace /> },
      { path: 'local-seo/:slug', element: <LocalSEOSlugRedirect /> },
      { path: 'ngo/:slug', element: <NGOSlugLegacyRedirect /> },

      { path: 'ngo-partner', element: <NGOPartner /> },
      { path: 'ngo-list', element: <NGOList /> },
      { path: 'ngo-detail/:id', element: <NGODetailLegacyRedirect /> },
      { path: 'khushi-ngo-detail', element: <Navigate to="/jwp-cause-details" replace /> },
      { path: 'khushi-cause-details', element: <Navigate to="/jwp-cause-details" replace /> },
      { path: 'animalcare-ngo-detail', element: <AnimalCareNGODetailContainer /> },
      { path: 'animal-emergency', element: <Navigate to="/animal-emergency.html" replace /> },
      {
        path: 'animal-welfare/:citySlug',
        element: <AnimalWelfareCityPage />,
        getStaticPaths: () =>
          ANIMAL_WELFARE_CITY_SLUGS.map((slug) => `/animal-welfare/${slug}`),
      },
      { path: 'causes', element: <Navigate to="/live-causes" replace /> },
      { path: 'live-causes', element: <LiveCausesPage /> },
      { path: 'champion-story/:id', element: <ChampionStoryDetail /> },
      { path: 'jwp-cause-details', element: <JwpCauseDetailPage /> },
      { path: 'pehli-class-cause-details', element: <PehliClassCauseDetailPage /> },
      { path: 'pehli-class/cause-champion', element: <PehliClassCauseChampionPage /> },
      { path: 'bricks-by-bricks-cause-details', element: <BricksByBricksCauseDetailPage /> },
      { path: 'pawsitive-protectors-cause-details', element: <PawsitiveProtectorsCauseDetailPage /> },
      { path: 'bowls-of-hope-cause-details', element: <BowlsOfHopeCauseDetailPage /> },
      { path: 'flood-animal-rescue-cause-details', element: <FloodAnimalRescueCauseDetailPage /> },
      { path: 'flood-relief-cause-details', element: <FloodReliefCauseDetailPage /> },
      { path: 'about-champion', element: <AboutChampions /> },
      { path: 'the-giving-circle', element: <OurStory /> },
      { path: 'young-champions', element: <YoungChampions /> },

      // SEO Landing Pages (Orphan Routes)
      { path: 'giving-circle', element: <GivingCircleLanding /> },
      { path: 'nonprofit-organizations', element: <NonprofitOrganizationsLanding /> },
      // Legacy root city URLs → one canonical page per city under /ngos/best-ngo-in-*
      { path: 'ngo-in-noida', element: <Navigate to="/ngos/best-ngo-in-noida" replace /> },
      { path: 'ngo-in-gurugram', element: <Navigate to="/ngos/best-ngo-in-gurugram" replace /> },

      // NGO Directory Index - fixes /ngos 404
      { path: 'ngos', element: <NGOIndexPage /> },

      // Cause SEO Landing Pages
      { path: 'donate-for-education-india', element: <Navigate to="/pehli-class-cause-details" replace /> },
      { path: 'ngo-for-women-empowerment', element: <NGOForWomenEmpowerment /> },
      { path: 'verified-ngos-in-delhi', element: <VerifiedNGOsInDelhi /> },
      { path: 'csr-projects-in-india', element: <CSRProjectsInIndia /> },

      // Article Pages
      { path: 'top-verified-ngos-india-2026', element: <TopVerifiedNGOsIndia2026 /> },
      { path: 'what-is-a-giving-circle', element: <WhatIsAGivingCircle /> },
      { path: 'top-ngos-in-delhi-2026', element: <TopNGOsInDelhi2026 /> },
      { path: 'volunteer-opportunities-delhi', element: <VolunteerOpportunitiesDelhi /> },
      { path: 'how-to-volunteer-india', element: <HowToVolunteerIndia /> },

      // Blog
      { path: 'blog', element: <BlogIndex /> },
      {
        path: 'blog/:slug',
        element: <BlogPost />,
        getStaticPaths: () => BLOG_SLUGS.map((slug) => `/blog/${slug}`),
      },

      // Legacy /ngos/ngo-in-* → canonical city pages
      { path: 'ngos/ngo-in-noida', element: <Navigate to="/ngos/best-ngo-in-noida" replace /> },
      { path: 'ngos/ngo-in-gurugram', element: <Navigate to="/ngos/best-ngo-in-gurugram" replace /> },

      // City NGO pages — ONE canonical page per city. Adjective variants
      // 301-redirect to it (server 301s via CloudFront; these are client fallbacks).
      // Delhi
      { path: 'ngos/best-ngo-in-delhi', element: <BestNGOInDelhi /> },
      { path: 'ngos/top-ngo-in-delhi', element: <Navigate to="/ngos/best-ngo-in-delhi" replace /> },
      { path: 'ngos/verified-ngo-in-delhi', element: <Navigate to="/ngos/best-ngo-in-delhi" replace /> },
      { path: 'ngos/trusted-ngo-in-delhi', element: <Navigate to="/ngos/best-ngo-in-delhi" replace /> },
      { path: 'ngos/leading-ngo-in-delhi', element: <Navigate to="/ngos/best-ngo-in-delhi" replace /> },

      // Gurugram
      { path: 'ngos/best-ngo-in-gurugram', element: <BestNGOInGurugram /> },
      { path: 'ngos/top-ngo-in-gurugram', element: <Navigate to="/ngos/best-ngo-in-gurugram" replace /> },
      { path: 'ngos/verified-ngo-in-gurugram', element: <Navigate to="/ngos/best-ngo-in-gurugram" replace /> },
      { path: 'ngos/trusted-ngo-in-gurugram', element: <Navigate to="/ngos/best-ngo-in-gurugram" replace /> },
      { path: 'ngos/leading-ngo-in-gurugram', element: <Navigate to="/ngos/best-ngo-in-gurugram" replace /> },

      // Noida
      { path: 'ngos/best-ngo-in-noida', element: <BestNGOInNoida /> },
      { path: 'ngos/top-ngo-in-noida', element: <Navigate to="/ngos/best-ngo-in-noida" replace /> },
      { path: 'ngos/verified-ngo-in-noida', element: <Navigate to="/ngos/best-ngo-in-noida" replace /> },
      { path: 'ngos/trusted-ngo-in-noida', element: <Navigate to="/ngos/best-ngo-in-noida" replace /> },
      { path: 'ngos/leading-ngo-in-noida', element: <Navigate to="/ngos/best-ngo-in-noida" replace /> },

      // Faridabad
      { path: 'ngos/best-ngo-in-faridabad', element: <BestNGOInFaridabad /> },
      { path: 'ngos/top-ngo-in-faridabad', element: <Navigate to="/ngos/best-ngo-in-faridabad" replace /> },
      { path: 'ngos/verified-ngo-in-faridabad', element: <Navigate to="/ngos/best-ngo-in-faridabad" replace /> },
      { path: 'ngos/trusted-ngo-in-faridabad', element: <Navigate to="/ngos/best-ngo-in-faridabad" replace /> },
      { path: 'ngos/leading-ngo-in-faridabad', element: <Navigate to="/ngos/best-ngo-in-faridabad" replace /> },

      // Unknown /legacy /ngos/* slugs → canonical city page or /ngos hub (never duplicate hub)
      { path: 'ngos/:location', element: <NGOLocationFallbackRedirect /> },

      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
