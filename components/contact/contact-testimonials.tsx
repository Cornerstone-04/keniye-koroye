"use client";

import { motion } from "motion/react";
import { testimonials } from "@/lib/data";

export function ContactTestimonials() {
  return (
    <div>
      <div
        className="px-6 md:px-12 py-3 flex items-center gap-3"
        style={{ borderBottom: "1px solid var(--rule)" }}
      >
        <span
          className="text-[0.6rem] tracking-[0.25em] uppercase"
          style={{
            color: "var(--accent)",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          Client Testimonials
        </span>

        <span className="flex-1 h-px" style={{ background: "var(--rule)" }} />
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-3"
        style={{
          borderBottom: "1px solid var(--rule)",
          background: "var(--ink)",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.client}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.12 }}
            className="px-6 md:px-8 py-6 text-center"
            style={{
              borderBottom:
                index < testimonials.length - 1
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "none",
            }}
          >
            <p
              className="text-[0.95rem] leading-snug mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <p
              className="text-[0.58rem] tracking-[0.2em] uppercase"
              style={{
                color: "rgba(255,255,255,0.4)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {testimonial.client}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
