import React from 'react';
import SimplifiedAboutPage from '../components/aboutGiving/ourStory';
import MissionVisionPage from '../components/aboutGiving/ourVision';
import ChampionFundraiserBox from '../components/box';
import SEOHead from '../components/SEO/SEOHead';


export const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="About The Giving Circle - Our Mission & Vision | Social Impact Platform India"
        description="Learn about The Giving Circle - our story, mission, vision, and giving philosophy. Discover how our social impact platform India connects Cause Champions with verified causes, enabling community giving and transparent social change through community-driven impact. What is The Giving Circle and how does giving circle work."
        keywords="causes to support, circle aid, circle of support, communities for communities, communities support, community causes, community giving, community helpline, community offering, community support platform, corporate giving platforms, give and help, give through, giving circle, giving community, giving india, giving platform, giving support, giving to community, india care, india community, social causes to support, social giving, support circle, support community, support from community, support of community, support social causes, supported causes, supporting india"
        canonicalUrl="https://www.thegivingcircle.in/the-giving-circle"
      />
      <SimplifiedAboutPage />
      <MissionVisionPage />
      <ChampionFundraiserBox />
    </div>
  );
};