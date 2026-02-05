import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const LeadingNGOInNoida: React.FC = () => {
  return (
    <LocationSEOBase
      location="Noida"
      locationSlug="leading-ngo-in-noida"
      title="Leading NGOs in Noida | Top Charity Organizations | The Giving Circle"
      description="Discover leading and impactful NGOs in Noida through our giving platform and community support platform. Join our giving community to support social causes through social giving and community support."
      keywords="leading NGOs in Noida, impactful NGOs Noida, giving platform, community support platform, giving community, social giving, community support, support social causes, give and help, causes to support, support circle, communities support, community helpline, giving india"
      primaryKeyword="Leading NGOs in Noida"
      relatedLocations={[
        { name: 'Delhi', slug: 'leading-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'leading-ngo-in-gurugram' },
        { name: 'Faridabad', slug: 'leading-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Noida', slug: 'best-ngo-in-noida' },
        { keyword: 'Top NGOs in Noida', slug: 'top-ngo-in-noida' },
        { keyword: 'Verified NGOs in Noida', slug: 'verified-ngo-in-noida' },
        { keyword: 'Trusted NGOs in Noida', slug: 'trusted-ngo-in-noida' },
      ]}
    />
  );
};

export default LeadingNGOInNoida;
