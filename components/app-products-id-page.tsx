"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBag, Heart, ChevronLeft } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/image-placeholder";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  images: string[];
  price: number;
}

interface ProductPageProps {
  productId: string;
}

function getRandomProducts(
  products: Product[],
  currentProductId: string,
  count: number
): Product[] {
  // Filter out the current product
  const availableProducts = products.filter((p) => p.id !== currentProductId);
  // Shuffle array
  const shuffled = [...availableProducts].sort(() => 0.5 - Math.random());
  // Get first 'count' items
  return shuffled.slice(0, count);
}

export function ProductPage({ productId }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/products.json");
        const data: Product[] = await response.json();
        const foundProduct = data.find((p) => p.id === productId);
        setProduct(foundProduct || null);

        // Get 4 random products for the related products section
        const randomProducts = getRandomProducts(data, productId, 4);
        setRelatedProducts(randomProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    if (productId) {
      fetchProducts();
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      <main className="container mx-auto px-4 py-8">
        <Link
          href="/catalog"
          className="inline-flex items-center text-[#1E424D] hover:text-[#E19E11] mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Catalog
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <div className="relative aspect-square">
              <ImageWithFallback
                src={product.images[0]}
                alt={product.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, i) => (
                <div key={i} className="relative aspect-square">
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} ${i + 1}`}
                    fill
                    className="rounded-lg cursor-pointer object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#543310] mb-4">
              {product.name}
            </h1>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-[#E19E11] mr-4">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-[#1E424D]">
                4.5 ★★★★☆ (24 reviews)
              </span>
            </div>
            <p className="text-[#1E424D] mb-6">{product.description}</p>
            <Link href="/cart">
              <div className="flex space-x-4 mb-8">
                <button className="flex-grow bg-[#E19E11] text-white px-6 py-3 rounded-full hover:bg-[#AF8F6F] transition-colors flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>

                <button className="bg-[#FBD1A2] text-[#543310] px-4 py-3 rounded-full hover:bg-[#AF8F6F] hover:text-white transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </Link>
            <div className="border-t border-[#AF8F6F] pt-6">
              <h2 className="text-lg font-semibold text-[#543310] mb-2">
                Product Details
              </h2>
              <ul className="list-disc list-inside text-[#1E424D] space-y-2">
                <li>100% premium cotton cover</li>
                <li>Hypoallergenic poly-fill insert</li>
                <li>18&rdquo; x 18&rdquo; (45cm x 45cm)</li>
                <li>Machine washable</li>
                <li>Made with eco-friendly materials</li>
              </ul>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-[#543310] mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                href={`/products/${relatedProduct.id}`}
                key={relatedProduct.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-square">
                  <ImageWithFallback
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#543310] mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-[#1E424D] mb-2">
                    {relatedProduct.description}
                  </p>
                  <span className="text-lg font-bold text-[#E19E11]">
                    ${relatedProduct.price.toFixed(2)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
