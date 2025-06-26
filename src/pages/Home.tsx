import React from 'react';
import Hero from '../components/home/Hero';
import { ImpactWall } from '../components/home/ImpactWall';
import { AboutUs} from '../components/home/HowItWorks';
import { Testimonials } from '../components/home/Testimonials';
// import { CausesWeSupport } from '../components/home/Causes';
import { OurImpact } from '../components/home/OurImpact';
import ChampionFundraiserBox from '../components/box';


export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ImpactWall />
      <OurImpact />
      {/* <CausesWeSupport /> */}
      
      <AboutUs />
      <Testimonials />
      <ChampionFundraiserBox/>
    </div>
  );
};