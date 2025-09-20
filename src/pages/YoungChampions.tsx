import React from 'react';
import YoungChampionsHero from '../components/youngChampions/YoungChampionsHero';
import ProjectCategories from '../components/youngChampions/ProjectCategories';
import AcademicIntegration from '../components/youngChampions/AcademicIntegration';
import ImpactShowcase from '../components/youngChampions/ImpactShowcase';
import GetStarted from '../components/youngChampions/GetStarted';

export const YoungChampions: React.FC = () => {
  return (
    <div className="min-h-screen">
      <YoungChampionsHero />
      <ProjectCategories />
      <AcademicIntegration />
      <ImpactShowcase />
      <GetStarted />
    </div>
  );
};

export default YoungChampions;
