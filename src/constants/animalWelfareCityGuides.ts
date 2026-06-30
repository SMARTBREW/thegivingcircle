/** Unique editorial blurbs per city — keeps animal-welfare pages distinct for SEO. */
export const ANIMAL_WELFARE_CITY_GUIDES: Record<string, { intro: string; tips: string[] }> = {
  'delhi-ncr': {
    intro:
      'Delhi NCR has one of India\'s highest stray dog populations and the busiest rescue networks. From Okhla industrial colonies to Gurugram sectors, injured animals need fast routing to verified NGOs, night vets, and ambulances — this directory lists who answers at 2am.',
    tips: [
      'For road accidents on NH-48 or DND, call the helpline before moving the animal — spinal injuries are common.',
      'MCD and NGO ABC (sterilisation) camps run seasonally; check listing notes for ward coverage.',
      'Corporate CSR teams often sponsor vaccination drives — see Pawsitive Protectors and Brick by Brick campaigns.',
    ],
  },
  mumbai: {
    intro:
      'Mumbai\'s dense lanes and monsoon flooding create year-round animal emergencies. Bowls of Hope runs daily feeding routes here; rescues coordinate with local trusts and BMC-notified handlers in western and central suburbs.',
    tips: [
      'During July–September floods, prioritize rooftop strandings — water rises faster than ambulances can reroute.',
      'Coastal wards see high kitten abandonment; foster networks listed here may have waitlists.',
      'Donate to verified feeding programmes rather than ad-hoc milk/bread — nutritional harm is common.',
    ],
  },
  pune: {
    intro:
      'Pune combines rapid IT corridor expansion with peri-urban villages where cattle and stray dogs share roads. Local rescues focus on ABC drives, injured cow calls on highways, and campus-area puppy dumps.',
    tips: [
      'Hinjawadi and Kharadi see weekend puppy abandonment — photograph location pin when reporting.',
      'Many Pune listings are volunteer-run; confirm hours before travelling with an animal.',
    ],
  },
  karnataka: {
    intro:
      'Karnataka spans Bengaluru\'s urban rescue ecosystem and rural district camps. Bangalore NGOs handle high call volumes; coastal and northern districts rely on smaller trusts with longer response times.',
    tips: [
      'In Bengaluru, use area-specific listings — crossing zones adds 45+ minutes to ambulance dispatch.',
      'Wildlife cases (snakes, birds) need separate forest department clearance — not all vets handle them.',
    ],
  },
  kerala: {
    intro:
      'Kerala\'s landslide and flood seasons trap livestock and pets on hillsides. Post-2024 Wayanad events showed how under-resourced animal rescue is outside Kochi and Thiruvananthapuram — use this list to find district contacts before monsoon.',
    tips: [
      'Flood season: note landmark + WhatsApp location pin — GPS pins fail in landslide zones.',
      'Cattle owners often need fodder relief after floods; some NGOs coordinate hay drops.',
    ],
  },
  'tamil-nadu': {
    intro:
      'Tamil Nadu combines Chennai street-dog ABC programmes with temple-town cow welfare and coastal fishing-community animal care. Chennai listings overlap with Bowls of Hope feeding routes.',
    tips: [
      'Chennai heatstroke cases peak April–June — shade and water before transport saves lives.',
      'Temple elephant/cow cases may need district animal husbandry, not stray rescues.',
    ],
  },
  telangana: {
    intro:
      'Hyderabad\'s ORR expansion displaced many stray colonies. Rescues here coordinate ABC with GHMC and private shelters on the city periphery.',
    tips: [
      'IT corridor night rescues need prior NGO confirmation — few teams run 24/7 without notice.',
    ],
  },
  goa: {
    intro:
      'Goa\'s tourist season brings feeding dependency and post-season abandonment. Monsoon isolates coastal villages — verify ferry/road access before dispatching volunteers.',
    tips: [
      'Beach shack dogs often have informal caretakers — ask locally before removing animals.',
    ],
  },
  bihar: {
    intro:
      'Bihar\'s flood plains affect livestock and strays together. Kosi basin floods require boats; listings note which teams have river rescue capacity.',
    tips: [
      'Share district + block name — "Patna" alone is too broad for rural calls.',
    ],
  },
  rajasthan: {
    intro:
      'Rajasthan\'s heat and highway corridors create distinct welfare needs — cattle on roads, camel injuries near tourist routes, and urban stray dogs in Jaipur/Jodhpur.',
    tips: [
      'Summer midday rescues need shaded transport; heatstroke kills faster than injury bleeding.',
    ],
  },
  haryana: {
    intro:
      'Gurugram and Faridabad anchor Haryana\'s rescue map. AnimalCare India\'s Brick by Brick shelter build and NCR vaccination drives are headquartered here.',
    tips: [
      'Industrial area puppies often hide in godowns — bring flashlight and gloves.',
      'Link to /ngos/best-ngo-in-gurugram for broader NGO context.',
    ],
  },
  chandigarh: {
    intro:
      'Chandigarh\'s planned sectors have organized ABC history but limited night ambulances. Cross-border calls often spill into Mohali/Panchkula listings.',
    tips: [
      'Sector number is mandatory for dispatch — gates close after 10pm in many zones.',
    ],
  },
  'andhra-pradesh': {
    intro:
      'Andhra Pradesh spans coastal cyclone zones and inland districts. Visakhapatnam and Vijayawada have the densest NGO networks; rural calls may need district vet referral.',
    tips: [
      'Cyclone warnings: pre-save two contacts — primary and backup — from this list.',
    ],
  },
  'arunachal-pradesh': {
    intro:
      'Arunachal has few formal stray rescues; listings may include vets and forest-adjacent helpers. Response times are measured in hours, not minutes — stabilize and transport only when safe.',
    tips: [
      'Wildlife vs domestic cases: confirm species before travel — permits apply.',
    ],
  },
  'pan-india': {
    intro:
      'Pan-India entries cover NGOs operating across states — national helplines, crowdfunding campaigns, and multi-city rescues. Use city-specific pages when you know the location.',
    tips: [
      'Prefer the city page matching the animal\'s pin code for fastest dispatch.',
      'National campaigns may not offer local ambulance — verify service area.',
    ],
  },
};

export function getAnimalWelfareCityGuide(slug: string) {
  return (
    ANIMAL_WELFARE_CITY_GUIDES[slug] ?? {
      intro: `Find rescues, veterinarians, NGOs and ambulances serving ${slug.replace(/-/g, ' ')}. Listings are community-sourced and reviewed before publication.`,
      tips: [
        'Call the 24/7 helpline first for injured animals.',
        'Share exact location pin and a photo if safe to take one.',
        'Do not feed milk to stray puppies — it causes diarrhea.',
      ],
    }
  );
}
