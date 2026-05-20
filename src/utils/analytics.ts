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

/**
 * Successful lead/form capture. Sends:
 * - `form_submit_success` — legacy custom event with `form_type`
 * - `generate_lead` — GA4 recommended lead event (mark this as a conversion in GA4 → Admin → Events)
 */
export function trackFormSubmission(formType: string, params?: Record<string, unknown>): void {
  const common = {
    form_type: formType,
    lead_source: 'website',
    ...params,
  };
  trackEvent('form_submit_success', common);
  trackEvent('generate_lead', {
    currency: 'INR',
    value: 1,
    ...common,
  });
}

export function trackDonationClick(causeTitle: string, causeId: string): void {
  trackEvent('donate_cta_click', {
    cause_title: causeTitle,
    cause_id: causeId,
    placement: 'live_causes_card',
  });
}
