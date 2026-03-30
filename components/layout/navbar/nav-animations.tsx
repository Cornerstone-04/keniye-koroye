import type { Variants } from "motion";

const overlayVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
      when: "beforeChildren" as const,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.22,
      ease: [0.4, 0, 1, 1] as const,
      when: "afterChildren" as const,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const panelVariants: Variants = {
  initial: { y: "-100%" },
  animate: {
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.45,
      ease: [0.7, 0, 0.84, 0] as const,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: 12,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

export { overlayVariants, panelVariants, itemVariants };
