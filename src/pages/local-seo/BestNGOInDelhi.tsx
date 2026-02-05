import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const BestNGOInDelhi: React.FC = () => {
  return (
    <LocationSEOBase
      location="Delhi"
      locationSlug="best-ngo-in-delhi"
      title="Best NGO in Delhi | Top Verified NGOs | The Giving Circle"
      description="Discover the best NGOs in Delhi making real social impact through our giving platform and community support platform. Verified, trusted charity organizations in Delhi. Join our giving community to support social causes, give and help through social giving and community support initiatives."
      keywords="best NGO in Delhi, top NGOs Delhi, verified NGOs Delhi, trusted charity Delhi, NGO directory Delhi, social impact Delhi, giving platform, community support platform, giving community, social giving, community support, support social causes, give and help, causes to support, giving to community, support circle, india community, communities for communities, giving india"
      primaryKeyword="Best NGO in Delhi"
      relatedLocations={[
        { name: 'Gurugram', slug: 'best-ngo-in-gurugram' },
        { name: 'Noida', slug: 'best-ngo-in-noida' },
        { name: 'Faridabad', slug: 'best-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Top NGOs in Delhi', slug: 'top-ngo-in-delhi' },
        { keyword: 'Verified NGOs in Delhi', slug: 'verified-ngo-in-delhi' },
        { keyword: 'Trusted NGOs in Delhi', slug: 'trusted-ngo-in-delhi' },
        { keyword: 'Leading NGOs in Delhi', slug: 'leading-ngo-in-delhi' },
      ]}
    />
  );
};

export default BestNGOInDelhi;
