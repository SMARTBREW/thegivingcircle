import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const VerifiedNGOInFaridabad: React.FC = () => {
  return (
    <LocationSEOBase
      location="Faridabad"
      locationSlug="verified-ngo-in-faridabad"
      title="Verified NGOs in Faridabad | Trusted & Legitimate Organizations | The Giving Circle"
      description="Find verified and legitimate NGOs in Faridabad. All organizations are thoroughly verified for transparency and accountability. Support trusted charity organizations in Faridabad through The Giving Circle platform."
      keywords="verified NGOs in Faridabad, legitimate NGOs Faridabad, trusted NGOs Faridabad, verified charity Faridabad, legitimate charity Faridabad, verified organizations Faridabad, trusted charity Faridabad, verified NGO list Faridabad"
      primaryKeyword="Verified NGOs in Faridabad"
      relatedLocations={[
        { name: 'Delhi', slug: 'verified-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'verified-ngo-in-gurugram' },
        { name: 'Noida', slug: 'verified-ngo-in-noida' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Faridabad', slug: 'best-ngo-in-faridabad' },
        { keyword: 'Top NGOs in Faridabad', slug: 'top-ngo-in-faridabad' },
        { keyword: 'Trusted NGOs in Faridabad', slug: 'trusted-ngo-in-faridabad' },
        { keyword: 'Leading NGOs in Faridabad', slug: 'leading-ngo-in-faridabad' },
      ]}
    />
  );
};

export default VerifiedNGOInFaridabad;
