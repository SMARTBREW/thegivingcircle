import React from 'react';
import LocationSEOBase from './LocationSEOBase';

const BestNGOInNoida: React.FC = () => {
  return (
    <LocationSEOBase
      location="Noida"
      locationSlug="best-ngo-in-noida"
      title="Best NGO in Noida | Top Verified NGOs | The Giving Circle"
      description="Find verified NGOs in Noida & Greater Noida—education, women's empowerment, animal welfare & relief. Transparent impact reports, secure giving, Delhi NCR–focused listings."
      keywords="best NGO in Noida, verified NGO Noida, donate Noida, charity Noida, CSR Noida, Greater Noida NGO"
      primaryKeyword="Best NGO in Noida"
      heroHeadline="Verified NGOs in Noida & Greater Noida"
      heroLead="FCRA-listed, 80G-eligible charities you can support with confidence: education, women's programmes, animal care, hunger relief, and CSR-ready partners across Noida Extension and Delhi NCR."
      relatedLocations={[
        { name: 'Delhi', slug: 'best-ngo-in-delhi' },
        { name: 'Gurugram', slug: 'best-ngo-in-gurugram' },
        { name: 'Faridabad', slug: 'best-ngo-in-faridabad' },
      ]}
    />
  );
};

export default BestNGOInNoida;
