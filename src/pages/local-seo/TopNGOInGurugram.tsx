import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const TopNGOInGurugram: React.FC = () => {
  return (
    <LocationSEOBase
      location="Gurugram"
      locationSlug="top-ngo-in-gurugram"
      title="Top NGOs in Gurugram | Leading Charity Organizations | The Giving Circle"
      description="Explore top-rated NGOs in Gurugram creating maximum social impact. Leading charity organizations in Gurugram verified by The Giving Circle. Support causes in education, healthcare, disaster relief, and more."
      keywords="top NGOs in Gurugram, leading NGOs Gurugram, top rated NGOs Gurugram, best charity Gurugram, top charity organizations Gurugram, NGO ranking Gurugram, top social impact Gurugram, leading NGOs Gurugram"
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
