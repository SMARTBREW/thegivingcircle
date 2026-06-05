export interface AnimalWelfarePartner {
  id: string;
  citySlug: string;
  person: string;
  organisation: string;
  contact: string;
  city: string;
  area: string;
  address: string;
  email: string;
  services: string;
  sortOrder?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface AnimalWelfarePartnerInput {
  person: string;
  organisation: string;
  contact: string;
  city: string;
  area: string;
  address: string;
  email: string;
  services: string;
}

export interface AnimalWelfarePagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface AnimalWelfarePartnersResponse {
  success: boolean;
  partners: AnimalWelfarePartner[];
  pagination: AnimalWelfarePagination;
  message?: string;
}

export interface AnimalWelfareCitySummary {
  citySlug: string;
  count: number;
}

export interface AnimalWelfareCityConfig {
  slug: string;
  label: string;
  city: string;
}
