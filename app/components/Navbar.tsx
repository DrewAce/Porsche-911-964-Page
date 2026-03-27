"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Specs", href: "#specs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Legacy", href: "#legacy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass py-4" : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto h-[4.5rem] pr-8 md:pr-16 flex items-center justify-end">
        {/* Logo (Absolute to screen or container left depending on viewport, but we can make it fixed to screen left) */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <a
            href="#hero"
            className="flex items-center group"
            aria-label="Porsche 911 964 Home"
          >
            <span className="font-display text-lg font-bold tracking-[0.4em] uppercase text-[#f0ede8] group-hover:text-[#c41230] transition-colors duration-300">
              Porsche
            </span>
            <span className="ml-4 text-sm font-light tracking-[0.3em] uppercase text-[#6b6b6b] group-hover:text-[#f0ede8] transition-colors duration-300">
              911 964
            </span>
          </a>
        </div>

        {/* Mobile Logo (visible only on small screens) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 md:hidden flex">
          <a
            href="#hero"
            className="flex items-center group"
            aria-label="Porsche 911 964 Home"
          >
            <span className="font-display text-lg font-bold tracking-[0.4em] uppercase text-[#f0ede8]">Porsche</span>
          </a>
        </div>

        {/* Right Section: Menu & CTA */}
        <div className="hidden md:flex items-center gap-10">
          {/* Desktop Nav */}
          <nav className="flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display font-medium italic text-[15px] tracking-wide text-[#a8a39c] hover:text-[#f0ede8] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#c41230] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Redesigned CTA */}
          <a
            href="#about"
            id="navbar-cta"
            className="flex items-center gap-3 font-display font-bold text-[15px] tracking-wider uppercase text-[#f0ede8] group"
            aria-label="Discover the 964"
          >
            Discover
            <span className="block w-6 h-px bg-[#c41230] group-hover:bg-[#f0ede8] group-hover:w-10 transition-all duration-400 ease-out" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-btn"
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-px bg-[#f0ede8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-px bg-[#f0ede8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-[#f0ede8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden glass border-t border-[#2a2a2a] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-6" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium tracking-[0.2em] uppercase text-[#a8a39c] hover:text-[#f0ede8] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
