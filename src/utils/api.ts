export class ApiClient {
  // Simulate form submissions for frontend-only mode
  static async submitCauseChampionData(data: any) {
    console.log('Frontend-only mode: Cause Champion data would be submitted:', data);
    // Simulate API response
    return new Promise(resolve => {
      setTimeout(() => resolve({ success: true, message: 'Data submitted successfully' }), 1000);
    });
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

  static async submitNGOApplication(_formData: FormData) {
    console.log('Frontend-only mode: NGO application would be submitted');
    // Simulate NGO application submission
    return new Promise(resolve => {
      setTimeout(() => resolve({ success: true, message: 'NGO application submitted successfully' }), 1500);
    });
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