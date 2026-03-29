"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Specs", href: "#specs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Legacy", href: "#legacy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-16 bg-[#050505] border-t border-[#1a1a1a]"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-[15px] md:px-[48px] site-margins">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Logo / Brand matching Navbar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <a href="#hero" className="flex items-center group cursor-pointer" aria-label="Porsche 911 964 Home">
              <span className="font-display text-lg font-bold tracking-[0.4em] uppercase text-[#f0ede8] group-hover:text-[#c41230] transition-colors duration-300">
                Porsche
              </span>
              <span className="ml-4 text-sm font-light tracking-[0.3em] uppercase text-[#6b6b6b] group-hover:text-[#f0ede8] transition-colors duration-300">
                911 964
              </span>
            </a>
            <p className="text-xs text-[#3a3a3a] font-light tracking-wide mt-2 uppercase">
              Air-cooled. Legendary. Forever.
            </p>
          </motion.div>

          {/* Nav links matching Navbar */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-8 flex-wrap justify-center"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display font-medium italic text-[15px] tracking-wide text-[#a8a39c] hover:text-[#f0ede8] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#c41230] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </motion.nav>

          {/* Back to top (Updated to match elegant styling) */}
          <motion.a
            href="#hero"
            id="footer-back-to-top"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex items-center gap-2 font-display font-bold text-[13px] tracking-wider uppercase text-[#f0ede8]"
            aria-label="Back to top"
          >
            <svg
              className="w-4 h-4 text-[#c41230] transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Up
            <span className="block w-6 h-px bg-[#c41230] group-hover:bg-[#f0ede8] transition-all duration-400 ease-out ml-2" />
          </motion.a>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-[#151515] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#2a2a2a]">
            © {year} Tribute Fan Page · Not affiliated with Porsche AG
          </p>
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#2a2a2a]">
            Crafted with obsession
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
