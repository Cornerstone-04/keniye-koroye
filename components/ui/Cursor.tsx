"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Dot follows instantly
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

  // Ring follows with lag
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const addHover = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove", move);
    // Re-attach on DOM changes
    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });
    addHover();

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-9999 rounded-full bg-accent -translate-x-[50%] -translate-y-[50%] ring-1 ring-paper shadow-[0_0_0_2px_rgba(13,13,11,0.7),0_2px_8px_rgba(13,13,11,0.35)]"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          width: 12,
          height: 12,
          scale: hovered ? 1.15 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Ring */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-9998 rounded-full border border-paper bg-paper/10 backdrop-blur-[1px] shadow-[0_0_0_1px_rgba(13,13,11,0.75),0_2px_10px_rgba(13,13,11,0.3)]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: 36,
          height: 36,
          scale: hovered ? 1.12 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
