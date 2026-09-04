"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import type { CollectionProduct } from "@/lib/products";
import { cn } from "@/lib/utils";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const sizeRows = [
  ["XS", "42", "66", "42"],
  ["S", "47", "68", "44"],
  ["M", "52", "70", "46"],
  ["L", "57", "72", "48"],
  ["XL", "62", "74", "50"],
  ["XXL", "67", "76", "52"],
];

export function ProductDetails({ product }: { product: CollectionProduct }) {
  const gallery = [
    product.frontImage,
    product.backImage,
    product.frontImage,
    product.backImage,
    product.frontImage,
  ];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("S");
  const [wishlisted, setWishlisted] = useState(false);
  const [inCart, setInCart] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#faf8f6] px-5 pb-24 pt-[140px] text-black md:px-10 md:pb-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[76px] bg-black" />
      <div className="mx-auto max-w-[1320px]">
        <Link
          href="/collection"
          className="inline-flex font-mono text-[9px] uppercase tracking-[0.18em] text-black/40 transition hover:text-signal"
        >
          ← Back
        </Link>

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-[1.28fr_1fr] lg:gap-16">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#dedbd7]">
              <Image
                src={gallery[selectedImage]}
                alt={`${product.name} view ${selectedImage + 1}`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
            <div className="mt-3 flex gap-2 sm:gap-3 overflow-x-auto pb-2">
              {gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Show ${product.name} view ${index + 1}`}
                  aria-pressed={selectedImage === index}
                   className={cn(
                     "relative aspect-square w-16 sm:w-20 shrink-0 overflow-hidden border bg-[#dedbd7] transition",
                    selectedImage === index
                      ? "border-black"
                      : "border-black/15 hover:border-black/50",
                  )}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/35">
              Drop / {product.name}
            </p>
            <h1 className="mt-6 font-display text-6xl font-bold uppercase leading-none tracking-[-0.045em] md:text-7xl">
              {product.name}
            </h1>
            <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.18em] text-black/40">
              Colorway: {product.color}
            </p>

            <div className="mt-9 font-display text-4xl font-bold">
              {product.price}
            </div>
            <p className="mt-3 flex items-center gap-2 font-mono text-[8px] uppercase tracking-widest text-black/55">
              <span className="size-2 rounded-full bg-yellow-400" /> In stock
            </p>

            <fieldset className="mt-10">
              <legend className="font-mono text-[8px] font-bold uppercase tracking-[0.18em]">
                Select size
              </legend>
              <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                 {sizes.map((size) => {
                   const disabled = size === "XS" || size === "XXL";
                   return (
                     <button
                       key={size}
                       type="button"
                       disabled={disabled}
                       aria-pressed={selectedSize === size}
                       onClick={() => setSelectedSize(size)}
                       className={cn(
                         "grid size-11 sm:size-14 place-items-center border font-mono text-[8px] sm:text-[9px] transition",
                        disabled &&
                          "cursor-not-allowed border-black/15 text-black/25 line-through",
                        !disabled &&
                          selectedSize === size &&
                          "border-black bg-black text-white",
                        !disabled &&
                          selectedSize !== size &&
                          "border-black/50 hover:border-signal hover:text-signal",
                      )}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </fieldset>

             <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-px border border-black/20 bg-black/20">
               <button
                 type="button"
                 aria-pressed={wishlisted}
                 onClick={() => setWishlisted((value) => !value)}
                 className={cn(
                   "flex min-h-12 sm:min-h-14 items-center justify-center gap-1.5 bg-[#f1e7e4] font-display text-sm sm:text-base font-bold uppercase text-black transition hover:bg-[#ead4d1] hover:text-signal",
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
                 onClick={() => setInCart((value) => !value)}
                 className="flex min-h-12 sm:min-h-14 items-center justify-center gap-1.5 bg-black font-display text-sm sm:text-base font-bold uppercase text-white transition hover:bg-signal"
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

            <div className="mt-7 sm:mt-8 border-b border-black/10 pb-6 sm:pb-8">
              <h2 className="font-display text-base sm:text-lg font-bold uppercase">
                Product details
              </h2>
              <p className="mt-3 sm:mt-4 font-mono text-[9px] leading-6 text-black/50">
                Discipline forged in silence. Every stitch a vow.
                <br />
                240gsm heavyweight cotton.
                <br />
                Oversized fit. Garment washed.
                <br />
                Anime graphic screenprint.
              </p>
            </div>

            <details open className="group border-b border-black/10 py-6 sm:py-8">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base sm:text-lg font-bold uppercase">
                Size guide
                <span className="grid size-10 sm:size-11 place-items-center border border-signal text-signal">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <div className="mt-6 sm:mt-8 overflow-x-auto">
                <table className="w-full min-w-[360px] sm:min-w-[480px] border-collapse font-mono text-[7px] sm:text-[8px] uppercase text-black/55">
                  <thead>
                    <tr>
                      {["Size", "Chest (flat)", "Length", "Shoulder"].map(
                        (heading) => (
                          <th
                            key={heading}
                            className="border border-black/10 p-3 text-left font-normal"
                          >
                            {heading}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sizeRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, index) => (
                          <td
                            key={`${row[0]}-${index}`}
                            className={cn(
                              "border border-black/10 p-3",
                              index === 0 && "font-bold text-signal",
                            )}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-2 sm:mt-3 border-l-2 border-signal bg-white px-3 sm:px-4 py-2 sm:py-3 font-mono text-[7px] sm:text-[8px] uppercase tracking-wider text-black/45">
                  Oversized fit — size down if between sizes. Garment
                  measurements in cm.
                </p>
              </div>
            </details>

            <details open className="group border-b border-black/10 py-6 sm:py-8">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base sm:text-lg font-bold uppercase">
                Shipping &amp; returns
                <span className="grid size-10 sm:size-11 place-items-center border border-signal text-signal">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-7 font-mono text-[9px] leading-6 text-black/50">
                Free shipping Australia-wide on orders over A$100.
                <br />
                Standard delivery: 3–5 business days.
                <br />
                Express: 1–2 business days.
                <br />
                Returns accepted within 14 days, unworn.
              </p>
            </details>

            <p className="mt-7 font-mono text-[8px] uppercase tracking-wider text-black/25">
              SKU: ZNJ-{product.id.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
