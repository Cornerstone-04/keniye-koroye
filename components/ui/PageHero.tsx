"use client";

import FadeIn from "@/components/ui/FadeIn";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  as?: "h1" | "h2";
  contentLayout?: "stack" | "split";
  headlineClassName?: string;
  className?: string;
  innerClassName?: string;
  titleDelay?: number;
  contentDelay?: number;
};

export default function PageHero({
  eyebrow,
  title,
  children,
  as = "h2",
  contentLayout = children ? "split" : "stack",
  headlineClassName = "",
  className = "",
  innerClassName = "",
  titleDelay = 0.1,
  contentDelay = 0.2,
}: PageHeroProps) {
  const Heading = as;

  return (
    <section
      className={`px-6 md:px-12 pt-10 pb-8 border-b-[3px] border-double border-ink ${className}`}
    >
      {eyebrow && (
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-accent font-mono">
              {eyebrow}
            </span>
            <span className="flex-1 h-px bg-rule" />
          </div>
        </FadeIn>
      )}

      <div
        className={
          contentLayout === "split"
            ? `flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 md:items-end ${innerClassName}`
            : `flex flex-col gap-8 ${innerClassName}`
        }
      >
        <FadeIn delay={titleDelay}>
          <Heading
            className={`font-black leading-[0.95] font-playfair -tracking-[0.02em] ${headlineClassName}`}
            style={{ fontSize: "clamp(2.2rem, 8vw, 5.5rem)" }}
          >
            {title}
          </Heading>
        </FadeIn>

        {children && (
          <FadeIn delay={contentDelay}>
            <div>{children}</div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
