/**
 * GA4 helpers. gtag is loaded from index.html with send_page_view: false;
 * SPA route changes dispatch page_view via AnalyticsListener.
 */

export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle ?? (typeof document !== 'undefined' ? document.title : undefined),
    page_location: typeof window !== 'undefined' ? window.location.href : undefined,
  });
}

export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

export function trackFormSubmission(formType: string, params?: Record<string, unknown>): void {
  trackEvent('form_submit_success', { form_type: formType, ...params });
}

export function trackConversion(conversionName: string, value: number): void {
  trackEvent(conversionName, { value, currency: 'INR' });
}

export function trackDonationClick(causeTitle: string, causeId: string): void {
  trackEvent('donate_cta_click', {
    cause_title: causeTitle,
    cause_id: causeId,
    placement: 'live_causes_card',
  });
}
