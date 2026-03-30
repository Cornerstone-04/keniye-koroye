"use client";

import FadeIn from "@/components/ui/FadeIn";

export function ContactResponseTime() {
  return (
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

          <span className="flex-1 h-px" style={{ background: "var(--rule)" }} />
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
          &ldquo;I respond to every message within 24 hours. If your matter is
          urgent, say so — I&apos;ll prioritise accordingly.&rdquo;
        </p>
      </div>
    </FadeIn>
  );
}
