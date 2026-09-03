import type { Metadata } from "next";
import { LookbookGrid } from "@/components/lookbook/LookbookGrid";
import { LookbookHeader } from "@/components/lookbook/LookbookHeader";
import { RevealBanner } from "@/components/common/RevealBanner";

export const metadata: Metadata = { title: "Lookbook" };

export default function LookbookPage() {
  return (
    <>
      <RevealBanner>
        <LookbookHeader />
      </RevealBanner>
      <LookbookGrid />
    </>
  );
}
