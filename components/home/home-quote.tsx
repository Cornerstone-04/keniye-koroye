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
      className={`border-l-[3px] border-accent pl-4 font-playfair text-base leading-relaxed italic ${className}`}
    >
      "{personal.tagline}"
    </motion.p>
  );
}
