import React from 'react';
import Hero from '../components/home/Hero';
import { ImpactWall } from '../components/home/ImpactWall';
import { Testimonials } from '../components/home/Testimonials';
import ChampionFundraiserBox from '../components/box';
import GivingPhilosophy from '../components/home/GivingPhilosophy';
import ImpactGallery from '../components/home/HowItWorks';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
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