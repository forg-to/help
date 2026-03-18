"use client";

import React from "react";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sidebar } from "./sidebar";
import { HELP_CONTENT } from "@/data/content";
import Link from "next/link";

export function SearchHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = searchQuery.length > 2
    ? HELP_CONTENT.flatMap(c => c.articles.map(a => ({ ...a, categorySlug: c.slug })))
        .filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.content.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/80 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1080px] items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 -ml-2 text-gray-500 hover:text-gray-900"
          >
            <Menu size={20} />
          </button>

          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-gray-50 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-accent/20 transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery.length > 2 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-lg shadow-xl max-h-96 overflow-y-auto">
                {filteredArticles.length > 0 ? (
                  <div className="py-2">
                    {filteredArticles.map(article => (
                      <Link
                        key={article.slug}
                        href={`/${article.categorySlug}/${article.slug}`}
                        className="block px-4 py-2 hover:bg-gray-50"
                        onClick={() => setSearchQuery("")}
                      >
                        <div className="text-sm font-medium text-[#0a0a0a]">{article.title}</div>
                        <div className="text-xs text-gray-400 truncate">{article.categorySlug}</div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-gray-500">No articles found</div>
                )}
              </div>
            )}
          </div>
        </div>

        <Link href="https://forg.to" className="text-sm font-medium text-accent hover:opacity-80 hidden sm:block">
          Go to forg.to
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-72 bg-white shadow-xl flex flex-col">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
               <span className="font-bold">Menu</span>
               <button onClick={() => setIsMobileMenuOpen(false)}><X size={20} /></button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar onItemClick={() => setIsMobileMenuOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
