import React from 'react';
import SEOHead from '../components/SEO/SEOHead';
// TODO: These components need to be created
// import YoungChampionsHero from '../components/youngChampions/YoungChampionsHero';
// import ProjectCategories from '../components/youngChampions/ProjectCategories';
// import AcademicIntegration from '../components/youngChampions/AcademicIntegration';
// import ImpactShowcase from '../components/youngChampions/ImpactShowcase';
// import GetStarted from '../components/youngChampions/GetStarted';

export const YoungChampions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-10 flex items-center justify-center">
      <SEOHead 
        title="Young Champions Program - Youth Leadership | Community Support Platform"
        description="Join our Young Champions program through our giving platform and community support platform. Young people can join our giving community to support social causes and create their own circle of support. Give and help through social giving and learn about community support from an early age."
        keywords="young champions, youth leadership, student programs, giving platform, community support platform, giving community, social giving, community support, support social causes, give and help, causes to support, support circle, youth india, young india, giving india"
        canonicalUrl="https://www.thegivingcircle.in/young-champions"
      />
      <div className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Young Champions</h1>
        <p className="text-lg text-gray-600">This page is under construction. Components are being developed.</p>
      </div>
      {/* TODO: Uncomment when components are created
      <YoungChampionsHero />
      <ProjectCategories />
      <AcademicIntegration />
      <ImpactShowcase />
      <GetStarted />
      */}
    </div>
  );
};

export default YoungChampions;
