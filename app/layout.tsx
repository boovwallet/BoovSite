import type { Metadata } from "next";
import { Poppins, Sniglet, Space_Grotesk } from "next/font/google";
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sniglet.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
