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
      className={`border-b-[3px] border-double border-ink px-6 pt-10 pb-8 md:px-12 ${className}`}
    >
      {eyebrow && (
        <FadeIn delay={0.05}>
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[0.6rem] tracking-[0.25em] text-accent uppercase">
              {eyebrow}
            </span>
            <span className="h-px flex-1 bg-rule" />
          </div>
        </FadeIn>
      )}

      <div
        className={
          contentLayout === "split"
            ? `flex flex-col gap-8 md:grid md:grid-cols-2 md:items-end md:gap-16 ${innerClassName}`
            : `flex flex-col gap-8 ${innerClassName}`
        }
      >
        <FadeIn delay={titleDelay}>
          <Heading
            className={`font-playfair leading-[0.95] font-black -tracking-[0.02em] ${headlineClassName}`}
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
