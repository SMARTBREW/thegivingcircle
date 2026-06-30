/** Unique copy per canonical city SEO page — avoids duplicate boilerplate across /ngos/best-ngo-in-*. */
export const CITY_SEO_GUIDES: Record<string, { context: string; highlights: string[] }> = {
  'best-ngo-in-delhi': {
    context:
      'Delhi NCR concentrates India\'s largest informal settlements alongside corporate CSR headquarters. NGOs here work on girl-child education in Okhla, menstrual health in resettlement colonies, and pan-city animal rescue on NH corridors. Donors should look for partners with published ward-level programme data — not just "Delhi" as a label.',
    highlights: [
      'JWP Wings of Hope — menstrual health & education (South Delhi)',
      'AnimalCare India — rescue and vaccination across NCR',
      'Pehli Class bridge centre — Nithari, Noida border',
    ],
  },
  'best-ngo-in-gurugram': {
    context:
      'Gurugram\'s mix of glass towers and urban villages creates sharp inequality — migrant workers\' children out of school, injured strays on expressways, and CSR budgets seeking audited local partners. AnimalCare\'s Brick by Brick shelter build is anchored here on a 17,500 sq ft plot for long-term rehabilitation.',
    highlights: [
      'Brick by Brick — stray rescue centre boundary wall campaign',
      'Corporate volunteering days for skills clinics and site builds',
      'Highway rescue coordination with NCR ambulance networks',
    ],
  },
  'best-ngo-in-noida': {
    context:
      'Noida and Greater Noida absorb families priced out of Delhi — and with them, children who miss formal admission windows. Bridge programmes like #PehliClass at Mera Sahara pair documentation support with classroom catch-up before enrolment into UP or Delhi schools.',
    highlights: [
      '#PehliClass / JWP — formal school bridge at Nithari',
      'Feeding and vaccination routes from Delhi NCR animal NGOs',
      'CSR-friendly education blocks for Noida Extension corporates',
    ],
  },
  'best-ngo-in-faridabad': {
    context:
      'Faridabad\'s industrial belt and Ballabgarh periphery host dense worker colonies where NGOs focus on livelihoods, health camps, and peri-urban animal welfare. Verified partners here often serve both Haryana and Delhi border communities.',
    highlights: [
      'Community health and education outreach in industrial colonies',
      'Cross-border NCR programmes from Delhi-listed verified NGOs',
      'Volunteer routes reachable from Badarpur metro corridor',
    ],
  },
};

export function getCitySeoGuide(locationSlug: string) {
  return CITY_SEO_GUIDES[locationSlug];
}
