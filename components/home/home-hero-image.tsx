"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

type HomeHeroImageProps = {
  priority?: boolean;
};

export function HomeHeroImage({ priority = false }: HomeHeroImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15 }}
      className="relative mb-6 aspect-3/4 w-full overflow-hidden bg-ink"
    >
      <div
        aria-hidden="true"
        className={`image-skeleton absolute inset-0 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        alt="Keniye Koroye"
        src="/keniye-pic.png"
        fill
        sizes="(min-width: 768px) 40vw, 100vw"
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      <span className="absolute right-3 bottom-3 font-mono text-[0.6rem] font-medium tracking-widest text-paper/90 uppercase">
        Funfere Keniyē Koroye
      </span>
    </motion.div>
  );
}
