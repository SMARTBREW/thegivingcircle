import React from 'react';
import SEOHead from '../components/SEO/SEOHead';

export const AboutChampions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <SEOHead 
        title="About Cause Champions - Lead Social Change | The Giving Circle"
        description="Learn about Cause Champions - community leaders who rally support for verified social causes India. Discover how to become a champion, amplify your impact, and create lasting change through transparent community giving."
        keywords="about cause champions, cause champion program, community leaders India, social change leaders, volunteer leadership, cause advocacy, champion social impact, lead fundraising campaigns, community organizers India"
        canonicalUrl="https://www.thegivingcircle.in/about-champion"
      />
      <div className="text-center max-w-2xl mx-auto p-8">
        <div className="text-6xl mb-6">🚧</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Page Under Construction</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          The Champions page is currently being updated. Please check back soon for exciting new features!
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
    </div>
  );
};