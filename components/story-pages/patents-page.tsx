"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";
import FadeIn from "@/components/ui/FadeIn";
import PageHero from "@/components/ui/PageHero";
import {
  patentImages,
  patentsContent,
  registeredDesign,
} from "@/lib/story-pages";

export default function PatentsPage() {
  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <PageHero
        as="h1"
        eyebrow={patentsContent.eyebrow}
        title={
          <>
            {patentsContent.title}
            <br />
            <em className="text-accent">Archive</em>
          </>
        }
      >
        <p className="max-w-xl text-[0.95rem] md:text-[1.05rem] leading-[1.8] text-muted font-fraunces italic">
          {patentsContent.hero}
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
              {patentsContent.intro}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="my-8 pt-8 border-t border-rule">
              <blockquote className="font-playfair italic text-[1rem] leading-[1.8] text-muted">
                "Human movement as intelligent command."
              </blockquote>
            </div>
          </FadeIn>

          <SectionLabel>Innovation Overview</SectionLabel>
          <div className="mt-5 space-y-4 text-[0.88rem] leading-[1.95] text-muted">
            {patentsContent.overview.map((paragraph) => (
              <FadeIn key={paragraph} delay={0.08}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-rule">
            <SectionLabel>Ideas Inside The Invention</SectionLabel>
            <div className="mt-6 border-t border-rule">
              {patentsContent.features.map((feature, index) => (
                <motion.article
                  key={feature.title}
                  className="border-b border-rule py-5"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <h3 className="text-[0.95rem] md:text-[1rem] font-bold leading-snug">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[0.85rem] leading-[1.85] text-muted">
                    {feature.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-rule">
            <SectionLabel>Domain Applications</SectionLabel>
            <p className="mt-5 max-w-2xl font-fraunces text-[1rem] md:text-[1.1rem] leading-[1.8] text-muted">
              Built for multiple fields of human-machine interaction.
            </p>

            <div className="mt-7 border-t border-rule">
              {patentsContent.applications.map((application, index) => (
                <motion.article
                  key={application.title}
                  className="border-b border-rule py-5"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <h3 className="text-[0.95rem] md:text-[1rem] font-bold leading-snug">
                    {application.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[0.85rem] leading-[1.85] text-muted">
                    {application.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-10 pt-8 border-t border-rule">
              <SectionLabel>Innovation Vision</SectionLabel>
              <blockquote className="mt-6 max-w-3xl font-playfair italic text-[1rem] md:text-[1.15rem] leading-[1.8] text-muted">
                {patentsContent.vision}
              </blockquote>
              <div className="mt-8 border-t border-rule">
                <div className="py-5 border-b border-rule">
                  <SectionLabel>Registered Design</SectionLabel>
                  <p className="mt-4 max-w-2xl text-[0.85rem] leading-[1.85] text-muted">
                    The Smart Watch Glove design is registered with the UK
                    Intellectual Property Office.
                  </p>
                </div>
                <div className="border-b border-rule">
                  {registeredDesign.map(([label, value]) => (
                    <div
                      key={label}
                      className="grid gap-4 border-b border-rule py-3.5 last:border-b-0 md:grid-cols-[0.45fr_1fr]"
                    >
                      <span className="text-[0.55rem] tracking-[0.16em] uppercase text-accent font-mono">
                        {label}
                      </span>
                      <span className="text-[0.8rem] leading-snug text-muted">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/documents/tek-smart-glove-patent.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 mr-3 inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase font-mono no-underline text-ink border border-ink px-6 md:px-7 py-3.5 transition-all ease-linear duration-200 hover:border-accent hover:text-accent"
              >
                View Design Patent
                <span>
                  <BsArrowRight />
                </span>
              </Link>
              <Link
                href="https://www.knklabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase font-mono no-underline text-paper bg-ink px-6 md:px-7 py-3.5 transition-all ease-linear duration-200 hover:bg-accent md:mt-8"
              >
                Visit KNK Labs
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          </FadeIn>
        </main>

        <div className="hidden md:block bg-rule" />

        <aside className="px-6 md:px-12 py-10 bg-cream">
          <FadeIn delay={0.15}>
            <div className="sticky top-20 space-y-8">
              {patentImages.map((image, index) => (
                <figure key={image.src} className="border-t border-rule pt-5">
                  <div
                    className={`relative overflow-hidden bg-paper ${image.className}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 768px) 36vw, 100vw"
                      className="object-contain p-5 md:p-7"
                    />
                  </div>
                  <figcaption className="mt-3 text-[0.58rem] tracking-[0.16em] uppercase text-muted font-mono">
                    {image.alt}
                  </figcaption>
                </figure>
              ))}
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
