import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const BestNGOInGurugram: React.FC = () => {
  return (
    <LocationSEOBase
      location="Gurugram"
      locationSlug="best-ngo-in-gurugram"
      title="Best NGO in Gurugram | Top Verified NGOs | The Giving Circle"
      description="Discover the best NGOs in Gurugram making real social impact. Verified, trusted, and transparent charity organizations in Gurugram. Support education, healthcare, animal welfare, and more through The Giving Circle platform."
      keywords="best NGO in Gurugram, top NGOs Gurugram, verified NGOs Gurugram, trusted charity Gurugram, NGO directory Gurugram, social impact Gurugram, charity organizations Gurugram, donate Gurugram, NGO list Gurugram, best charity Gurugram"
      primaryKeyword="Best NGO in Gurugram"
      relatedLocations={[
        { name: 'Delhi', slug: 'best-ngo-in-delhi' },
        { name: 'Noida', slug: 'best-ngo-in-noida' },
        { name: 'Faridabad', slug: 'best-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Top NGOs in Gurugram', slug: 'top-ngo-in-gurugram' },
        { keyword: 'Verified NGOs in Gurugram', slug: 'verified-ngo-in-gurugram' },
        { keyword: 'Trusted NGOs in Gurugram', slug: 'trusted-ngo-in-gurugram' },
        { keyword: 'Leading NGOs in Gurugram', slug: 'leading-ngo-in-gurugram' },
      ]}
    />
  );
};

export default BestNGOInGurugram;
