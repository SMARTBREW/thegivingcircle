import React from 'react';
import NGODetailPage from './NGODetail';
import { sampleNGODetails } from '../utils/sampleNGOData';

/**
 * Demo page to showcase the NGO Detail Page component
 * 
 * This demonstrates how the NGO detail page would look with real data.
 * In a real application, you would fetch the NGO data based on the route parameter
 * and pass it to the NGODetailPage component.
 * 
 * Example usage in a router:
 * 
 * import { useParams } from 'react-router-dom';
 * import { useEffect, useState } from 'react';
 * 
 * const NGODetailContainer = () => {
 *   const { ngoId } = useParams();
 *   const [ngoData, setNgoData] = useState(null);
 *   const [loading, setLoading] = useState(true);
 * 
 *   useEffect(() => {
 *     const fetchNGOData = async () => {
 *       try {
 *         const data = await ngoAPI.getById(ngoId);
 *         setNgoData(data);
 *       } catch (error) {
 *         console.error('Failed to fetch NGO data:', error);
 *       } finally {
 *         setLoading(false);
 *       }
 *     };
 *     fetchNGOData();
 *   }, [ngoId]);
 * 
 *   return (
 *     <NGODetailPage 
 *       ngoDetails={ngoData} 
 *       loading={loading}
 *       onBack={() => navigate('/ngos')}
 *     />
 *   );
 * };
 */

const NGODetailDemo: React.FC = () => {
  const handleBack = () => {
    // In a real app, this would navigate back to the NGO list
    window.history.back();
  };

  return (
    <NGODetailPage 
      ngoDetails={sampleNGODetails}
      onBack={handleBack}
      loading={false}
    />
  );
};

export default NGODetailDemo; 