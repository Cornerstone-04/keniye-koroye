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
    <section className="px-6 md:px-12 py-8 md:py-12 border-b border-rule">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={workDetailViewport}
        transition={{ duration: 0.65, ease: workDetailEase }}
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

type GalleryImageProps = {
  image: string;
  title: string;
};

export function WorkDetailGalleryImage({ image, title }: GalleryImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={workDetailViewport}
      transition={{ duration: 0.55, ease: workDetailEase }}
      className="relative min-h-[18rem] border-b border-r border-rule bg-cream md:min-h-[26rem]"
    >
      <Image src={image} alt={title} fill className="object-contain p-4 md:p-6" />
    </motion.div>
  );
}
