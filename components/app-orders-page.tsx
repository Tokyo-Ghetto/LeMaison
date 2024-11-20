"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

export function OrdersPage() {
  const [orderNumber, setOrderNumber] = useState("");

  const sampleOrders = [
    {
      id: "ORD-2024-001",
      date: "2024-03-15",
      status: "Delivered",
      total: 159.99,
      items: 3,
    },
    {
      id: "ORD-2024-002",
      date: "2024-03-18",
      status: "In Transit",
      total: 89.99,
      items: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#543310] mb-8">Order Status</h1>

        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-xl font-semibold text-[#543310] mb-4">
            Track Your Order
          </h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Order Number"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className="flex-grow px-4 py-2 border border-[#AF8F6F] rounded-lg focus:outline-none focus:border-[#E19E11]"
            />
            <button className="bg-[#E19E11] text-white px-6 py-2 rounded-lg hover:bg-[#AF8F6F] transition-colors flex items-center gap-2">
              <Search className="w-5 h-5" />
              Track
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#543310]">
            Recent Orders
          </h2>
          {sampleOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#543310]">
                    {order.id}
                  </h3>
                  <p className="text-[#1E424D]">Placed on {order.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-[#1E424D]">
                <span>{order.items} items</span>
                <span className="font-semibold">${order.total.toFixed(2)}</span>
              </div>
              <div className="mt-4 flex justify-end">
                <Link
                  href={`/orders/${order.id}`}
                  className="text-[#E19E11] hover:text-[#AF8F6F]"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
