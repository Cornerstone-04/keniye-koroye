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
    <div className="min-h-screen bg-paper pt-14.25">
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
        <p className="max-w-xl font-fraunces text-[0.95rem] leading-[1.8] text-muted italic md:text-[1.05rem]">
          {patentsContent.hero}
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
              {patentsContent.intro}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="my-8 border-t border-rule pt-8">
              <blockquote className="font-playfair text-[1rem] leading-[1.8] text-muted italic">
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

          <div className="mt-10 border-t border-rule pt-8">
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
                  <h3 className="text-[0.95rem] leading-snug font-bold md:text-[1rem]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[0.85rem] leading-[1.85] text-muted">
                    {feature.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-rule pt-8">
            <SectionLabel>Domain Applications</SectionLabel>
            <p className="mt-5 max-w-2xl font-fraunces text-[1rem] leading-[1.8] text-muted md:text-[1.1rem]">
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
                  <h3 className="text-[0.95rem] leading-snug font-bold md:text-[1rem]">
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
            <div className="mt-10 border-t border-rule pt-8">
              <SectionLabel>Innovation Vision</SectionLabel>
              <blockquote className="mt-6 max-w-3xl font-playfair text-[1rem] leading-[1.8] text-muted italic md:text-[1.15rem]">
                {patentsContent.vision}
              </blockquote>
              <div className="mt-8 border-t border-rule">
                <div className="border-b border-rule py-5">
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
                      <span className="font-mono text-[0.55rem] tracking-[0.16em] text-accent uppercase">
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
                className="mt-8 mr-3 inline-flex items-center gap-3 border border-ink px-6 py-3.5 font-mono text-[0.65rem] tracking-[0.2em] text-ink uppercase no-underline transition-all duration-200 ease-linear hover:border-accent hover:text-accent md:px-7"
              >
                View Design Patent
                <span>
                  <BsArrowRight />
                </span>
              </Link>
              <Link
                href="https://tekglove.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 bg-ink px-6 py-3.5 font-mono text-[0.65rem] tracking-[0.2em] text-paper uppercase no-underline transition-all duration-200 ease-linear hover:bg-accent md:mt-8 md:px-7"
              >
                Visit TekGlove
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          </FadeIn>
        </main>

        <div className="hidden bg-rule md:block" />

        <aside className="bg-cream px-6 py-10 md:px-12">
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
                  <figcaption className="mt-3 font-mono text-[0.58rem] tracking-[0.16em] text-muted uppercase">
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
      <h2 className="font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
        {children}
      </h2>
    </FadeIn>
  );
}
