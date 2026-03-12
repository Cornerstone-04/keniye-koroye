"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface FlipCardProps {
  institution: string;
  full: string;
  subject: string;
  year: string;
  certificateImage: string;
}

export default function FlipCard({
  institution,
  full,
  subject,
  year,
  certificateImage,
}: FlipCardProps) {
  return (
    <motion.div
      className="relative w-full"
      style={{ height: 180, perspective: 1000 }}
      whileHover="flipped"
      initial="resting"
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        variants={{
          resting: { rotateY: 0 },
          flipped: { rotateY: 180 },
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col justify-between p-5"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            border: "1px solid var(--rule)",
            background: "var(--paper)",
          }}
        >
          <div>
            <div
              className="text-[0.7rem] tracking-[0.15em] uppercase font-bold mb-1"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "var(--accent)",
              }}
            >
              {institution}
            </div>
            <div
              className="text-[1rem] font-bold leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {full}
            </div>
            <div
              className="text-[0.65rem] tracking-widest mt-2"
              style={{
                color: "var(--muted)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {subject}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span
              className="text-[0.6rem] tracking-[0.15em] uppercase"
              style={{
                color: "var(--muted)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {year}
            </span>
            <span
              className="text-[0.6rem] tracking-[0.15em] uppercase"
              style={{
                color: "var(--muted)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Hover to view ↗
            </span>
          </div>
        </div>

        {/* Back — certificate image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            rotate: "180deg",
            transform: "rotateY(180deg)",
            border: "1px solid var(--rule)",
          }}
        >
          <Image
            src={certificateImage}
            alt={`${institution} certificate`}
            fill
            style={{ objectFit: "cover" }}
          />
          {/* Overlay label */}
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-2"
            style={{ background: "rgba(13,13,11,0.7)" }}
          >
            <span
              className="text-[0.6rem] tracking-[0.15em] uppercase text-white"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {institution} — {year}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
