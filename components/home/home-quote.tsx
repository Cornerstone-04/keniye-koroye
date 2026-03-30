"use client";

import { motion } from "motion/react";
import { personal } from "@/lib/data";

type HomeQuoteProps = {
  className?: string;
};

export function HomeQuote({ className = "" }: HomeQuoteProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className={`text-[1.05rem] md:text-[1.2rem] leading-relaxed pl-4 md:pl-5 font-playfair italic border-l-[3px] border-accent ${className}`}
    >
      "{personal.tagline}"
    </motion.p>
  );
}
