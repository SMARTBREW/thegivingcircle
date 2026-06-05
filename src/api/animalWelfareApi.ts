import type {
  AnimalWelfareCitySummary,
  AnimalWelfarePartner,
  AnimalWelfarePartnerInput,
  AnimalWelfarePartnersResponse,
  AnimalWelfarePagination,
} from '../types/animalWelfare';

/** In dev, Vite proxies /api → localhost:3001 when VITE_API_URL is unset. */
const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? '/api' : 'https://api.thegivingcircle.in/api');

interface ApiErrorBody {
  success?: boolean;
  message?: string;
}

async function parseJson<T>(response: Response): Promise<T> {
  const body = (await response.json()) as T & ApiErrorBody;
  if (!response.ok) {
    throw new Error(body.message || 'Request failed');
  }
  return body;
}

export interface ListPartnersParams {
  page?: number;
  limit?: number;
  q?: string;
}

export async function fetchAnimalWelfareCities(): Promise<AnimalWelfareCitySummary[]> {
  const response = await fetch(`${API_BASE_URL}/animal-welfare/cities`, {
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await parseJson<{ success: boolean; cities: AnimalWelfareCitySummary[] }>(response);
  return result.cities;
}

export async function fetchAnimalWelfarePartners(
  citySlug: string,
  params: ListPartnersParams = {}
): Promise<{ partners: AnimalWelfarePartner[]; pagination: AnimalWelfarePagination }> {
  const search = new URLSearchParams();
  if (params.page) search.set('page', String(params.page));
  if (params.limit) search.set('limit', String(params.limit));
  if (params.q) search.set('q', params.q);

  const qs = search.toString();
  const url = `${API_BASE_URL}/animal-welfare/partners/${encodeURIComponent(citySlug)}${qs ? `?${qs}` : ''}`;

  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await parseJson<AnimalWelfarePartnersResponse>(response);
  return {
    partners: Array.isArray(result.partners) ? result.partners : [],
    pagination: result.pagination ?? {
      page: params.page ?? 1,
      limit: params.limit ?? 10,
      total: 0,
      totalPages: 1,
    },
  };
}

export interface SubmitAnimalWelfarePartnerPayload extends AnimalWelfarePartnerInput {
  citySlug: string;
  regionLabel: string;
}

export async function submitAnimalWelfarePartnerSuggestion(
  payload: SubmitAnimalWelfarePartnerPayload
): Promise<{ success: boolean; message: string }> {
  const response = await fetch(`${API_BASE_URL}/submit/animal-welfare-partner`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return parseJson<{ success: boolean; message: string }>(response);
}

export async function createAnimalWelfarePartner(
  citySlug: string,
  input: AnimalWelfarePartnerInput
): Promise<AnimalWelfarePartner> {
  const response = await fetch(`${API_BASE_URL}/animal-welfare/partners`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ citySlug, ...input }),
  });
  const result = await parseJson<{ success: boolean; partner: AnimalWelfarePartner }>(response);
  return result.partner;
}

export async function updateAnimalWelfarePartner(
  id: string,
  input: AnimalWelfarePartnerInput
): Promise<AnimalWelfarePartner> {
  const response = await fetch(`${API_BASE_URL}/animal-welfare/partners/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  const result = await parseJson<{ success: boolean; partner: AnimalWelfarePartner }>(response);
  return result.partner;
}

export async function deleteAnimalWelfarePartner(id: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/animal-welfare/partners/${encodeURIComponent(id)}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  await parseJson<{ success: boolean }>(response);
}
