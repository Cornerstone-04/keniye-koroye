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

const viewport = { once: true, amount: 0.2 };

export function WorkDetailPage({ project }: WorkDetailPageProps) {
  const details = project.productDetails;
  const heroImage = details?.heroImage || project.thumbnail;
  const galleryImages = details?.gallery?.filter((image) => image !== heroImage) || [];
  const relatedProjects = details?.relatedSlugs
    ? details.relatedSlugs
        .map((slug) => projects.find((item) => item.slug === slug))
        .filter((item): item is Project => Boolean(item))
    : [];
  const meta = [
    ["Category", project.tagLabel],
    ["Status", details?.status || "Selected Work"],
    ["Role", details?.role],
    ["Context", details?.context],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <section className="px-6 md:px-12 pt-10 md:pt-14 pb-10 md:pb-14 border-b-[3px] border-double border-ink">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
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
          className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"
        >
          <div>
            <div className="mb-4 text-[0.62rem] tracking-[0.18em] uppercase text-muted font-mono">
              {project.year} / {project.client}
            </div>

            <h1
              className="font-black leading-[0.92] font-playfair"
              style={{ fontSize: "clamp(2.8rem, 10vw, 7rem)" }}
            >
              {project.title}
            </h1>

            {details?.summary || project.desc ? (
              <p className="mt-6 max-w-[62ch] text-[0.95rem] md:text-[1.05rem] leading-[1.85] text-[#3a3730] font-fraunces">
                {details?.summary || project.desc}
              </p>
            ) : null}
          </div>

          <ProjectMeta meta={meta} pills={details?.disciplines || project.pills} />
        </motion.div>
      </section>

      <FeatureImage image={heroImage} title={project.title} bg={project.bg} priority />

      <section className="px-6 md:px-12 py-10 md:py-16 border-b border-rule">
        <div className="">
          {details?.headline ? (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="max-w-[50rem] font-playfair italic text-[1.1rem] md:text-[1.45rem] leading-[1.65] text-muted"
            >
              {details.headline}
            </motion.p>
          ) : null}

          <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {details?.sections?.length
              ? details.sections.map((section, index) => (
                  <DetailBlock
                    key={`${section.label}-${section.title || index}`}
                    label={section.label}
                    title={section.title}
                    content={section.body}
                    delay={0.15 + index * 0.05}
                  />
                ))
              : (
                  <>
                    <DetailBlock label="Overview" content={project.overview} delay={0.15} />
                    <DetailBlock label="Challenge" content={project.challenge} delay={0.2} />
                    <DetailBlock label="Solution" content={project.solution} delay={0.25} />
                    <DetailBlock label="Impact" content={project.impact} delay={0.3} />
                  </>
                )}
          </div>
        </div>
      </section>

      {galleryImages.length ? (
        <section className="border-b border-rule">
          <SectionHeader label="Gallery" />
          <div className="grid grid-cols-1 md:grid-cols-2">
            {galleryImages.map((image) => (
              <GalleryImage
                key={image}
                image={image}
                title={project.title}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="px-6 md:px-12 py-10 md:py-16 border-b border-rule">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          {details?.features?.length ? (
            <ListBlock label="Details" items={details.features} delay={0.12} />
          ) : null}

          {details?.technicalNotes?.length ? (
            <ListBlock
              label="Technical Notes"
              items={details.technicalNotes}
              delay={0.18}
            />
          ) : null}

          {details?.culturalReferences?.length ? (
            <ListBlock
              label="Cultural References"
              items={details.culturalReferences}
              delay={0.24}
            />
          ) : null}

          {project.outcomes?.length ? (
            <OutcomesBlock outcomes={project.outcomes} />
          ) : null}
        </div>
      </section>

      {details?.externalLinks?.length || details?.shopUrl ? (
        <section className="px-6 md:px-12 py-10 md:py-14 border-b border-rule">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[82rem]"
          >
            <div className="text-[0.62rem] tracking-[0.2em] uppercase mb-5 text-accent font-mono">
              Links
            </div>
            <div className="flex flex-wrap gap-3">
              {details.shopUrl ? (
                <ExternalButton href={details.shopUrl}>Shop This Object</ExternalButton>
              ) : null}
              {details.externalLinks?.map((item) => (
                <ExternalButton key={item.href} href={item.href}>
                  {item.label}
                </ExternalButton>
              ))}
            </div>
          </motion.div>
        </section>
      ) : null}

      {relatedProjects.length ? (
        <section className="border-b border-rule">
          <SectionHeader label="Related Work" />
          <div className="grid grid-cols-1 md:grid-cols-3">
            {relatedProjects.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={`/work/${item.slug}`}
                  className="group block h-full border-b border-r border-rule p-6 no-underline transition-colors hover:bg-cream"
                >
                  <p className="text-[0.58rem] tracking-[0.16em] uppercase text-muted font-mono">
                    {item.tagLabel}
                  </p>
                  <h2 className="mt-4 font-playfair text-[1.2rem] font-bold leading-tight text-ink transition-colors group-hover:text-accent">
                    {item.title}
                  </h2>
                  <WorkPills pills={item.pills} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      ) : null}

      {/*<section className="px-6 md:px-12 py-14 md:py-20 bg-ink text-paper">
        <div className="mx-auto flex max-w-[82rem] flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.62rem] tracking-[0.2em] uppercase text-paper/50 font-mono">
              Next
            </p>
            <h2 className="mt-4 max-w-[36rem] font-playfair text-[1.8rem] md:text-[2.6rem] font-black leading-tight">
              Have a project in mind?
            </h2>
          </div>
          <ExternalButton href={personal.bookingUrl}>Book a Meeting</ExternalButton>
        </div>
      </section>*/}
    </div>
  );
}

function ProjectMeta({ meta, pills }: { meta: [string, string][]; pills: string[] }) {
  return (
    <div className="border border-rule">
      <div className="grid grid-cols-2">
        {meta.map(([label, value]) => (
          <div key={label} className="border-b border-r border-rule p-4">
            <div className="text-[0.56rem] tracking-[0.18em] uppercase text-muted font-mono">
              {label}
            </div>
            <div className="mt-1 text-[0.9rem] leading-snug font-fraunces">
              {value}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="text-[0.56rem] tracking-[0.18em] uppercase text-muted font-mono">
          Focus
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {pills.map((pill) => (
            <span
              key={pill}
              className="px-2 py-[0.2rem] text-[0.56rem] tracking-[0.12em] uppercase border border-rule text-muted font-mono"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureImage({
  image,
  title,
  bg,
  priority = false,
}: {
  image?: string;
  title: string;
  bg: string;
  priority?: boolean;
}) {
  return (
    <section className="px-6 md:px-12 py-8 md:py-12 border-b border-rule">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex min-h-[22rem] items-center justify-center overflow-hidden p-6 md:min-h-[36rem] md:p-10"
        style={{ background: bg }}
      >
        {image ? (
          <div className="relative h-[min(68vh,42rem)] w-full max-w-[78rem]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 86vw, 100vw"
              priority={priority}
            />
          </div>
        ) : (
          <div className="font-playfair text-[4rem] text-white/10">{title}</div>
        )}
      </motion.div>
    </section>
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-rule pt-5"
    >
      <div className="mb-4 text-[0.62rem] tracking-[0.2em] uppercase text-accent font-mono">
        {label}
      </div>

      {title ? (
        <h2 className="mb-4 text-[1.05rem] md:text-[1.2rem] font-bold leading-snug">
          {title}
        </h2>
      ) : null}
      <p className="text-[0.9rem] leading-[1.85] text-[#3a3730] font-fraunces">
        {content}
      </p>
    </motion.div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="px-6 md:px-12 py-8 md:py-10 border-b border-rule">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3"
      >
        <span className="text-[0.62rem] tracking-[0.2em] uppercase text-accent font-mono">
          {label}
        </span>
        <span className="flex-1 h-px bg-rule" />
      </motion.div>
    </div>
  );
}

function GalleryImage({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-[18rem] border-b border-r border-rule bg-cream md:min-h-[26rem]"
    >
      <Image src={image} alt={title} fill className="object-contain p-4 md:p-6" />
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="text-[0.62rem] tracking-[0.2em] uppercase mb-5 text-accent font-mono">
        {label}
      </div>
      <div className="border-t border-rule">
        {items.map((item) => (
          <div key={item} className="border-b border-rule py-3">
            <p className="text-[0.84rem] leading-snug text-muted">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function OutcomesBlock({ outcomes }: { outcomes: NonNullable<Project["outcomes"]> }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-2"
    >
      <div className="text-[0.62rem] tracking-[0.2em] uppercase mb-5 text-accent font-mono">
        Outcomes
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-rule">
        {outcomes.map((outcome) => (
          <div key={`${outcome.pct}-${outcome.label}`} className="border-b border-r border-rule py-5 px-5">
            <div className="font-black text-[1.65rem] font-playfair">
              {outcome.pct}
            </div>
            <div className="mt-2 text-[0.72rem] leading-snug text-muted font-mono">
              {outcome.label}
            </div>
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
      className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase font-mono no-underline text-paper bg-accent px-6 py-3.5 transition-all ease-linear duration-200 hover:bg-paper hover:text-ink"
    >
      {children}
      <span>
        <BsArrowRight />
      </span>
    </a>
  );
}
