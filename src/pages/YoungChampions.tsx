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
    <main className="min-h-screen bg-gray-50 mt-10 flex items-center justify-center">
      <SEOHead
        title="Young Champions Program | Student Volunteers India"
        description="Empower students to drive social change through volunteering, education support and community impact initiatives"
        keywords="causes to support, circle aid, circle of support, communities for communities, communities support, community causes, community giving, community helpline, community offering, community support platform, corporate giving platforms, give and help, give through, giving circle, giving community, giving india, giving platform, giving support, giving to community, india care, india community, social causes to support, social giving, support circle, support community, support from community, support of community, support social causes, supported causes, supporting india, young champions, youth leadership"
        canonicalUrl="https://www.thegivingcircle.in/young-champions"
      />
      <div className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Young Champions - Future of Giving India</h1>
        <p className="text-lg text-gray-600">Empowering the next generation to support social causes through social giving and community support. Join our support circle today.</p>
      </div>
      {/* TODO: Uncomment when components are created
      <YoungChampionsHero />
      <ProjectCategories />
      <AcademicIntegration />
      <ImpactShowcase />
      <GetStarted />
      */}
    </main>
  );
};

export default YoungChampions;
