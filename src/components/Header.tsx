"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 bg-[#090D0F] px-4 py-2 sm:py-3 md:py-4 lg:py-6 lg:px-16 md:px-8 sm:px-6 text-[#F9FAFB] ${
        scrolled ? "bg-[#090D0F] shadow-lg" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center ">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/logo.svg"
            alt="logo"
            width={31}
            height={26}
            className="w-6 h-5 sm:w-8 sm:h-6 md:w-[31px] md:h-[26px]"
          />
          <h1 className="text-[#F9FAFB] hover:text-[#E5E7EB] text-sm sm:text-base md:text-[18px] font-semibold">
            FlowAI
          </h1>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 font-medium text-[18px] items-center list-none">
            <li className="hover:text-[#E5E7EB]">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#E5E7EB]">
              <a href="#">Feature</a>
            </li>
            <li className="hover:text-[#E5E7EB]">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-[#E5E7EB]">
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-[#E5E7EB]">
              <a href="#">Support</a>
            </li>
          </ul>
        </nav>
        <div className="flex  md:gap-3 lg:gap-[27px] items-center">
          <button className="hidden md:flex p-4 justify-center items-center bg-transparent hover:text-[#E5E7EB]">
            Request Demo
          </button>
          <button className="w-[139px] p-4 hidden md:flex justify-center items-center rounded-[8px] bg-[#007BFF] hover:bg-[#007BFF]/80 transition duration-200">
            Sign Up
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-6 mb-5 font-medium text-base">
          <ul className="space-y-4 flex flex-col justify-center items-center">
            <li className="hover:text-[#E5E7EB]" onClick={() => setIsMenuOpen(false)}>
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#E5E7EB]" onClick={() => setIsMenuOpen(false)}>
              <a href="#">Feature</a>
            </li>
            <li className="hover:text-[#E5E7EB]" onClick={() => setIsMenuOpen(false)}>
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-[#E5E7EB]" onClick={() => setIsMenuOpen(false)}>
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-[#E5E7EB]" onClick={() => setIsMenuOpen(false)}>
              <a href="#">Support</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Header;
