import React, { useEffect } from 'react';
import SimplifiedAboutPage from '../components/aboutGiving/ourStory';
import MissionVisionPage from '../components/aboutGiving/ourVision';
import ChampionFundraiserBox from '../components/box';


export const OurStory: React.FC = () => {
  // Set page title and meta tags for SEO
  useEffect(() => {
    document.title = 'About The Giving Circle - Our Mission & Vision | Social Impact Platform India';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about The Giving Circle - our story, mission, vision, and giving philosophy. Discover how our social impact platform India connects Cause Champions with verified causes, enabling community giving and transparent social change through community-driven impact. What is The Giving Circle and how does giving circle work.');
    }
    
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'About Giving Circle, Our Mission, Our Vision, Our Story, Giving Philosophy, Why Giving Matters, Social Impact Platform, Community Giving, The Giving Circle India, Cause Champions platform, Community impact platform, Social change through giving, How does giving circle work, What is The Giving Circle, Community-driven social impact, Why community giving matters, Our giving philosophy, About The Giving Circle, Our mission and vision, Social impact platform India, Community empowerment platform');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <SimplifiedAboutPage />
      <MissionVisionPage/>
      <ChampionFundraiserBox/>
    </div>
  );
};