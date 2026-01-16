import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const TrustedNGOInNoida: React.FC = () => {
  return (
    <LocationSEOBase
      location="Noida"
      locationSlug="trusted-ngo-in-noida"
      title="Trusted NGOs in Noida | Reliable Charity Organizations | The Giving Circle"
      description="Connect with trusted and reliable NGOs in Noida. All organizations are verified for credibility and transparency. Support dependable charity organizations in Noida making real social impact."
      keywords="trusted NGOs in Noida, reliable NGOs Noida, dependable NGOs Noida, trusted charity Noida, reliable charity Noida, credible NGOs Noida, trustworthy NGOs Noida, trusted NGO list Noida"
      primaryKeyword="Trusted NGOs in Noida"
      relatedLocations={[
        { name: 'Delhi', slug: 'trusted-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'trusted-ngo-in-gurugram' },
        { name: 'Faridabad', slug: 'trusted-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Noida', slug: 'best-ngo-in-noida' },
        { keyword: 'Top NGOs in Noida', slug: 'top-ngo-in-noida' },
        { keyword: 'Verified NGOs in Noida', slug: 'verified-ngo-in-noida' },
        { keyword: 'Leading NGOs in Noida', slug: 'leading-ngo-in-noida' },
      ]}
    />
  );
};

export default TrustedNGOInNoida;
