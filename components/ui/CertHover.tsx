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
      className="relative border-b border-rule pb-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      data-hover
    >
      <div className="font-mono text-[0.7rem] font-bold tracking-[0.15em] text-accent uppercase">
        {institution}
      </div>
      <div className="mt-1 font-playfair text-[0.85rem] font-bold">{full}</div>
      <div className="mt-1 font-mono text-[0.65rem] tracking-widest text-muted">
        {subject} · {year}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="pointer-events-none absolute z-50 h-38 w-55 overflow-hidden border border-rule shadow-[4px_4px_24px_rgba(0,0,0,0.12)]"
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
