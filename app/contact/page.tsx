"use client";

import { motion } from "motion/react";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import { personal, testimonials } from "@/lib/data";
import { SiInstagram, SiX } from "react-icons/si";

const contactItems = [
  { label: "Email", value: personal.email, icon: null },
  { label: "Phone", value: personal.phone, icon: null },
  { label: "Location", value: personal.location, icon: null },
  {
    label: "Instagram",
    value: "@keniyekoroye",
    href: personal.instagram,
    icon: <SiInstagram size={14} />,
  },
  {
    label: "Twitter / X",
    value: "@keniyekoroye",
    href: personal.twitter,
    icon: <SiX size={14} />,
  },
];

export default function ContactPage() {
  return (
    <div
      className="min-h-screen pt-14.25"
      style={{ background: "var(--paper)" }}
    >
      {/* Header — stacks on mobile */}
      <div
        className="px-6 md:px-12 pt-10 pb-8 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 md:items-end"
        style={{ borderBottom: "3px double var(--ink)" }}
      >
        <FadeIn delay={0.1}>
          <h2
            className="font-black leading-[0.95]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 8vw, 5.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s Build
            <br />
            Something <em style={{ color: "var(--accent)" }}>Real</em>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className="leading-[1.75]"
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              fontSize: "1.05rem",
              color: "var(--muted)",
            }}
          >
            {personal.tagline}
          </p>
        </FadeIn>
      </div>

      {/* Testimonials — 1 col on mobile, 3 on desktop */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3"
        style={{
          borderBottom: "1px solid var(--rule)",
          background: "var(--ink)",
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.client}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
            className="px-6 md:px-8 py-6 text-center"
            style={{
              borderBottom:
                i < testimonials.length - 1
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
              &ldquo;{t.quote}&rdquo;
            </p>
            <p
              className="text-[0.58rem] tracking-[0.2em] uppercase"
              style={{
                color: "rgba(255,255,255,0.4)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {t.client}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Contact info */}
      <div className="px-6 md:px-12 py-10 md:py-14 max-w-2xl">
        <FadeIn delay={0.2}>
          <h3
            className="text-[0.62rem] tracking-[0.2em] uppercase mb-6"
            style={{
              color: "var(--accent)",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Contact Details
          </h3>

          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="grid gap-4 py-4"
              style={{
                gridTemplateColumns: "80px 1fr",
                borderBottom: "1px solid var(--rule)",
              }}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            >
              <span
                className="text-[0.6rem] tracking-[0.15em] uppercase pt-0.5"
                style={{
                  color: "var(--muted)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {item.label}
              </span>

              {item.label === "Email" ? (
                <a
                  href={`mailto:${item.value}`}
                  className="transition-opacity hover:opacity-60 no-underline"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "0.95rem",
                    color: "var(--ink)",
                  }}
                >
                  {item.value}
                </a>
              ) : item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "0.95rem",
                    color: "var(--ink)",
                    textDecoration: "none",
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
                  }}
                >
                  {item.icon}
                  {item.value}
                </span>
              )}
            </motion.div>
          ))}
        </FadeIn>

        <FadeIn delay={0.65}>
          <div
            className="mt-10 pt-8"
            style={{ borderTop: "1px solid var(--rule)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[0.6rem] tracking-[0.25em] uppercase"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                Response Time
              </span>
              <span
                className="flex-1 h-px"
                style={{ background: "var(--rule)" }}
              />
            </div>
            <p
              className="leading-[1.75]"
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: "var(--muted)",
              }}
            >
              &ldquo;I respond to every message within 24 hours. If your matter
              is urgent, say so — I&apos;ll prioritise accordingly.&rdquo;
            </p>
          </div>
        </FadeIn>
      </div>

      <Footer />
    </div>
  );
}
