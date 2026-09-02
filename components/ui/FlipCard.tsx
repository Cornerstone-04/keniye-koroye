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
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        variants={{
          resting: { rotateY: 0 },
          flipped: { rotateY: 180 },
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col justify-between border border-rule bg-paper p-5"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div>
            <div className="mb-1 font-mono text-[0.7rem] font-bold tracking-[0.15em] text-accent uppercase">
              {institution}
            </div>
            <div className="font-playfair text-[1rem] leading-snug font-bold">
              {full}
            </div>
            <div className="mt-2 font-mono text-[0.65rem] tracking-widest text-muted">
              {subject}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.6rem] tracking-[0.15em] text-muted uppercase">
              {year}
            </span>
            <span className="font-mono text-[0.6rem] tracking-[0.15em] text-muted uppercase">
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
          <div className="absolute right-0 bottom-0 left-0 bg-ink/70 px-4 py-2">
            <span className="font-mono text-[0.6rem] tracking-[0.15em] text-white uppercase">
              {institution} — {year}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
