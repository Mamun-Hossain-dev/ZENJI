import type { Metadata } from "next";
import Image from "next/image";
import { RevealBanner } from "@/components/common/RevealBanner";
import { DropCollectionPreview } from "@/components/drop/DropCollectionPreview";
import { DropCountdown } from "@/components/drop/DropCountdown";

export const metadata: Metadata = {
  title: "Awakening Drop",
  description:
    "Awakening is live. Enter the latest ZENJI anime-inspired streetwear drop.",
};

export default function DropPage() {
  return (
    <>
      <RevealBanner>
        <section className="relative flex min-h-[680px] items-center justify-center overflow-hidden bg-black px-5 py-24 text-center md:min-h-[calc(100vh-64px)]">
          <Image
            src="/images/zenji-campaign.png"
            alt="ZENJI Awakening collection campaign"
            fill
            priority
            className="object-cover object-center opacity-55"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/80" />
          <div className="grain absolute inset-0 opacity-35" />

          <div className="relative z-10">
            <p className="mb-7 font-mono text-[9px] font-bold uppercase tracking-[0.42em] text-signal">
              <span className="mr-3 inline-block size-2 rounded-full bg-signal" />{" "}
              Incoming transmission
            </p>
            <h1 className="font-display text-[clamp(4rem,11vw,10.5rem)] font-bold uppercase leading-[0.78] tracking-[-0.055em] text-white">
              Awakening
              <span className="mt-3 block text-signal">Is live.</span>
            </h1>
            <p className="mt-9 font-mono text-[10px] text-white/45">
              The next chapter begins. Are you ready?
            </p>
            <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
              Drop date: 01 Sept 2026
            </p>
          </div>
        </section>
      </RevealBanner>

      <DropCountdown target="2026-09-01T00:00:00+10:00" />
      <DropCollectionPreview />
    </>
  );
}
