"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const galleryItems = [
  { id: "front", label: "Front Profile", col: "md:col-span-8", aspect: "aspect-[16/9]", img: "/images/img2.jpg" },
  { id: "wheel", label: "Fuchs Alloys", col: "md:col-span-4", aspect: "aspect-square md:aspect-auto", img: "/images/fuchs.jpg" },
  { id: "cockpit", label: "Cockpit", col: "md:col-span-4", aspect: "aspect-[4/5]", img: "/images/cockpit.webp" },
  { id: "side", label: "Silhouette", col: "md:col-span-8", aspect: "aspect-[21/9] md:aspect-auto", img: "/images/silo.jpg", bgPos: "bg-bottom" },
  { id: "rs", label: "Carrera RS", col: "md:col-span-12", aspect: "aspect-[21/9]", img: "/images/carreras2.jpg" },
];

function GalleryCard({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`${item.col} ${item.aspect} relative overflow-hidden group bg-[#0d0d0d] cursor-crosshair`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="img"
      aria-label={`Gallery: ${item.label}`}
    >
      {/* Real Image Background */}
      <motion.div
        className={`absolute inset-0 bg-cover bg-no-repeat ${item.bgPos || "bg-center"}`}
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          backgroundImage: `url(${item.img})`,
        }}
      />

      {/* Dark overlay for detail visibility */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "20px 20px"
        }}
      />

      {/* Red hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(196,18,48,0.15) 0%, transparent 50%)"
            }}
          />
        )}
      </AnimatePresence>

      {/* Crosshair accents */}
      <div className="absolute top-4 left-4 w-3 h-px bg-[#3a3a3a] group-hover:bg-[#c41230] transition-colors duration-300" />
      <div className="absolute top-4 left-4 w-px h-3 bg-[#3a3a3a] group-hover:bg-[#c41230] transition-colors duration-300" />

      <div className="absolute bottom-4 right-4 w-3 h-px bg-[#3a3a3a] group-hover:bg-[#c41230] transition-colors duration-300" />
      <div className="absolute bottom-4 right-4 w-px h-3 bg-[#3a3a3a] group-hover:bg-[#c41230] transition-colors duration-300 flex flex-col justify-end" />

      {/* Label */}
      <div className="absolute bottom-4 left-4">
        <motion.p
          animate={{ y: hovered ? 0 : 5, opacity: hovered ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
          className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#f0ede8]"
        >
          {item.label}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="relative section-padding border-b border-[#1a1a1a]" aria-label="Photo Gallery" ref={ref}>
      <div className="max-w-7xl mx-auto pl-10 md:pl-14 pr-8 md:pr-16 ml-[0.8vw]">

        {/* Header content mapping editorial style */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-end mb-20">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              paddingBottom: "0.5vw",
              paddingLeft: "0.5vw"

            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-[#c41230]">03</span>
              <div className="w-8 h-px bg-[#c41230]" />
              <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#3a3a3a]">Visuals</span>
            </div>

            <p className="text-xs text-[#6b6b6b] font-light leading-relaxed max-w-xs uppercase tracking-widest text-[9px]">
              The silhouette that defined generations. Captured in its purest form.
            </p>
          </motion.div>

          {/* Right giant title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.85] text-[#f0ede8] m-0 p-0"
            style={{ paddingBottom: "0.5vw", fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
          >
            Form is{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c41230 0%, #ff3255 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Function.
            </span>
          </motion.h2>
        </div>

        {/* Masonry-like CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4 lg:gap-6 bg-[#080808]" style={{ paddingLeft: "0.5vw" }}>
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
