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
        keywords="About Giving Circle, Our Mission, Our Vision, Our Story, Giving Philosophy, Why Giving Matters, Social Impact Platform, Community Giving, The Giving Circle India, Cause Champions platform, Community impact platform, Social change through giving, How does giving circle work, What is The Giving Circle, Community-driven social impact, Why community giving matters, Our giving philosophy, About The Giving Circle, Our mission and vision, Social impact platform India, Community empowerment platform"
        canonicalUrl="https://www.thegivingcircle.in/the-giving-circle"
      />
      <SimplifiedAboutPage />
      <MissionVisionPage/>
      <ChampionFundraiserBox/>
    </div>
  );
};