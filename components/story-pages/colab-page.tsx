"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";
import FadeIn from "@/components/ui/FadeIn";
import PageHero from "@/components/ui/PageHero";
import { colabContent } from "@/lib/story-pages";

export default function ColabPage() {
  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <PageHero
        as="h1"
        eyebrow={colabContent.eyebrow}
        title={
          <>
            {colabContent.title}
            <br />
            <em className="text-accent">Studies</em>
          </>
        }
      >
        <p className="max-w-xl text-[0.95rem] md:text-[1.05rem] leading-[1.8] text-muted font-fraunces italic">
          {colabContent.hero}
        </p>
      </PageHero>

      <div
        className="flex flex-col md:grid"
        style={{ gridTemplateColumns: "1.2fr 1px 1fr" }}
      >
        <main className="px-6 md:px-12 py-10">
          <FadeIn delay={0.12}>
            <p
              className="leading-[1.75] mb-8 font-fraunces"
              style={{ fontSize: "clamp(1rem, 3vw, 1.2rem)", maxWidth: "52ch" }}
            >
              {colabContent.intro}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="my-8 pt-8 border-t border-rule">
              <blockquote className="font-playfair italic text-[1rem] leading-[1.8] text-muted">
                "Ideas are not confined by discipline. They expand through
                collaboration."
              </blockquote>
            </div>
          </FadeIn>

          <SectionLabel>Manifesto</SectionLabel>
          <div className="mt-5 space-y-4 text-[0.88rem] leading-[1.95] text-muted">
            {colabContent.manifesto.map((paragraph) => (
              <FadeIn key={paragraph} delay={0.08}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-rule">
            <SectionLabel>Featured Collaboration</SectionLabel>
            <div className="mt-6">
              <h2 className="text-[1.05rem] md:text-[1.15rem] font-bold leading-snug">
                {colabContent.featured.name}
              </h2>
              <p className="mt-2 text-[0.62rem] tracking-[0.18em] uppercase text-muted font-mono">
                {colabContent.featured.role}
              </p>
              <div className="mt-5 space-y-4 text-[0.85rem] leading-[1.9] text-muted">
                {colabContent.featured.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-rule">
            <SectionLabel>Areas Of Collaboration</SectionLabel>
            <div className="mt-6 border-t border-rule">
              {colabContent.areas.map((area, index) => (
                <motion.article
                  key={area.title}
                  className="border-b border-rule py-5"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <h3 className="text-[0.95rem] md:text-[1rem] font-bold leading-snug">
                    {area.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[0.85rem] leading-[1.85] text-muted">
                    {area.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-10 pt-8 border-t border-rule">
              <SectionLabel>Closing Note</SectionLabel>
              <p className="mt-6 max-w-3xl font-playfair italic text-[1rem] md:text-[1.15rem] leading-[1.8] text-muted">
                {colabContent.closing}
              </p>
            </div>
          </FadeIn>
        </main>

        <div className="hidden md:block bg-rule" />

        <aside className="px-6 md:px-12 py-10 bg-cream">
          <FadeIn delay={0.15}>
            <div className="sticky top-20 space-y-8">
              <figure className="border-t border-rule pt-5">
                <div className="relative aspect-4/5 overflow-hidden bg-paper">
                  <Image
                    src="/images/keniye-colab.jpg"
                    alt="Keniye Koroye"
                    fill
                    priority
                    sizes="(min-width: 768px) 36vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="mt-3 text-[0.58rem] tracking-[0.16em] uppercase text-muted font-mono">
                  Creative Partnerships
                </figcaption>
              </figure>

              <div className="border-t border-rule pt-6">
                <SectionLabel>Related Work</SectionLabel>
                <div className="mt-5 border-t border-rule">
                  {colabContent.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-5 border-b border-rule py-5 no-underline"
                    >
                      <span>
                        <span className="block text-[0.55rem] tracking-[0.16em] uppercase text-accent font-mono">
                          {item.source}
                        </span>
                        <span className="mt-2 block text-[0.86rem] leading-snug text-ink transition-colors group-hover:text-accent">
                          {item.title}
                        </span>
                      </span>
                      <span className="mt-1 text-accent">
                        <BsArrowRight />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </aside>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <FadeIn delay={0.08}>
      <h2 className="text-[0.62rem] tracking-[0.2em] uppercase text-accent font-mono">
        {children}
      </h2>
    </FadeIn>
  );
}
