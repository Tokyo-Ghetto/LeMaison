"use client";

import Image from "next/image";
import Link from "next/link";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#543310] mb-8">
            About LeMaison
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-[#1E424D] mb-6">
                Welcome to LeMaison, where we believe that every home tells a
                unique story. Since 2010, we&apos;ve been curating exceptional
                home décor pieces that transform houses into warm, inviting
                spaces filled with character and style.
              </p>
              <p className="text-lg text-[#1E424D] mb-6">
                Our passion for quality craftsmanship and timeless design drives
                us to source products from skilled artisans and responsible
                manufacturers around the world.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/support"
                  className="inline-block bg-[#E19E11] text-white px-6 py-3 rounded-full hover:bg-[#AF8F6F] transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/products"
                  className="inline-block bg-[#AF8F6F] text-white px-6 py-3 rounded-full hover:bg-[#543310] transition-colors"
                >
                  View Collection
                </Link>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/about-hero.jpg"
                alt="Our showroom"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#543310] mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description:
                  "We never compromise on the quality of our products, ensuring each piece meets our high standards.",
              },
              {
                title: "Sustainable Practices",
                description:
                  "We're committed to environmental responsibility in our product sourcing and business operations.",
              },
              {
                title: "Customer Satisfaction",
                description:
                  "Your happiness is our priority. We strive to provide exceptional service at every step.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#543310] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#1E424D]">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#FBD1A2] rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#543310] mb-6">
            Our Story in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "13+", label: "Years of Experience" },
              { number: "10k+", label: "Happy Customers" },
              { number: "1000+", label: "Products" },
              { number: "50+", label: "Artisan Partners" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#E19E11] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#543310]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
