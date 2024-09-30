"use client";
import React, { useState } from "react";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { FiMenu } from "react-icons/fi"; // Importing the hamburger menu icon

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Scroll handler for smooth scrolling
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={cn("fixed top-0 inset-x-0 z-50", className)}>
      <nav className="flex flex-wrap justify-between items-center px-6 py-3 bg-black text-white rounded-full shadow-lg mx-auto max-w-screen-xl">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <Link href="/" className="logo">
            <img src="/logo.png" alt="Logo" className="h-10 md:h-16" />
          </Link>
        </div>

        {/* Sheet component for the mobile menu */}
        <Sheet>
          <SheetTrigger>
            <button
              aria-label="Open menu"
              className="text-white text-2xl focus:outline-none md:hidden ml-auto"
            >
              <FiMenu /> {/* Hamburger menu icon */}
            </button>
          </SheetTrigger>
          <SheetContent className="bg-black text-white">
            <SheetHeader>
              <div className="flex items-center justify-between -ml-32 w-full">
                <SheetTitle>Navigation</SheetTitle>
                {/* Logo inside the Sheet */}
                <Link href="/" className="logo">
                  <img src="/logo.png" alt="Logo" className="h-14 md:h-16" />
                </Link>
              </div>
            </SheetHeader>

            <div className="flex flex-col items-start text-white text-sm md:text-md mt-4 md:mt-0">
              <Link
                href="/"
                onClick={(e) => handleScroll(e, "home")}
                className={cn(
                  "px-3 py-2 rounded-lg w-full text-left transition",
                  isActive("/") ? "bg-gray-600" : "hover:bg-gray-700"
                )}
              >
                Home
              </Link>
              <Link
                href="#about-us"
                onClick={(e) => handleScroll(e, "about-us")}
                className={cn(
                  "px-3 py-2 rounded-lg w-full text-left transition",
                  isActive("/about-us") ? "bg-teal-500" : "hover:bg-gray-700"
                )}
              >
                About Us
              </Link>
              <Link
                href="#portfolio"
                onClick={(e) => handleScroll(e, "portfolio")}
                className={cn(
                  "px-3 py-2 rounded-lg w-full text-left transition",
                  isActive("/portfolio") ? "bg-teal-500" : "hover:bg-gray-700"
                )}
              >
                Portfolio
              </Link>

              {/* Services dropdown */}
              <div className="relative w-full">
                <Link
                  href="#services"
                  onClick={(e) => handleScroll(e, "services")}
                  className={cn(
                    "px-3 py-2 cursor-pointer flex items-center rounded-lg w-full text-left transition",
                    active === "Services" || isActive("/services")
                      ? "bg-gray-600"
                      : "hover:bg-gray-700"
                  )}
                >
                  Services{" "}
                  <span className="ml-1">
                    <FaAngleDown />
                  </span>
                </Link>
              </div>

              {/* Search icon with input */}
              <div className="relative w-full">
                <div
                  className="flex items-center hover:bg-gray-700 rounded-lg px-3 py-2 w-full text-left transition cursor-pointer"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <FaSearch className="text-white" />
                  <p className="ml-1">Search</p>
                </div>
                {searchOpen && (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="absolute top-full left-0 mt-2 w-full bg-white text-black rounded-lg px-2 py-1 border border-gray-300"
                    onBlur={() => setSearchOpen(false)}
                  />
                )}
              </div>

              {/* Contact button */}
              <Link
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className={cn(
                  "bg-[#00bbd2] text-white px-4 py-2 rounded-lg w-full text-left border-2 border-black hover:bg-teal-600 transition",
                  isActive("/contact") ? "bg-teal-600" : ""
                )}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu items */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/"
            onClick={(e) => handleScroll(e, "home")}
            className={cn(
              "px-4 py-2 rounded-full transition",
              isActive("/") ? "bg-gray-600" : "hover:bg-gray-700"
            )}
          >
            Home
          </Link>
          <Link
            href="#about-us"
            onClick={(e) => handleScroll(e, "about-us")}
            className={cn(
              "px-4 py-2 rounded-full transition",
              isActive("/about-us") ? "bg-teal-500" : "hover:bg-gray-700"
            )}
          >
            About Us
          </Link>
          <Link
            href="#portfolio"
            onClick={(e) => handleScroll(e, "portfolio")}
            className={cn(
              "px-4 py-2 rounded-full transition",
              isActive("/portfolio") ? "bg-teal-500" : "hover:bg-gray-700"
            )}
          >
            Portfolio
          </Link>
          <div className="relative">
            <Link
              href="#services"
              onClick={(e) => handleScroll(e, "services")}
              className={cn(
                "px-4 py-2 cursor-pointer flex items-center rounded-full transition",
                active === "Services" ? "bg-gray-600" : "hover:bg-gray-700"
              )}
            >
              Services{" "}
              <span className="ml-1">
                <FaAngleDown />
              </span>
            </Link>
          </div>

          {/* Search */}
          <div className="relative">
            <FaSearch
              className="text-white cursor-pointer hover:bg-gray-700 rounded-full p-2"
              onClick={() => setSearchOpen(!searchOpen)}
            />
            {searchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-full left-0 mt-2 w-full bg-white text-black rounded-lg px-2 py-1 border border-gray-300"
                onBlur={() => setSearchOpen(false)}
              />
            )}
          </div>

          {/* Contact button */}
          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className={cn(
              "bg-[#00bbd2] text-white px-4 py-2 rounded-full border-2 border-black hover:bg-teal-600 transition",
              isActive("/contact") ? "bg-teal-600" : ""
            )}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
