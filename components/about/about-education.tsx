"use client";

import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import CertHover from "@/components/ui/CertHover";
import { education } from "@/lib/data";

export function AboutEducation() {
  return (
    <FadeIn delay={0.15}>
      <h3 className="mb-5 font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
        Education
      </h3>

      <div className="mb-10 space-y-4">
        {education.map((e, i) => (
          <motion.div
            key={e.institution}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
          >
            <CertHover
              institution={e.institution}
              full={e.full}
              subject={e.subject}
              year={e.year}
              certificate={e.certificate}
            />
          </motion.div>
        ))}
      </div>
    </FadeIn>
  );
}
