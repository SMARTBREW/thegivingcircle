import React from 'react';
import SimplifiedAboutPage from '../components/aboutGiving/ourStory';
import MissionVisionPage from '../components/aboutGiving/ourVision';
import ChampionFundraiserBox from '../components/box';
import SEOHead from '../components/SEO/SEOHead';


export const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="About The Giving Circle | Verified NGO Network India"
        description="Learn how The Giving Circle connects donors with trusted NGOs to tackle period poverty, rabies prevention, and disaster relief across India."
        keywords="giving circle, giving community, giving platform, giving pledge, donate sanitary pads, animal welfare ngo, period poverty, rabies prevention, community support platform, verified NGO network, social impact, act of kindness, community helpers, fundraising meaning"
        canonicalUrl="https://www.thegivingcircle.in/the-giving-circle"
      />
      <SimplifiedAboutPage />
      <MissionVisionPage />
      <ChampionFundraiserBox />
    </div>
  );
};