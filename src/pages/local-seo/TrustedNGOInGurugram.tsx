import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const TrustedNGOInGurugram: React.FC = () => {
  return (
    <LocationSEOBase
      location="Gurugram"
      locationSlug="trusted-ngo-in-gurugram"
      title="Trusted NGOs in Gurugram | Reliable Charity Organizations | The Giving Circle"
      description="Connect with trusted and reliable NGOs in Gurugram. All organizations are verified for credibility and transparency. Support dependable charity organizations in Gurugram making real social impact."
      keywords="trusted NGOs in Gurugram, reliable NGOs Gurugram, dependable NGOs Gurugram, trusted charity Gurugram, reliable charity Gurugram, credible NGOs Gurugram, trustworthy NGOs Gurugram, trusted NGO list Gurugram"
      primaryKeyword="Trusted NGOs in Gurugram"
      relatedLocations={[
        { name: 'Delhi', slug: 'trusted-ngo-in-delhi' },
        { name: 'Noida', slug: 'trusted-ngo-in-noida' },
        { name: 'Faridabad', slug: 'trusted-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Gurugram', slug: 'best-ngo-in-gurugram' },
        { keyword: 'Top NGOs in Gurugram', slug: 'top-ngo-in-gurugram' },
        { keyword: 'Verified NGOs in Gurugram', slug: 'verified-ngo-in-gurugram' },
        { keyword: 'Leading NGOs in Gurugram', slug: 'leading-ngo-in-gurugram' },
      ]}
    />
  );
};

export default TrustedNGOInGurugram;
