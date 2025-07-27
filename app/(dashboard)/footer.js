"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/Assests/assets";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Brief */}
        <div className="flex flex-col items-start gap-3">
          <div className="w-14 h-14 relative">
            <Image
              src={assets.logo}
              fill
              alt="Logo"
              className="rounded-full object-cover"
            />
          </div>
          <p className="text-lg font-semibold">AJOCREMAY MEDICARE</p>
          <p className="text-sm text-gray-300">
            Your trusted partner in quality healthcare, education & social
            support services.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3 underline underline-offset-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@ajocremay.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +234 800 123 4567
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Lagos, Nigeria
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 underline underline-offset-4">
            Connect with us
          </h3>
          <div className="flex gap-4 text-2xl">
            <Link
              href="https://wa.me/2348001234567"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="https://facebook.com/ajocremay"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://instagram.com/ajocremay"
              target="_blank"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="mt-8 border-t border-green-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} AJOCREMAY MEDICARE CONSORTIUM. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
