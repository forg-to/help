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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans text-foreground bg-background antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar className="hidden lg:block w-72 border-r border-gray-100 h-screen sticky top-0 overflow-y-auto" />
          <div className="flex-1 flex flex-col min-w-0">
            <SearchHeader />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
