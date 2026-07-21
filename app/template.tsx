"use client";

import { motion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Enter choreography for every route. Remounts per navigation (template
 * semantics), so each incoming page rises in; the outgoing page's exit is the
 * view-transition root crossfade in globals.css.
 *
 * The tree shape is identical on server and client — branching on
 * useReducedMotion here would hydrate a different tree for reduced-motion
 * users (the hook is null during SSR) and throw. Instead MotionConfig
 * downgrades transform animation for them, and it also covers every
 * framer-driven animation on the page below (AnimatedList included).
 *
 * A div, not <main> — pages bring their own landmark elements.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
