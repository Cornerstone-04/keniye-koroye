"use client";

import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { contactItems } from "./contact-types";

export function ContactDetails() {
  return (
    <FadeIn delay={0.2}>
      <h3 className="text-[0.62rem] tracking-[0.2em] uppercase mb-6 font-mono text-accent">
        Contact Details
      </h3>

      {contactItems.map((item, index) => (
        <motion.div
          key={item.label}
          className="grid gap-4 py-4 items-end"
          style={{
            gridTemplateColumns: "80px 1fr",
            borderBottom: "1px solid var(--rule)",
          }}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
        >
          <span className="text-[0.6rem] tracking-[0.15em] uppercase pt-0.5 text-muted font-mono">
            {item.label}
          </span>

          {item.href ? (
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-60 no-underline"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "0.95rem",
                color: "var(--ink)",
              }}
            >
              {item.icon}
              {item.value}
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "0.95rem",
                color: "var(--ink)",
              }}
            >
              {item.icon}
              {item.value}
            </span>
          )}
        </motion.div>
      ))}
    </FadeIn>
  );
}
