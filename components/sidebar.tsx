"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HELP_CONTENT } from "@/data/content";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

export function Sidebar({ className, onItemClick }: { className?: string; onItemClick?: () => void }) {
  const pathname = usePathname();

  return (
    <div className={cn("bg-white py-8 px-6", className)}>
      <div className="mb-8 px-2">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#0a0a0a]">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-white">f</div>
          <span>forg.to Help</span>
        </Link>
      </div>

      <nav className="space-y-8">
        {HELP_CONTENT.map((category) => {
          const IconComponent = (Icons as any)[category.icon];
          return (
            <div key={category.slug}>
              <h3 className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
                {IconComponent && <IconComponent size={14} />}
                {category.title}
              </h3>
              <ul className="space-y-1">
                {category.articles.map((article) => {
                  const href = `/${category.slug}/${article.slug}`;
                  const isActive = pathname === href;
                  return (
                    <li key={article.slug}>
                      <Link
                        href={href}
                        onClick={onItemClick}
                        className={cn(
                          "block px-2 py-1.5 rounded-md text-sm transition-colors",
                          isActive
                            ? "bg-orange-50 text-accent font-medium"
                            : "text-[#6b7280] hover:bg-gray-50 hover:text-[#0a0a0a]"
                        )}
                      >
                        {article.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
