import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NGODetailPage from './NGODetailPage';
import { NGODetails } from '../types';

/**
 * AnimalCare India NGO Detail Container Page
 * 
 * This page component automatically loads AnimalCare India NGO data
 * and displays it using the NGODetailPage component.
 */

const AnimalCareNGODetailContainer: React.FC = () => {
  const navigate = useNavigate();
  
  const [ngoDetails, setNgoDetails] = useState<NGODetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimalCareDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const { animalCareNGODetails } = await import('../utils/sampleNGOData');
        
        setNgoDetails(animalCareNGODetails);
        
      } catch (error) {
        console.error('Failed to load AnimalCare India data:', error);
        setError('Failed to load AnimalCare India details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnimalCareDetails();
  }, []);

  const handleBack = () => {
    navigate('/ngo-list');
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-6xl mb-4">🐾</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Organization Not Available</h2>
            <p className="text-slate-600 mb-6">{error}</p>
            <div className="space-y-3">
              <button 
                onClick={() => window.location.reload()}
                className="w-full bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition-colors font-medium"
              >
                Try Again
              </button>
              <button 
                onClick={handleBack}
                className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Back to Organizations
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <NGODetailPage 
      ngoDetails={ngoDetails!}
      loading={loading}
      onBack={handleBack}
    />
  );
};

export default AnimalCareNGODetailContainer;
