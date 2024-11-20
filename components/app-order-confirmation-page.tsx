"use client";

import Link from "next/link";
import { CheckCircle, Package, Printer } from "lucide-react";

interface ShippingDetails {
  name: string;
  address: string;
  city: string;
  postalCode: string;
}

interface OrderDetails {
  orderNumber: string;
  date: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  shippingDetails: ShippingDetails;
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
}

export function OrderConfirmationPage() {
  const orderDetails: OrderDetails = {
    orderNumber: "ORD-2024-003",
    date: new Date().toLocaleDateString(),
    items: [
      {
        name: "Card Holder",
        quantity: 2,
        price: 39.99,
      },
      {
        name: "Chess Box",
        quantity: 1,
        price: 39.99,
      },
    ],
    shippingDetails: {
      name: "John Doe",
      address: "123 Main St",
      city: "Anytown",
      postalCode: "12345",
    },
    subtotal: 119.97,
    shippingCost: 9.99,
    tax: 12.0,
    total: 141.96,
  };

  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-[#543310] mb-4">
              Order Confirmed!
            </h1>
            <p className="text-[#1E424D]">
              Thank you for your purchase. Your order has been received and is
              being processed.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-[#543310]">
                  Order #{orderDetails.orderNumber}
                </h2>
                <p className="text-[#1E424D]">Placed on {orderDetails.date}</p>
              </div>
              <button className="text-[#E19E11] hover:text-[#543310] flex items-center gap-2">
                <Printer className="w-5 h-5" />
                Print
              </button>
            </div>

            <div className="border-t border-[#FBD1A2] pt-6">
              <h3 className="font-semibold text-[#543310] mb-4">
                Items Ordered
              </h3>
              {orderDetails.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-4"
                >
                  <div>
                    <p className="font-medium text-[#543310]">{item.name}</p>
                    <p className="text-sm text-[#1E424D]">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <span className="text-[#E19E11]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#FBD1A2] pt-6 mt-6">
              <h3 className="font-semibold text-[#543310] mb-4">
                Shipping Address
              </h3>
              <p className="text-[#1E424D]">
                {orderDetails.shippingDetails.name}
              </p>
              <p className="text-[#1E424D]">
                {orderDetails.shippingDetails.address}
              </p>
              <p className="text-[#1E424D]">
                {orderDetails.shippingDetails.city},{" "}
                {orderDetails.shippingDetails.postalCode}
              </p>
            </div>

            <div className="border-t border-[#FBD1A2] pt-6 mt-6">
              <h3 className="font-semibold text-[#543310] mb-4">
                Order Summary
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-[#1E424D]">
                  <span>Subtotal</span>
                  <span>${orderDetails.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#1E424D]">
                  <span>Shipping</span>
                  <span>${orderDetails.shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#1E424D]">
                  <span>Tax</span>
                  <span>${orderDetails.tax.toFixed(2)}</span>
                </div>
                <div className="pt-2 border-t border-[#FBD1A2]">
                  <div className="flex justify-between font-bold text-[#543310]">
                    <span>Total</span>
                    <span>${orderDetails.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              href="/orders"
              className="bg-[#E19E11] text-white px-6 py-3 rounded-full hover:bg-[#AF8F6F] transition-colors flex items-center gap-2"
            >
              <Package className="w-5 h-5" />
              Track Order
            </Link>
            <Link
              href="/catalog"
              className="bg-[#AF8F6F] text-white px-6 py-3 rounded-full hover:bg-[#543310] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
