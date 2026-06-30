import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const BestNGOInFaridabad: React.FC = () => {
  return (
    <LocationSEOBase
      location="Faridabad"
      locationSlug="best-ngo-in-faridabad"
      title="Best NGO in Faridabad | Top Verified NGOs | The Giving Circle"
      description="Find verified NGOs in Faridabad supporting education, health, livelihoods, and animal welfare. FCRA-checked partners with transparent reporting and 80G tax benefits where applicable."
      keywords="best NGO in Faridabad, verified NGO Faridabad, donate Faridabad, charity Faridabad, CSR Faridabad"
      primaryKeyword="Best NGO in Faridabad"
      relatedLocations={[
        { name: 'Delhi', slug: 'best-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'best-ngo-in-gurugram' },
        { name: 'Noida', slug: 'best-ngo-in-noida' },
      ]}
    />
  );
};

export default BestNGOInFaridabad;
