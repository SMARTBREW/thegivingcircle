import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const BestNGOInDelhi: React.FC = () => {
  return (
    <LocationSEOBase
      location="Delhi"
      locationSlug="best-ngo-in-delhi"
      title="Best NGO in Delhi | Top Verified NGOs | The Giving Circle"
      description="Discover verified NGOs in Delhi making real impact in education, women's empowerment, animal welfare, and disaster relief. FCRA-checked partners with transparent reporting and 80G tax benefits."
      keywords="best NGO in Delhi, verified NGOs Delhi, donate Delhi NGO, charity Delhi NCR, CSR Delhi"
      primaryKeyword="Best NGO in Delhi"
      relatedLocations={[
        { name: 'Gurugram', slug: 'best-ngo-in-gurugram' },
        { name: 'Noida', slug: 'best-ngo-in-noida' },
        { name: 'Faridabad', slug: 'best-ngo-in-faridabad' },
      ]}
    />
  );
};

export default BestNGOInDelhi;
