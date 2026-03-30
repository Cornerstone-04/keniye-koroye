"use client";

import Link from "next/link";

export function NavbarLogo() {
  return (
    <Link
      href="/"
      className="text-[1.05rem] font-black tracking-widest uppercase no-underline text-ink font-playfair"
    >
      Ken<em className="text-accent italic">I</em>ye
    </Link>
  );
}
