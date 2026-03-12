// FlipCard.tsx
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
          className="absolute inset-0 flex flex-col justify-between p-5 border border-rule bg-paper"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div>
            <div className="text-[0.7rem] tracking-[0.15em] uppercase font-bold font-mono text-accent mb-1">
              {institution}
            </div>
            <div className="text-[1rem] font-bold leading-snug font-playfair">
              {full}
            </div>
            <div className="text-[0.65rem] tracking-widest mt-2 text-muted font-mono">
              {subject}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[0.6rem] tracking-[0.15em] uppercase text-muted font-mono">
              {year}
            </span>
            <span className="text-[0.6rem] tracking-[0.15em] uppercase text-muted font-mono">
              Hover to view ↗
            </span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 overflow-hidden border border-rule"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Image
            src={certificateImage}
            alt={`${institution} certificate`}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-ink/70">
            <span className="text-[0.6rem] tracking-[0.15em] uppercase text-white font-mono">
              {institution} — {year}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
