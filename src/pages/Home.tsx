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
        title="The Giving Circle | Trusted Donation Platform India"
        description="Support verified NGOs across India. Donate for education, menstrual hygiene, medical treatment, hunger relief, disaster response, and stray animal care with full transparency."
        keywords="giving circle, giving community, giving platform, giving pledge, community helpers, donate sanitary pads, period poverty, poverty percentage, rabies prevention, stray dog vaccination, animal welfare ngo, community giving, community support, support social causes, social giving, community care, corporate giving platforms, give and help, donate for education, donate for medical treatment, NGO donation platform, act of kindness, helping the poor, fundraising meaning, csr initiatives"
        canonicalUrl="https://www.thegivingcircle.in/"
        ogImage="https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png"
      />
      <div className="bg-white">
        <Hero />
      </div>
      <div className="bg-gray-50">
        <GivingPhilosophy />
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
        <ChampionFundraiserBox />
      </div>
    </div>
  );
};