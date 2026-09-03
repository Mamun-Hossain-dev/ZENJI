import type { Metadata } from "next";
import { CollectionCatalog } from "@/components/collection/CollectionCatalog";
import { RevealBanner } from "@/components/common/RevealBanner";

export const metadata: Metadata = { title: "Collection" };

export default function CollectionPage() {
  return (
    <>
      <RevealBanner>
        <header className="relative overflow-hidden bg-[#080202] px-5 text-white md:px-10">
          <div className="grain absolute inset-0 opacity-20" />
          <div className="relative mx-auto flex min-h-[520px] max-w-[1640px] flex-col justify-center py-20 md:min-h-[570px] md:py-24">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-signal">
              The_Origin_Drop // Complete Archive
            </p>

            <div className="mt-6 flex items-center justify-between gap-10">
              <div>
                <h1 className="max-w-[1080px] font-display text-[58px] font-bold uppercase leading-[0.88] tracking-[-0.055em] sm:text-7xl md:text-[92px] lg:text-[108px]">
                  Anime graphic tees —<br />
                  The full collection
                </h1>
                <p className="mt-7 font-mono text-[10px] text-white/40 md:text-xs">
                  Every drop. Every arc. Documented.
                </p>
              </div>
              <span
                aria-hidden
                className="hidden shrink-0 font-display text-[230px] font-bold leading-none tracking-[-0.08em] text-white/[0.035] xl:block"
              >
                10
              </span>
            </div>

            <div className="mt-12 flex justify-between border-t border-white/15 pt-6 font-mono text-[8px] uppercase tracking-wider text-white/30 md:mt-14">
              <span>10 pieces // The_Origin_Drop // Est_2024</span>
              <span className="hidden sm:block">Australia-wide shipping</span>
            </div>
          </div>
        </header>
      </RevealBanner>
      <CollectionCatalog />
    </>
  );
}
