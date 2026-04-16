import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const TopNGOInNoida: React.FC = () => {
  return (
    <LocationSEOBase
      location="Noida"
      locationSlug="top-ngo-in-noida"
      title="Top NGOs in Noida | Leading Charity Organizations | The Giving Circle"
      description="Explore top-rated NGOs in Noida creating maximum social impact through our community support platform. Join our giving community to support social causes through social giving and community support."
      keywords="top NGOs in Noida, leading NGOs Noida, ngo in noida, charity in noida, social service noida, noida animal shelter, giving platform, community support, social giving, support social causes, give and help, causes to support"
      primaryKeyword="Top NGOs in Noida"
      relatedLocations={[
        { name: 'Delhi', slug: 'top-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'top-ngo-in-gurugram' },
        { name: 'Faridabad', slug: 'top-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Noida', slug: 'best-ngo-in-noida' },
        { keyword: 'Verified NGOs in Noida', slug: 'verified-ngo-in-noida' },
        { keyword: 'Trusted NGOs in Noida', slug: 'trusted-ngo-in-noida' },
        { keyword: 'Leading NGOs in Noida', slug: 'leading-ngo-in-noida' },
      ]}
    />
  );
};

export default TopNGOInNoida;
