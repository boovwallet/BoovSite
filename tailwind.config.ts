import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
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
        display: ["var(--font-sniglet)", "system-ui", "sans-serif"],
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        label: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 18px 48px rgba(11, 27, 43, 0.10)",
        "lift-dark": "0 18px 48px rgba(0, 0, 0, 0.24)",
      },
      // Vendored MagicUI buttons declare these in a v4 @theme block, which
      // Tailwind 3 has no concept of — registering them here keeps the
      // components' animate-* classes working unchanged.
      keyframes: {
        rainbow: {
          "0%": { backgroundPosition: "0%" },
          "100%": { backgroundPosition: "200%" },
        },
        "shimmer-slide": {
          to: { transform: "translate(calc(100cqw - 100%), 0)" },
        },
        "spin-around": {
          "0%": { transform: "translateZ(0) rotate(0deg)" },
          "15%, 35%": { transform: "translateZ(0) rotate(90deg)" },
          "65%, 85%": { transform: "translateZ(0) rotate(270deg)" },
          "100%": { transform: "translateZ(0) rotate(360deg)" },
        },
        "acpb-fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        rainbow: "rainbow var(--speed, 2s) infinite linear",
        "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        "acpb-fade-in": "acpb-fade-in var(--transition-length, 1s) linear var(--delay, 0s) both",
      },
    },
  },
  plugins: [],
};

export default config;
