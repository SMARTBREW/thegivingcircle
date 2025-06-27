import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  {Navbar}  from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import CauseChampionOnboarding  from './pages/CauseChampionOnboarding';
import { NFTWall } from './pages/NFTWall';
import { NGOPartner } from './pages/NGOPartner';
import { NGOList } from './pages/ngo-list';
import { Causes } from './pages/Causes';
import ChampionStoryDetail from './pages/ChampionStoryDetail';
import CauseChampionsPage from './components/champions/browseChampions';
import LiveCausesPage from './components/liveCauses/browseCauses';
import CauseDetailPage from './components/liveCauses/causesDetails';
import  {AboutChampions } from './pages/aboutChampion';
import { OurStory } from './pages/aboutGivingCircle';
import CircleIcon from './components/ui/CircleIcon';
import FeaturePanel from './components/ui/FeaturePanel';

function App() {
  const [isFeaturePanelOpen, setIsFeaturePanelOpen] = useState(false);

  const toggleFeaturePanel = () => {
    setIsFeaturePanelOpen(prev => !prev);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<CauseChampionOnboarding />} />
            <Route path="/nft-wall" element={<NFTWall />} />
            {/* <Route path="/impact-stories" element={<NFTWall />} /> */}
           
            <Route path="/ngo-partner" element={<NGOPartner />} />
            <Route path="/ngo-list" element={<NGOList />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/browse-champions" element={<CauseChampionsPage />} />
            <Route path="/champion-story/:id" element={<ChampionStoryDetail />} />
            <Route path="/impact-stories" element={<LiveCausesPage />} />
            <Route path="/causes-details" element={<CauseDetailPage />} />
            <Route path="/about-champion" element={<AboutChampions />} />
            <Route path="/the-giving-circle" element={<OurStory />} />

          </Routes>
        </main>
        <Footer />
        
        {/* Meta AI-like Circle Icon */}
        <CircleIcon onClick={toggleFeaturePanel} />
        
        {/* Feature Panel */}
        <FeaturePanel 
          isOpen={isFeaturePanelOpen} 
          onClose={() => setIsFeaturePanelOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;