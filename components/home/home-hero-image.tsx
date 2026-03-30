"use client";

import { motion } from "motion/react";
import Image from "next/image";

type HomeHeroImageProps = {
  priority?: boolean;
};

export function HomeHeroImage({ priority = false }: HomeHeroImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15 }}
      className="w-full relative overflow-hidden mb-6 bg-ink aspect-3/4"
    >
      <Image
        alt="Keniye Koroye"
        src="/keniye-pic.png"
        fill
        priority={priority}
        className="object-cover"
      />

      <span className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-[0.55rem] md:text-[0.58rem] tracking-[0.12em] md:tracking-[0.15em] uppercase text-white/20 md:text-white/35 font-mono">
        — Funfere Keniye Koroye
      </span>
    </motion.div>
  );
}
