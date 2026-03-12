"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface CertHoverProps {
  institution: string;
  full: string;
  subject: string;
  year: string;
  certificate: string;
}

export default function CertHover({
  institution,
  full,
  subject,
  year,
  certificate,
}: CertHoverProps) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative pb-4"
      style={{ borderBottom: "1px solid var(--rule)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      data-hover
    >
      {/* Card content */}
      <div
        className="text-[0.7rem] tracking-[0.15em] uppercase font-bold"
        style={{ fontFamily: "'DM Mono', monospace", color: "var(--accent)" }}
      >
        {institution}
      </div>
      <div
        className="text-[0.85rem] font-bold mt-1"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {full}
      </div>
      <div
        className="text-[0.65rem] tracking-widest mt-1"
        style={{ color: "var(--muted)", fontFamily: "'DM Mono', monospace" }}
      >
        {subject} · {year}
      </div>

      {/* Floating certificate image */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute pointer-events-none z-50 overflow-hidden w-55 h-38.25"
            style={{
              // width: 440,
              // height: 310,
              left: mousePos.x + 16,
              top: mousePos.y - 80,
              border: "1px solid var(--rule)",
              boxShadow: "4px 4px 24px rgba(0,0,0,0.12)",
            }}
            initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 1.5 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={certificate}
              alt={`${institution} certificate`}
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
