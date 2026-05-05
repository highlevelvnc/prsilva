"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    __prsilvaGsapRegistered?: boolean;
  }
}

if (typeof window !== "undefined" && !window.__prsilvaGsapRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power3.out", duration: 0.9 });
  window.__prsilvaGsapRegistered = true;
}

export { gsap, ScrollTrigger };
