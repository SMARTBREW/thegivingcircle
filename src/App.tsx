import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Breadcrumbs from './components/ui/Breadcrumbs';

// PERFORMANCE MODE: Animations disabled for 90+ score
// import { useSmoothScroll } from './hooks/useSmoothScroll';

// Lazy load pages
import { Home } from './pages/Home';
// Lazy load pages
// const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const CauseChampionOnboarding = lazy(() => import('./pages/CauseChampionOnboarding'));
const ImpactStories = lazy(() => import('./pages/ImpactStories'));
const ImpactStoriesDetails = lazy(() => import('./pages/ImpactStoriesDetails'));
const NGOPartner = lazy(() => import('./pages/NGOPartner').then(module => ({ default: module.NGOPartner })));
const NGOList = lazy(() => import('./pages/ngo-list').then(module => ({ default: module.NGOList })));
const Causes = lazy(() => import('./pages/Causes').then(module => ({ default: module.Causes })));
const ChampionStoryDetail = lazy(() => import('./pages/ChampionStoryDetail'));
const NGODetailContainer = lazy(() => import('./pages/NGODetailContainer'));
const AnimalCareNGODetailContainer = lazy(() => import('./pages/AnimalCareNGODetailContainer'));
const LocationSEOBase = lazy(() => import('./pages/local-seo/LocationSEOBase'));
const GivingCircleLanding = lazy(() => import('./pages/seo/GivingCircleLanding'));
const NonprofitOrganizationsLanding = lazy(() => import('./pages/seo/NonprofitOrganizationsLanding'));
const LiveCausesPage = lazy(() => import('./components/liveCauses/browseCauses'));
const CauseDetailPage = lazy(() => import('./components/liveCauses/causesDetails'));
const KhushiCauseDetailPage = lazy(() => import('./components/liveCauses/khushiCauseDetails'));
const PawsitiveProtectorsCauseDetailPage = lazy(() => import('./components/liveCauses/pawsitiveProtectorsCauseDetails'));
const BowlsOfHopeCauseDetailPage = lazy(() => import('./components/liveCauses/bowlsOfHopeCauseDetails'));
const FloodAnimalRescueCauseDetailPage = lazy(() => import('./components/liveCauses/floodAnimalRescueCauseDetails'));
const FloodReliefCauseDetailPage = lazy(() => import('./components/liveCauses/floodReliefCauseDetails'));
const AboutChampions = lazy(() => import('./pages/aboutChampion').then(module => ({ default: module.AboutChampions })));
const OurStory = lazy(() => import('./pages/aboutGivingCircle').then(module => ({ default: module.OurStory })));
const YoungChampions = lazy(() => import('./pages/YoungChampions'));
const NotFoundPage = lazy(() => import('./pages/notFoundPage'));

// Lazy load SEO Hub Pages
const SEOHubIndex = lazy(() => import('./pages/local-seo/SEOHubIndex'));
const BestNGOInDelhi = lazy(() => import('./pages/local-seo/BestNGOInDelhi'));
const TopNGOInDelhi = lazy(() => import('./pages/local-seo/TopNGOInDelhi'));
const VerifiedNGOInDelhi = lazy(() => import('./pages/local-seo/VerifiedNGOInDelhi'));
const TrustedNGOInDelhi = lazy(() => import('./pages/local-seo/TrustedNGOInDelhi'));
const LeadingNGOInDelhi = lazy(() => import('./pages/local-seo/LeadingNGOInDelhi'));
const BestNGOInGurugram = lazy(() => import('./pages/local-seo/BestNGOInGurugram'));
const TopNGOInGurugram = lazy(() => import('./pages/local-seo/TopNGOInGurugram'));
const VerifiedNGOInGurugram = lazy(() => import('./pages/local-seo/VerifiedNGOInGurugram'));
const TrustedNGOInGurugram = lazy(() => import('./pages/local-seo/TrustedNGOInGurugram'));
const LeadingNGOInGurugram = lazy(() => import('./pages/local-seo/LeadingNGOInGurugram'));
const BestNGOInNoida = lazy(() => import('./pages/local-seo/BestNGOInNoida'));
const TopNGOInNoida = lazy(() => import('./pages/local-seo/TopNGOInNoida'));
const VerifiedNGOInNoida = lazy(() => import('./pages/local-seo/VerifiedNGOInNoida'));
const TrustedNGOInNoida = lazy(() => import('./pages/local-seo/TrustedNGOInNoida'));
const LeadingNGOInNoida = lazy(() => import('./pages/local-seo/LeadingNGOInNoida'));
const BestNGOInFaridabad = lazy(() => import('./pages/local-seo/BestNGOInFaridabad'));
const TopNGOInFaridabad = lazy(() => import('./pages/local-seo/TopNGOInFaridabad'));
const VerifiedNGOInFaridabad = lazy(() => import('./pages/local-seo/VerifiedNGOInFaridabad'));
const TrustedNGOInFaridabad = lazy(() => import('./pages/local-seo/TrustedNGOInFaridabad'));
const LeadingNGOInFaridabad = lazy(() => import('./pages/local-seo/LeadingNGOInFaridabad'));

