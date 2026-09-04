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
            <span className="absolute left-0 top-0 z-10 w-max -rotate-45 bg-signal px-3 py-1.5 text-center font-mono text-[7px] font-bold uppercase tracking-widest text-white md:left-[-42px] md:w-36 md:top-5 md:py-2 md:text-[8px]">
              Sale 15% off
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 z-10 flex translate-y-full items-center justify-center bg-black/85 py-4 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur transition-transform duration-300 group-hover:translate-y-0">
            Front / Back view
          </div>
        </motion.div>
      </Link>

        <div className="p-3 sm:p-4">
          <h2 className="font-display text-base sm:text-lg font-bold uppercase leading-none">
            {product.name}
          </h2>
          <p className="mt-1.5 sm:mt-2 font-mono text-[7px] sm:text-[8px] uppercase tracking-wider text-black/40">
            {product.color}
          </p>
          <div className="mt-2.5 sm:mt-3 font-display text-xl sm:text-2xl font-bold leading-none">
          {product.compareAt && (
            <span className="mr-2 text-[10px] sm:text-xs text-black/35 line-through">
              {product.compareAt}
            </span>
          )}
          <span className={product.compareAt ? "text-signal" : ""}>
            {product.price}
          </span>
        </div>

        <div className="mt-3 sm:mt-5 grid grid-cols-2 gap-px border border-black/20 bg-black/20">
          <button
            type="button"
            aria-pressed={wishlisted}
            onClick={onWishlist}
            className={cn(
              "flex h-11 sm:h-12 items-center justify-center gap-1.5 bg-[#f1e7e4] font-display text-xs sm:text-sm font-bold uppercase text-black transition hover:bg-[#ead4d1] hover:text-signal",
              wishlisted && "bg-[#f4d9d7] text-signal",
            )}
          >
            <Heart
              className="size-3.5 sm:size-4"
              fill={wishlisted ? "currentColor" : "none"}
            />{" "}
            <span className="hidden sm:inline">{wishlisted ? "Saved" : "Wishlist"}</span>
            <span className="sm:hidden">{wishlisted ? "Save" : "Wish"}</span>
          </button>
          <button
            type="button"
            aria-pressed={inCart}
            onClick={onCart}
            className="flex h-11 sm:h-12 items-center justify-center gap-1.5 bg-black font-display text-xs sm:text-sm font-bold uppercase text-white transition hover:bg-signal"
          >
            {inCart ? (
              <Check className="size-3.5 sm:size-4" />
            ) : (
              <ShoppingBag className="size-3.5 sm:size-4" />
            )}{" "}
            <span className="hidden sm:inline">{inCart ? "Added" : "Add to cart"}</span>
            <span className="sm:hidden">{inCart ? "In cart" : "Add"}</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
