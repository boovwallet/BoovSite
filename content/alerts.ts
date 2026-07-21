// Structured copy for the /alerts page — the notification ledger a member's
// device shows on the street. ILLUSTRATIVE PLACEHOLDERS in the same spirit as
// content/homepage.ts: they shape the layout and must be wired to live data
// (or replaced with real events) before launch.

export type AlertItem = {
  key: string;
  /** Single typographic glyph rendered inside the bordered chip — not an emoji. */
  glyph: string;
  title: string;
  description: string;
  /** Monospace ledger string — "$12.00", "+100 pts", or "—" when non-monetary. */
  amount: string;
  /** Relative timestamp, e.g. "2m". */
  time: string;
  verified: boolean;
};

export const ALERTS: AlertItem[] = [
  {
    key: "grace-essentials",
    glyph: "$",
    title: "Grace donated $12",
    description: "Routed to an Essentials Card.",
    amount: "$12.00",
    time: "2m",
    verified: true,
  },
  {
    key: "benefits-nike",
    glyph: "◆",
    title: "Boov Benefits",
    description: "100 points — 30% off your next purchase at Nike.",
    amount: "+100 pts",
    time: "5m",
    verified: false,
  },
  {
    key: "john-safeway",
    glyph: "→",
    title: "Your $5 reached John",
    description: "Groceries at Safeway. Receipt on file.",
    amount: "$5.00",
    time: "9m",
    verified: true,
  },
  {
    key: "meal-downtown",
    glyph: "▣",
    title: "Meal unlocked",
    description: "Downtown Kitchen accepted your card.",
    amount: "—",
    time: "14m",
    verified: true,
  },
  {
    key: "shelter-pine-street",
    glyph: "⌂",
    title: "Shelter bed confirmed",
    description: "Tonight — Pine Street Inn.",
    amount: "—",
    time: "21m",
    verified: false,
  },
  {
    key: "transit-topup",
    glyph: "↥",
    title: "Transit topped up",
    description: "10 rides added to your pass.",
    amount: "+10 rides",
    time: "28m",
    verified: false,
  },
  {
    key: "laundry-spincycle",
    glyph: "○",
    title: "Laundry credit redeemed",
    description: "SpinCycle — $6 covered.",
    amount: "$6.00",
    time: "36m",
    verified: true,
  },
  {
    key: "day-shift",
    glyph: "⚑",
    title: "Day-shift near you",
    description: "Pays same-day. Two blocks out.",
    amount: "—",
    time: "44m",
    verified: false,
  },
  {
    key: "pharmacy-walgreens",
    glyph: "✚",
    title: "Pharmacy copay covered",
    description: "$8 at Walgreens.",
    amount: "$8.00",
    time: "52m",
    verified: true,
  },
  {
    key: "voucher-neighbor",
    glyph: "❋",
    title: "Warm-meal voucher",
    description: "From a neighbor. No expiry.",
    amount: "—",
    time: "1h",
    verified: false,
  },
  {
    key: "milestone-30-days",
    glyph: "★",
    title: "Milestone reached",
    description: "30 days of stable meals.",
    amount: "—",
    time: "2h",
    verified: false,
  },
  {
    key: "id-replacement",
    glyph: "#",
    title: "ID replacement covered",
    description: "Community fund paid the DMV fee.",
    amount: "—",
    time: "3h",
    verified: true,
  },
];
