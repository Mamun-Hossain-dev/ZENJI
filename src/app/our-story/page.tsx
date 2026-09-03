import type { Metadata } from "next";
import { StoryContent } from "@/components/story/StoryContent";
import { StoryBanner } from "@/components/story/StoryBanner";
import { RevealBanner } from "@/components/common/RevealBanner";

export const metadata: Metadata = { title: "Our Story" };

export default function OurStoryPage() {
  return (
    <>
      <RevealBanner>
        <StoryBanner />
      </RevealBanner>
      <StoryContent />
    </>
  );
}
