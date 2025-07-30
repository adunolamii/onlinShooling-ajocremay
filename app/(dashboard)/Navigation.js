
"use client";
import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Mail,
  DollarSign,
} from "lucide-react";

const Navigation = ({ isMobile = false, closeMenu }) => {
  const navBase = isMobile
    ? "flex flex-col items-start gap-6 mt-6"
    : "flex items-center gap-10";

  const linkStyle = `
    relative text-white text-sm font-medium flex items-center gap-2
    transition duration-300 ease-in-out
    hover:text-yellow-400
    after:absolute after:bottom-[-2px] after:left-0
    after:w-0 after:h-[2px] after:bg-yellow-400
    hover:after:w-full after:transition-all after:duration-300
  `;

  const buttonStyle = `
    text-yellow-400 border border-yellow-400 px-4 py-2 rounded-full
    font-semibold hover:bg-yellow-400 hover:text-green-900 transition
    duration-300
  `;

  const navItems = [
    {
      label: "About",
      href: "/about",
      icon: <GraduationCap size={16} />,
    },
    {
      label: "Tuition",
      href: "/tuition",
      icon: <DollarSign size={16} />,
    },
    {
      label: "Course Batch",
      href: "/courses",
      icon: <BookOpen size={16} />,
    },
    {
      label: "Contacts",
      href: "/contacts",
      icon: <Mail size={16} />,
    },
  ];

  return (
    <nav className={navBase}>
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onClick={closeMenu}
          className={linkStyle}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
      <Link
        href="/signup"
        onClick={closeMenu}
        className={buttonStyle}
      >
        Get Started
      </Link>
    </nav>

    
  );
};

export default Navigation;
