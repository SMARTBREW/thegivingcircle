import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const VerifiedNGOInDelhi: React.FC = () => {
  return (
    <LocationSEOBase
      location="Delhi"
      locationSlug="verified-ngo-in-delhi"
      title="Verified NGOs in Delhi | Trusted Charity Organizations | The Giving Circle"
      description="Browse verified and authenticated NGOs in Delhi. Every NGO thoroughly vetted for transparency and impact through our giving platform and community support platform. Join our giving community to support social causes."
      keywords="verified NGOs in Delhi, authenticated NGOs Delhi, best ngo in delhi ncr, delhi ngo list, ngo delhi, giving platform, community support, social giving, support social causes, give and help, donation 80g, charitable trust in delhi ncr"
      primaryKeyword="Verified NGOs in Delhi"
      relatedLocations={[
        { name: 'Gurugram', slug: 'verified-ngo-in-gurugram' },
        { name: 'Noida', slug: 'verified-ngo-in-noida' },
        { name: 'Faridabad', slug: 'verified-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Delhi', slug: 'best-ngo-in-delhi' },
        { keyword: 'Top NGOs in Delhi', slug: 'top-ngo-in-delhi' },
        { keyword: 'Trusted NGOs in Delhi', slug: 'trusted-ngo-in-delhi' },
        { keyword: 'Leading NGOs in Delhi', slug: 'leading-ngo-in-delhi' },
      ]}
    />
  );
};

export default VerifiedNGOInDelhi;
