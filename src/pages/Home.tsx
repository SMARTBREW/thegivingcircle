import React from 'react';
import Hero from '../components/home/Hero';
import { ImpactWall } from '../components/home/ImpactWall';
import { Testimonials } from '../components/home/Testimonials';
// import { CausesWeSupport } from '../components/home/Causes';
import { OurImpact } from '../components/home/OurImpact';
import ChampionFundraiserBox from '../components/box';
import GivingPhilosophy from '../components/home/GivingPhilosophy';
import ImpactGallery from '../components/home/HowItWorks';


export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ImpactWall />
      <OurImpact />
      {/* <CausesWeSupport /> */}
      
      <ImpactGallery />
      <GivingPhilosophy/>
      <Testimonials />
      {/* <ChampionFundraiserBox/> */}
    </div>
  );
};