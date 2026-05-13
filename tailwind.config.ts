import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        accent: "var(--accent)",
        "accent-deep": "var(--accent-deep)",
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        rule: "var(--rule)",
        muted: "var(--muted)",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        lift: "0 18px 48px rgba(11, 27, 43, 0.10)",
        "lift-dark": "0 18px 48px rgba(0, 0, 0, 0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
