"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { projects, type Project } from "@/lib/data";
import { BsArrowLeft } from "react-icons/bs";
import {
  WorkDetailBlock,
  WorkDetailListBlock,
  WorkDetailOutcomesBlock,
  WorkDetailSectionHeader,
} from "./detail/work-detail-blocks";
import { WorkDetailLinks } from "./detail/work-detail-actions";
import {
  WorkDetailFeatureImage,
  WorkDetailGalleryImage,
} from "./detail/work-detail-media";
import { WorkDetailMeta } from "./detail/work-detail-meta";
import { WorkDetailRelated } from "./detail/work-detail-related";

type WorkDetailPageProps = {
  project: Project;
};

export function WorkDetailPage({ project }: WorkDetailPageProps) {
  const details = project.productDetails;
  const heroImage = details?.heroImage || project.thumbnail;
  const galleryImages =
    details?.gallery?.filter((image) => image !== heroImage) || [];
  const relatedProjects = details?.relatedSlugs
    ? details.relatedSlugs
        .map((slug) => projects.find((item) => item.slug === slug))
        .filter((item): item is Project => Boolean(item))
    : [];
  const detailGroups =
    details?.detailGroups ||
    [
      details?.features?.length
        ? { label: "Details", items: details.features }
        : undefined,
      details?.technicalNotes?.length
        ? { label: "Technical Notes", items: details.technicalNotes }
        : undefined,
      details?.culturalReferences?.length
        ? {
            label: "Cultural References",
            items: details.culturalReferences,
          }
        : undefined,
    ].filter((group): group is { label: string; items: string[] } =>
      Boolean(group),
    );
  const meta = [
    ["Category", project.tagLabel],
    ["Status", details?.status || "Selected Work"],
    ["Role", details?.role],
    ["Context", details?.context],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <div className="min-h-screen bg-paper pt-14.25">
      <section className="border-b-[3px] border-double border-ink px-6 pt-10 pb-10 md:px-12 md:pt-14 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.25em] text-accent uppercase no-underline"
          >
            <BsArrowLeft /> Back to Work
          </Link>
          <span className="h-px flex-1 bg-rule" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"
        >
          <div>
            <div className="mb-4 font-mono text-[0.62rem] tracking-[0.18em] text-muted uppercase">
              {project.year} / {project.client}
            </div>

            <h1
              className="font-playfair leading-[0.92] font-black"
              style={{ fontSize: "clamp(2.2rem, 8vw, 5.5rem)" }}
            >
              {project.title}
            </h1>

            {details?.summary || project.desc ? (
              <p className="mt-6 max-w-[62ch] font-fraunces text-[0.95rem] leading-[1.85] text-[#3a3730] md:text-[1.05rem]">
                {details?.summary || project.desc}
              </p>
            ) : null}
          </div>

          <WorkDetailMeta
            meta={meta}
            pills={details?.disciplines || project.pills}
          />
        </motion.div>
      </section>

      <WorkDetailFeatureImage
        image={heroImage}
        title={project.title}
        bg={project.bg}
        priority
      />

      <section className="border-b border-rule px-6 py-10 md:px-12 md:py-16">
        <div>
          {details?.headline ? (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="max-w-200 font-playfair text-[1.1rem] leading-[1.65] text-muted italic md:text-[1.45rem]"
            >
              {details.headline}
            </motion.p>
          ) : null}

          <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {details?.sections?.length ? (
              details.sections.map((section, index) => (
                <WorkDetailBlock
                  key={`${section.label}-${section.title || index}`}
                  label={section.label}
                  title={section.title}
                  content={section.body}
                  delay={0.15 + index * 0.05}
                />
              ))
            ) : (
              <>
                <WorkDetailBlock
                  label="Overview"
                  content={project.overview}
                  delay={0.15}
                />
                <WorkDetailBlock
                  label="Challenge"
                  content={project.challenge}
                  delay={0.2}
                />
                <WorkDetailBlock
                  label="Solution"
                  content={project.solution}
                  delay={0.25}
                />
                <WorkDetailBlock
                  label="Impact"
                  content={project.impact}
                  delay={0.3}
                />
              </>
            )}
          </div>
        </div>
      </section>

      {galleryImages.length ? (
        <section className="border-b border-rule">
          <WorkDetailSectionHeader label="Gallery" />
          <div className="grid grid-cols-1 md:grid-cols-2">
            {galleryImages.map((image) => (
              <WorkDetailGalleryImage
                key={image}
                image={image}
                title={project.title}
                expanded={galleryImages.length === 1}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-b border-rule px-6 py-10 md:px-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          {detailGroups.map((group, index) => (
            <WorkDetailListBlock
              key={group.label}
              label={group.label}
              items={group.items}
              delay={0.12 + index * 0.06}
            />
          ))}

          {project.outcomes?.length ? (
            <WorkDetailOutcomesBlock outcomes={project.outcomes} />
          ) : null}
        </div>
      </section>

      <WorkDetailLinks
        shopUrl={details?.shopUrl}
        links={details?.externalLinks}
      />
      <WorkDetailRelated projects={relatedProjects} />
    </div>
  );
}
