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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass" : "bg-transparent"
        }`}
    >
      {/* ── Top bar ── */}
      <div
        className="flex items-center justify-between py-5"
        style={{
          paddingLeft: "var(--site-gutter-md)",
          paddingRight: "var(--site-gutter-md)",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-4 group"
          aria-label="Porsche 911 964 Home"
        >
          <span className="font-display text-lg font-bold tracking-[0.4em] uppercase text-[#f0ede8] group-hover:text-[#c41230] transition-colors duration-300">
            Porsche
          </span>
          <span className="hidden md:inline text-sm font-light tracking-[0.3em] uppercase text-[#6b6b6b] group-hover:text-[#f0ede8] transition-colors duration-300">
            911 964
          </span>
        </a>

        {/* Desktop nav + CTA */}
        <div className="hidden md:flex items-center gap-10">
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

        {/* Mobile hamburger / close */}
        <button
          id="mobile-menu-btn"
          className="md:hidden flex flex-col justify-center gap-[6px] w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-px bg-[#f0ede8] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
          />
          <span
            className={`block w-6 h-px bg-[#f0ede8] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-px bg-[#f0ede8] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
          />
        </button>
      </div>

      {/* ── Mobile menu panel ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-[#2a2a2a] glass"
          >
            <nav
              className="flex flex-col gap-6 pt-10 pb-8"
              style={{
                paddingLeft: "var(--site-gutter)",
                paddingRight: "var(--site-gutter)",
              }}
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium tracking-[0.2em] uppercase text-[#a8a39c] hover:text-[#f0ede8] transition-colors duration-300 border-b border-[#1e1e1e] pb-4 last:border-none last:pb-0 first:pt-4"
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
