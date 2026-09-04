"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={ref} className="relative min-h-[680px] overflow-hidden bg-black md:min-h-[calc(100vh-108px)]">
      <motion.div style={{ y: imageY }} className="absolute -inset-y-24 inset-x-0">
        <Image src="/images/zenji-campaign.png" alt="ZENJI campaign models in original graphic streetwear" fill priority className="object-cover object-[61%_center] md:object-center" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
      <div className="grain absolute inset-0 opacity-30" />

      <div className="relative mx-auto flex min-h-[680px] max-w-[1400px] items-end px-5 pb-16 pt-20 md:min-h-[calc(100vh-108px)] md:px-10 md:pb-20">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
          <p className="mb-4 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-signal">
            <span className="size-2 rounded-full bg-signal" /> The_Zenji_Ethos // 001
          </p>
          <h1 className="max-w-[660px] font-display text-[48px] font-bold uppercase leading-[0.84] tracking-[-0.055em] text-white sm:text-[76px] md:text-[132px]">
            Wear your <span className="text-signal">story</span>
          </h1>
          <div className="mt-8 flex items-end gap-8">
            <Link href="#drops" className="group inline-flex h-14 items-center gap-8 bg-signal px-6 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black">
              Shop the drop <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </Link>
            <span className="hidden pb-1 font-mono text-[9px] uppercase tracking-widest text-white/45 sm:block">Sydney / Tokyo<br />AW—026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
