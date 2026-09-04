import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productSlug, products } from "@/lib/products";

const previewProducts = [
  { ...products[0], displayName: "Blue Flame Tee" },
  { ...products[2], displayName: "Demon Blood Tee" },
  { ...products[3], displayName: "Warrior Spirit Tee" },
  { ...products[1], displayName: "Will of the Sun Tee" },
];

export function DropCollectionPreview() {
  return (
    <section
      id="origin-drop"
      className="bg-[#f7f5f3] px-5 py-24 text-black md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1640px]">
        <p className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-signal">
          The_Origin_Drop // Still available
        </p>
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-none tracking-[-0.04em] md:text-5xl lg:text-6xl">
          While you wait.
        </h2>
        <p className="mt-5 font-mono text-[10px] text-black/45">
          Shop The Origin Drop, our current collection.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previewProducts.map((product) => (
            <article
              key={product.displayName}
              className="group min-w-0 border border-black/80 bg-white"
            >
              <Link
                href={`/drop/${productSlug(product.name)}`}
                aria-label={`View ${product.displayName}`}
                className="relative block aspect-square overflow-hidden bg-[#ddd9d4]"
              >
                <Image
                  src={product.frontImage}
                  alt={`${product.displayName} front`}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <Image
                  src={product.backImage}
                  alt={`${product.displayName} back`}
                  fill
                  className="object-cover opacity-0 transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute left-0 top-0 z-10 w-max -rotate-45 bg-signal px-3 py-1.5 text-center font-mono text-[7px] font-bold uppercase tracking-widest text-white md:left-[-43px] md:w-36 md:top-5 md:py-2 md:text-[8px]">
                  Sale 15% off
                </span>
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-4 bg-black/85 py-4 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur transition-transform duration-300 group-hover:translate-y-0">
                  Quick view <ArrowUpRight className="size-3.5 text-signal" />
                </div>
              </Link>
              <div className="p-3 sm:p-4">
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase leading-none">
                  {product.displayName}
                </h3>
                <div className="mt-2 sm:mt-3 font-display text-xl sm:text-2xl font-bold leading-none text-signal">
                  <span className="mr-2 text-[10px] sm:text-xs text-black/30 line-through">
                    {product.compareAt ?? "A$39.99"}
                  </span>
                  A$33.99
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/collection"
          className="mt-14 inline-flex items-center gap-3 border-b border-black pb-2 font-mono text-[9px] font-bold uppercase tracking-widest transition hover:border-signal hover:text-signal"
        >
          View full collection <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </section>
  );
}
