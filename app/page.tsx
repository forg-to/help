"use client";

import Link from "next/link";
import { HELP_CONTENT, FAQS } from "@/data/content";
import * as Icons from "lucide-react";
import { Accordion } from "@/components/accordion";

export default function HomePage() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help?</h1>
        <p className="text-lg text-gray-500">Everything you need to know about building in public on forg.to</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {HELP_CONTENT.map((category) => {
          const IconComponent = (Icons as any)[category.icon];
          return (
            <Link
              key={category.slug}
              href={`/${category.slug}/${category.articles[0].slug}`}
              className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-accent/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#0a0a0a] group-hover:bg-orange-50 group-hover:text-accent transition-colors mb-4">
                {IconComponent && <IconComponent size={24} />}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{category.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {category.articles.length} articles on {category.title.toLowerCase()}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="max-w-3xl mx-auto border-t border-gray-100 pt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <Accordion key={index} title={faq.question}>
              {faq.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
