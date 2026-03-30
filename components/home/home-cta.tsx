"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export function HomeCta() {
  return (
    <Link
      href="/work"
      className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase font-mono no-underline text-paper bg-ink px-6 md:px-7 py-3.5 transition-colors duration-200 hover:bg-accent"
    >
      View Selected Work{" "}
      <span>
        <BsArrowRight />
      </span>
    </Link>
  );
}
