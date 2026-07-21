"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Exponential ease-out — the only easing family used across the site.
// No bounce/elastic (reads as unrefined per the design guidance).
export const EASE_OUT = "power3.out";

export { gsap, ScrollTrigger };
