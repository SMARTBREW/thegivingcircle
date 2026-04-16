import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const TrustedNGOInFaridabad: React.FC = () => {
  return (
    <LocationSEOBase
      location="Faridabad"
      locationSlug="trusted-ngo-in-faridabad"
      title="Trusted NGOs in Faridabad | Reliable Charity Organizations | The Giving Circle"
      description="Connect with trusted and reliable NGOs in Faridabad through our community support platform. Join our giving community to support social causes through social giving and community support."
      keywords="trusted NGOs in Faridabad, reliable NGOs Faridabad, giving platform, community support, social giving, support social causes, give and help, causes to support, donation 80g"
      primaryKeyword="Trusted NGOs in Faridabad"
      relatedLocations={[
        { name: 'Delhi', slug: 'trusted-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'trusted-ngo-in-gurugram' },
        { name: 'Noida', slug: 'trusted-ngo-in-noida' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Faridabad', slug: 'best-ngo-in-faridabad' },
        { keyword: 'Top NGOs in Faridabad', slug: 'top-ngo-in-faridabad' },
        { keyword: 'Verified NGOs in Faridabad', slug: 'verified-ngo-in-faridabad' },
        { keyword: 'Leading NGOs in Faridabad', slug: 'leading-ngo-in-faridabad' },
      ]}
    />
  );
};

export default TrustedNGOInFaridabad;
