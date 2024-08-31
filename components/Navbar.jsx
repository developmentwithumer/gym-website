"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Smooth scrolling function
  const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleLinkClick = (event) => {
      const target = event.currentTarget.getAttribute("href").substring(1);
      if (target) {
        scrollToSection(target);
        event.preventDefault(); // Prevent default anchor behavior
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <header>
      <nav className="flex justify-around items-center gap-4 px-5 py-6 font-urbanist">
        <div>
          <Link href="#" className="flex items-center gap-2 cursor-pointer">
            <Image src="/logo.svg" alt="Logo" width={30} height={30} />
            <span className="text-2xl">GYM</span>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex items-center gap-4 text-lg">
            <li className="hover:text-primary">
              <Link href="#">Home</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="#program">Program</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="#pricing">Pricing</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="#community">Community</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button
            title="Login"
            className="border-white border hover:bg-primary hover:border-primary"
          />
          <Button
            title="Register"
            className="bg-primary hover:bg-primary-hover border border-primary hover:border-primary-hover"
          />
        </div>
        <div className="flex md:hidden cursor-pointer" onClick={toggleMenu}>
          <Hamburger isOpen={isOpen} />
        </div>
      </nav>
      {/* Mobile Menu */}
      <nav
        className={`md:hidden py-6 px-8 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-lg">
          <li className="hover:text-primary">
            <Link href="#" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link href="#program" onClick={closeMenu}>
              Program
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link href="#pricing" onClick={closeMenu}>
              Pricing
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link href="#community" onClick={closeMenu}>
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
