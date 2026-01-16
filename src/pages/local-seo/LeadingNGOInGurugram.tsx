import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const LeadingNGOInGurugram: React.FC = () => {
  return (
    <LocationSEOBase
      location="Gurugram"
      locationSlug="leading-ngo-in-gurugram"
      title="Leading NGOs in Gurugram | Premier Charity Organizations | The Giving Circle"
      description="Discover leading NGOs in Gurugram at the forefront of social change. Premier charity organizations creating maximum impact in education, healthcare, animal welfare, and disaster relief in Gurugram."
      keywords="leading NGOs in Gurugram, premier NGOs Gurugram, top NGOs Gurugram, leading charity Gurugram, premier charity Gurugram, top charity organizations Gurugram, leading social impact Gurugram, premier NGOs Gurugram"
      primaryKeyword="Leading NGOs in Gurugram"
      relatedLocations={[
        { name: 'Delhi', slug: 'leading-ngo-in-delhi' },
        { name: 'Noida', slug: 'leading-ngo-in-noida' },
        { name: 'Faridabad', slug: 'leading-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Gurugram', slug: 'best-ngo-in-gurugram' },
        { keyword: 'Top NGOs in Gurugram', slug: 'top-ngo-in-gurugram' },
        { keyword: 'Verified NGOs in Gurugram', slug: 'verified-ngo-in-gurugram' },
        { keyword: 'Trusted NGOs in Gurugram', slug: 'trusted-ngo-in-gurugram' },
      ]}
    />
  );
};

export default LeadingNGOInGurugram;
