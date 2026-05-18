import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const TopNGOInDelhi: React.FC = () => {
  return (
    <LocationSEOBase
      location="Delhi"
      locationSlug="top-ngo-in-delhi"
      title="Top NGOs in Delhi NCR | Verified Charity List & Donate | The Giving Circle"
      description="Compare top NGOs in Delhi NCR screened for FCRA, 80G and programme transparency. Discover education, livelihood and welfare organisations you can donate to with receipts and quarterly impact reporting."
      keywords="top NGOs in Delhi, top NGOs Delhi NCR, leading NGOs Delhi, best NGO in Delhi NCR, verified NGO Delhi, donate NGO Delhi 80G, charitable trust Delhi NCR, Delhi NGO list transparent, NGOs with impact reports Delhi"
      primaryKeyword="Top NGOs in Delhi"
      heroHeadline="Top NGOs in Delhi NCR You Can Actually Trust"
      heroLead="We highlight Delhi NCR NGOs with serious compliance (FCRA, 80G) and published fund use  -  not generic lists. Explore causes, compare nearby cities, and give through one verified checkout."
      relatedLocations={[
        { name: 'Gurugram', slug: 'top-ngo-in-gurugram' },
        { name: 'Noida', slug: 'top-ngo-in-noida' },
        { name: 'Faridabad', slug: 'top-ngo-in-faridabad' },
      ]}
      relatedKeywords={[
        { keyword: 'Best NGOs in Delhi', slug: 'best-ngo-in-delhi' },
        { keyword: 'Verified NGOs in Delhi', slug: 'verified-ngo-in-delhi' },
        { keyword: 'Trusted NGOs in Delhi', slug: 'trusted-ngo-in-delhi' },
        { keyword: 'Leading NGOs in Delhi', slug: 'leading-ngo-in-delhi' },
      ]}
    />
  );
};

export default TopNGOInDelhi;
