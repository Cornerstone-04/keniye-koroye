"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { navLinks } from "./nav-links";
import { itemVariants, overlayVariants, panelVariants } from "./nav-animations";

type NavbarMobileMenuProps = {
  open: boolean;
  pathname: string;
  closeAction: () => void;
};

export function NavbarMobileMenu({
  open,
  pathname,
  closeAction,
}: NavbarMobileMenuProps) {
  const activeIndex = navLinks.findIndex(
    (link) =>
      pathname === link.href ||
      (link.href !== "/" && pathname.startsWith(`${link.href}/`)),
  );
  const displayIndex = activeIndex >= 0 ? `0${activeIndex + 1}` : "01";

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-40 md:hidden"
        >
          <motion.div
            variants={panelVariants}
            className="relative flex min-h-screen flex-col bg-paper text-ink"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_38%)]" />
              {/*nav tracker*/}
              <div className="absolute right-5 top-28 font-playfair text-[7rem] leading-none italic text-ink/5">
                {displayIndex}
              </div>
            </div>

            <div className="relative flex min-h-screen flex-col justify-between px-6 pb-8 pt-24">
              <div className="space-y-8">
                <nav aria-label="Mobile Navigation">
                  <ul className="flex flex-col gap-4">
                    {navLinks.map(({ href, label }, index) => {
                      const active =
                        pathname === href ||
                        (href !== "/" && pathname.startsWith(`${href}/`));

                      return (
                        <motion.li
                          key={href}
                          variants={itemVariants}
                          className="border-b border-rule/70 pb-4"
                        >
                          <Link
                            href={href}
                            onClick={closeAction}
                            className="group flex items-end justify-between gap-4 no-underline"
                          >
                            <div className="flex items-start gap-4">
                              <span className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                                0{index + 1}
                              </span>

                              <div className="flex flex-col">
                                <span
                                  className={`font-playfair text-[2rem] leading-none tracking-[0.01em] transition-all duration-300 ${
                                    active
                                      ? "text-accent"
                                      : "text-ink group-hover:text-accent"
                                  }`}
                                >
                                  {label}
                                </span>
                              </div>
                            </div>

                            <motion.span
                              initial={false}
                              animate={{
                                x: active ? 0 : -6,
                                opacity: active ? 1 : 0.35,
                              }}
                              transition={{ duration: 0.25 }}
                              className={`text-lg ${
                                active ? "text-accent" : "text-muted"
                              }`}
                            >
                              ↗
                            </motion.span>
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex items-end justify-between gap-6 border-t border-rule pt-6"
              >
                <div className="space-y-2">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                    Vol. I — 2026
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
