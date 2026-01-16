import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const TrustedNGOInDelhi: React.FC = () => {
  return (
    <LocationSEOBase
      location="Delhi"
      locationSlug="trusted-ngo-in-delhi"
      title="Trusted NGOs in Delhi | Reliable Charity Organizations | The Giving Circle"
      description="Connect with trusted and reliable NGOs in Delhi. All organizations are verified for credibility and transparency. Support dependable charity organizations in Delhi making real social impact."
      keywords="trusted NGOs in Delhi, reliable NGOs Delhi, dependable NGOs Delhi, trusted charity Delhi, reliable charity Delhi, credible NGOs Delhi, trustworthy NGOs Delhi, trusted NGO list Delhi"
      primaryKeyword="Trusted NGOs in Delhi"
      relatedLocations={[
        { name: 'Gurugram', slug: 'trusted-ngo-in-gurugram' },
        { name: 'Noida', slug: 'trusted-ngo-in-noida' },
        { name: 'Faridabad', slug: 'trusted-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Delhi', slug: 'best-ngo-in-delhi' },
        { keyword: 'Top NGOs in Delhi', slug: 'top-ngo-in-delhi' },
        { keyword: 'Verified NGOs in Delhi', slug: 'verified-ngo-in-delhi' },
        { keyword: 'Leading NGOs in Delhi', slug: 'leading-ngo-in-delhi' },
      ]}
    />
  );
};

export default TrustedNGOInDelhi;
