import React from 'react';
import SEOHead from '../components/SEO/SEOHead';
import ArticleSchema from '../components/SEO/ArticleSchema';
import YoungChampionsHero from '../components/youngChampions/YoungChampionsHero';
import ProjectCategories from '../components/youngChampions/ProjectCategories';
import SchoolAndCollegeProjects from '../components/youngChampions/SchoolAndCollegeProjects';
import WholeSchoolProgram from '../components/youngChampions/WholeSchoolProgram';
import AcademicIntegration from '../components/youngChampions/AcademicIntegration';
import ImpactShowcase from '../components/youngChampions/ImpactShowcase';
import YoungChampionsGetStarted from '../components/youngChampions/GetStarted';

const OG_IMAGE = 'https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png';

export const YoungChampions: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Young Champions Program | Student Volunteers India · The Giving Circle"
        description="Young Champions: school & college projects, exhibitions, verified NGO fundraising, CAS-style portfolios, peer drives, and whole-school service calendars—students rally peers around transparent live causes across India."
        keywords="young champions, youth leadership India, student volunteers India, school social responsibility project India, CBSE integrated project NGO, ICSE social awareness project, CAS portfolio volunteering India, college NSS alternative fundraising, campus NGO society India, verified NGO youth programme, exhibition project social issues, peer fundraising school, community support platform, volunteer India students"
        canonicalUrl="https://www.thegivingcircle.in/young-champions"
        ogImage={OG_IMAGE}
      />
      <ArticleSchema
        title="Young Champions Program — Student & Youth Volunteering India"
        description="School projects, college societies, and youth-led fundraising for verified NGO campaigns via The Giving Circle—India."
        image={OG_IMAGE}
        category="Youth & Education"
        location="India"
        datePublished="2026-05-08"
        author="The Giving Circle"
      />
      <main className="min-h-screen bg-gray-50">
        <YoungChampionsHero />
        <ProjectCategories />
        <SchoolAndCollegeProjects />
        <WholeSchoolProgram />
        <AcademicIntegration />
        <ImpactShowcase />
        <YoungChampionsGetStarted />
      </main>
    </>
  );
};

export default YoungChampions;
