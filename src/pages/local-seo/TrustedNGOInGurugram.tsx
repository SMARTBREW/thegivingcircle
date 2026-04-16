import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const TrustedNGOInGurugram: React.FC = () => {
  return (
    <LocationSEOBase
      location="Gurugram"
      locationSlug="trusted-ngo-in-gurugram"
      title="Trusted NGOs in Gurugram | Reliable Charity Organizations | The Giving Circle"
      description="Connect with trusted and reliable NGOs in Gurugram through our community support platform. Join our giving community to support social causes through social giving and community support. Give and help create impact."
      keywords="trusted NGOs in Gurugram, reliable NGOs Gurugram, ngo in gurugram, ngo gurgaon, charity gurugram, giving platform, community support, social giving, support social causes, give and help, donation 80g, act of kindness"
      primaryKeyword="Trusted NGOs in Gurugram"
      relatedLocations={[
        { name: 'Delhi', slug: 'trusted-ngo-in-delhi' },
        { name: 'Noida', slug: 'trusted-ngo-in-noida' },
        { name: 'Faridabad', slug: 'trusted-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Gurugram', slug: 'best-ngo-in-gurugram' },
        { keyword: 'Top NGOs in Gurugram', slug: 'top-ngo-in-gurugram' },
        { keyword: 'Verified NGOs in Gurugram', slug: 'verified-ngo-in-gurugram' },
        { keyword: 'Leading NGOs in Gurugram', slug: 'leading-ngo-in-gurugram' },
      ]}
    />
  );
};

export default TrustedNGOInGurugram;
