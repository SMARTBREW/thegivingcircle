import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const TopNGOInDelhi: React.FC = () => {
  return (
    <LocationSEOBase
      location="Delhi"
      locationSlug="top-ngo-in-delhi"
      title="Top NGOs in Delhi | Leading Charity Organizations | The Giving Circle"
      description="Explore top-rated NGOs in Delhi creating maximum social impact. Leading charity organizations in Delhi verified by The Giving Circle. Support causes in education, healthcare, disaster relief, and more."
      keywords="top NGOs in Delhi, leading NGOs Delhi, top rated NGOs Delhi, best charity Delhi, top charity organizations Delhi, NGO ranking Delhi, top social impact Delhi, leading NGOs Delhi"
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
