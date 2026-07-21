// Structured copy for the Boov marketing homepage.
// NOTE: all numeric stats and feed items below are ILLUSTRATIVE PLACEHOLDERS,
// not live data. They exist to shape the layout and must be wired to the real
// dashboard/backend before launch (or replaced with real figures).

export type FlowStep = {
  key: "tap" | "allocate" | "spend" | "verify";
  index: string;
  label: string;
  description: string;
};

export const FLOW_STEPS: FlowStep[] = [
  {
    key: "tap",
    index: "01",
    label: "Tap",
    description:
      "A donor taps to give. No app to download, no account to create — a single contactless gesture starts the flow.",
  },
  {
    key: "allocate",
    index: "02",
    label: "Allocate",
    description:
      "Funds are assigned to a specific card ID as a restricted, essential-use balance — directed the moment it's given.",
  },
  {
    key: "spend",
    index: "03",
    label: "Spend",
    description:
      "The recipient spends at approved merchants for the things that keep a day livable — groceries, pharmacy, transit.",
  },
  {
    key: "verify",
    index: "04",
    label: "Verify",
    description:
      "Every transaction is verified and reported in real time, so a gift's path is visible from tap to purchase.",
  },
];

export type SpendingCategory = {
  label: string;
  note: string;
};

export const SPENDING_ALLOWED: SpendingCategory[] = [
  { label: "Groceries", note: "Food and household essentials at approved retailers." },
  { label: "Pharmacy", note: "Prescriptions, first aid, and over-the-counter care." },
  { label: "Hygiene", note: "Soap, laundry, and the basics of staying clean." },
  { label: "Transit", note: "Buses, trains, and fare that reaches work or a shelter." },
  { label: "Essential retail", note: "Clothing and supplies that a day actually requires." },
];

export const SPENDING_BLOCKED: SpendingCategory[] = [
  { label: "Cash withdrawals", note: "Balances stay directed — they can't be converted to cash." },
  { label: "Liquor", note: "Excluded at the merchant category level, automatically." },
  { label: "Gambling", note: "Blocked everywhere the network reaches." },
  { label: "Tobacco", note: "Filtered out before a charge can complete." },
  { label: "Unapproved merchants", note: "Anything outside the essential-use network is declined." },
];

export const MANIFESTO = {
  kicker: "The thesis",
  headline: "Not charity.\nInfrastructure.",
  lead:
    "If people could give with confidence, they would give more. Boov turns a moment of generosity into directed aid — money that reaches a person and can only be spent on the essentials of getting through a day.",
  body: [
    "Traditional giving asks you to trust and look away. You hand over cash and hope. Boov replaces that hope with a rail: donations become restricted balances, spendable only where they should be, verifiable from the first tap to the final purchase.",
    "It isn't a fund or a foundation. It's payment infrastructure for directed aid — the plumbing that lets a city, a nonprofit, or a stranger on the street give with the confidence to give again.",
  ],
  pullQuote: "If people could give with confidence, they would give more.",
};

export type Stat = {
  id: string;
  label: string;
  // ILLUSTRATIVE PLACEHOLDER — not real telemetry.
  value: number;
  prefix?: string;
  suffix?: string;
  format: "currency" | "count" | "percent";
};

export const IMPACT_STATS: Stat[] = [
  { id: "donations", label: "Directed to essentials", value: 428500, prefix: "$", format: "currency" },
  { id: "cards", label: "Active cards", value: 1240, format: "count" },
  { id: "approved", label: "Approved transactions", value: 38900, format: "count" },
  { id: "confidence", label: "Donor confidence", value: 96, suffix: "%", format: "percent" },
];

export type FeedItem = {
  id: string;
  category: string;
  merchant: string;
  amountLabel: string;
  cardIdMasked: string;
  timeLabel: string;
};

// ILLUSTRATIVE PLACEHOLDER feed — sample activity, not live transactions.
export const LIVE_FEED_SAMPLE: FeedItem[] = [
  { id: "f1", category: "Groceries", merchant: "Corner Market", amountLabel: "$18.40", cardIdMasked: "BV • 0427", timeLabel: "just now" },
  { id: "f2", category: "Transit", merchant: "City Transit", amountLabel: "$2.75", cardIdMasked: "BV • 1183", timeLabel: "1 min ago" },
  { id: "f3", category: "Pharmacy", merchant: "Health Mart", amountLabel: "$9.60", cardIdMasked: "BV • 0902", timeLabel: "3 min ago" },
  { id: "f4", category: "Hygiene", merchant: "Wash & Fold", amountLabel: "$6.00", cardIdMasked: "BV • 0518", timeLabel: "5 min ago" },
  { id: "f5", category: "Groceries", merchant: "Fresh Foods", amountLabel: "$24.10", cardIdMasked: "BV • 1347", timeLabel: "7 min ago" },
  { id: "f6", category: "Essential retail", merchant: "Basics Supply", amountLabel: "$12.30", cardIdMasked: "BV • 0761", timeLabel: "9 min ago" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Story", href: "/story" },
  { label: "Alerts", href: "/alerts" },
  { label: "The Lab", href: "/play" },
] as const;

export const CTA_COPY = {
  kicker: "Get involved",
  headline: "Help build the first programmable aid network.",
  lead:
    "Boov is being built now — with donors, nonprofits, merchants, and people who believe directed giving should be the default. Join the waitlist to help shape it.",
  ctaLabel: "Join the waitlist",
  placeholder: "you@email.com",
  success: "You're on the list. We'll be in touch.",
};

export const FOOTER = {
  wordmark: "boov",
  tagline: "Not charity. Infrastructure.",
  contactLabel: "Get in touch",
  contactEmail: "hello@boov.ai",
  legal: "© " + new Date().getFullYear() + " Boov. Building the first programmable aid network.",
};

// Curated, fixed Unsplash images used as PLACEHOLDERS — swap for real Boov
// photography before launch. Chosen for dignified, human-scale, urban texture
// (no depiction of distress). Hostname is allowlisted in next.config.mjs.
export const PLACEHOLDER_IMAGES = {
  manifesto: {
    src: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=1200&q=80&auto=format&fit=crop",
    alt: "Two people sharing a warm exchange on a city street — placeholder imagery.",
  },
  cta: {
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=2000&q=80&auto=format&fit=crop",
    alt: "A city at dusk — placeholder imagery.",
  },
};