// NGO Index & Cause SEO Pages
const NGOIndexPage = lazy(() => import('./pages/local-seo/NGOIndexPage'));
const DonateForEducationIndia = lazy(() => import('./pages/cause-seo/DonateForEducationIndia'));
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

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
  </div>
);

function App() {
  // Initialize smooth scrolling (desktop only)
  // useSmoothScroll(); // DISABLED: Causing performance issues (forced reflows)

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Breadcrumbs />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/onboarding" element={<CauseChampionOnboarding />} />
              <Route path="/impact-stories" element={<ImpactStories />} />
              <Route path="/impact-stories-details" element={<ImpactStoriesDetails />} />

              {/* legacy route aliases */}

              <Route path="/ngo-partner" element={<NGOPartner />} />
              <Route path="/ngo-list" element={<NGOList />} />
              <Route path="/ngo-detail/:id" element={<NGODetailContainer />} />
              <Route path="/khushi-ngo-detail" element={<Navigate to="/jwp-cause-details" replace />} />
              <Route path="/animalcare-ngo-detail" element={<AnimalCareNGODetailContainer />} />
              <Route path="/causes" element={<Causes />} />
              <Route path="/live-causes" element={<LiveCausesPage />} />
              <Route path="/champion-story/:id" element={<ChampionStoryDetail />} />
              <Route path="/jwp-cause-details" element={<KhushiCauseDetailPage />} />
              <Route path="/pawsitive-protectors-cause-details" element={<PawsitiveProtectorsCauseDetailPage />} />
              <Route path="/bowls-of-hope-cause-details" element={<BowlsOfHopeCauseDetailPage />} />
              <Route path="/flood-animal-rescue-cause-details" element={<FloodAnimalRescueCauseDetailPage />} />
              <Route path="/flood-relief-cause-details" element={<FloodReliefCauseDetailPage />} />
              <Route path="/about-champion" element={<AboutChampions />} />
              <Route path="/the-giving-circle" element={<OurStory />} />
              <Route path="/young-champions" element={<YoungChampions />} />

              {/* SEO Landing Pages (Orphan Routes) */}
              <Route path="/giving-circle" element={<GivingCircleLanding />} />
              <Route path="/nonprofit-organizations" element={<NonprofitOrganizationsLanding />} />
              <Route
                path="/ngo-in-noida"
                element={
                  <LocationSEOBase
                    location="Noida"
                    locationSlug="ngo-in-noida"
                    title="NGO in Noida | Verified & Trusted NGOs"
                    description="Find trusted NGOs in Noida supporting education, welfare and community development"
                    keywords="ngo in noida, charity in noida, social service noida"
                    primaryKeyword="NGOs"
                  />
                }
              />
              <Route
                path="/ngo-in-gurugram"
                element={
                  <LocationSEOBase
                    location="Gurugram"
                    locationSlug="ngo-in-gurugram"
                    title="NGO in Gurugram | Verified & Trusted NGOs"
                    description="Discover verified NGOs in Gurugram working across education, health and relief initiatives"
                    keywords="ngo in gurugram, ngo gurgaon, charity gurugram"
                    primaryKeyword="NGOs"
                  />
                }
              />

              {/* NGO Directory Index - fixes /ngos 404 */}
              <Route path="/ngos" element={<NGOIndexPage />} />

              {/* Cause SEO Landing Pages */}
              <Route path="/donate-for-education-india" element={<DonateForEducationIndia />} />
              <Route path="/ngo-for-women-empowerment" element={<NGOForWomenEmpowerment />} />
              <Route path="/verified-ngos-in-delhi" element={<VerifiedNGOsInDelhi />} />
              <Route path="/csr-projects-in-india" element={<CSRProjectsInIndia />} />

              {/* Article Pages */}
              <Route path="/top-verified-ngos-india-2026" element={<TopVerifiedNGOsIndia2026 />} />
              <Route path="/what-is-a-giving-circle" element={<WhatIsAGivingCircle />} />
              <Route path="/top-ngos-in-delhi-2026" element={<TopNGOsInDelhi2026 />} />
              <Route path="/volunteer-opportunities-delhi" element={<VolunteerOpportunitiesDelhi />} />
              <Route path="/how-to-volunteer-india" element={<HowToVolunteerIndia />} />

              {/* Blog */}
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              {/* Dynamic Local SEO */}
              <Route path="/ngos/:location" element={<SEOHubIndex />} />

              {/* Delhi Pages */}
              <Route path="/ngos/best-ngo-in-delhi" element={<BestNGOInDelhi />} />
              <Route path="/ngos/top-ngo-in-delhi" element={<TopNGOInDelhi />} />
              <Route path="/ngos/verified-ngo-in-delhi" element={<VerifiedNGOInDelhi />} />
              <Route path="/ngos/trusted-ngo-in-delhi" element={<TrustedNGOInDelhi />} />
              <Route path="/ngos/leading-ngo-in-delhi" element={<LeadingNGOInDelhi />} />

              {/* Gurugram Pages */}
              <Route path="/ngos/best-ngo-in-gurugram" element={<BestNGOInGurugram />} />
              <Route path="/ngos/top-ngo-in-gurugram" element={<TopNGOInGurugram />} />
              <Route path="/ngos/verified-ngo-in-gurugram" element={<VerifiedNGOInGurugram />} />
              <Route path="/ngos/trusted-ngo-in-gurugram" element={<TrustedNGOInGurugram />} />
              <Route path="/ngos/leading-ngo-in-gurugram" element={<LeadingNGOInGurugram />} />

              {/* Noida Pages */}
              <Route path="/ngos/best-ngo-in-noida" element={<BestNGOInNoida />} />
              <Route path="/ngos/top-ngo-in-noida" element={<TopNGOInNoida />} />
              <Route path="/ngos/verified-ngo-in-noida" element={<VerifiedNGOInNoida />} />
              <Route path="/ngos/trusted-ngo-in-noida" element={<TrustedNGOInNoida />} />
              <Route path="/ngos/leading-ngo-in-noida" element={<LeadingNGOInNoida />} />

              {/* Faridabad Pages */}
              <Route path="/ngos/best-ngo-in-faridabad" element={<BestNGOInFaridabad />} />
              <Route path="/ngos/top-ngo-in-faridabad" element={<TopNGOInFaridabad />} />
              <Route path="/ngos/verified-ngo-in-faridabad" element={<VerifiedNGOInFaridabad />} />
              <Route path="/ngos/trusted-ngo-in-faridabad" element={<TrustedNGOInFaridabad />} />
              <Route path="/ngos/leading-ngo-in-faridabad" element={<LeadingNGOInFaridabad />} />

              <Route path="*" element={<NotFoundPage />} />

            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}
export default App;