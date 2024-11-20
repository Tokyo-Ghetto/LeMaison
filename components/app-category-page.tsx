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

interface CategoryPageProps {
  category: string;
}

export function CategoryPage({ category }: CategoryPageProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/products.json");
        const allProducts: Product[] = await response.json();
        const filteredProducts = allProducts.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [category]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const categoryDisplay = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#543310] mb-8">
          {categoryDisplay}
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
      </main>
    </div>
  );
}
