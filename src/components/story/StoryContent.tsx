"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const facts = [
  ["What Zenji is", "ZENJI is an Australian anime-inspired streetwear label."],
  ["Founded", "ZENJI was founded in 2024."],
  [
    "What we make",
    "Limited-edition graphic tees in heavyweight 240gsm cotton.",
  ],
  ["Shipping", "Australia-wide, with free shipping on orders over A$100."],
  [
    "Restocks",
    "Our pieces are finite. When a drop is gone, it is gone for good.",
  ],
  [
    "Visual language",
    "Samurai discipline, Japanese iconography and original ink artwork.",
  ],
  ["Based in", "Built in Australia and shipped to every state and territory."],
  [
    "Next drop",
    "The Origin Drop is in stock now, with selected pieces at 15% off.",
  ],
];

export function StoryContent() {
  return (
    <div className="relative overflow-hidden bg-black px-5 pb-24 text-white md:px-10 md:pb-32">
      <div className="grain absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-[760px]">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65 }}
          className="mb-24 border-y border-white/15 py-16"
        >
          <p className="font-mono text-[11px] leading-6 text-white/65">
            We design for the dreamers, fighters, creators and outsiders shaping
            their own future.
          </p>
          <blockquote className="mt-8 font-display text-4xl font-bold uppercase leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Wear your story. Wear your spirit. Wear ZENJI.
          </blockquote>
          <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.22em] text-white/30">
            For the dreamers. Fighters. Creators. Outsiders.
          </p>
          <Link
            href="/collection"
            className="mt-9 inline-flex items-center gap-3 border-b border-white pb-2 font-mono text-[9px] font-bold uppercase tracking-widest transition hover:border-signal hover:text-signal"
          >
            Explore the collection <ArrowUpRight className="size-3" />
          </Link>
        </motion.section>

        <motion.section
          id="collaboration"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="font-display text-4xl font-bold uppercase tracking-[-0.03em]">
            About Zenji
          </h2>
          <dl className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {facts.map(([term, description]) => (
              <div key={term} className="border-t border-white/10 pt-4">
                <dt className="font-mono text-[8px] font-bold uppercase tracking-[0.24em] text-signal">
                  {term}
                </dt>
                <dd className="mt-2 font-mono text-[10px] leading-6 text-white/60">
                  {description}
                </dd>
              </div>
            ))}
          </dl>
        </motion.section>
      </div>
    </div>
  );
}
