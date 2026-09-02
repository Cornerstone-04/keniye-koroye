"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { workDetailEase, workDetailViewport } from "./work-detail-shared";

type FeatureImageProps = {
  image?: string;
  title: string;
  bg: string;
  priority?: boolean;
};

export function WorkDetailFeatureImage({
  image,
  title,
  bg,
  priority = false,
}: FeatureImageProps) {
  return (
    <section className="border-b border-rule px-6 py-8 md:px-12 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={workDetailViewport}
        transition={{ duration: 0.65, ease: workDetailEase }}
        className="relative flex min-h-88 items-center justify-center overflow-hidden p-6 md:min-h-144 md:p-10"
        style={{ background: bg }}
      >
        {image ? (
          <div className="relative h-[min(68vh,42rem)] w-full max-w-312">
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

type GalleryImageProps = {
  image: string;
  title: string;
  expanded?: boolean;
};

export function WorkDetailGalleryImage({
  image,
  title,
  expanded = false,
}: GalleryImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={workDetailViewport}
      transition={{ duration: 0.55, ease: workDetailEase }}
      className={`relative border-r border-b border-rule bg-cream ${
        expanded ? "min-h-[80vh] md:col-span-2" : "min-h-72 md:min-h-104"
      }`}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes={expanded ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
        className={`object-contain ${expanded ? "p-2 md:p-6" : "p-4 md:p-6"}`}
      />
    </motion.div>
  );
}
