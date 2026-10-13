/**
 * Google Analytics 4, Google Tag Manager, & Search Console Integration Manager
 * Follows official Google tagging and privacy standards.
 * Activates dynamically only when valid environment variables are supplied.
 */

export const initAnalytics = () => {
  const gaId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
  const gtmId = import.meta.env.VITE_GTM_ID;
  const gscToken = import.meta.env.VITE_GSC_VERIFICATION_TOKEN;

  // 1. Google Search Console Verification
  if (gscToken && !document.querySelector('meta[name="google-site-verification"]')) {
    const meta = document.createElement('meta');
    meta.name = 'google-site-verification';
    meta.content = gscToken;
    document.head.appendChild(meta);
  }

  // 2. Google Tag Manager (GTM)
  if (gtmId && !window.gtmInitialized) {
    window.gtmInitialized = true;
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l !== 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', gtmId);
  }

  // 3. Google Analytics 4 (GA4)
  if (gaId && gaId.startsWith('G-') && !window.gaInitialized) {
    window.gaInitialized = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId, {
      send_page_view: true,
      anonymize_ip: true,
    });
  }
};

/**
 * Log pageview events for Single Page Applications
 */
export const trackPageView = (url, title) => {
  if (typeof window.gtag === 'function') {
    const gaId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
    if (gaId) {
      window.gtag('event', 'page_view', {
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: url,
      });
    }
  }
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'virtual_page_view',
      page_url: url,
      page_title: title || document.title,
    });
  }
};

/**
 * Custom Event Tracking (e.g. CTA Clicks, Form Submissions, Consultation Bookings)
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};
