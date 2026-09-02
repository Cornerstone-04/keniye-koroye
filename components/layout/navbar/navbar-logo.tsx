"use client";

import Link from "next/link";

export function NavbarLogo() {
  return (
    <Link
      href="/"
      className="font-playfair text-[1.05rem] font-black tracking-widest text-ink uppercase no-underline"
    >
      Ken<em className="text-accent italic">I</em>YĒ
    </Link>
  );
}
