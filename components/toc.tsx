"use client";

import { generateId } from "@/lib/utils";
import { useEffect, useState } from "react";

export function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<{ text: string; id: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract Markdown headers (##, ###, and ####)
    const headerRegex = /^(#{2,4})\s+(.+)$/gm;
    const extractedHeadings = [];
    let match;

    while ((match = headerRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      extractedHeadings.push({
        text,
        id: generateId(text),
        level
      });
    }

    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="space-y-4">
      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">On this page</h4>
      <nav className="space-y-3 border-l border-gray-100 ml-1">
        {headings.map((heading, i) => (
          <a
            key={i}
            href={`#${heading.id}`}
            style={{ paddingLeft: `${(heading.level - 2) * 12 + 12}px` }}
            className={`block text-sm transition-all duration-200 leading-relaxed border-l-2 -ml-[1px] ${
              activeId === heading.id
                ? "text-[#c96442] border-[#c96442] font-medium"
                : "text-[#6b7280] border-transparent hover:text-[#c96442] hover:border-gray-200"
            }`}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(heading.id);
              if (element) {
                const yOffset = -100; // Account for sticky header if any
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
                window.history.pushState(null, '', `#${heading.id}`);
              }
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
