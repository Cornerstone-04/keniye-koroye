"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";
import FadeIn from "@/components/ui/FadeIn";
import PageHero from "@/components/ui/PageHero";
import { tekContent } from "@/lib/story-pages";

export default function TekPage() {
  return (
    <div className="min-h-screen bg-paper pt-14.25">
      <PageHero
        as="h1"
        eyebrow={tekContent.eyebrow}
        title={
          <>
            TEK
            <br />
            <em className="text-accent">Grant</em>
          </>
        }
      >
        <p className="max-w-xl font-fraunces text-[0.95rem] leading-[1.8] text-muted italic md:text-[1.05rem]">
          {tekContent.hero}
        </p>
      </PageHero>

      <div
        className="flex flex-col md:grid"
        style={{ gridTemplateColumns: "1.2fr 1px 1fr" }}
      >
        <main className="px-6 py-10 md:px-12">
          <FadeIn delay={0.12}>
            <p
              className="mb-8 font-fraunces leading-[1.75]"
              style={{ fontSize: "clamp(1rem, 3vw, 1.2rem)", maxWidth: "52ch" }}
            >
              {tekContent.title}
            </p>
          </FadeIn>

          <div className="space-y-4 text-[0.88rem] leading-[1.95] text-muted">
            <FadeIn delay={0.16}>
              <p>{tekContent.intro}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>{tekContent.legacy}</p>
            </FadeIn>
          </div>

          <FadeIn delay={0.24}>
            <div className="my-8 border-t border-rule pt-8">
              <blockquote className="font-playfair text-[1rem] leading-[1.8] text-muted italic">
                "The work continues by turning memory into opportunity."
              </blockquote>
            </div>
          </FadeIn>

          <div className="mt-10 border-t border-rule pt-8">
            <SectionLabel>Core Initiatives</SectionLabel>
            <div className="mt-6 border-t border-rule">
              {tekContent.initiatives.map((initiative, index) => (
                <motion.article
                  key={initiative.title}
                  className="border-b border-rule py-5"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <h2 className="text-[0.95rem] leading-snug font-bold md:text-[1rem]">
                    {initiative.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-[0.85rem] leading-[1.85] text-muted">
                    {initiative.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-rule pt-8">
            <SectionLabel>Who This Supports</SectionLabel>
            <div className="mt-6 border-t border-rule">
              {tekContent.supports.map((item, index) => (
                <motion.div
                  key={item}
                  className="border-b border-rule py-4"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <p className="text-[0.85rem] leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-10 border-t border-rule pt-8">
              <SectionLabel>Closing Note</SectionLabel>
              <p className="mt-6 max-w-3xl font-playfair text-[1rem] leading-[1.8] text-muted italic md:text-[1.15rem]">
                {tekContent.closing}
              </p>
            </div>
          </FadeIn>
        </main>

        <div className="hidden bg-rule md:block" />

        <aside className="bg-cream px-6 py-10 md:px-12">
          <FadeIn delay={0.15}>
            <div className="sticky top-20 space-y-8">
              <figure className="border-t border-rule pt-5">
                <div className="relative aspect-4/5 overflow-hidden bg-paper">
                  <Image
                    src="/images/tek-og.png"
                    alt="Taukeme Edwin Koroye"
                    fill
                    priority
                    sizes="(min-width: 768px) 36vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[0.58rem] tracking-[0.16em] text-muted uppercase">
                  Legacy / Community / Impact
                </figcaption>
              </figure>

              <div className="border-t border-rule pt-6">
                <SectionLabel>How To Participate</SectionLabel>
                <div className="mt-5 space-y-4 text-[0.85rem] leading-[1.9] text-muted">
                  {tekContent.participate.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Link
                  href={tekContent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 bg-ink px-6 py-3.5 font-mono text-[0.65rem] tracking-[0.2em] text-paper uppercase no-underline transition-colors duration-200 ease-linear hover:bg-accent md:px-7"
                >
                  Stay Updated
                  <span>
                    <BsArrowRight />
                  </span>
                </Link>
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
      <h2 className="font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
        {children}
      </h2>
    </FadeIn>
  );
}
