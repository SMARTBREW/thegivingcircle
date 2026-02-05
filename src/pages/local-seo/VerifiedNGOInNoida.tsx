import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const VerifiedNGOInNoida: React.FC = () => {
  return (
    <LocationSEOBase
      location="Noida"
      locationSlug="verified-ngo-in-noida"
      title="Verified NGOs in Noida | Trusted Charity Organizations | The Giving Circle"
      description="Browse verified and authenticated NGOs in Noida through our giving platform and community support platform. Join our giving community to support social causes through social giving."
      keywords="verified NGOs in Noida, authenticated NGOs Noida, giving platform, community support platform, giving community, social giving, community support, support social causes, give and help, causes to support, support circle, communities support, giving india"
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
