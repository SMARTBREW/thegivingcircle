import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const VerifiedNGOInGurugram: React.FC = () => {
  return (
    <LocationSEOBase
      location="Gurugram"
      locationSlug="verified-ngo-in-gurugram"
      title="Verified NGOs in Gurugram | Trusted Charity Organizations | The Giving Circle"
      description="Browse verified and authenticated NGOs in Gurugram through our community support platform. Join our giving community to support social causes through social giving and community support."
      keywords="verified NGOs in Gurugram, authenticated NGOs Gurugram, giving platform, community support platform, giving community, social giving, community support, support social causes, give and help, causes to support, circle of support, giving india"
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
