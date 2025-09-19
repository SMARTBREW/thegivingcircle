// Types that are actually being imported and used across the application

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  organization?: string;
}

// Note: Removed ChampionStory related interfaces since they're not being used
// ChampionStoryDetail page shows "under construction" and no components use this data

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