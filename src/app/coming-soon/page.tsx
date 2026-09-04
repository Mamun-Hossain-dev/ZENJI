import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "This ZENJI sector is currently restricted.",
};

export default function ComingSoonPage() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden bg-[#050000] px-5 pb-20 pt-[156px] text-center text-white">
      <div className="grain absolute inset-0 opacity-20" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.035] blur-3xl"
      />

      <div className="relative">
         <h1 className="font-display text-[clamp(4rem,10vw,10rem)] font-bold uppercase leading-none tracking-[-0.055em]">
           Coming Soon
         </h1>
        <p className="mt-5 font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-signal">
          This sector is restricted
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-12 items-center border border-white/70 px-7 font-mono text-[9px] font-bold uppercase tracking-[0.16em] transition hover:border-signal hover:bg-signal"
        >
          Return_to_base
        </Link>
      </div>
    </section>
  );
}
