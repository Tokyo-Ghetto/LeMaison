"use client";

import { Mail, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#543310] mb-8">
          Customer Support
        </h1>

        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8 mb-4" />,
                title: "Email Support",
                description: "Get help via email within 24 hours",
                action: "Email Us",
                link: "mailto:support@lemaison.com",
              },
              {
                icon: <Phone className="w-8 h-8 mb-4" />,
                title: "Phone Support",
                description: "Available Mon-Fri, 9AM-5PM EST",
                action: "Call Us",
                link: "tel:+1234567890",
              },
              {
                icon: <MessageSquare className="w-8 h-8 mb-4" />,
                title: "Live Chat",
                description: "Chat with our support team",
                action: "Start Chat",
                link: "#",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-[#E19E11] flex justify-center">
                  {item.icon}
                </div>
                <h2 className="text-xl font-semibold text-[#543310] mb-2">
                  {item.title}
                </h2>
                <p className="text-[#1E424D] mb-4">{item.description}</p>
                <Link
                  href={item.link}
                  className="inline-block bg-[#AF8F6F] text-white px-6 py-2 rounded-full hover:bg-[#543310] transition-colors"
                >
                  {item.action}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#FBD1A2] rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#543310] mb-4">
            Got Questions?
          </h2>
          <p className="text-[#1E424D] mb-6">
            Visit our FAQ page for answers to common questions.
          </p>
          <Link
            href="/faq"
            className="inline-block bg-[#E19E11] text-white px-8 py-3 rounded-full hover:bg-[#AF8F6F] transition-colors"
          >
            Contact Us
          </Link>
        </section>
      </main>
    </div>
  );
}
