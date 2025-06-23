import React from 'react';
import Hero from '../components/home/Hero';
import { ImpactWall } from '../components/home/ImpactWall';
import { HowItWorks } from '../components/home/HowItWorks';
import { Testimonials } from '../components/home/Testimonials';
import { CausesWeSupport } from '../components/home/Causes';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ImpactWall />
      <CausesWeSupport />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};