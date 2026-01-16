import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  {Navbar}  from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Breadcrumbs from './components/ui/Breadcrumbs';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Home } from './pages/Home';
import CauseChampionOnboarding  from './pages/CauseChampionOnboarding';
import ImpactStories from './pages/ImpactStories';
import ImpactStoriesDetails from './pages/ImpactStoriesDetails';
import { NGOPartner } from './pages/NGOPartner';
import { NGOList } from './pages/ngo-list';
import { Causes } from './pages/Causes';
import ChampionStoryDetail from './pages/ChampionStoryDetail';
import NGODetailContainer from './pages/NGODetailContainer';
import KhushiNGODetailContainer from './pages/KhushiNGODetailContainer';
import AnimalCareNGODetailContainer from './pages/AnimalCareNGODetailContainer';
import LiveCausesPage from './components/liveCauses/browseCauses';
import CauseDetailPage from './components/liveCauses/causesDetails';
import KhushiCauseDetailPage from './components/liveCauses/khushiCauseDetails';
import PawsitiveProtectorsCauseDetailPage from './components/liveCauses/pawsitiveProtectorsCauseDetails';
import BowlsOfHopeCauseDetailPage from './components/liveCauses/bowlsOfHopeCauseDetails';
import FloodAnimalRescueCauseDetailPage from './components/liveCauses/floodAnimalRescueCauseDetails';
import FloodReliefCauseDetailPage from './components/liveCauses/floodReliefCauseDetails';
import  {AboutChampions } from './pages/aboutChampion';
import { OurStory } from './pages/aboutGivingCircle';
import YoungChampions from './pages/YoungChampions';
import NotFoundPage from './pages/notFoundPage';

// SEO Hub Pages
import SEOHubIndex from './pages/local-seo/SEOHubIndex';
import BestNGOInDelhi from './pages/local-seo/BestNGOInDelhi';
import TopNGOInDelhi from './pages/local-seo/TopNGOInDelhi';
import VerifiedNGOInDelhi from './pages/local-seo/VerifiedNGOInDelhi';
import TrustedNGOInDelhi from './pages/local-seo/TrustedNGOInDelhi';
import LeadingNGOInDelhi from './pages/local-seo/LeadingNGOInDelhi';
import BestNGOInGurugram from './pages/local-seo/BestNGOInGurugram';
import TopNGOInGurugram from './pages/local-seo/TopNGOInGurugram';
import VerifiedNGOInGurugram from './pages/local-seo/VerifiedNGOInGurugram';
import TrustedNGOInGurugram from './pages/local-seo/TrustedNGOInGurugram';
import LeadingNGOInGurugram from './pages/local-seo/LeadingNGOInGurugram';
import BestNGOInNoida from './pages/local-seo/BestNGOInNoida';
import TopNGOInNoida from './pages/local-seo/TopNGOInNoida';
import VerifiedNGOInNoida from './pages/local-seo/VerifiedNGOInNoida';
import TrustedNGOInNoida from './pages/local-seo/TrustedNGOInNoida';
import LeadingNGOInNoida from './pages/local-seo/LeadingNGOInNoida';
import BestNGOInFaridabad from './pages/local-seo/BestNGOInFaridabad';
import TopNGOInFaridabad from './pages/local-seo/TopNGOInFaridabad';
import VerifiedNGOInFaridabad from './pages/local-seo/VerifiedNGOInFaridabad';
import TrustedNGOInFaridabad from './pages/local-seo/TrustedNGOInFaridabad';
import LeadingNGOInFaridabad from './pages/local-seo/LeadingNGOInFaridabad';

function App() {
  // Initialize smooth scrolling (desktop only)
  useSmoothScroll();

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Breadcrumbs />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<CauseChampionOnboarding />} />
            <Route path="/impact-stories" element={<ImpactStories />} />
            <Route path="/impact-stories-details" element={<ImpactStoriesDetails />} />

            {/* legacy route aliases */}
           
            <Route path="/ngo-partner" element={<NGOPartner />} />
            <Route path="/ngo-list" element={<NGOList />} />
            <Route path="/ngo-detail/:id" element={<NGODetailContainer />} />
            <Route path="/khushi-ngo-detail" element={<KhushiNGODetailContainer />} />
            <Route path="/animalcare-ngo-detail" element={<AnimalCareNGODetailContainer />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/live-causes" element={<LiveCausesPage />} />
            <Route path="/champion-story/:id" element={<ChampionStoryDetail />} />
            <Route path="/khushi-cause-details" element={<KhushiCauseDetailPage />} />
            <Route path="/pawsitive-protectors-cause-details" element={<PawsitiveProtectorsCauseDetailPage />} />
            <Route path="/bowls-of-hope-cause-details" element={<BowlsOfHopeCauseDetailPage />} />
            <Route path="/flood-animal-rescue-cause-details" element={<FloodAnimalRescueCauseDetailPage />} />
            <Route path="/flood-relief-cause-details" element={<FloodReliefCauseDetailPage />} />
            <Route path="/about-champion" element={<AboutChampions />} />
            <Route path="/the-giving-circle" element={<OurStory />} />
            <Route path="/young-champions" element={<YoungChampions />} />
            
            {/* SEO Hub - Local SEO Pages */}
            <Route path="/local-seo" element={<SEOHubIndex />} />
            
            {/* Delhi Pages */}
            <Route path="/local-seo/best-ngo-in-delhi" element={<BestNGOInDelhi />} />
            <Route path="/local-seo/top-ngo-in-delhi" element={<TopNGOInDelhi />} />
            <Route path="/local-seo/verified-ngo-in-delhi" element={<VerifiedNGOInDelhi />} />
            <Route path="/local-seo/trusted-ngo-in-delhi" element={<TrustedNGOInDelhi />} />
            <Route path="/local-seo/leading-ngo-in-delhi" element={<LeadingNGOInDelhi />} />
            
            {/* Gurugram Pages */}
            <Route path="/local-seo/best-ngo-in-gurugram" element={<BestNGOInGurugram />} />
            <Route path="/local-seo/top-ngo-in-gurugram" element={<TopNGOInGurugram />} />
            <Route path="/local-seo/verified-ngo-in-gurugram" element={<VerifiedNGOInGurugram />} />
            <Route path="/local-seo/trusted-ngo-in-gurugram" element={<TrustedNGOInGurugram />} />
            <Route path="/local-seo/leading-ngo-in-gurugram" element={<LeadingNGOInGurugram />} />
            
            {/* Noida Pages */}
            <Route path="/local-seo/best-ngo-in-noida" element={<BestNGOInNoida />} />
            <Route path="/local-seo/top-ngo-in-noida" element={<TopNGOInNoida />} />
            <Route path="/local-seo/verified-ngo-in-noida" element={<VerifiedNGOInNoida />} />
            <Route path="/local-seo/trusted-ngo-in-noida" element={<TrustedNGOInNoida />} />
            <Route path="/local-seo/leading-ngo-in-noida" element={<LeadingNGOInNoida />} />
            
            {/* Faridabad Pages */}
            <Route path="/local-seo/best-ngo-in-faridabad" element={<BestNGOInFaridabad />} />
            <Route path="/local-seo/top-ngo-in-faridabad" element={<TopNGOInFaridabad />} />
            <Route path="/local-seo/verified-ngo-in-faridabad" element={<VerifiedNGOInFaridabad />} />
            <Route path="/local-seo/trusted-ngo-in-faridabad" element={<TrustedNGOInFaridabad />} />
            <Route path="/local-seo/leading-ngo-in-faridabad" element={<LeadingNGOInFaridabad />} />
            
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;