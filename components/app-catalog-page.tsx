"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ui/image-placeholder";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  images: string[];
  price: number;
}

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#543310] mb-8">
          Product Catalog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
                  <p className="text-[#1E424D] mb-4">{product.description}</p>
                  <span className="text-lg font-bold text-[#E19E11]">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
