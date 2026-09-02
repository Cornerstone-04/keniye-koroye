"use client";

import { motion } from "motion/react";

type NavbarMobileToggleProps = {
  open: boolean;
  toggleAction: () => void;
};

export function NavbarMobileToggle({
  open,
  toggleAction,
}: NavbarMobileToggleProps) {
  return (
    <button
      className="z-60 flex flex-col gap-1.5 p-1 md:hidden"
      onClick={toggleAction}
      aria-label="Toggle menu"
      aria-expanded={open}
      type="button"
    >
      <motion.span
        className="block h-px w-6 bg-ink"
        animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-px w-6 bg-ink"
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-px w-6 bg-ink"
        animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </button>
  );
}
