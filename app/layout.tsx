import type { Metadata } from "next";
import { Poppins, Sniglet, Space_Grotesk } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { AppShell } from "@/components/AppShell";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

const sniglet = Sniglet({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-sniglet",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const description = "The first-ever technology built for the unhoused.";

export const metadata: Metadata = {
  metadataBase: new URL("https://boov.ai"),
  title: "Boov",
  description,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Boov",
    description,
    type: "website",
    url: "https://boov.ai",
    images: [
      {
        url: "/og-card.svg",
        width: 1200,
        height: 630,
        alt: "Boov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boov",
    description,
    images: ["/og-card.svg"],
  },
};

// Dark is the product default. An explicitly saved light preference is applied
// before first paint so returning visitors do not see a theme flash.
const themeScript = `try{document.documentElement.classList.toggle("dark",localStorage.getItem("theme")!=="light")}catch(e){document.documentElement.classList.add("dark")}`;

// Kill the browser's scroll restoration before it can fire. It runs before
// hydration, so switching it to "manual" from a useEffect (in ScrollReset) was
// always too late: a reload part-way down would restore that position, Lenis
// would initialise there, and the page would open on the card scene instead of
// the morph. Setting it here — and starting at the top unless an explicit hash
// asks otherwise — makes the intro deterministic.
const scrollScript = `try{history.scrollRestoration="manual";if(!location.hash)window.scrollTo(0,0);}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${sniglet.variable} ${poppins.variable} ${spaceGrotesk.variable} dark`}
      >
        <head>
          <script dangerouslySetInnerHTML={{ __html: scrollScript }} />
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        </head>
        <body>
          {/* Site chrome lives here so nav, cursor, WebGL background, Lenis and
              the preloader persist across route changes instead of remounting. */}
          <SiteNav />
          <div id="top" />
          <AppShell>
            {children}
            <SiteFooter />
          </AppShell>
        </body>
      </html>
    </ViewTransitions>
  );
}
