"use client";

import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "framer-motion";
import type { RefObject } from "react";
import { gsap } from "@/lib/gsap";

type Options = {
  /** CSS selector for the elements to reveal, scoped to the container. */
  selector: string;
  /** Seconds between staggered children. 0 = all at once. */
  stagger?: number;
  /** Vertical offset the elements rise from, in px. */
  y?: number;
  duration?: number;
  /** ScrollTrigger start position. */
  start?: string;
};

/**
 * Reveal-once-on-enter: fades and lifts elements into place a single time when
 * they scroll into view. Under prefers-reduced-motion the end state is set
 * immediately with no animation. Content is visible by default (CSS), so this
 * only enhances an already-rendered layout — it never gates visibility.
 */
export function useScrollReveal(
  container: RefObject<HTMLElement>,
  { selector, stagger = 0.08, y = 20, duration = 0.7, start = "top 80%" }: Options,
) {
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>(selector);
      if (targets.length === 0) return;

      if (prefersReducedMotion) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: container.current,
            start,
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: container, dependencies: [prefersReducedMotion] },
  );
}
