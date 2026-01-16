import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const LeadingNGOInFaridabad: React.FC = () => {
  return (
    <LocationSEOBase
      location="Faridabad"
      locationSlug="leading-ngo-in-faridabad"
      title="Leading NGOs in Faridabad | Premier Charity Organizations | The Giving Circle"
      description="Discover leading NGOs in Faridabad at the forefront of social change. Premier charity organizations creating maximum impact in education, healthcare, animal welfare, and disaster relief in Faridabad."
      keywords="leading NGOs in Faridabad, premier NGOs Faridabad, top NGOs Faridabad, leading charity Faridabad, premier charity Faridabad, top charity organizations Faridabad, leading social impact Faridabad, premier NGOs Faridabad"
      primaryKeyword="Leading NGOs in Faridabad"
      relatedLocations={[
        { name: 'Delhi', slug: 'leading-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'leading-ngo-in-gurugram' },
        { name: 'Noida', slug: 'leading-ngo-in-noida' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Faridabad', slug: 'best-ngo-in-faridabad' },
        { keyword: 'Top NGOs in Faridabad', slug: 'top-ngo-in-faridabad' },
        { keyword: 'Verified NGOs in Faridabad', slug: 'verified-ngo-in-faridabad' },
        { keyword: 'Trusted NGOs in Faridabad', slug: 'trusted-ngo-in-faridabad' },
      ]}
    />
  );
};

export default LeadingNGOInFaridabad;
