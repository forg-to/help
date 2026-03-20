"use client";

import { FAQS } from "@/data/content";
import { Accordion } from "@/components/accordion";

export function FaqSection() {
  return (
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
  );
}
