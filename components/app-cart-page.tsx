"use client";

import { Trash2, Plus, Minus } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/image-placeholder";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  images: string[];
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

export function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/products.json");
        const products: Product[] = await response.json();
        const selectedProducts = products.slice(0, 4).map((product) => ({
          ...product,
          quantity: 1,
        }));
        setCartItems(selectedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 9.99;
  const taxRate = 0.1; // 10% tax
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#543310] mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-6 mb-4 shadow-sm flex gap-4"
              >
                <div className="relative w-24 h-24">
                  <ImageWithFallback
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#543310]">
                      {item.name}
                    </h3>
                    <button
                      className="text-[#E19E11] hover:text-[#543310]"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-1 hover:bg-[#FBD1A2] rounded"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="w-4 h-4 stroke-[#543310]" />
                      </button>
                      <span className="w-8 text-center text-[#543310]">
                        {item.quantity}
                      </span>
                      <button
                        className="p-1 hover:bg-[#FBD1A2] rounded"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="w-4 h-4 stroke-[#543310]" />
                      </button>
                    </div>
                    <span className="font-bold text-[#E19E11]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#543310] mb-4">
                Order Summary
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[#1E424D]">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#1E424D]">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#1E424D]">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="pt-3 border-t border-[#FBD1A2]">
                  <div className="flex justify-between font-bold text-lg text-[#543310]">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Link href="/checkout">
                <button className="w-full bg-[#E19E11] text-white py-3 rounded-full hover:bg-[#AF8F6F] transition-colors mb-4">
                  Proceed to Checkout
                </button>
              </Link>
              <Link
                href="/catalog"
                className="block text-center text-[#543310] hover:text-[#E19E11]"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
