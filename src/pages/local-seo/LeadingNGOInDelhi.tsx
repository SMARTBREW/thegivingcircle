import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const LeadingNGOInDelhi: React.FC = () => {
  return (
    <LocationSEOBase
      location="Delhi"
      locationSlug="leading-ngo-in-delhi"
      title="Leading NGOs in Delhi | Premier Charity Organizations | The Giving Circle"
      description="Discover leading NGOs in Delhi at the forefront of social change. Premier charity organizations creating maximum impact in education, healthcare, animal welfare, and disaster relief in Delhi."
      keywords="leading NGOs in Delhi, premier NGOs Delhi, top NGOs Delhi, leading charity Delhi, premier charity Delhi, top charity organizations Delhi, leading social impact Delhi, premier NGOs Delhi"
      primaryKeyword="Leading NGOs in Delhi"
      relatedLocations={[
        { name: 'Gurugram', slug: 'leading-ngo-in-gurugram' },
        { name: 'Noida', slug: 'leading-ngo-in-noida' },
        { name: 'Faridabad', slug: 'leading-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Delhi', slug: 'best-ngo-in-delhi' },
        { keyword: 'Top NGOs in Delhi', slug: 'top-ngo-in-delhi' },
        { keyword: 'Verified NGOs in Delhi', slug: 'verified-ngo-in-delhi' },
        { keyword: 'Trusted NGOs in Delhi', slug: 'trusted-ngo-in-delhi' },
      ]}
    />
  );
};

export default LeadingNGOInDelhi;
