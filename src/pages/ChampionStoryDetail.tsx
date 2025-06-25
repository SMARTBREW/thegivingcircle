import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ChampionStoryPage from '../components/champions/championStories';
import { championStoriesAPI } from '../utils/api';
import { ChampionStory } from '../types';

/**
 * Champion Story Detail Page
 * 
 * This page component fetches champion story data from the backend
 * and displays it using the ChampionStoryPage component.
 * It handles routing, loading states, and error cases.
 */

const ChampionStoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [championStory, setChampionStory] = useState<ChampionStory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChampionStory = async () => {
      if (!id) {
        setError('Champion story ID is required');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // In development mode, prioritize sample data to avoid API errors
        if (import.meta.env.DEV) {
          console.log('Development mode: Loading sample data for champion story ID:', id);
          const { sampleChampionStories } = await import('../utils/sampleChampionData');
          const sampleStory = sampleChampionStories.find(story => story.id === id);
          
          if (sampleStory) {
            setChampionStory(sampleStory);
            setLoading(false);
            return;
          } else {
            console.warn('No sample data found for ID:', id, 'Available IDs:', sampleChampionStories.map(s => s.id));
            // Fall through to try API if sample data not found
          }
        }
        
        // Try to fetch from backend API
        console.log('Attempting to fetch from API for ID:', id);
        const data = await championStoriesAPI.getStoryById(id);
        setChampionStory(data);
        
      } catch (error) {
        console.error('Failed to fetch champion story from API:', error);
        
        // If API fails, try sample data as fallback (for production or if dev sample data failed)
        try {
          console.log('API failed, trying sample data fallback...');
          const { sampleChampionStories } = await import('../utils/sampleChampionData');
          const sampleStory = sampleChampionStories.find(story => story.id === id);
          
          if (sampleStory) {
            console.log('Using sample data as fallback');
            setChampionStory(sampleStory);
          } else {
            setError(`Champion story not found. Available sample IDs: ${sampleChampionStories.map(s => s.id).join(', ')}`);
          }
        } catch (sampleError) {
          console.error('Failed to load sample data:', sampleError);
          setError('Failed to load champion story. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchChampionStory();
  }, [id]);

  const handleBack = () => {
    navigate('/browse-champions');
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="space-y-3">
            <button 
              onClick={() => window.location.reload()}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Try Again
            </button>
            <button 
              onClick={handleBack}
              className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Back to Champions
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ChampionStoryPage 
      championStory={championStory!}
      loading={loading}
      onBack={handleBack}
    />
  );
};

export default ChampionStoryDetail; 