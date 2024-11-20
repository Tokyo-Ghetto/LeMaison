"use client";

import { useState } from "react";
import { CreditCard, Lock } from "lucide-react";
import Link from "next/link";

export function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit");

  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#543310] mb-8">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold text-[#543310] mb-4">
                Shipping Information
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-[#543310]">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-2 border border-[#AF8F6F] rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-2 border border-[#AF8F6F] rounded-lg"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-2 border border-[#AF8F6F] text-[#543310] rounded-lg"
                />
                <div className="grid grid-cols-2 gap-4 text-[#543310]">
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-2 border border-[#AF8F6F] rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="px-4 py-2 border border-[#AF8F6F] rounded-lg"
                  />
                </div>
              </form>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold text-[#543310] mb-4">
                Payment Method
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    id="credit"
                    name="payment"
                    value="credit"
                    checked={paymentMethod === "credit"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label
                    htmlFor="credit"
                    className="flex items-center gap-2 text-[#543310]"
                  >
                    <CreditCard className="w-5 h-5" />
                    Credit Card
                  </label>
                </div>
                {paymentMethod === "credit" && (
                  <div className="space-y-4 text-[#543310]">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-4 py-2 border border-[#AF8F6F] rounded-lg"
                    />
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="px-4 py-2 border border-[#AF8F6F] rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="px-4 py-2 border border-[#AF8F6F] rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md h-fit">
            <h2 className="text-xl font-semibold text-[#543310] mb-4">
              Order Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between text-[#1E424D]">
                <span>Subtotal</span>
                <span>$199.98</span>
              </div>
              <div className="flex justify-between text-[#1E424D]">
                <span>Shipping</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between text-[#1E424D]">
                <span>Tax</span>
                <span>$20.00</span>
              </div>
              <div className="pt-4 border-t border-[#FBD1A2]">
                <div className="flex justify-between font-bold text-lg text-[#543310]">
                  <span>Total</span>
                  <span>$229.97</span>
                </div>
              </div>
            </div>

            <Link href="/order-confirmation">
              <button className="w-full mt-6 bg-[#E19E11] text-white py-3 rounded-full hover:bg-[#AF8F6F] transition-colors flex items-center justify-center gap-2">
                <Lock className="w-5 h-5" />
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
