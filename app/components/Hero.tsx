"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#080808] flex flex-col justify-end"
      aria-label="Hero section"
    >
      {/* Background Image / Parallax */}
      <motion.div
        style={{ y: yText, opacity } as any}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('/images/Hero2.jpg')`,
          }}
        />
        {/* Dark Overlays for readability and cinematic vibe */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />
      </motion.div>

      {/* Horizontal top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#1e1e1e]" />

      {/* Vertical accent line left */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[15px] md:left-[48px] top-0 bottom-0 w-px bg-[#1e1e1e] origin-top"
      />

      {/* Red accent top-left */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "3rem" }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute top-0 left-[15px] md:left-[48px] h-px bg-[#c41230]"
      />

      {/* Main content — bottom left aligned */}
      <motion.div
        style={{ y: yText, opacity } as any}
        className="relative z-10 site-margins pb-20 max-w-7xl mx-auto"
      >
        {/* Eyebrow row */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center gap-6 mb-8 pl-[0.8vw]"
        >
          <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-[#c41230]">
            Porsche AG
          </span>
          <div className="w-12 h-px bg-[#c41230]" />
          <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#3a3a3a]">
            1989 — 1993
          </span>
        </motion.div>

        {/* Headline — stacked, large */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.88] tracking-tight text-[#f0ede8] text-[clamp(4.5rem,14vw,13rem)] pl-[0.5vw]"
          >
            Porsche
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-12 md:mb-24 pt-4 pb-8">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end gap-6 pl-[0.5vw]"
          >
            <span
              className="font-display font-black leading-[0.88] tracking-tight"
              style={{
                fontSize: "clamp(4.5rem, 14vw, 13rem)",
                background: "linear-gradient(135deg, #c41230 0%, #ff3255 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              911
            </span>
            <span
              className="font-display font-black leading-[0.88] tracking-tight text-[#f0ede8] opacity-30 text-[clamp(4.5rem,14vw,13rem)]"
            >
              964
            </span>
          </motion.div>
        </div>

        {/* Bottom row: tagline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 max-w-4xl pt-6 py-[10px] pl-[0.5vw]"
        >
          <p className="text-sm text-[#6b6b6b] font-light tracking-wide max-w-xs leading-relaxed pt-6">
            Redefining a timeless icon.<br />Born on the Autobahn. Built for eternity.
          </p>
        </motion.div>
      </motion.div>

      {/* Right side — vertical text */}
      <div className="absolute right-[15px] md:right-[48px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-4" aria-hidden="true">
        <div className="w-px h-16 bg-[#1e1e1e]" />
        <span
          className="text-[9px] font-medium tracking-[0.4em] uppercase text-[#2a2a2a]"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Carrera · Turbo · RS
        </span>
        <div className="w-px h-16 bg-[#1e1e1e]" />
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1e1e1e]" />
    </section>
  );
}