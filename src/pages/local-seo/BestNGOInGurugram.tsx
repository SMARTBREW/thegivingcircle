import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const BestNGOInGurugram: React.FC = () => {
  return (
    <LocationSEOBase
      location="Gurugram"
      locationSlug="best-ngo-in-gurugram"
      title="Best NGO in Gurugram | Top Verified NGOs | The Giving Circle"
      description="Discover the best NGOs in Gurugram making real social impact through our giving platform and community support platform. Join our giving community to support social causes through social giving and community support."
      keywords="best NGO in Gurugram, top NGOs Gurugram, ngo in gurugram, ngo gurgaon, charity gurugram, giving platform, community support, social giving, support social causes, give and help, causes to support, donation 80g"
      primaryKeyword="Best NGO in Gurugram"
      relatedLocations={[
        { name: 'Delhi', slug: 'best-ngo-in-delhi' },
        { name: 'Noida', slug: 'best-ngo-in-noida' },
        { name: 'Faridabad', slug: 'best-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Top NGOs in Gurugram', slug: 'top-ngo-in-gurugram' },
        { keyword: 'Verified NGOs in Gurugram', slug: 'verified-ngo-in-gurugram' },
        { keyword: 'Trusted NGOs in Gurugram', slug: 'trusted-ngo-in-gurugram' },
        { keyword: 'Leading NGOs in Gurugram', slug: 'leading-ngo-in-gurugram' },
      ]}
    />
  );
};

export default BestNGOInGurugram;
