// API Base URL - change this to your backend URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export class ApiClient {
  // Submit Cause Champion form
  static async submitCauseChampionData(data: {
    fullName: string;
    email: string;
    phoneNumber: string;
    country: string;
    city: string;
    selectedCause: string;
  }) {
    try {
      const response = await fetch(`${API_BASE_URL}/submit/cause-champion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }

      return result;
    } catch (error) {
      console.error('Error submitting Cause Champion form:', error);
      throw error;
    }
  }

  static async sendOTP(phoneNumber: string) {
    console.log('Frontend-only mode: OTP would be sent to:', phoneNumber);
    // Simulate OTP sending
    return new Promise(resolve => {
      setTimeout(() => resolve({ success: true, message: 'OTP sent successfully' }), 1000);
    });
  }

  static async verifyOTP(phoneNumber: string, otp: string) {
    console.log('Frontend-only mode: OTP verification for:', phoneNumber, 'OTP:', otp);
    // Simulate OTP verification (accept any 6-digit OTP for demo)
    const isValid = otp.length === 6 && /^\d+$/.test(otp);
    return new Promise(resolve => {
      setTimeout(() => resolve({ 
        success: isValid, 
        message: isValid ? 'OTP verified successfully' : 'Invalid OTP' 
      }), 1000);
    });
  }

  static async submitNGOApplication(formData: {
    organizationName: string;
    email: string;
    contactPersonName: string;
    phoneNumber: string;
    country?: string;
  }) {
    try {
      const response = await fetch(`${API_BASE_URL}/submit/ngo-partner`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }

      return result;
    } catch (error) {
      console.error('Error submitting NGO Partner form:', error);
      throw error;
    }
  }

  static async getImpactStories(filters?: any) {
    console.log('Frontend-only mode: Impact stories requested with filters:', filters);
    // Return empty array or sample data
    return new Promise(resolve => {
      setTimeout(() => resolve([]), 500);
    });
  }

  static async getTestimonials() {
    console.log('Frontend-only mode: Testimonials requested');
    // Return empty array for now
    return new Promise(resolve => {
      setTimeout(() => resolve([]), 500);
    });
  }
}

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

export const validatePhoneNumber = (phone: string) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

// Note: Champion Stories API removed since ChampionStoryDetail page shows "under construction"
// and no components are actually using this functionality