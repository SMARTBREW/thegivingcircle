import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const LeadingNGOInFaridabad: React.FC = () => {
  return (
    <LocationSEOBase
      location="Faridabad"
      locationSlug="leading-ngo-in-faridabad"
      title="Leading NGOs in Faridabad | Top Charity Organizations | The Giving Circle"
      description="Discover leading and impactful NGOs in Faridabad through our community support platform. Join our giving community to support social causes through social giving, community support, and give through initiatives."
      keywords="leading NGOs in Faridabad, impactful NGOs Faridabad, giving platform, community support platform, giving community, social giving, community support, support social causes, give and help, causes to support, give through, support of community, supporting india, giving india"
      primaryKeyword="Leading NGOs in Faridabad"
      relatedLocations={[
        { name: 'Delhi', slug: 'leading-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'leading-ngo-in-gurugram' },
        { name: 'Noida', slug: 'leading-ngo-in-noida' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Faridabad', slug: 'best-ngo-in-faridabad' },
        { keyword: 'Top NGOs in Faridabad', slug: 'top-ngo-in-faridabad' },
        { keyword: 'Verified NGOs in Faridabad', slug: 'verified-ngo-in-faridabad' },
        { keyword: 'Trusted NGOs in Faridabad', slug: 'trusted-ngo-in-faridabad' },
      ]}
    />
  );
};

export default LeadingNGOInFaridabad;
