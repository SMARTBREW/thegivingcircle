import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  {Navbar}  from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import CauseChampionOnboarding  from './pages/CauseChampionOnboarding';
import { NFTWall } from './pages/NFTWall';
import { NGOPartner } from './pages/NGOPartner';
import { Causes } from './pages/Causes';
import ChampionStoryDetail from './pages/ChampionStoryDetail';
import CauseChampionsPage from './components/champions/browseChampions';
import LiveCausesPage from './components/liveCauses/browseCauses';
import CauseDetailPage from './components/liveCauses/causesDetails';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<CauseChampionOnboarding />} />
            <Route path="/nft-wall" element={<NFTWall />} />
            {/* <Route path="/impact-stories" element={<NFTWall />} /> */}
            <Route path="/impact-stories" element={<LiveCausesPage />} />
            <Route path="/ngo-partner" element={<NGOPartner />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/browse-champions" element={<CauseChampionsPage />} />
            <Route path="/champion-story/:id" element={<ChampionStoryDetail />} />
            <Route path="/causes-details" element={<CauseDetailPage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;