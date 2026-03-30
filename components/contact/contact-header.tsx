"use client";

import FadeIn from "@/components/ui/FadeIn";
import { personal } from "@/lib/data";

export function ContactHeader() {
  return (
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
  );
}
