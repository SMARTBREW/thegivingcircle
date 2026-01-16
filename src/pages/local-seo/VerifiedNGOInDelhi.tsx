import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const VerifiedNGOInDelhi: React.FC = () => {
  return (
    <LocationSEOBase
      location="Delhi"
      locationSlug="verified-ngo-in-delhi"
      title="Verified NGOs in Delhi | Trusted & Legitimate Organizations | The Giving Circle"
      description="Find verified and legitimate NGOs in Delhi. All organizations are thoroughly verified for transparency and accountability. Support trusted charity organizations in Delhi through The Giving Circle platform."
      keywords="verified NGOs in Delhi, legitimate NGOs Delhi, trusted NGOs Delhi, verified charity Delhi, legitimate charity Delhi, verified organizations Delhi, trusted charity Delhi, verified NGO list Delhi"
      primaryKeyword="Verified NGOs in Delhi"
      relatedLocations={[
        { name: 'Gurugram', slug: 'verified-ngo-in-gurugram' },
        { name: 'Noida', slug: 'verified-ngo-in-noida' },
        { name: 'Faridabad', slug: 'verified-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Delhi', slug: 'best-ngo-in-delhi' },
        { keyword: 'Top NGOs in Delhi', slug: 'top-ngo-in-delhi' },
        { keyword: 'Trusted NGOs in Delhi', slug: 'trusted-ngo-in-delhi' },
        { keyword: 'Leading NGOs in Delhi', slug: 'leading-ngo-in-delhi' },
      ]}
    />
  );
};

export default VerifiedNGOInDelhi;
