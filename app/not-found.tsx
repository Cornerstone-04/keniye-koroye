"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 pt-14.25 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Big 404 */}
        <div
          className="mb-6 font-playfair leading-none font-black -tracking-[0.04em] text-transparent select-none"
          style={{
            fontSize: "clamp(6rem, 22vw, 16rem)",
            WebkitTextStroke: "1px var(--rule)",
          }}
        >
          404
        </div>

        {/* Label */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px max-w-15 flex-1 bg-rule" />
          <span className="font-mono text-[0.6rem] tracking-[0.3em] text-accent uppercase">
            Page Not Found
          </span>
          <span className="h-px max-w-15 flex-1 bg-rule" />
        </div>

        {/* Message */}
        <p className="mx-auto mb-10 max-w-sm font-fraunces text-[1.1rem] leading-[1.75] text-muted italic">
          This page doesn't exist — but the work does.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-ink px-[0.9rem] py-[1.8rem] font-mono text-[0.65rem] tracking-[0.2em] text-paper uppercase no-underline transition-colors duration-200"
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--accent)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--ink)")
          }
        >
          Back to Home{" "}
          <span>
            <BsArrowRight />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
