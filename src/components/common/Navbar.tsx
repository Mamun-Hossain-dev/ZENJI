"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { label: "Drop", href: "/drop" },
  { label: "Collection", href: "/collection" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "Our Story", href: "/our-story" },
];

const moreLinks = [
  { label: "Collaboration", href: "/coming-soon?sector=collaboration" },
  { label: "Review", href: "/coming-soon?sector=reviews" },
  { label: "FAQ", href: "/faq" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreActive = pathname === "/faq" || pathname === "/coming-soon";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 -mb-[76px] border-b border-transparent bg-transparent transition-all duration-500",
        scrolled && "border-white/10 bg-[#080808] shadow-2xl shadow-black/30",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 transition-all md:px-10",
          scrolled && "h-[64px]",
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "font-mono text-[10px] font-bold uppercase tracking-[0.19em] text-white/85 transition hover:text-white hover:[text-shadow:0_0_12px_rgba(255,255,255,.8)]",
                  active && "text-signal",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((value) => !value)}
              className={cn(
                "flex items-center gap-1 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.19em] text-white/85 transition hover:text-white hover:[text-shadow:0_0_12px_rgba(255,255,255,.8)]",
                (moreOpen || moreActive) && "text-signal [text-shadow:none]",
              )}
            >
              More{" "}
              <ChevronDown
                className={cn(
                  "size-3 transition-transform",
                  moreOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "absolute left-0 top-full pt-5 transition-all",
                moreOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0",
              )}
            >
              <div className="w-48 border border-black/15 bg-[#f5f3f0] text-black shadow-2xl">
                {moreLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block border-b border-black/10 px-5 py-4 font-mono text-[9px] font-bold uppercase tracking-widest transition last:border-0 hover:bg-signal hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-1 text-white md:gap-2">
          {[Search, Heart, ShoppingBag, UserRound].map((Icon, index) => (
            <button
              key={index}
              className="grid size-10 place-items-center transition hover:text-signal sm:grid"
              aria-label={["Search", "Wishlist", "Cart", "Account"][index]}
            >
              <Icon size={20} strokeWidth={1.6} />
            </button>
          ))}
          <button
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid overflow-hidden bg-[#080808] transition-[grid-template-rows] lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav className="min-h-0">
          <div className="flex flex-col border-t border-white/10 px-5 py-5">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
              className={cn(
                "border-b border-white/10 py-4 font-display text-xl uppercase text-white transition hover:text-white sm:text-2xl",
                active && "text-signal",
              )}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => setMoreOpen((value) => !value)}
              className={cn(
                "flex items-center justify-between border-b border-white/10 py-4 text-left font-display text-xl uppercase text-white transition hover:text-white sm:text-2xl",
                moreActive && "text-signal",
              )}
            >
              More{" "}
              <ChevronDown
                className={cn(
                  "size-5 transition-transform",
                  moreOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows]",
                moreOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0">
                {moreLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-3 pl-5 font-mono text-[9px] font-bold uppercase tracking-widest text-white/60 hover:text-signal"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
