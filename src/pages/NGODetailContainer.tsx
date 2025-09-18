import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NGODetailPage from './NGODetailPage';
import { NGODetails } from '../types';

/**
 * NGO Detail Container Page
 * 
 * This page component fetches NGO data from the backend
 * and displays it using the NGODetailPage component.
 * It handles routing, loading states, and error cases.
 */

const NGODetailContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [ngoDetails, setNgoDetails] = useState<NGODetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNGODetails = async () => {
      if (!id) {
        setError('NGO ID is required');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // In development mode, prioritize sample data to avoid API errors
        if (import.meta.env.DEV) {
          console.log('Development mode: Loading sample data for NGO ID:', id);
          const { sampleNGODetails, khushiNGODetails, animalCareNGODetails } = await import('../utils/sampleNGOData');
          
          if (sampleNGODetails.id === id) {
            setNgoDetails(sampleNGODetails);
            setLoading(false);
            return;
          } else if (khushiNGODetails.id === id) {
            setNgoDetails(khushiNGODetails);
            setLoading(false);
            return;
          } else if (animalCareNGODetails.id === id) {
            setNgoDetails(animalCareNGODetails);
            setLoading(false);
            return;
          } else {
            console.warn('No sample data found for ID:', id, 'Available IDs:', sampleNGODetails.id, khushiNGODetails.id, animalCareNGODetails.id);
            // Fall through to try API if sample data not found
          }
        }
        
        // Try to fetch from backend API
        console.log('Attempting to fetch from API for ID:', id);
        // const data = await ngoAPI.getNGOById(id);
        // setNgoDetails(data);
        
        // For now, throw error to use fallback since API is not implemented
        throw new Error('API not implemented yet');
        
      } catch (error) {
        console.error('Failed to fetch NGO details from API:', error);
        
        // If API fails, try sample data as fallback (for production or if dev sample data failed)
        try {
          console.log('API failed, trying sample data fallback...');
          const { sampleNGODetails, khushiNGODetails, animalCareNGODetails } = await import('../utils/sampleNGOData');
          
          if (sampleNGODetails.id === id) {
            console.log('Using sample data as fallback');
            setNgoDetails(sampleNGODetails);
          } else if (khushiNGODetails.id === id) {
            console.log('Using KHUSHII data as fallback');
            setNgoDetails(khushiNGODetails);
          } else if (animalCareNGODetails.id === id) {
            console.log('Using AnimalCare India data as fallback');
            setNgoDetails(animalCareNGODetails);
          } else {
            setError(`NGO not found. Available sample IDs: ${sampleNGODetails.id}, ${khushiNGODetails.id}, ${animalCareNGODetails.id}`);
          }
        } catch (sampleError) {
          console.error('Failed to load sample data:', sampleError);
          setError('Failed to load NGO details. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNGODetails();
  }, [id]);

  const handleBack = () => {
    navigate('/ngo-list');
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-6xl mb-4">🏢</div>
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

export default NGODetailContainer; 