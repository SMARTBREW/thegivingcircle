import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  {Navbar}  from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
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
import  {AboutChampions } from './pages/aboutChampion';
import { OurStory } from './pages/aboutGivingCircle';
import YoungChampions from './pages/YoungChampions';
import NotFoundPage from './pages/notFoundPage';

function App() {
  // Initialize smooth scrolling (desktop only)
  useSmoothScroll();

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
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
            <Route path="/causes-details" element={<CauseDetailPage />} />
            <Route path="/live-causes" element={<LiveCausesPage />} />
            <Route path="/champion-story/:id" element={<ChampionStoryDetail />} />
            <Route path="/live-causes-details" element={<CauseDetailPage />} />
            <Route path="/khushi-cause-details" element={<KhushiCauseDetailPage />} />
            <Route path="/pawsitive-protectors-cause-details" element={<PawsitiveProtectorsCauseDetailPage />} />
            <Route path="/bowls-of-hope-cause-details" element={<BowlsOfHopeCauseDetailPage />} />
            <Route path="/flood-animal-rescue-cause-details" element={<FloodAnimalRescueCauseDetailPage />} />
            <Route path="/about-champion" element={<AboutChampions />} />
            <Route path="/the-giving-circle" element={<OurStory />} />
            <Route path="/young-champions" element={<YoungChampions />} />
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