import { Ethos } from "@/components/home/Ethos";
import { Hero } from "@/components/home/Hero";
import { DropEditorial } from "@/components/home/DropEditorial";
import { LatestDrops } from "@/components/home/LatestDrops";
import { SaleShowcase } from "@/components/home/SaleShowcase";
import { RevealBanner } from "@/components/common/RevealBanner";

export default function HomePage() {
  return (
    <>
      <RevealBanner>
        <Hero />
      </RevealBanner>
      <DropEditorial />
      <SaleShowcase />
      <LatestDrops />
      <RevealBanner>
        <Ethos />
      </RevealBanner>
    </>
  );
}
