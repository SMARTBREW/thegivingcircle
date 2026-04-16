import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const LeadingNGOInGurugram: React.FC = () => {
  return (
    <LocationSEOBase
      location="Gurugram"
      locationSlug="leading-ngo-in-gurugram"
      title="Leading NGOs in Gurugram | Top Charity Organizations | The Giving Circle"
      description="Discover leading and impactful NGOs in Gurugram through our community support platform. Join our giving community to support social causes through social giving, community support, and giving to community initiatives."
      keywords="leading NGOs in Gurugram, impactful NGOs Gurugram, ngo in gurugram, ngo gurgaon, charity gurugram, giving platform, community support, social giving, support social causes, give and help, ngo role, act of kindness"
      primaryKeyword="Leading NGOs in Gurugram"
      relatedLocations={[
        { name: 'Delhi', slug: 'leading-ngo-in-delhi' },
        { name: 'Noida', slug: 'leading-ngo-in-noida' },
        { name: 'Faridabad', slug: 'leading-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Gurugram', slug: 'best-ngo-in-gurugram' },
        { keyword: 'Top NGOs in Gurugram', slug: 'top-ngo-in-gurugram' },
        { keyword: 'Verified NGOs in Gurugram', slug: 'verified-ngo-in-gurugram' },
        { keyword: 'Trusted NGOs in Gurugram', slug: 'trusted-ngo-in-gurugram' },
      ]}
    />
  );
};

export default LeadingNGOInGurugram;
