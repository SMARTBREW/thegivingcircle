import React from 'react';
import SimplifiedAboutPage from '../components/aboutGiving/ourStory';
import MissionVisionPage from '../components/aboutGiving/ourVision';
import ChampionFundraiserBox from '../components/box';


export const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SimplifiedAboutPage />
      <MissionVisionPage/>
      <ChampionFundraiserBox/>
    </div>
  );
};