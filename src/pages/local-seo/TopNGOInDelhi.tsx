import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const TopNGOInDelhi: React.FC = () => {
  return (
    <LocationSEOBase
      location="Delhi"
      locationSlug="top-ngo-in-delhi"
      title="Top NGOs in Delhi | Leading Charity Organizations | The Giving Circle"
      description="Explore top-rated NGOs in Delhi creating maximum social impact through our community support platform. Join our giving community to support social causes through social giving and community support. Give and help create change."
      keywords="top NGOs in Delhi, leading NGOs Delhi, best ngo in delhi ncr, ngo delhi, delhi ngo list, giving platform, community support, social giving, support social causes, give and help, causes to support, charitable trust in delhi ncr, dog rescue delhi, pet shelters in delhi, stray dog in delhi, dog shelter near me"
      primaryKeyword="Top NGOs in Delhi"
      relatedLocations={[
        { name: 'Gurugram', slug: 'top-ngo-in-gurugram' },
        { name: 'Noida', slug: 'top-ngo-in-noida' },
        { name: 'Faridabad', slug: 'top-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Delhi', slug: 'best-ngo-in-delhi' },
        { keyword: 'Verified NGOs in Delhi', slug: 'verified-ngo-in-delhi' },
        { keyword: 'Trusted NGOs in Delhi', slug: 'trusted-ngo-in-delhi' },
        { keyword: 'Leading NGOs in Delhi', slug: 'leading-ngo-in-delhi' },
      ]}
    />
  );
};

export default TopNGOInDelhi;
