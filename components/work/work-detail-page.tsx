"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { projects, type Project } from "@/lib/data";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { WorkPills } from "./work-pills";

type WorkDetailPageProps = {
  project: Project;
};

export function WorkDetailPage({ project }: WorkDetailPageProps) {
  const details = project.productDetails;
  const heroImage = details?.heroImage || project.thumbnail;
  const relatedProjects = details?.relatedSlugs
    ? details.relatedSlugs
        .map((slug) => projects.find((item) => item.slug === slug))
        .filter((item): item is Project => Boolean(item))
    : [];

  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <section className="px-6 md:px-12 pt-10 pb-8 border-b-[3px] border-double border-ink">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <Link
            href="/work"
            className="text-[0.6rem] tracking-[0.25em] uppercase text-accent font-mono no-underline inline-flex gap-2 items-center"
          >
            <BsArrowLeft /> Back to Work
          </Link>
          <span className="flex-1 h-px bg-rule" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="grid gap-8 md:grid-cols-[1.4fr_0.8fr]"
        >
          <div>
            <div className="mb-3 text-[0.62rem] tracking-[0.18em] uppercase text-muted font-mono">
              {project.year} · {project.client}
            </div>

            <h1
              className="font-black leading-[0.95] font-playfair -tracking-[0.02em]"
              style={{ fontSize: "clamp(2.2rem, 8vw, 5.5rem)" }}
            >
              {project.title}
            </h1>

            {details?.summary || project.desc ? (
              <p className="mt-4 max-w-[60ch] text-[0.95rem] md:text-[1rem] leading-[1.8] text-[#3a3730] font-fraunces">
                {details?.summary || project.desc}
              </p>
            ) : null}
          </div>

          <div className="md:pt-2">
            <div className="space-y-4 border border-rule p-5">
              <div>
                <div className="text-[0.58rem] tracking-[0.18em] uppercase text-muted font-mono">
                  Category
                </div>
                <div className="mt-1 text-[0.95rem] font-fraunces">
                  {project.tagLabel}
                </div>
              </div>

              <div>
                <div className="text-[0.58rem] tracking-[0.18em] uppercase text-muted font-mono">
                  Status
                </div>
                <div className="mt-1 text-[0.95rem] font-fraunces">
                  {details?.status || "Selected Work"}
                </div>
              </div>

              {details?.role ? (
                <div>
                  <div className="text-[0.58rem] tracking-[0.18em] uppercase text-muted font-mono">
                    Role
                  </div>
                  <div className="mt-1 text-[0.95rem] font-fraunces">
                    {details.role}
                  </div>
                </div>
              ) : null}

              {details?.context ? (
                <div>
                  <div className="text-[0.58rem] tracking-[0.18em] uppercase text-muted font-mono">
                    Context
                  </div>
                  <div className="mt-1 text-[0.95rem] font-fraunces">
                    {details.context}
                  </div>
                </div>
              ) : null}

              <div>
                <div className="text-[0.58rem] tracking-[0.18em] uppercase text-muted font-mono">
                  Focus
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(details?.disciplines || project.pills).map((pill) => (
                    <span
                      key={pill}
                      className="px-2 py-[0.2rem] text-[0.58rem] tracking-[0.12em] uppercase border border-rule text-muted font-mono"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
        <div className="border-b lg:sticky lg:top-14.25 lg:min-h-[calc(100vh-3.5625rem)] lg:self-start lg:border-b-0 lg:border-r border-rule">
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex min-h-[20rem] items-center justify-center p-6 md:p-10 lg:min-h-[calc(100vh-3.5625rem)]"
            style={{ background: project.bg }}
          >
            {heroImage ? (
              <div className="relative h-[min(62vh,34rem)] w-full max-w-[48rem]">
                <Image
                  src={heroImage}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  priority
                />
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center font-playfair text-[6rem] text-white/10">
                {project.num}
              </div>
            )}

            <span className="absolute top-4 left-4 text-[0.58rem] tracking-[0.15em] uppercase text-white/40 font-mono">
              {project.num}
            </span>
          </motion.div>
        </div>

        <div className="px-6 md:px-12 py-8 md:py-10">
          <div className="space-y-8">
            {details?.headline ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
              >
                <p className="font-playfair italic text-[1rem] md:text-[1.15rem] leading-[1.8] text-muted">
                  {details.headline}
                </p>
              </motion.div>
            ) : null}

            {details?.sections?.length
              ? details.sections.map((section, index) => (
                  <DetailBlock
                    key={`${section.label}-${section.title || index}`}
                    label={section.label}
                    title={section.title}
                    content={section.body}
                    delay={0.15 + index * 0.06}
                  />
                ))
              : (
                  <>
                    <DetailBlock
                      label="Overview"
                      content={project.overview}
                      delay={0.15}
                    />
                    <DetailBlock
                      label="Challenge"
                      content={project.challenge}
                      delay={0.22}
                    />
                    <DetailBlock
                      label="Solution"
                      content={project.solution}
                      delay={0.29}
                    />
                    <DetailBlock
                      label="Impact"
                      content={project.impact}
                      delay={0.36}
                    />
                  </>
                )}

            {details?.features?.length ? (
              <ListBlock label="Features" items={details.features} delay={0.36} />
            ) : null}

            {details?.technicalNotes?.length ? (
              <ListBlock
                label="Technical Notes"
                items={details.technicalNotes}
                delay={0.42}
              />
            ) : null}

            {details?.culturalReferences?.length ? (
              <ListBlock
                label="Cultural References"
                items={details.culturalReferences}
                delay={0.48}
              />
            ) : null}

            {details?.externalLinks?.length || details?.shopUrl ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.52 }}
                className="pt-6 border-t border-rule"
              >
                <div className="text-[0.62rem] tracking-[0.2em] uppercase mb-5 text-accent font-mono">
                  Links
                </div>
                <div className="flex flex-wrap gap-3">
                  {details.shopUrl ? (
                    <ExternalButton href={details.shopUrl}>
                      Shop This Object
                    </ExternalButton>
                  ) : null}
                  {details.externalLinks?.map((item) => (
                    <ExternalButton key={item.href} href={item.href}>
                      {item.label}
                    </ExternalButton>
                  ))}
                </div>
              </motion.div>
            ) : null}

            {project.outcomes?.length ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.42 }}
                className="pt-6 border-t border-rule"
              >
                <div className="text-[0.62rem] tracking-[0.2em] uppercase mb-5 text-accent font-mono">
                  Outcomes
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {project.outcomes.map((outcome) => (
                    <div
                      key={`${outcome.pct}-${outcome.label}`}
                      className="border border-rule px-3 py-4 text-center"
                    >
                      <div className="font-black text-[1.15rem] font-playfair">
                        {outcome.pct}
                      </div>
                      <div className="mt-1 text-[0.55rem] leading-tight text-muted font-mono">
                        {outcome.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </section>

      {details?.gallery?.length ? (
        <section className="border-t border-rule">
          <div className="px-6 md:px-12 py-8 md:py-10 border-b border-rule">
            <div className="flex items-center gap-3">
              <span className="text-[0.62rem] tracking-[0.2em] uppercase text-accent font-mono">
                Gallery
              </span>
              <span className="flex-1 h-px bg-rule" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {details.gallery.map((image) => (
              <div
                key={image}
                className="relative aspect-[4/3] border-b border-r border-rule bg-cream"
              >
                <Image
                  src={image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {relatedProjects.length ? (
        <section className="border-t border-rule">
          <div className="px-6 md:px-12 py-8 md:py-10 border-b border-rule">
            <div className="flex items-center gap-3">
              <span className="text-[0.62rem] tracking-[0.2em] uppercase text-accent font-mono">
                Related Work
              </span>
              <span className="flex-1 h-px bg-rule" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="group border-b border-r border-rule p-6 no-underline transition-colors hover:bg-cream"
              >
                <p className="text-[0.58rem] tracking-[0.16em] uppercase text-muted font-mono">
                  {item.tagLabel}
                </p>
                <h2 className="mt-4 font-playfair text-[1.2rem] font-bold leading-tight text-ink transition-colors group-hover:text-accent">
                  {item.title}
                </h2>
                <WorkPills pills={item.pills} />
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

type DetailBlockProps = {
  label: string;
  title?: string;
  content?: string;
  delay?: number;
};

function DetailBlock({ label, title, content, delay = 0 }: DetailBlockProps) {
  if (!content) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[0.62rem] tracking-[0.2em] uppercase text-accent font-mono">
          {label}
        </span>
        <span className="flex-1 h-px bg-rule" />
      </div>

      {title ? (
        <h2 className="mb-3 text-[0.95rem] md:text-[1rem] font-bold leading-snug">
          {title}
        </h2>
      ) : null}
      <p className="text-[0.9rem] leading-[1.85] text-[#3a3730] font-fraunces">
        {content}
      </p>
    </motion.div>
  );
}

function ListBlock({
  label,
  items,
  delay = 0,
}: {
  label: string;
  items: string[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className="pt-6 border-t border-rule"
    >
      <div className="text-[0.62rem] tracking-[0.2em] uppercase mb-5 text-accent font-mono">
        {label}
      </div>
      <div className="border-t border-rule">
        {items.map((item) => (
          <div key={item} className="border-b border-rule py-3">
            <p className="text-[0.82rem] leading-snug text-muted">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ExternalButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase font-mono no-underline text-paper bg-ink px-6 py-3.5 transition-all ease-linear duration-200 hover:bg-accent"
    >
      {children}
      <span>
        <BsArrowRight />
      </span>
    </a>
  );
}
