"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/navLinks";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="flex items-center justify-center md:hidden w-10 h-10 bg-purple-600 hover:cursor-pointer rounded-xl transition-colors duration-200 hover:bg-purple-700">
        {open ? (
          <X onClick={toggleMenu} size={20} color="white" />
        ) : (
          <Menu onClick={toggleMenu} size={20} color="white" />
        )}
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-slate-800">Menu</h2>
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <X size={24} className="text-slate-600" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="block px-4 py-3 text-lg font-semibold text-slate-800 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
