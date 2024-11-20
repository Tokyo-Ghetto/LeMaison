import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#543310] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-[#FBD1A2]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#FBD1A2]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-[#FBD1A2]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-sm hover:text-[#FBD1A2]">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l text-[#543310]"
              />
              <button
                type="submit"
                className="bg-[#E19E11] px-4 py-2 rounded-r hover:bg-[#AF8F6F] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 LeMaison. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
