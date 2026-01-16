import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const LeadingNGOInNoida: React.FC = () => {
  return (
    <LocationSEOBase
      location="Noida"
      locationSlug="leading-ngo-in-noida"
      title="Leading NGOs in Noida | Premier Charity Organizations | The Giving Circle"
      description="Discover leading NGOs in Noida at the forefront of social change. Premier charity organizations creating maximum impact in education, healthcare, animal welfare, and disaster relief in Noida."
      keywords="leading NGOs in Noida, premier NGOs Noida, top NGOs Noida, leading charity Noida, premier charity Noida, top charity organizations Noida, leading social impact Noida, premier NGOs Noida"
      primaryKeyword="Leading NGOs in Noida"
      relatedLocations={[
        { name: 'Delhi', slug: 'leading-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'leading-ngo-in-gurugram' },
        { name: 'Faridabad', slug: 'leading-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Noida', slug: 'best-ngo-in-noida' },
        { keyword: 'Top NGOs in Noida', slug: 'top-ngo-in-noida' },
        { keyword: 'Verified NGOs in Noida', slug: 'verified-ngo-in-noida' },
        { keyword: 'Trusted NGOs in Noida', slug: 'trusted-ngo-in-noida' },
      ]}
    />
  );
};

export default LeadingNGOInNoida;
