import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const BestNGOInNoida: React.FC = () => {
  return (
    <LocationSEOBase
      location="Noida"
      locationSlug="best-ngo-in-noida"
      title="Best NGO in Noida | Top Verified NGOs | The Giving Circle"
      description="Discover the best NGOs in Noida making real social impact. Verified, trusted, and transparent charity organizations in Noida. Support education, healthcare, animal welfare, and more through The Giving Circle platform."
      keywords="best NGO in Noida, top NGOs Noida, verified NGOs Noida, trusted charity Noida, NGO directory Noida, social impact Noida, charity organizations Noida, donate Noida, NGO list Noida, best charity Noida"
      primaryKeyword="Best NGO in Noida"
      relatedLocations={[
        { name: 'Delhi', slug: 'best-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'best-ngo-in-gurugram' },
        { name: 'Faridabad', slug: 'best-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Top NGOs in Noida', slug: 'top-ngo-in-noida' },
        { keyword: 'Verified NGOs in Noida', slug: 'verified-ngo-in-noida' },
        { keyword: 'Trusted NGOs in Noida', slug: 'trusted-ngo-in-noida' },
        { keyword: 'Leading NGOs in Noida', slug: 'leading-ngo-in-noida' },
      ]}
    />
  );
};

export default BestNGOInNoida;
