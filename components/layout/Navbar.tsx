"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
        style={{
          background: "var(--paper)",
          borderBottom: "1px solid var(--rule)",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        <Link
          href="/"
          className="text-[1.05rem] font-black tracking-widest uppercase no-underline"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--ink)",
          }}
        >
          Keniye
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="relative text-[0.65rem] tracking-[0.18em] uppercase no-underline transition-colors duration-200"
                  style={{ color: active ? "var(--ink)" : "var(--muted)" }}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <span
          className="hidden md:block text-[0.6rem] tracking-[0.12em]"
          style={{ color: "var(--muted)" }}
        >
          Vol. I — 2026
        </span>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.25 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-px w-6"
            style={{ background: "var(--ink)" }}
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px w-6"
            style={{ background: "var(--ink)" }}
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px w-6"
            style={{ background: "var(--ink)" }}
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed top-14.25 left-0 right-0 z-40 px-6 py-6 flex flex-col gap-5"
            style={{
              background: "var(--paper)",
              borderBottom: "3px double var(--ink)",
            }}
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-[0.9rem] tracking-[0.2em] uppercase no-underline"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: pathname === href ? "var(--accent)" : "var(--ink)",
                }}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
