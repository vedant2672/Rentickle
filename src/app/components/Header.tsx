import { useState } from "react";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    "Beds",
    "Sofas",
    "Dining",
    "Appliances",
    "Electronics",
    "Sale",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      {/* Promo bar */}
      <div className="bg-[#1a1a1a] text-white text-center py-2 text-xs tracking-widest uppercase">
        Flat 20% off — Use code VIBE20 · Delivery within 1–2 days
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <a href="#" className="flex flex-col items-start">
              <span
                className="text-xl tracking-[0.25em] text-[#1a1a1a] font-medium"
                style={{ fontFamily: "Georgia, serif", letterSpacing: "0.3em" }}
              >
                rentickle
              </span>
              <div className="flex gap-0.5 mt-1">
                <div className="w-8 h-1.5 bg-red-500 rounded-sm"></div>
                <div className="w-6 h-1.5 bg-yellow-400 rounded-sm"></div>
                <div className="w-4 h-1.5 bg-blue-500 rounded-sm"></div>
              </div>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className={`text-sm tracking-wide hover:text-[#8b6f47] transition-colors ${
                  link === "Sale"
                    ? "text-red-600 font-medium"
                    : "text-[#1a1a1a]"
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-1 lg:gap-2">
            {searchOpen ? (
              <div className="flex items-center border-b border-[#1a1a1a] pb-1">
                <input
                  autoFocus
                  className="text-sm outline-none w-36 lg:w-52 placeholder:text-gray-400"
                  placeholder="Search furniture..."
                  onBlur={() => setSearchOpen(false)}
                />
                <X
                  size={16}
                  className="cursor-pointer"
                  onClick={() => setSearchOpen(false)}
                />
              </div>
            ) : (
              <button
                className="p-2 hover:text-[#8b6f47] transition-colors"
                onClick={() => setSearchOpen(true)}
              >
                <Search size={20} />
              </button>
            )}
            <button className="hidden sm:flex p-2 hover:text-[#8b6f47] transition-colors">
              <Heart size={20} />
            </button>
            <button className="hidden sm:flex p-2 hover:text-[#8b6f47] transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 hover:text-[#8b6f47] transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 bg-[#8b6f47] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`block py-3 text-sm border-b border-gray-50 ${
                link === "Sale" ? "text-red-600" : "text-[#1a1a1a]"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
