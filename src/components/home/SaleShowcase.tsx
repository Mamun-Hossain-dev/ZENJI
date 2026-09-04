"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { productSlug, products, type Product } from "@/lib/products";

const saleProducts = [products[2], products[0], products[3]];

type StackingCardProps = {
  product: Product;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function StackingCard({ product, index, total, progress }: StackingCardProps) {
  const isLast = index === total - 1;
  const nextCardPosition = isLast ? 1 : (index + 1) / (total - 1);
  const transformStart = Math.max(0, nextCardPosition - 0.2);
  const scale = useTransform(
    progress,
    [transformStart, nextCardPosition],
    [1, isLast ? 1 : 0.9],
  );
  const translateY = useTransform(
    progress,
    [transformStart, nextCardPosition],
    [0, isLast ? 0 : -72],
  );

  return (
    <article
      className="sticky top-0 flex h-screen items-center justify-center"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, y: translateY }}
        className="relative h-[74vh] min-h-[580px] w-full overflow-hidden border border-black/20 border-t-[3px] border-t-signal bg-[#d9d6d0] shadow-[0_-14px_48px_rgba(0,0,0,.18)] sm:w-[96%] md:h-[80vh] md:max-h-[900px] md:w-[88%]"
      >
        <Image
          src={product.frontImage}
          alt={`${product.name} sale editorial`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 88vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-signal/[0.045] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />
        <div className="grain absolute inset-0 opacity-20" />

        <div className="absolute left-5 top-5 flex items-center gap-3 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white">
          <span className="size-2 rounded-full bg-signal" /> Drop_00{index + 1}
        </div>
        <div className="absolute right-5 top-5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/60">
          0{index + 1} / 0{total}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-white md:p-9">
          <div>
            <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.2em] text-signal">
              Collection // The_Origin_Drop
            </p>
            <h3 className="font-display text-4xl font-bold uppercase leading-none sm:text-5xl md:text-6xl">
              {product.name}
            </h3>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-widest text-white/55">
              Limited release · {product.price}
            </p>
          </div>
          <Link
            href={`/drop/${productSlug(product.name)}`}
            aria-label={`View ${product.name}`}
            className="grid size-12 shrink-0 place-items-center border border-white/50 transition hover:border-signal hover:bg-signal md:size-14"
          >
            <ArrowUpRight className="size-5" />
          </Link>
        </div>
      </motion.div>
    </article>
  );
}

export function SaleShowcase() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="collection"
      className="relative bg-[#f5f3f0] px-5 pt-20 text-black md:px-10 md:pt-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <header className="relative z-10 flex items-end justify-between gap-6 pb-8 md:pb-14">
          <div>
            <p className="mb-3 font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-signal">
              Collection // The_Origin_Drop
            </p>
            <h2 className="font-display text-5xl font-bold uppercase leading-none tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[112px]">
              Sale
            </h2>
          </div>
          <Link
            href="/collection"
            className="hidden items-center gap-8 border border-black px-5 py-4 font-mono text-[9px] font-bold uppercase tracking-widest transition hover:bg-black hover:text-white sm:flex"
          >
            View all <ArrowUpRight className="size-4" />
          </Link>
        </header>

        <div ref={stackRef} className="relative -mx-5 md:-mx-10">
          <span
            aria-hidden
            className="absolute left-4 top-20 z-20 hidden -rotate-90 font-mono text-[8px] uppercase tracking-[0.35em] text-black/30 xl:block"
          >
            Scroll to reveal
          </span>
          {saleProducts.map((product, index) => (
            <StackingCard
              key={product.name}
              product={product}
              index={index}
              total={saleProducts.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
