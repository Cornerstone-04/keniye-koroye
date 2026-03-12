"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen pt-14.25 flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--paper)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Big 404 */}
        <div
          className="font-black leading-none select-none mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(6rem, 22vw, 16rem)",
            color: "transparent",
            WebkitTextStroke: "1px var(--rule)",
            letterSpacing: "-0.04em",
          }}
        >
          404
        </div>

        {/* Label */}
        <div className="flex items-center gap-3 justify-center mb-6">
          <span
            className="flex-1 h-px max-w-15"
            style={{ background: "var(--rule)" }}
          />
          <span
            className="text-[0.6rem] tracking-[0.3em] uppercase"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "var(--accent)",
            }}
          >
            Page Not Found
          </span>
          <span
            className="flex-1 h-px max-w-15"
            style={{ background: "var(--rule)" }}
          />
        </div>

        {/* Message */}
        <p
          className="mb-10 max-w-sm mx-auto leading-[1.75]"
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            fontSize: "1.1rem",
            color: "var(--muted)",
          }}
        >
          This page doesn't exist — but the work does.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase transition-colors duration-200"
          style={{
            padding: "0.9rem 1.8rem",
            background: "var(--ink)",
            color: "var(--paper)",
            fontFamily: "'DM Mono', monospace",
            textDecoration: "none",
          }}
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
