"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { navLinks } from "./nav-links";

type NavbarDesktopLinksProps = {
  pathname: string;
};

export function NavbarDesktopLinks({ pathname }: NavbarDesktopLinksProps) {
  return (
    <ul className="hidden md:flex gap-5 lg:gap-8 xl:gap-10 list-none">
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
                  className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
