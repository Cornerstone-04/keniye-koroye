"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { NavbarLogo } from "./navbar-logo";
import { NavbarDesktopLinks } from "./navbar-desktop-links";
import { NavbarMeta } from "./navbar-meta";
import { NavbarMobileToggle } from "./navbar-mobile-toggle";
import { NavbarMobileMenu } from "./navbar-mobile-menu";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-rule bg-paper px-6 py-5 font-mono md:px-12"
      >
        <NavbarLogo />
        <NavbarDesktopLinks pathname={pathname} />
        <NavbarMeta />
        <NavbarMobileToggle
          open={open}
          toggleAction={() => setOpen((prev) => !prev)}
        />
      </motion.nav>

      <NavbarMobileMenu
        open={open}
        pathname={pathname}
        closeAction={() => setOpen(false)}
      />
    </>
  );
}
