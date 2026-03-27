"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  { id: "01", title: "Pure Expression", text: "The final 911 to breathe without a radiator. The flat-six howl is the last of its kind. When Porsche moved to water cooling, an era closed forever." },
  { id: "02", title: "Modern Soul", text: "It introduced ABS, power steering, and AWD to the bloodline — yet never surrendered the visceral, unfiltered connection between driver and machine." },
  { id: "03", title: "Cultural Art", text: "From Steve McQueen to modern icons, the 964 transcended automotive circles to become a cultural artifact of honest, beautiful machinery." },
  { id: "04", title: "Blue Chip", text: "In a market flooded with supercars, pristine 964s appreciate like fine art. They are not simply cars; they are museum pieces you can drive." },
];

export default function Legacy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="legacy"
      className="relative section-padding bg-[#000000]"
      aria-label="The legacy of the Porsche 911 964"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-5 md:pl-14 md:pr-16 overflow-hidden ml-[0.8vw]">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-24 pb-6 border-b border-[#1a1a1a]"
          style={{ paddingLeft: "0.5vw" }}
        >
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-[#c41230]">04</span>
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#3a3a3a]">Impact</span>
          </div>
        </motion.div>

        {/* Main Title Stack */}
        <div className="mb-24 md:flex md:items-end md:justify-between grid gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.85] text-[#f0ede8]"
            style={{ paddingTop: "0.5vw", paddingBottom: "1vw", paddingLeft: "0.5vw", fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            Why the<br />
            World{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c41230 0%, #ff3255 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Obsesses.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xs tracking-[0.25em] font-medium text-[#6b6b6b] uppercase md:pb-4 max-w-[200px]"
          >
            An Icon Cast in Steel and Spirit.
          </motion.p>
        </div>

        {/* Asymmetrical Grid of reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 lg:gap-y-32 mb-32 relative">

          {/* Vertical axis line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-[#1a1a1a] -translate-x-1/2" />

          {reasons.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col gap-6 ${i % 2 === 1 ? 'md:mt-32' : ''}`}
              style={{ paddingLeft: "0.5vw" }}
            >
              <span className="font-display text-[#1a1a1a] font-black leading-none select-none" style={{ fontSize: "5rem" }}>
                {item.id}
              </span>
              <h3 className="font-display text-2xl font-bold text-[#f0ede8]">{item.title}</h3>
              <p className="text-[#6b6b6b] font-light leading-[1.8] text-[15px] max-w-sm">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Quote Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative py-24 md:py-32 flex flex-col items-center justify-center text-center border-t border-[#1a1a1a]"
          style={{ paddingTop: "70px" }}
        >
          {/* Abstract background blur */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none overflow-hidden">
            <div className="w-[800px] h-[300px] bg-[#c41230] opacity-5 blur-[120px] rounded-full" />
          </div>

          <span className="text-[#c41230] text-8xl font-serif leading-[0] block mb-12 select-none" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote className="font-display font-black leading-[0.9] text-[#f0ede8] max-w-4xl mx-auto" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
            There is no substitute.
          </blockquote>

          <div className="mt-12 flex items-center gap-6">
            <div className="w-12 h-px bg-[#3a3a3a]" />
            <p className="text-[10px] tracking-[0.4em] uppercase font-semibold text-[#6b6b6b]" style={{ paddingTop: "20px" }} >
              Porsche AG
            </p>
            <div className="w-12 h-px bg-[#3a3a3a]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
