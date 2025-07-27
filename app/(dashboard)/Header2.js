"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Navigation from "./Navigation";
import { assets } from "@/Assests/assets";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

    const buttonStyle = `
    text-yellow-400 border border-yellow-400 px-4 py-2 rounded-full
    font-semibold hover:bg-yellow-400 hover:text-green-900 transition
    duration-300
  `;

  return (
    <header className="bg-green-900 text-white w-full">
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Header row with vertical alignment */}
        <div className="flex items-center justify-between h-20">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src={assets.logo}
                fill
                alt="Logo"
                className="rounded-full object-cover shadow-md hover:shadow-amber-400 transition duration-300"
              />
            </div>
            <p className="font-semibold text-2xl transition-all duration-300 hover:text-amber-400 hover:underline hover:underline-offset-4 hover:scale-105">
              AJOCREMAY MEDICARE CONSORTIUM
            </p>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center">
            {/* <Navigation /> */}
              <Link
        href="/signup"
        onClick={closeMenu}
        className={buttonStyle}
      >
        Get Started
      </Link>
          </div>

          {/* Mobile menu icon */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile nav menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 bg-green-800 rounded shadow-md p-4">
            <Navigation isMobile={true} closeMenu={closeMenu} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
