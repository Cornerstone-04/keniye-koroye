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
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={containerRef}
      className="relative pb-4 border-b border-rule"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      data-hover
    >
      <div className="text-[0.7rem] tracking-[0.15em] uppercase font-bold font-mono text-accent">
        {institution}
      </div>
      <div className="text-[0.85rem] font-bold mt-1 font-playfair">{full}</div>
      <div className="text-[0.65rem] tracking-widest mt-1 text-muted font-mono">
        {subject} · {year}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute pointer-events-none z-50 overflow-hidden w-55 h-38 border border-rule shadow-[4px_4px_24px_rgba(0,0,0,0.12)]"
            style={{ left: mousePos.x + 16, top: mousePos.y - 80 }}
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
