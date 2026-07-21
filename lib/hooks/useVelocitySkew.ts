"use client";

import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "framer-motion";
import type { RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Skews an element based on scroll velocity — a signature "creative site" touch
 * where content leans into fast scrolling and settles when it stops.
 * Disabled under reduced motion.
 */
export function useVelocitySkew(ref: RefObject<HTMLElement>, max = 6) {
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion || !ref.current) return;
      const quickSkew = gsap.quickTo(ref.current, "skewY", { duration: 0.5, ease: "power3.out" });

      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          const v = gsap.utils.clamp(-max, max, self.getVelocity() / -260);
          quickSkew(v);
        },
      });
      return () => st.kill();
    },
    { dependencies: [prefersReducedMotion, max] },
  );
}
