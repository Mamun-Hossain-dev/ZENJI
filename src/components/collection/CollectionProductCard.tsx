"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Heart, ShoppingBag } from "lucide-react";
import { productSlug, type CollectionProduct } from "@/lib/products";
import { cn } from "@/lib/utils";

type CollectionProductCardProps = {
  product: CollectionProduct;
  index: number;
  wishlisted: boolean;
  inCart: boolean;
  onWishlist: () => void;
  onCart: () => void;
};

export function CollectionProductCard({
  product,
  index,
  wishlisted,
  inCart,
  onWishlist,
  onCart,
}: CollectionProductCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 64 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration: 0.65,
        delay: Math.min(index, 3) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group min-w-0 border border-black/80 bg-white"
    >
      <Link
        href={`/drop/${productSlug(product.name)}`}
        aria-label={`View ${product.name}`}
        className="block"
      >
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.78,
            delay: index * 0.045,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative aspect-[3/4] overflow-hidden bg-[#dedbd5]"
        >
          <Image
            src={product.frontImage}
            alt={`${product.name} front`}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.025] group-hover:opacity-0"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <Image
            src={product.backImage}
            alt={`${product.name} back`}
            fill
            className="object-cover opacity-0 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          <motion.div
            aria-hidden
            initial={{ y: "105%" }}
            whileInView={{ y: "-115%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 1.05,
              delay: index * 0.045,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-white via-white/95 to-transparent"
          />

          {product.categories.includes("SALE") && (
            <span className="absolute left-[-42px] top-5 z-10 w-36 -rotate-45 bg-signal py-2 text-center font-mono text-[8px] font-bold uppercase tracking-widest text-white">
              Sale 15% off
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 z-10 flex translate-y-full items-center justify-center bg-black/85 py-4 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur transition-transform duration-300 group-hover:translate-y-0">
            Front / Back view
          </div>
        </motion.div>
      </Link>

      <div className="p-4">
        <h2 className="font-display text-lg font-bold uppercase leading-none">
          {product.name}
        </h2>
        <p className="mt-2 font-mono text-[8px] uppercase tracking-wider text-black/40">
          {product.color}
        </p>
        <div className="mt-3 font-display text-2xl font-bold leading-none">
          {product.compareAt && (
            <span className="mr-2 text-xs text-black/35 line-through">
              {product.compareAt}
            </span>
          )}
          <span className={product.compareAt ? "text-signal" : ""}>
            {product.price}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 border border-black">
          <button
            type="button"
            aria-pressed={wishlisted}
            onClick={onWishlist}
            className={cn(
              "flex h-12 items-center justify-center gap-2 border-r border-black font-display text-sm font-bold uppercase transition hover:bg-black hover:text-white",
              wishlisted && "bg-signal text-white",
            )}
          >
            <Heart
              className="size-4"
              fill={wishlisted ? "currentColor" : "none"}
            />{" "}
            {wishlisted ? "Saved" : "Wishlist"}
          </button>
          <button
            type="button"
            aria-pressed={inCart}
            onClick={onCart}
            className="flex h-12 items-center justify-center gap-2 bg-black font-display text-sm font-bold uppercase text-white transition hover:bg-signal"
          >
            {inCart ? (
              <Check className="size-4" />
            ) : (
              <ShoppingBag className="size-4" />
            )}{" "}
            {inCart ? "Added" : "Add to cart"}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
