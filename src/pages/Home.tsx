import React from 'react';
import Hero from '../components/home/Hero';
import { ImpactWall } from '../components/home/ImpactWall';
import { Testimonials } from '../components/home/Testimonials';
import ChampionFundraiserBox from '../components/box';
import GivingPhilosophy from '../components/home/GivingPhilosophy';
import ImpactGallery from '../components/home/HowItWorks';
import SEOHead from '../components/SEO/SEOHead';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="The Giving Circle - Community Giving Platform | Support Social Causes India"
        description="The Giving Circle is India's trusted social impact platform connecting Cause Champions with verified causes. Join our community giving platform to support social causes, donate to verified charity, and create real impact stories across India. Start your giving circle today!"
        keywords="The Giving Circle, Cause Champions, social impact platform India, community giving platform, support social causes India, donate to social causes, join giving circle, impact stories India, verified charity platform India, transparent giving platform, trusted charity platform"
        canonicalUrl="https://www.thegivingcircle.in/"
        ogImage="https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png"
      />
      <div className="bg-white">
        <Hero />
      </div>
      <div className="bg-gray-50">
        <GivingPhilosophy/>
      </div>
      <div className="bg-white">
        <ImpactWall />
      </div>
      <div className="bg-gray-50">
        <ImpactGallery />
      </div>
      <div className="bg-white">
        <Testimonials />
      </div>
      <div className="bg-white">
        <ChampionFundraiserBox/>
      </div>
    </div>
  );
};