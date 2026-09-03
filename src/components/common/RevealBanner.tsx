"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealBannerProps = {
  children: ReactNode;
  className?: string;
};

export function RevealBanner({ children, className }: RevealBannerProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        backgroundColor: "rgba(200, 200, 200, 0.4)",
      }}
      whileInView={{ opacity: 1, y: 0, backgroundColor: "rgba(0, 0, 0, 1)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn("overflow-hidden", className)}
    >
      {children}
    </motion.div>
  );
}
