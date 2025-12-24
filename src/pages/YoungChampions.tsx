import React from 'react';
// TODO: These components need to be created
// import YoungChampionsHero from '../components/youngChampions/YoungChampionsHero';
// import ProjectCategories from '../components/youngChampions/ProjectCategories';
// import AcademicIntegration from '../components/youngChampions/AcademicIntegration';
// import ImpactShowcase from '../components/youngChampions/ImpactShowcase';
// import GetStarted from '../components/youngChampions/GetStarted';

export const YoungChampions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-10 flex items-center justify-center">
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
