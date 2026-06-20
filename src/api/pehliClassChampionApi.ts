const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.thegivingcircle.in/api';

export interface PehliClassChampionInput {
  name: string;
  email: string;
  mobile: string;
  city: string;
  schoolName?: string;
  socialHandle?: string;
  whyItMatters?: string;
}

export async function submitPehliClassChampionForm(
  data: PehliClassChampionInput
): Promise<{ success: boolean; message: string }> {
  const response = await fetch(`${API_BASE_URL}/submit/pehli-class-champion`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Failed to submit form');
  }

  return result;
}
