"use client";

import { motion } from "framer-motion";

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function LookbookHeader() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 text-white md:px-10 md:py-32">
      <div className="grain absolute inset-0 opacity-25" />
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto max-w-[1400px]"
      >
        <motion.p
          variants={textVariants}
          className="font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-signal"
        >
          The_Origin_Drop // Editorial
        </motion.p>
        <motion.div
          variants={textVariants}
          className="mt-5 flex items-end justify-between gap-8"
        >
          <h1 className="max-w-[950px] font-display text-[68px] font-bold uppercase leading-[0.86] tracking-[-0.06em] sm:text-8xl md:text-[132px]">
            Anime Streetwear —<br />
            Look Book
          </h1>
          <span className="hidden font-display text-[190px] font-bold leading-none tracking-[-0.08em] text-white/[0.045] xl:block">
            026
          </span>
        </motion.div>
        <motion.p
          variants={textVariants}
          className="mt-8 font-mono text-[11px] text-white/40"
        >
          The Origin Drop, The Full Visual Archive
        </motion.p>
        <motion.div
          variants={textVariants}
          className="mt-12 flex justify-between border-t border-white/15 pt-5 font-mono text-[8px] uppercase tracking-wider text-white/30"
        >
          <span>20 pieces // The_Origin_Drop</span>
          <span>Anime streetwear // Australia</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
