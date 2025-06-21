export interface CauseChampion {
  id: string;
  name: string;
  city: string;
  state: string;
  causeInterest: string;
  whyICare: string;
  phoneNumber: string;
  profileImage?: string;
  joinedAt: Date;
  campaignsSupported: number;
}

export interface NGO {
  id: string;
  name: string;
  description: string;
  verified: boolean;
  logo: string;
  panCard: string;
  aadhaarCard: string;
  certificate12A: string;
  certificate80G: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  causesSupported: string[];
  registeredAt: Date;
}

export interface ImpactStory {
  id: string;
  title: string;
  description: string;
  ngo: NGO;
  causeChampion: CauseChampion;
  impactMetrics: {
    label: string;
    value: number;
    unit: string;
  }[];
  media: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
  }[];
  nftVerified: boolean;
  nftTokenId?: string;
  publishedAt: Date;
  tags: string[];
  location: string;
}

export interface OnboardingData {
  phoneNumber: string;
  otp?: string;
  name: string;
  city: string;
  state: string;
  causeInterest: string;
  whyICare: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  organization?: string;
}