import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-5 py-20 text-white md:px-10 md:py-28">
      <div className="grain absolute inset-0 opacity-20" />
      <div aria-hidden className="pointer-events-none absolute right-[-3vw] top-[14rem] font-display text-[28vw] font-bold leading-none text-white/[0.018]">FAQ</div>
      <div className="relative mx-auto max-w-[900px]">
        <header className="mb-16 border-b border-signal pb-8 md:mb-20">
          <h1 className="font-display text-8xl font-bold uppercase leading-none tracking-[-0.06em] md:text-[132px]">FAQ</h1>
          <p className="mt-3 font-mono text-[9px] font-bold uppercase tracking-[0.32em] text-signal">Everything you need to know</p>
        </header>
        <FaqAccordion />
      </div>
    </section>
  );
}
