import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto p-8">
        <div className="text-6xl mb-6">🚧</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Feature Under Construction</h1>
        <p className="text-lg text-gray-600 mb-8">
          Champion stories are currently being updated. Please check back soon for exciting new features!
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
    </div>
  );
};

export default ChampionStoryDetail; 