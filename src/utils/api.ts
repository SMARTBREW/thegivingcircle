import { ChampionStory } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Development mode flag - set to false when backend is available
const USE_SAMPLE_DATA_ONLY = import.meta.env.DEV && !import.meta.env.VITE_API_URL;

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
    return this.request(`/live-causes${queryParams}`);
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

// Champion Stories API
export const championStoriesAPI = {
  // Get all champion stories
  getAllStories: async (): Promise<ChampionStory[]> => {
    if (USE_SAMPLE_DATA_ONLY) {
      console.log('Development mode: Using sample data only');
      const { sampleChampionStories } = await import('./sampleChampionData');
      return sampleChampionStories;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/champion-stories`);
      if (!response.ok) {
        throw new Error('Failed to fetch champion stories');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching champion stories:', error);
      throw error;
    }
  },

  // Get a single champion story by ID
  getStoryById: async (id: string): Promise<ChampionStory> => {
    if (USE_SAMPLE_DATA_ONLY) {
      console.log('Development mode: Using sample data for ID:', id);
      const { sampleChampionStories } = await import('./sampleChampionData');
      const story = sampleChampionStories.find(story => story.id === id);
      if (!story) {
        throw new Error(`Sample story not found for ID: ${id}. Available IDs: ${sampleChampionStories.map(s => s.id).join(', ')}`);
      }
      return story;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/champion-stories/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch champion story with id: ${id}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching champion story ${id}:`, error);
      throw error;
    }
  },

  // Get stories by category
  getStoriesByCategory: async (category: string): Promise<ChampionStory[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/champion-stories?category=${encodeURIComponent(category)}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch champion stories for category: ${category}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching champion stories for category ${category}:`, error);
      throw error;
    }
  },

  // Get featured stories
  getFeaturedStories: async (): Promise<ChampionStory[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/champion-stories/featured`);
      if (!response.ok) {
        throw new Error('Failed to fetch featured champion stories');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching featured champion stories:', error);
      throw error;
    }
  },

  // Get stories by location
  getStoriesByLocation: async (location: string): Promise<ChampionStory[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/champion-stories?location=${encodeURIComponent(location)}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch champion stories for location: ${location}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching champion stories for location ${location}:`, error);
      throw error;
    }
  },

  // Follow/Unfollow a champion
  followChampion: async (championId: string): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/champions/${championId}/follow`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header when implementing auth
          // 'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to follow champion');
      }
    } catch (error) {
      console.error('Error following champion:', error);
      throw error;
    }
  },

  unfollowChampion: async (championId: string): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/champions/${championId}/follow`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header when implementing auth
          // 'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to unfollow champion');
      }
    } catch (error) {
      console.error('Error unfollowing champion:', error);
      throw error;
    }
  }
};