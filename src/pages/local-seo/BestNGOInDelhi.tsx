import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const BestNGOInDelhi: React.FC = () => {
  return (
    <LocationSEOBase
      location="Delhi"
      locationSlug="best-ngo-in-delhi"
      title="Best NGO in Delhi | Top Verified NGOs | The Giving Circle"
      description="Discover the best NGOs in Delhi making real social impact through our giving platform and community support platform. Verified, trusted charity organizations in Delhi. Join our giving community to support social causes, give and help through social giving and community support initiatives."
      keywords="best NGO in Delhi, top NGOs Delhi, best ngo in delhi ncr, delhi ngo list, delhi best ngo, ngo delhi, verified NGOs Delhi, trusted charity Delhi, NGO directory Delhi, charitable trust in delhi ncr, dog shelter delhi, dog rescue delhi, pet shelters in delhi, dog shelter near me, stray dog in delhi, street dog food, animal rescue shelters near me, dog rescue home near me, social impact, giving platform, community support, support social causes, give and help, causes to support, donation 80g"
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
