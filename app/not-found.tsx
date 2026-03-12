"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-14.25 flex flex-col items-center justify-center px-6 text-center bg-paper">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Big 404 */}
        <div
          className="font-black leading-none select-none mb-6 font-playfair text-transparent -tracking-[0.04em]"
          style={{
            fontSize: "clamp(6rem, 22vw, 16rem)",
            WebkitTextStroke: "1px var(--rule)",
          }}
        >
          404
        </div>

        {/* Label */}
        <div className="flex items-center gap-3 justify-center mb-6">
          <span className="flex-1 h-px max-w-15 bg-rule" />
          <span className="text-[0.6rem] tracking-[0.3em] uppercase font-mono text-accent">
            Page Not Found
          </span>
          <span className="flex-1 h-px max-w-15 bg-rule" />
        </div>

        {/* Message */}
        <p className="mb-10 max-w-sm mx-auto leading-[1.75] text-muted font-fraunces italic text-[1.1rem]">
          This page doesn't exist — but the work does.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase transition-colors duration-200 bg-ink text-paper font-mono no-underline px-[0.9rem] py-[1.8rem]"
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--accent)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--ink)")
          }
        >
          Back to Home <span>→</span>
        </Link>
      </motion.div>
    </div>
  );
}
