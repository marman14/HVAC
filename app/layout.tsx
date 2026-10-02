import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";

import "./globals.css";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | HVAC Install, Service & Repair in ${siteConfig.address.city}, ${siteConfig.address.state}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
    "HVAC Hialeah FL",
    "AC repair Hialeah",
    "heating and cooling Miami FL",
    "AC installation Hialeah",
    "South Florida HVAC contractor",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <StickyMobileBar />
      </body>
    </html>
  );
}
