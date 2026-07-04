"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const LOADER_DURATION = 2000;
const EXIT_DELAY = 500;

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsLoading(false);
    }, LOADER_DURATION + EXIT_DELAY);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          role="status"
          aria-label="Loading page"
          className="fixed inset-0 z-100 bg-paper text-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex min-h-screen items-center justify-center px-6 py-10 md:px-12">
            <div className="overflow-hidden">
              <p
                aria-hidden="true"
                className="page-loader-word font-black uppercase leading-none font-playfair -tracking-[0.02em]"
                style={{ fontSize: "clamp(3.5rem, 18vw, 6rem)" }}
              >
                Ken<em className="text-accent italic">I</em>YĒ
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
