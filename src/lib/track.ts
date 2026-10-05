declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Tracks custom analytics events by pushing them to window.dataLayer
 * and invoking window.gtag if present.
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  // Always initialize dataLayer array if it doesn't exist
  window.dataLayer = window.dataLayer || [];

  const eventPayload = {
    event: eventName,
    ...params,
  };

  // Push event object directly into dataLayer
  window.dataLayer.push(eventPayload);

  // Invoke gtag if initialized by Google Analytics script
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
