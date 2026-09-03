"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Ethos() {
  return (
    <section id="ethos" className="relative min-h-[760px] overflow-hidden bg-black text-white md:min-h-[900px]">
      <Image src="/images/zenji-campaign.png" alt="ZENJI original campaign editorial" fill className="object-cover object-[68%_center] opacity-55 md:object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      <div className="grain absolute inset-0 opacity-30" />

      <motion.div
        initial={{ opacity: 0, x: -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto flex min-h-[760px] max-w-[1400px] items-center px-5 py-24 md:min-h-[900px] md:px-10"
      >
        <div className="max-w-[480px]">
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-signal">Manifesto_001</p>
          <div className="my-7 h-px w-16 bg-signal" />
          <h2 className="font-display text-7xl font-bold uppercase leading-[0.88] tracking-[-0.05em] sm:text-8xl">
            The <span className="text-signal">Zenji</span> Ethos
          </h2>
          <p className="mt-9 max-w-md font-mono text-[11px] leading-7 text-white/65">
            We exist at the intersection of technical precision and cultural expression. Our garments are engineered for those navigating an increasingly fragmented world, built from Japanese craftsmanship, anime culture and modern Australian streetwear.
          </p>
          <div className="mt-10 flex gap-10 border-t border-white/20 pt-5 font-mono text-[8px] uppercase tracking-widest text-white/35">
            <span>Cut / Sydney</span><span>Visual / Tokyo</span><span>Drop / 001</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
