import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const TopNGOInGurugram: React.FC = () => {
  return (
    <LocationSEOBase
      location="Gurugram"
      locationSlug="top-ngo-in-gurugram"
      title="Top NGOs in Gurugram | Leading Charity Organizations | The Giving Circle"
      description="Explore top-rated NGOs in Gurugram creating maximum social impact through our community support platform. Join our giving community to support social causes through social giving and community support. Give and help create change."
      keywords="top NGOs in Gurugram, leading NGOs Gurugram, top rated NGOs Gurugram, giving platform, community support platform, giving community, social giving, community support, support social causes, give and help, causes to support, support circle, circle of support, communities support, giving india, supporting india"
      primaryKeyword="Top NGOs in Gurugram"
      relatedLocations={[
        { name: 'Delhi', slug: 'top-ngo-in-delhi' },
        { name: 'Noida', slug: 'top-ngo-in-noida' },
        { name: 'Faridabad', slug: 'top-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Gurugram', slug: 'best-ngo-in-gurugram' },
        { keyword: 'Verified NGOs in Gurugram', slug: 'verified-ngo-in-gurugram' },
        { keyword: 'Trusted NGOs in Gurugram', slug: 'trusted-ngo-in-gurugram' },
        { keyword: 'Leading NGOs in Gurugram', slug: 'leading-ngo-in-gurugram' },
      ]}
    />
  );
};

export default TopNGOInGurugram;
