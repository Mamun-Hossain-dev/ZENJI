import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function LatestDrops() {
  return (
    <section id="drops" className="bg-paper px-5 py-20 text-black md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="mb-3 font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-signal">Collection // The_Origin_Drop</p>
            <h2 className="font-display text-6xl font-bold uppercase leading-none tracking-[-0.05em] sm:text-7xl md:text-8xl">Latest_Drops</h2>
          </div>
          <Link href="/lookbook" className="group hidden items-center gap-8 border border-black px-5 py-4 font-mono text-[9px] font-bold uppercase tracking-widest transition hover:bg-black hover:text-white sm:flex">
            View all <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}
        </div>
      </div>
    </section>
  );
}
