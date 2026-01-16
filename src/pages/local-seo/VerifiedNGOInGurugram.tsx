import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const VerifiedNGOInGurugram: React.FC = () => {
  return (
    <LocationSEOBase
      location="Gurugram"
      locationSlug="verified-ngo-in-gurugram"
      title="Verified NGOs in Gurugram | Trusted & Legitimate Organizations | The Giving Circle"
      description="Find verified and legitimate NGOs in Gurugram. All organizations are thoroughly verified for transparency and accountability. Support trusted charity organizations in Gurugram through The Giving Circle platform."
      keywords="verified NGOs in Gurugram, legitimate NGOs Gurugram, trusted NGOs Gurugram, verified charity Gurugram, legitimate charity Gurugram, verified organizations Gurugram, trusted charity Gurugram, verified NGO list Gurugram"
      primaryKeyword="Verified NGOs in Gurugram"
      relatedLocations={[
        { name: 'Delhi', slug: 'verified-ngo-in-delhi' },
        { name: 'Noida', slug: 'verified-ngo-in-noida' },
        { name: 'Faridabad', slug: 'verified-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Gurugram', slug: 'best-ngo-in-gurugram' },
        { keyword: 'Top NGOs in Gurugram', slug: 'top-ngo-in-gurugram' },
        { keyword: 'Trusted NGOs in Gurugram', slug: 'trusted-ngo-in-gurugram' },
        { keyword: 'Leading NGOs in Gurugram', slug: 'leading-ngo-in-gurugram' },
      ]}
    />
  );
};

export default VerifiedNGOInGurugram;
