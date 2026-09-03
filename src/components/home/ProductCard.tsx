"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { productSlug, type Product } from "@/lib/products";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className="group min-w-0"
    >
      <Link
        href={`/drop/${productSlug(product.name)}`}
        aria-label={`View ${product.name}`}
        className="relative block aspect-[3/4] overflow-hidden border border-black/15 bg-[#dedbd5]"
      >
        <Image
          src={product.frontImage}
          alt={`${product.name} front`}
          fill
          priority={index < 2}
          className="object-cover opacity-100 transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-0"
          sizes="(max-width: 768px) 85vw, 25vw"
        />
        <Image
          src={product.backImage}
          alt={`${product.name} back`}
          fill
          className="object-cover opacity-0 transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-100"
          sizes="(max-width: 768px) 85vw, 25vw"
        />
        {product.tag && (
          <span className="absolute left-0 top-0 bg-signal px-4 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-white">
            {product.tag}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between bg-black/90 px-5 py-4 text-white backdrop-blur transition-transform duration-300 group-hover:translate-y-0">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em]">
            Back view
          </span>
          <ArrowUpRight className="size-4 text-signal" />
        </div>
      </Link>
      <div className="flex items-start justify-between gap-3 border-x border-b border-black/15 bg-white p-4">
        <div>
          <h3 className="font-display text-lg font-bold uppercase leading-none">
            {product.name}
          </h3>
          <p className="mt-2 font-mono text-[8px] uppercase tracking-wider text-black/40">
            {product.color}
          </p>
        </div>
        <div className="shrink-0 text-right font-display text-xl font-bold">
          {product.compareAt && (
            <div className="text-[11px] text-black/35 line-through">
              {product.compareAt}
            </div>
          )}
          <div className={product.compareAt ? "text-signal" : ""}>
            {product.price}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
