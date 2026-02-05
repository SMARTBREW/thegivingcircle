import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const BestNGOInNoida: React.FC = () => {
  return (
    <LocationSEOBase
      location="Noida"
      locationSlug="best-ngo-in-noida"
      title="Best NGO in Noida | Top Verified NGOs | The Giving Circle"
      description="Discover the best NGOs in Noida making real social impact through our giving platform and community support platform. Join our giving community to support social causes through social giving and community support."
      keywords="best NGO in Noida, top NGOs Noida, giving platform, community support platform, giving community, social giving, community support, support social causes, give and help, causes to support, support circle, india community, giving india"
      primaryKeyword="Best NGO in Noida"
      relatedLocations={[
        { name: 'Delhi', slug: 'best-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'best-ngo-in-gurugram' },
        { name: 'Faridabad', slug: 'best-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Top NGOs in Noida', slug: 'top-ngo-in-noida' },
        { keyword: 'Verified NGOs in Noida', slug: 'verified-ngo-in-noida' },
        { keyword: 'Trusted NGOs in Noida', slug: 'trusted-ngo-in-noida' },
        { keyword: 'Leading NGOs in Noida', slug: 'leading-ngo-in-noida' },
      ]}
    />
  );
};

export default BestNGOInNoida;
