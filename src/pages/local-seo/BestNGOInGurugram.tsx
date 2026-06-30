import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const BestNGOInGurugram: React.FC = () => {
  return (
    <LocationSEOBase
      location="Gurugram"
      locationSlug="best-ngo-in-gurugram"
      title="Best NGO in Gurugram | Top Verified NGOs | The Giving Circle"
      description="Verified NGOs in Gurugram / Gurgaon: education, livelihoods, health, animal welfare. FCRA · 80G partners with impact reporting—for residents and corporates."
      keywords="best NGO in Gurugram, verified NGO Gurgaon, donate Gurugram, charity Gurgaon, CSR Gurugram"
      primaryKeyword="Best NGO in Gurugram"
      heroHeadline="Verified NGOs in Gurugram (Gurgaon)"
      heroLead="Corporate hub, large informal settlements, and peri-urban wards need trusted NGOs. Every partner listed here meets our verification bar—ideal for salaries CSR, volunteering, or one-off donations."
      relatedLocations={[
        { name: 'Delhi', slug: 'best-ngo-in-delhi' },
        { name: 'Noida', slug: 'best-ngo-in-noida' },
        { name: 'Faridabad', slug: 'best-ngo-in-faridabad' },
      ]}
    />
  );
};

export default BestNGOInGurugram;
