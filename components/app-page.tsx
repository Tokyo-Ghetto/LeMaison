"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "@/components/ui/image-placeholder";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  images: string[];
  price: number;
}

export function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/products.json");
        const allProducts: Product[] = await response.json();
        // Get first 3 products
        setFeaturedProducts(allProducts.slice(0, 3));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      <main>
        <section className="relative py-24 md:py-32 min-h-[600px] w-full bg-[#543310] flex items-center">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/hero1.jpg"
              alt="Hero background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F8F4E1] mb-6">
              Elevate Your Space
            </h1>
            <p className="text-xl text-[#F8F4E1] mb-8 max-w-2xl">
              Discover unique home decor that brings warmth and style to every
              corner of your home.
            </p>
            <Link
              href="/catalog"
              className="inline-block bg-[#E19E11] text-white px-8 py-3 rounded-full hover:bg-[#AF8F6F] transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#FBD1A2]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#543310] mb-8">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative aspect-square">
                      <ImageWithFallback
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-[#543310] mb-2">
                        {product.name}
                      </h3>
                      <p className="text-[#1E424D] mb-4">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-[#E19E11]">
                          ${product.price.toFixed(2)}
                        </span>
                        <button className="bg-[#AF8F6F] text-white px-4 py-2 rounded hover:bg-[#543310] transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
