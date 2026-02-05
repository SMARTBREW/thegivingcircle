/**
 * Google Analytics 4 (GA4) Event Tracking Utility
 * 
 * This utility provides functions to track conversion events and user interactions
 * throughout The Giving Circle platform.
 * 
 * Conversion Events Tracked:
 * - donation_click: When user clicks a donation button
 * - form_submission: When user submits a form (Cause Champion, NGO Partner, etc.)
 * - cause_view: When user views a cause detail page
 * - ngo_view: When user views an NGO detail page
 * - page_view: Custom page view tracking
 * - search: When user searches for causes/NGOs
 * - external_link_click: When user clicks external links
 */

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Initialize GA4 if not already initialized
 */
export const initGA4 = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(args);
    };
  }
};

/**
 * Track a custom event in GA4
 * @param eventName - Name of the event
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...eventParams,
      event_category: eventParams?.event_category || 'engagement',
      event_label: eventParams?.event_label || eventName,
    });
  }
};

/**
 * Track donation button click
 * @param causeName - Name of the cause
 * @param causeId - ID of the cause
 * @param amount - Donation amount (if specified)
 */
export const trackDonationClick = (causeName: string, causeId?: string, amount?: number) => {
  trackEvent('donation_click', {
    event_category: 'conversion',
    event_label: 'Donation Button Click',
    cause_name: causeName,
    cause_id: causeId,
    donation_amount: amount,
    value: amount || 0,
    currency: 'INR',
  });
};

/**
 * Track form submission
 * @param formType - Type of form (e.g., 'cause_champion', 'ngo_partner', 'contact')
 * @param formData - Form data (optional, sanitized)
 */
export const trackFormSubmission = (formType: string, formData?: Record<string, any>) => {
  trackEvent('form_submission', {
    event_category: 'conversion',
    event_label: 'Form Submission',
    form_type: formType,
    // Only include non-sensitive data
    ...(formData && {
      has_data: true,
      fields_count: Object.keys(formData).length,
    }),
  });
};

/**
 * Track cause detail page view
 * @param causeName - Name of the cause
 * @param causeId - ID of the cause
 */
export const trackCauseView = (causeName: string, causeId?: string) => {
  trackEvent('cause_view', {
    event_category: 'engagement',
    event_label: 'Cause Detail View',
    cause_name: causeName,
    cause_id: causeId,
  });
};

/**
 * Track NGO detail page view
 * @param ngoName - Name of the NGO
 * @param ngoId - ID of the NGO
 */
export const trackNGOView = (ngoName: string, ngoId?: string) => {
  trackEvent('ngo_view', {
    event_category: 'engagement',
    event_label: 'NGO Detail View',
    ngo_name: ngoName,
    ngo_id: ngoId,
  });
};

/**
 * Track search query
 * @param searchTerm - Search term used
 * @param resultCount - Number of results returned
 */
export const trackSearch = (searchTerm: string, resultCount?: number) => {
  trackEvent('search', {
    event_category: 'engagement',
    event_label: 'Search Query',
    search_term: searchTerm,
    result_count: resultCount,
  });
};

/**
 * Track external link click
 * @param linkUrl - URL of the external link
 * @param linkText - Text of the link
 */
export const trackExternalLink = (linkUrl: string, linkText?: string) => {
  trackEvent('external_link_click', {
    event_category: 'engagement',
    event_label: 'External Link Click',
    link_url: linkUrl,
    link_text: linkText,
  });
};

/**
 * Track page view with custom parameters
 * @param pagePath - Path of the page
 * @param pageTitle - Title of the page
 */
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-ZNMJNDF71S', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
};

/**
 * Track conversion (mark as conversion in GA4)
 * @param conversionName - Name of the conversion
 * @param value - Value of the conversion
 */
export const trackConversion = (conversionName: string, value?: number) => {
  trackEvent(conversionName, {
    event_category: 'conversion',
    event_label: conversionName,
    value: value || 0,
    currency: 'INR',
  });
};

// Initialize GA4 on module load
if (typeof window !== 'undefined') {
  initGA4();
}
