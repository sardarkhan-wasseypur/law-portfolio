"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/track";

export function AnalyticsTracker() {
  const pathname = usePathname();
  const thankYouTrackedRef = useRef(false);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest("[data-track]") as HTMLElement | null;
      if (!target) return;

      const trackType = target.getAttribute("data-track");
      if (trackType !== "call_click" && trackType !== "whatsapp_click") return;

      let linkLocation = target.getAttribute("data-track-location");
      if (!linkLocation) {
        if (target.closest("header")) {
          linkLocation = "header";
        } else if (target.closest("footer")) {
          linkLocation = "footer";
        } else if (
          target.closest("[aria-label*='Mobile Quick Contact']") ||
          target.closest("#sticky-mobile-cta")
        ) {
          linkLocation = "sticky_bar";
        } else if (target.closest(".cta-band") || target.closest("section")) {
          linkLocation = "cta_band";
        } else {
          linkLocation = "body";
        }
      }

      trackEvent(trackType, {
        page_path: window.location.pathname,
        link_location: linkLocation,
      });
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Track form_submit event on /thank-you/ page load
  useEffect(() => {
    const isThankYou = pathname === "/thank-you/" || pathname === "/thank-you";
    if (isThankYou && !thankYouTrackedRef.current) {
      thankYouTrackedRef.current = true;
      const matterType = sessionStorage.getItem("submitted_matter_type") || "general";
      trackEvent("form_submit", {
        matter_type: matterType,
        page_path: window.location.pathname,
      });
      sessionStorage.removeItem("submitted_matter_type");
    } else if (!isThankYou) {
      thankYouTrackedRef.current = false;
    }
  }, [pathname]);

  return null;
}
