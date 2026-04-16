import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const BestNGOInFaridabad: React.FC = () => {
  return (
    <LocationSEOBase
      location="Faridabad"
      locationSlug="best-ngo-in-faridabad"
      title="Best NGO in Faridabad | Top Verified NGOs | The Giving Circle"
      description="Discover the best NGOs in Faridabad making real social impact through our giving platform and community support platform. Join our giving community to support social causes through social giving and community support."
      keywords="best NGO in Faridabad, top NGOs Faridabad, giving platform, community support, social giving, support social causes, give and help, causes to support, donation 80g, act of kindness"
      primaryKeyword="Best NGO in Faridabad"
      relatedLocations={[
        { name: 'Delhi', slug: 'best-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'best-ngo-in-gurugram' },
        { name: 'Noida', slug: 'best-ngo-in-noida' },
      ]}
      relatedKeywords={[
        { keyword: 'Top NGOs in Faridabad', slug: 'top-ngo-in-faridabad' },
        { keyword: 'Verified NGOs in Faridabad', slug: 'verified-ngo-in-faridabad' },
        { keyword: 'Trusted NGOs in Faridabad', slug: 'trusted-ngo-in-faridabad' },
        { keyword: 'Leading NGOs in Faridabad', slug: 'leading-ngo-in-faridabad' },
      ]}
    />
  );
};

export default BestNGOInFaridabad;
