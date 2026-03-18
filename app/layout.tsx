import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { SearchHeader } from "@/components/search-header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "forg.to Help Center",
  description: "Complete content for help.forg.to",
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
