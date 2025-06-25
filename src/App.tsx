import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  {Navbar}  from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import CauseChampionOnboarding  from './pages/CauseChampionOnboarding';
import { NFTWall } from './pages/NFTWall';
import { NGOPartner } from './pages/NGOPartner';
import { Causes } from './pages/Causes';
import ChampionSuccessStoryPage from './components/champions/championStories';


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
            <Route path="/impact-stories" element={<NFTWall />} />
            <Route path="/ngo-partner" element={<NGOPartner />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/causes-stories" element={<ChampionSuccessStoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;