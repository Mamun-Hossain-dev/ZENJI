"use client";

import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Search } from "lucide-react";
import { collectionProducts, type CollectionFilter } from "@/lib/products";
import { cn } from "@/lib/utils";
import { CollectionProductCard } from "./CollectionProductCard";

type ActiveFilter = "ALL" | CollectionFilter;
const filters: ActiveFilter[] = ["ALL", "SALE", "NEW_ARRIVAL", "LIMITED", "ZANGETSU"];

export function CollectionCatalog() {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("ALL");
  const [search, setSearch] = useState("");
  const [wishlisted, setWishlisted] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);
  const [notified, setNotified] = useState(false);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return collectionProducts.filter((product) => {
      const matchesFilter = activeFilter === "ALL" || product.categories.includes(activeFilter);
      const matchesSearch = !query || `${product.name} ${product.color}`.toLowerCase().includes(query);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  function toggleList(setter: React.Dispatch<React.SetStateAction<string[]>>, id: string) {
    setter((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]);
  }

  function notify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    localStorage.setItem("zenji-drop-notification", String(form.get("email") ?? ""));
    setNotified(true);
  }

  return (
    <>
      <div className="border-b border-black bg-[#f5f3f0] px-5 py-4 text-black md:px-10">
        <div className="mx-auto flex max-w-[1640px] flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "shrink-0 border border-black/20 px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-wider transition hover:border-black",
                  activeFilter === filter && "border-black bg-black text-white",
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <label className="flex h-11 w-full items-center border border-black/20 bg-white px-4 lg:w-[290px]">
            <Search className="mr-3 size-4 text-black/35" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="SEARCH..." className="min-w-0 flex-1 bg-transparent font-mono text-[9px] uppercase tracking-wider outline-none placeholder:text-black/30" />
            <span className="ml-3 shrink-0 font-mono text-[8px] uppercase text-black/40">{visibleProducts.length} items</span>
          </label>
        </div>
      </div>

      <section className="min-h-[600px] bg-[#f5f3f0] px-5 py-8 text-black md:px-10 md:py-10">
        <motion.div layout className="mx-auto grid max-w-[1640px] grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product, index) => (
              <CollectionProductCard
                key={product.id}
                product={product}
                index={index}
                wishlisted={wishlisted.includes(product.id)}
                inCart={cart.includes(product.id)}
                onWishlist={() => toggleList(setWishlisted, product.id)}
                onCart={() => toggleList(setCart, product.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleProducts.length === 0 && (
          <div className="mx-auto grid min-h-[420px] max-w-[1640px] place-items-center border border-dashed border-black/20 text-center">
            <div>
              <p className="font-display text-4xl font-bold uppercase">No pieces found</p>
              <button type="button" onClick={() => { setSearch(""); setActiveFilter("ALL"); }} className="mt-4 font-mono text-[9px] font-bold uppercase tracking-widest text-signal underline underline-offset-4">Reset catalogue</button>
            </div>
          </div>
        )}
      </section>

      <section id="reviews" className="bg-black px-5 py-24 text-center text-white md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-signal">Awakening // Redacted</p>
          <h2 className="mt-5 font-display text-6xl font-bold uppercase leading-none tracking-[-0.04em] md:text-8xl">More drops coming</h2>
          {notified ? (
            <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 border border-white/20 py-5 font-mono text-[10px] font-bold uppercase tracking-widest">
              <Check className="size-4 text-signal" /> Transmission received
            </div>
          ) : (
            <form onSubmit={notify} className="mx-auto mt-10 flex max-w-xl border-b border-white/30">
              <input required name="email" type="email" placeholder="ENTER_EMAIL //" className="min-w-0 flex-1 bg-transparent px-1 py-4 font-mono text-[10px] text-white outline-none placeholder:text-white/35" />
              <button className="bg-signal px-6 font-display text-sm font-bold uppercase text-white transition hover:bg-white hover:text-black">Notify me</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
