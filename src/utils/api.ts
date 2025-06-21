const API_BASE_URL = 'https://app.smartbro.in/api';

export class ApiClient {
  private static async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  static async submitCauseChampionData(data: any) {
    return this.request('/cause-champion/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  static async sendOTP(phoneNumber: string) {
    return this.request('/auth/send-otp', {
      method: 'POST',
      body: JSON.stringify({ phoneNumber }),
    });
  }

  static async verifyOTP(phoneNumber: string, otp: string) {
    return this.request('/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ phoneNumber, otp }),
    });
  }

  static async submitNGOApplication(formData: FormData) {
    return fetch(`${API_BASE_URL}/ngo/apply`, {
      method: 'POST',
      body: formData,
    });
  }

  static async getImpactStories(filters?: any) {
    const queryParams = filters ? `?${new URLSearchParams(filters)}` : '';
    return this.request(`/impact-stories${queryParams}`);
  }

  static async getTestimonials() {
    return this.request('/testimonials');
  }
}

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

export const validatePhoneNumber = (phone: string) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};