import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent, trackPageView } from '../utils/analytics';

/**
 * Fires GA4 page_view on client-side navigations and a small set of
 * named events suitable for marking as conversions in GA4.
 */
export default function AnalyticsListener() {
  const location = useLocation();

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}${location.hash}`;
    trackPageView(pagePath);

    const p = location.pathname;
    if (p === '/onboarding') {
      trackEvent('champion_onboarding_view', { page_path: pagePath });
    } else if (p === '/ngo-list') {
      trackEvent('ngo_list_view', { page_path: pagePath });
    } else if (p === '/live-causes') {
      trackEvent('live_causes_view', { page_path: pagePath });
    } else if (p.endsWith('-cause-details')) {
      trackEvent('cause_detail_view', { cause_page: p.replace(/^\//, '') });
    }
  }, [location]);

  return null;
}
