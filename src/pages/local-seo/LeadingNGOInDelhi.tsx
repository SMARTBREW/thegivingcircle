import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const LeadingNGOInDelhi: React.FC = () => {
  return (
    <LocationSEOBase
      location="Delhi"
      locationSlug="leading-ngo-in-delhi"
      title="Leading NGOs in Delhi | Top Charity Organizations | The Giving Circle"
      description="Discover leading and impactful NGOs in Delhi through our giving platform and community support platform. Join our giving community to support social causes through social giving and community support. Give and help create lasting change."
      keywords="leading NGOs in Delhi, impactful NGOs Delhi, ngo delhi, delhi best ngo, giving platform, community support, social giving, support social causes, give and help, causes to support, ngo role, role of ngo, act of kindness"
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
