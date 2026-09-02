"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { navLinks } from "./nav-links";

type NavbarDesktopLinksProps = {
  pathname: string;
};

export function NavbarDesktopLinks({ pathname }: NavbarDesktopLinksProps) {
  return (
    <ul className="hidden list-none gap-5 md:flex lg:gap-8 xl:gap-10">
      {navLinks.map(({ href, label }) => {
        const active =
          pathname === href ||
          (href !== "/" && pathname.startsWith(`${href}/`));

        return (
          <li key={href}>
            <Link
              href={href}
              className={`relative text-[0.65rem] tracking-[0.18em] uppercase no-underline transition-colors duration-200 ${
                active ? "text-ink" : "text-muted"
              }`}
            >
              {label}
              {active && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute right-0 -bottom-1 left-0 h-px bg-accent"
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
