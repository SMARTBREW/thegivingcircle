import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const TopNGOInFaridabad: React.FC = () => {
  return (
    <LocationSEOBase
      location="Faridabad"
      locationSlug="top-ngo-in-faridabad"
      title="Top NGOs in Faridabad | Leading Charity Organizations | The Giving Circle"
      description="Explore top-rated NGOs in Faridabad creating maximum social impact through our community support platform. Join our giving community to support social causes through social giving and community support."
      keywords="top NGOs in Faridabad, leading NGOs Faridabad, giving platform, community support, social giving, support social causes, give and help, causes to support, donation 80g"
      primaryKeyword="Top NGOs in Faridabad"
      relatedLocations={[
        { name: 'Delhi', slug: 'top-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'top-ngo-in-gurugram' },
        { name: 'Noida', slug: 'top-ngo-in-noida' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Faridabad', slug: 'best-ngo-in-faridabad' },
        { keyword: 'Verified NGOs in Faridabad', slug: 'verified-ngo-in-faridabad' },
        { keyword: 'Trusted NGOs in Faridabad', slug: 'trusted-ngo-in-faridabad' },
        { keyword: 'Leading NGOs in Faridabad', slug: 'leading-ngo-in-faridabad' },
      ]}
    />
  );
};

export default TopNGOInFaridabad;
