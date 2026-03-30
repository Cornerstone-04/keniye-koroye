"use client";

import { motion } from "motion/react";
import { bio } from "@/lib/data";

type HomeBioProps = {
  mobile?: boolean;
};

export function HomeBio({ mobile = false }: HomeBioProps) {
  if (mobile) {
    return (
      <p className="text-[0.88rem] leading-[1.8] mb-6 font-fraunces">
        {bio.intro} {bio.paragraphs[0]}
      </p>
    );
  }

  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="text-[0.95rem] leading-[1.8] mb-8 font-fraunces"
    >
      {bio.intro}{" "}
      <strong
        className="font-normal"
        style={{
          background:
            "linear-gradient(to bottom, transparent 60%, rgba(200,57,43,0.25) 60%)",
        }}
      >
        {bio.paragraphs[0]}
      </strong>
    </motion.p>
  );
}
