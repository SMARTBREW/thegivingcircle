import React from 'react';
import { useNavigate } from 'react-router-dom';
import NGODetailPage from './NGODetailPage';
import { animalCareNGODetails } from '../utils/sampleNGOData';

/**
 * AnimalCare India NGO Detail Container Page
 *
 * Renders the static AnimalCare India NGO data. The data is imported
 * synchronously (not via a useEffect async import) so the page renders its
 * content and SEO tags at build time during static pre-rendering.
 */

const AnimalCareNGODetailContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/ngo-list');
  };

  return (
    <NGODetailPage
      ngoDetails={animalCareNGODetails}
      loading={false}
      onBack={handleBack}
      seoTitle="Animal Care India | Street Animal Welfare NGO"
      seoDescription="Animal Care India is a verified NGO dedicated to street animal welfare. Support rescue, sterilization and vaccination programs to create animal-friendly communities."
      canonicalUrl="https://www.thegivingcircle.in/animalcare-ngo-detail"
    />
  );
};

export default AnimalCareNGODetailContainer;
