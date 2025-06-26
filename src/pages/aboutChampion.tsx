import React from 'react';

import AboutChampionsPage from '../components/champions/aboutChampions';
import AboutIconsPage from '../components/champions/abouticons';
import BecomeChampionPage from '../components/champions/stepsAbout';
import CausesPage from '../components/champions/cardsCause';
// import ChampionFundraiserBox from '../components/box';
import { FAQ } from '../components/champions/faq';


export const AboutChampions: React.FC = () => {
  return (
    <div className="min-h-screen">
      <AboutChampionsPage />
      <AboutIconsPage/>
      <BecomeChampionPage/>
      <CausesPage/>
      {/* <ChampionFundraiserBox/> */}
      <FAQ/>
      
    </div>
  );
};