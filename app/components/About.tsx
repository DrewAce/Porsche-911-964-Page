"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative section-padding site-margins border-b border-[#1a1a1a]"
      aria-label="About the Porsche 911 964"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section label row */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center justify-between mb-20 pb-6 border-b border-[#1a1a1a] pl-[0.5vw]"
        >
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-[#c41230]">
              01
            </span>
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#3a3a3a]">
              The Story
            </span>
          </div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#2a2a2a] hidden md:block">
            Porsche 911 Type 964
          </span>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          {/* Left: giant pull text */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="overflow-hidden"

            >
              <p
                className="font-display font-black leading-none text-[#f0ede8] text-[clamp(5rem,10vw,9rem)]"
              >
                Same
              </p>
            </motion.div>
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="overflow-hidden"

            >
              <p
                className="font-display font-black leading-none text-gradient-red text-[clamp(5rem,10vw,9rem)]"
              >
                But
              </p>
            </motion.div>
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="overflow-hidden"

            >
              <p
                className="font-display font-black leading-none text-[#f0ede8] text-[clamp(5rem,10vw,9rem)]"
              >
                Different.
              </p>
            </motion.div>

            {/* Year timeline */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-12 flex items-center gap-4"

            >
              <div>
                <p className="font-display text-3xl font-bold text-[#f0ede8]">1989</p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#3a3a3a] mt-0.5">Start</p>
              </div>
              <div className="flex-1 border-t border-dashed border-[#2a2a2a] relative">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#c41230]" />
              </div>
              <div className="text-right">
                <p className="font-display text-3xl font-bold text-[#f0ede8]">1994</p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#3a3a3a] mt-0.5">End</p>
              </div>
            </motion.div>
          </div>

          {/* Right: body text + stats */}
          <div className="flex flex-col gap-10">
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-xl text-[#a8a39c] font-light leading-[1.85]"
            >
              The Porsche 911 Type 964 shared only{" "}
              <span className="text-[#f0ede8] font-normal">13% of its parts</span>{" "}
              with its predecessor — yet it never lost the soul that made the 911 a legend.
              Engineers rebuilt the car from the ground up while preserving every ounce of
              raw character.
            </motion.p>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-base text-[#6b6b6b] font-light leading-[1.9]"
            >
              For the first time in the 911&apos;s history, the car introduced power steering, ABS,
              and a coil-spring suspension — modern technologies wrapped in the timeless silhouette
              Porsche had refused to abandon. It was a declaration: refinement and character need not
              be at war.
            </motion.p>

            <motion.p
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-base text-[#6b6b6b] font-light leading-[1.9]"
            >
              Today it stands as the last pure expression of air-cooled philosophy — a bridge
              between the analog past and the digital future. And that, precisely, is why the
              world is obsessed with it.
            </motion.p>

            {/* Stats row */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-3 gap-0 border border-[#1a1a1a] mt-4"
            >
              {[
                { val: "87%", label: "New Parts" },
                { val: "30K", label: "Produced" },
                { val: "3.6L", label: "Flat-Six" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`text-center py-8 px-4 ${i < 2 ? "border-r border-[#1a1a1a]" : ""}`}
                >
                  <p className="font-display text-4xl font-bold text-[#f0ede8]">{item.val}</p>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#3a3a3a] mt-2">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
