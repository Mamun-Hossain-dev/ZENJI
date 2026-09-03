"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { productSlug, products } from "@/lib/products";
import { cn } from "@/lib/utils";

type Filter = "ALL" | "FRONT" | "BACK" | "ON MODEL";
const filters: Filter[] = ["ALL", "FRONT", "BACK", "ON MODEL"];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 74,
    boxShadow: "0 28px 65px rgba(255, 255, 255, 0.92)",
  },
  visible: {
    opacity: 1,
    y: 0,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  },
  exit: { opacity: 0, y: 24, transition: { duration: 0.25 } },
};

const rowSpans = [
  "md:row-span-6",
  "md:row-span-7",
  "md:row-span-6",
  "md:row-span-7",
];
const imagePositions = [
  "object-center",
  "object-[50%_28%]",
  "object-[48%_22%]",
  "object-[52%_34%]",
];

const editorial = Array.from({ length: 20 }, (_, index) => ({
  id: `editorial-${index + 1}`,
  product: products[index % products.length],
  className: rowSpans[index % rowSpans.length],
  position: imagePositions[index % imagePositions.length],
}));

export function LookbookGrid() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const items =
    filter === "ALL"
      ? editorial
      : editorial.filter(({ product }) => product.view === filter);

  return (
    <section className="bg-[#f5f3f0] text-black">
      <div className="sticky top-[64px] z-30 border-b border-black/15 bg-[#f5f3f0]/95 px-5 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3">
          <div className="flex gap-2 overflow-x-auto">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={cn(
                  "shrink-0 border border-black/20 px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-wider transition",
                  filter === item
                    ? "border-black bg-black text-white"
                    : "hover:border-black",
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <span className="shrink-0 font-mono text-[8px] uppercase tracking-widest text-black/40">
            {items.length} images
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-5 md:px-10 md:py-10">
        <motion.div
          layout
          className="grid auto-rows-[80px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map(({ id, product, className, position }, index) => (
              <motion.article
                layout
                key={id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.16 }}
                transition={{
                  duration: 0.72,
                  delay: (index % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                exit="exit"
                className={cn(
                  "lookbook-card-shadow group relative row-span-6 min-h-[480px] overflow-hidden bg-white",
                  className,
                )}
              >
                <Image
                  src={
                    product.view === "BACK"
                      ? product.backImage
                      : product.frontImage
                  }
                  alt={`${product.name} ${product.view.toLowerCase()} editorial`}
                  fill
                  className={cn(
                    "object-cover transition duration-700 group-hover:scale-[1.03]",
                    position,
                  )}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/15 opacity-0 transition group-hover:opacity-80" />
                <span className="absolute left-5 top-5 z-10 font-mono text-[8px] font-bold uppercase tracking-widest text-white drop-shadow-md">
                  {product.tag === "SALE" ? "Sale" : "New_Arrival"}
                </span>
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h2 className="font-display text-2xl font-bold uppercase">
                    {product.name}
                  </h2>
                  <p className="mt-1 font-mono text-[8px] uppercase tracking-widest text-white/55">
                    {product.view}
                  </p>
                  <Link
                    href={`/drop/${productSlug(product.name)}`}
                    className="mt-4 inline-flex items-center gap-3 font-mono text-[8px] font-bold uppercase tracking-widest text-signal"
                  >
                    View product <ArrowUpRight className="size-3" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
