"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-[#F8F4E1] shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#543310]">
          LeMaison
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/catalog" className="text-[#1E424D] hover:text-[#E19E11]">
            All Products
          </Link>
          <Link
            href="/category/seasonal"
            className="text-[#1E424D] hover:text-[#E19E11]"
          >
            Seasonal
          </Link>
          <Link
            href="/category/pillows"
            className="text-[#1E424D] hover:text-[#E19E11]"
          >
            Pillows
          </Link>
          <Link
            href="/category/towels"
            className="text-[#1E424D] hover:text-[#E19E11]"
          >
            Towels
          </Link>
          <Link
            href="/category/decorations"
            className="text-[#1E424D] hover:text-[#E19E11]"
          >
            Decorations
          </Link>
          <Link
            href="/category/organizers"
            className="text-[#1E424D] hover:text-[#E19E11]"
          >
            Organizers
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="text-[#543310]">
            <Search />
          </button>
          <Link href="/cart" aria-label="Cart" className="text-[#543310]">
            <ShoppingBag />
          </Link>
          <button aria-label="Menu" className="md:hidden text-[#543310]">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
