import type { AnimalWelfareCityConfig } from '../types/animalWelfare';

export const ANIMAL_WELFARE_CITIES: AnimalWelfareCityConfig[] = [
  { slug: 'andhra-pradesh', label: 'Andhra Pradesh', city: 'Andhra Pradesh' },
  { slug: 'arunachal-pradesh', label: 'Arunachal Pradesh', city: 'Arunachal Pradesh' },
  { slug: 'bihar', label: 'Bihar', city: 'Bihar' },
  { slug: 'chandigarh', label: 'Chandigarh', city: 'Chandigarh' },
  { slug: 'delhi-ncr', label: 'Delhi / NCR', city: 'Delhi / NCR' },
  { slug: 'goa', label: 'Goa', city: 'Goa' },
  { slug: 'haryana', label: 'Haryana', city: 'Haryana' },
  { slug: 'pune', label: 'Pune', city: 'Pune' },
  { slug: 'karnataka', label: 'Karnataka', city: 'Karnataka' },
  { slug: 'kerala', label: 'Kerala', city: 'Kerala' },
  { slug: 'mumbai', label: 'Mumbai', city: 'Mumbai' },
  { slug: 'rajasthan', label: 'Rajasthan', city: 'Rajasthan' },
  { slug: 'tamil-nadu', label: 'Tamil Nadu', city: 'Tamil Nadu' },
  { slug: 'telangana', label: 'Telangana', city: 'Telangana' },
  { slug: 'pan-india', label: 'Miscellaneous / Pan-India', city: 'Pan-India' },
];

export function getAnimalWelfareCity(slug: string | undefined): AnimalWelfareCityConfig | undefined {
  if (!slug) return undefined;
  return ANIMAL_WELFARE_CITIES.find((c) => c.slug === slug);
}

export const ANIMAL_WELFARE_CITY_SLUGS = ANIMAL_WELFARE_CITIES.map((c) => c.slug);
