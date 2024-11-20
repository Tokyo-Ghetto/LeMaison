"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export function FAQPage() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      category: "Orders & Shipping",
      question: "How long does shipping take?",
      answer:
        "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available at checkout for faster delivery.",
    },
    {
      category: "Orders & Shipping",
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to select international destinations. Shipping times and costs vary by location. International shipping options will be displayed at checkout.",
    },
    {
      category: "Returns & Refunds",
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused items in their original packaging. Simply initiate a return through your account or contact our customer support team.",
    },
    {
      category: "Returns & Refunds",
      question: "How do I track my return?",
      answer:
        "Once your return is processed, you'll receive a confirmation email with tracking information. You can also track your return status through your account.",
    },
    {
      category: "Product Information",
      question: "Are your products eco-friendly?",
      answer:
        "Yes, we prioritize eco-friendly materials and sustainable manufacturing processes. Each product description includes detailed information about materials used.",
    },
    {
      category: "Product Information",
      question: "How do I care for my products?",
      answer:
        "Care instructions are provided with each product. Generally, we recommend gentle cleaning methods and storing items in a cool, dry place.",
    },
    {
      category: "Account & Orders",
      question: "How do I track my order?",
      answer:
        "You can track your order by logging into your account or using the tracking number provided in your shipping confirmation email.",
    },
    {
      category: "Account & Orders",
      question: "Can I modify my order?",
      answer:
        "Orders can be modified within 1 hour of placement. Please contact our customer support team immediately for assistance.",
    },
  ];

  const categories = Array.from(new Set(faqItems.map((item) => item.category)));

  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#543310] mb-8">
          Frequently Asked Questions
        </h1>

        <div className="max-w-3xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h2 className="text-2xl font-semibold text-[#543310] mb-4">
                {category}
              </h2>
              <div className="space-y-4">
                {faqItems
                  .filter((item) => item.category === category)
                  .map((item, index) => {
                    const itemIndex = categoryIndex * 100 + index;
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#FBD1A2] transition-colors"
                          onClick={() =>
                            setOpenItem(
                              openItem === itemIndex ? null : itemIndex
                            )
                          }
                        >
                          <span className="font-semibold text-[#543310]">
                            {item.question}
                          </span>
                          {openItem === itemIndex ? (
                            <ChevronUp className="w-5 h-5 text-[#E19E11]" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-[#E19E11]" />
                          )}
                        </button>
                        {openItem === itemIndex && (
                          <div className="px-6 py-4 bg-white border-t border-[#FBD1A2]">
                            <p className="text-[#1E424D]">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#1E424D] mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block bg-[#E19E11] text-white px-8 py-3 rounded-full hover:bg-[#AF8F6F] transition-colors"
          >
            Contact Support
          </a>
        </div>
      </main>
    </div>
  );
}
