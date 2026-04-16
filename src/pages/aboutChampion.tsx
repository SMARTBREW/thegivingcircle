import React from 'react';
import SEOHead from '../components/SEO/SEOHead';

export const AboutChampions: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <SEOHead
        title="Become a Giving Champion | Volunteer & Fundraise"
        description="Lead fundraising campaigns, volunteer initiatives and create measurable impact as a Giving Champion"
        keywords="about cause champions, cause champion program, giving circle, giving community, giving platform, giving pledge, community giving, community support platform, corporate giving platforms, give and help, social giving, support social causes, community care, empowering youth, act of kindness, community helpers, fundraising meaning"
        canonicalUrl="https://www.thegivingcircle.in/about-champion"
      />
      <div className="text-center max-w-2xl mx-auto p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Cause Champions - Leading Social Change</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Join our giving community to support social causes and create a circle of support. Empowering communities for communities through our community support platform.
        </p>
        <div className="space-y-4">
          <a
            href="/live-causes"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Browse Causes
          </a>
          <div>
            <a
              href="/onboarding"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Become a Cause Champion
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};