import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "optional",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "optional",
});

const description = "Hadi Abdul, Harvard University student based in Durham, North Carolina.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mentorship-site.vercel.app"),
  title: "Hadi Abdul",
  description,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Hadi Abdul",
    description,
    type: "website",
    url: "https://mentorship-site.vercel.app",
    images: [
      {
        url: "/og-card.svg",
        width: 1200,
        height: 630,
        alt: "Hadi Abdul.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadi Abdul",
    description,
    images: ["/og-card.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetBrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
