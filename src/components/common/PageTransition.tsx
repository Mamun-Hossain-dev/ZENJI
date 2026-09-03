"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.div
        key={`route-curtain-${pathname}`}
        aria-hidden
        initial={reduceMotion ? false : { opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.58,
          delay: reduceMotion ? 0 : 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none fixed inset-0 z-[160] bg-[#f7f5f3]"
      />

      <motion.div
        key={pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.68,
          delay: reduceMotion ? 0 : 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
