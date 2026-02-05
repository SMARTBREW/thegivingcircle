import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const VerifiedNGOInFaridabad: React.FC = () => {
  return (
    <LocationSEOBase
      location="Faridabad"
      locationSlug="verified-ngo-in-faridabad"
      title="Verified NGOs in Faridabad | Trusted Charity Organizations | The Giving Circle"
      description="Browse verified and authenticated NGOs in Faridabad through our community support platform. Join our giving community to support social causes through social giving and community support."
      keywords="verified NGOs in Faridabad, authenticated NGOs Faridabad, giving platform, community support platform, giving community, social giving, community support, support social causes, give and help, causes to support, supporting india, giving india"
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
