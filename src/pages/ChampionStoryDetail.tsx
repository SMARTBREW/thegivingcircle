import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEO/SEOHead';

/**
 * Champion Story Detail Page
 * 
 * This page is temporarily disabled while the champions feature is being updated.
 */

const ChampionStoryDetail: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/live-causes');
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <SEOHead
        title="Champion Stories - Real Impact Stories | Community Support Platform"
        description="Explore champion stories and real impact stories from our giving community. See how Cause Champions support social causes through our giving platform and create a circle of support. Give and help through our community support platform and discover causes to support."
        keywords="champion stories, impact stories, success stories, giving platform, community support platform, giving community, social giving, community support, support social causes, give and help, causes to support, support circle, communities stories, giving india"
        canonicalUrl="https://www.thegivingcircle.in/champion-story"
      />
      <div className="text-center max-w-2xl mx-auto p-8">
        <div className="text-6xl mb-6">🚧</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Feature Under Construction</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Champion stories of our giving community are currently being updated. Please check back soon for exciting new features on our community support platform!
        </p>
        <div className="space-y-4">
          <button
            onClick={handleBack}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Back to Causes
          </button>
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

export default ChampionStoryDetail; 