import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { SearchHeader } from "@/components/search-header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const BASE_URL = "https://help.forg.to";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "forg Help Center",
    template: "%s | forg Help",
  },
  description:
    "Tutorials, guides, and support for forg.to — the community for indie hackers and builders who build in public.",
  keywords: ["forg help", "forg tutorials", "build in public", "indie hackers", "forg support", "forg.to"],
  authors: [{ name: "Forg", url: "https://forg.to" }],
  creator: "Forg",
  publisher: "Forg",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "forg Help Center",
    title: "forg Help Center",
    description:
      "Tutorials, guides, and support for forg.to — the community for indie hackers and builders who build in public.",
    images: [
      {
        url: "/forg-og-banner.png",
        width: 1200,
        height: 630,
        alt: "forg Help Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@forg_to",
    creator: "@whykislay",
    title: "forg Help Center",
    description:
      "Tutorials, guides, and support for forg.to — the community for indie hackers and builders who build in public.",
    images: ["/forg-og-banner.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans text-foreground bg-background antialiased`}>
        <div className="mx-auto flex min-h-screen w-full max-w-[1440px]">
          <Sidebar className="hidden lg:block h-screen w-72 shrink-0 overflow-y-auto border-r border-gray-100 sticky top-0" />
          <div className="flex min-w-0 flex-1 flex-col">
            <SearchHeader />
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
