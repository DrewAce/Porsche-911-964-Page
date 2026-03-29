"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const specs = [
  { id: "engine", label: "Engine", value: "3.6L", sub: "Air-cooled Flat-Six Boxer" },
  { id: "horsepower", label: "Power", value: "250", sub: "Horsepower @ 6,100 RPM" },
  { id: "torque", label: "Torque", value: "310", sub: "Newton-metres @ 4,800 RPM" },
  { id: "drivetrain", label: "Drivetrain", value: "RWD", sub: "5-speed manual gearbox" },
  { id: "topspeed", label: "Top Speed", value: "261", sub: "km/h · 162 mph" },
  { id: "acceleration", label: "0 — 100 km/h", value: "5.7", sub: "Seconds · Carrera 2" },
];

export default function Specs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="specs"
      className="section-padding site-margins bg-[#0a0a0a] border-b border-[#1a1a1a]"
      aria-label="Technical specifications"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-20 pb-6 border-b border-[#1a1a1a] pl-[0.5vw]"
        >
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-[#c41230]">02</span>
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#3a3a3a]">Engineering</span>
          </div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#2a2a2a] hidden md:block">
            Technical Specifications
          </span>
        </motion.div>

        {/* Large section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black text-[#f0ede8] mb-20 leading-none pl-[0.5vw] text-[clamp(3rem,8vw,7rem)]"

        >
          By the{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #c41230 0%, #ff3255 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Numbers.
          </span>
        </motion.h2>

        {/* Specs — horizontal list, editorial style */}
        <div className="divide-y divide-[#1a1a1a]" role="list">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.id}
              id={`spec-${spec.id}`}
              role="listitem"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-[1fr_auto] md:grid-cols-[180px_1fr_auto] items-center py-7 gap-6 hover:bg-[#0d0d0d] transition-colors duration-300 px-2 -mx-2 cursor-default"
            >
              {/* Label */}
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#3a3a3a] group-hover:text-[#6b6b6b] transition-colors duration-300">
                {spec.label}
              </p>

              {/* Sub descriptor — hidden on mobile */}
              <p className="hidden md:block text-sm text-[#3a3a3a] font-light group-hover:text-[#6b6b6b] transition-colors duration-300">
                {spec.sub}
              </p>

              {/* Big value */}
              <p
                className="font-display font-black text-right text-[#f0ede8] group-hover:text-white leading-none transition-colors duration-300 text-[clamp(2.5rem,5vw,4.5rem)]"
              >
                {spec.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[10px] tracking-[0.2em] uppercase text-[#2a2a2a] mt-10 text-right"

        >
          Carrera 2 · Standard specification · MY 1990
        </motion.p>
      </div>
    </section>
  );
}
