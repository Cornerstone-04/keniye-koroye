"use client";

import { useState } from "react";
import Image from "next/image";

export function GTVJourneyImage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden border border-rule bg-cream md:h-full md:aspect-auto">
      <div
        aria-hidden="true"
        className={`image-skeleton absolute inset-0 transition-opacity duration-500 ${
          imageLoaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src="/images/keniye-gtv.jpeg"
        alt="Keniyē Koroye during his Global Talent Visa journey"
        fill
        sizes="(min-width: 768px) 40vw, 100vw"
        onLoad={() => setImageLoaded(true)}
        className={`object-cover object-center transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
