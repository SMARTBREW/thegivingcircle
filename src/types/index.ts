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

export interface ChampionMilestone {
  date: string;
  title: string;
  description: string;
  amount: string;
  percentage: number;
}

export interface ChampionUpdate {
  date: string;
  title: string;
  content: string;
  image: string;
}

export interface ImpactStat {
  icon: string;
  label: string;
  value: string;
  description: string;
}

export interface ChampionStory {
  id: string;
  title: string;
  organizer: string;
  organizerBio?: string;
  organizerAvatar?: string;
  location: string;
  category: string;
  impact: string;
  successRate: string;
  supporters: number;
  status: string;
  goalAmount: string;
  raisedAmount: string;
  startDate: string;
  completionDate?: string;
  beneficiaryAge?: number;
  image: string;
  storyContent: string;
  milestones: ChampionMilestone[];
  impactStats: ImpactStat[];
  updates: ChampionUpdate[];
  tags: string[];
}

export interface NGOTimeline {
  year: number;
  title: string;
  description: string;
  milestone: string;
  image?: string;
  impact?: {
    label: string;
    value: string;
  }[];
}

export interface NGOGalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  description: string;
  location: string;
  date: string;
  cause: string;
  thumbnail?: string;
}

export interface NGOCause {
  id: string;
  name: string;
  description: string;
  image: string;
  impactMetrics: {
    label: string;
    value: string;
    unit: string;
    description: string;
  }[];
  beneficiaries: string[];
  approach: string;
  outcomes: string[];
}

export interface NGOLeadership {
  name: string;
  role: string;
  bio: string;
  image?: string;
  experience: string;
  education: string;
}

export interface NGODetails {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  verified: boolean;
  logo: string;
  heroImage: string;
  location: string;
  yearEstablished: number;
  registrationNumber: string;
  mission: string;
  vision: string;
  values: string[];
  causes: NGOCause[];
  leadership: NGOLeadership[];
  timeline: NGOTimeline[];
  gallery: NGOGalleryItem[];
  impactMetrics: {
    label: string;
    value: string;
    unit: string;
    description: string;
    icon: string;
  }[];
  awards: {
    title: string;
    year: number;
    description: string;
    organization: string;
  }[];
  partnerships: {
    name: string;
    logo: string;
    description: string;
  }[];
  contactInfo: {
    email: string;
    phone: string;
    website: string;
    address: string;
  };
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  certifications: string[];
  operatingStates: string[];
  totalBeneficiaries: string;
  annualReport?: string;
  financialTransparency: {
    programExpenses: string;
    adminExpenses: string;
    fundraisingExpenses: string;
    efficiencyRating: string;
  };
}