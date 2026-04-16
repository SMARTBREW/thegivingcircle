import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const TrustedNGOInNoida: React.FC = () => {
  return (
    <LocationSEOBase
      location="Noida"
      locationSlug="trusted-ngo-in-noida"
      title="Trusted NGOs in Noida | Reliable Charity Organizations | The Giving Circle"
      description="Connect with trusted and reliable NGOs in Noida through our giving platform and community support platform. Join our giving community to support social causes through social giving and community support."
      keywords="trusted NGOs in Noida, reliable NGOs Noida, ngo in noida, charity in noida, noida animal shelter, giving platform, community support, social giving, support social causes, give and help, donation 80g, india care"
      primaryKeyword="Trusted NGOs in Noida"
      relatedLocations={[
        { name: 'Delhi', slug: 'trusted-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'trusted-ngo-in-gurugram' },
        { name: 'Faridabad', slug: 'trusted-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Noida', slug: 'best-ngo-in-noida' },
        { keyword: 'Top NGOs in Noida', slug: 'top-ngo-in-noida' },
        { keyword: 'Verified NGOs in Noida', slug: 'verified-ngo-in-noida' },
        { keyword: 'Leading NGOs in Noida', slug: 'leading-ngo-in-noida' },
      ]}
    />
  );
};

export default TrustedNGOInNoida;
