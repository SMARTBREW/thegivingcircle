import React from 'react';
import SEOHead from '../components/SEO/SEOHead';

export const AboutChampions: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <SEOHead
        title="About Cause Champions - Lead Social Change | Community Support Platform"
        description="Learn about Cause Champions through our giving platform and community support platform. Join our giving community to support social causes and create a circle of support. Give and help through social giving and community support. Discover how to become a champion and support social causes through our communities support platform."
        keywords="causes to support, circle aid, circle of support, communities for communities, communities support, community causes, community giving, community helpline, community offering, community support platform, corporate giving platforms, give and help, give through, giving circle, giving community, giving india, giving platform, giving support, giving to community, india care, india community, social causes to support, social giving, support circle, support community, support from community, support of community, support social causes, supported causes, supporting india, about cause champions, cause champion program"
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