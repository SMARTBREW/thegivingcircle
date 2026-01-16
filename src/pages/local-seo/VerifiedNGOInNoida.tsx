import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const VerifiedNGOInNoida: React.FC = () => {
  return (
    <LocationSEOBase
      location="Noida"
      locationSlug="verified-ngo-in-noida"
      title="Verified NGOs in Noida | Trusted & Legitimate Organizations | The Giving Circle"
      description="Find verified and legitimate NGOs in Noida. All organizations are thoroughly verified for transparency and accountability. Support trusted charity organizations in Noida through The Giving Circle platform."
      keywords="verified NGOs in Noida, legitimate NGOs Noida, trusted NGOs Noida, verified charity Noida, legitimate charity Noida, verified organizations Noida, trusted charity Noida, verified NGO list Noida"
      primaryKeyword="Verified NGOs in Noida"
      relatedLocations={[
        { name: 'Delhi', slug: 'verified-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'verified-ngo-in-gurugram' },
        { name: 'Faridabad', slug: 'verified-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Noida', slug: 'best-ngo-in-noida' },
        { keyword: 'Top NGOs in Noida', slug: 'top-ngo-in-noida' },
        { keyword: 'Trusted NGOs in Noida', slug: 'trusted-ngo-in-noida' },
        { keyword: 'Leading NGOs in Noida', slug: 'leading-ngo-in-noida' },
      ]}
    />
  );
};

export default VerifiedNGOInNoida;
