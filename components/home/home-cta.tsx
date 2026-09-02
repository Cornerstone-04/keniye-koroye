"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export function HomeCta() {
  return (
    <Link
      href="/work"
      className="inline-flex items-center gap-3 bg-ink px-6 py-3.5 font-mono text-[0.65rem] tracking-[0.2em] text-paper uppercase no-underline transition-colors duration-200 hover:bg-accent md:px-7"
    >
      View Selected Work{" "}
      <span>
        <BsArrowRight />
      </span>
    </Link>
  );
}
