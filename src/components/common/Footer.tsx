import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Music2 } from "lucide-react";

const columns = [
  { title: "Drops", links: ["Home", "Drop", "Collection"] },
  { title: "Explore", links: ["Lookbook", "Our Story", "Collection"] },
  { title: "Community", links: ["TikTok", "Instagram", "Facebook"] },
  {
    title: "Contact",
    links: [
      "FAQ",
      "Review",
      "Privacy Policy",
      "Terms",
      "Help",
      "Return Policy",
      "Contact Us",
    ],
  },
];

function footerHref(link: string) {
  if (link === "Lookbook") return "/lookbook";
  if (link === "Our Story") return "/our-story";
  if (link === "Drop") return "/drop";
  if (link === "Collection") return "/collection";
  if (link === "Review") return "/collection#reviews";
  if (
    [
      "FAQ",
      "Privacy Policy",
      "Terms",
      "Help",
      "Return Policy",
      "Contact Us",
    ].includes(link)
  )
    return "/faq";
  return "/";
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080101] px-5 pt-20 text-white md:px-10 md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-[clamp(12rem,23vw,27rem)] font-bold leading-none tracking-[-0.09em] text-[#5a1616]/[0.13]"
      >
        ZENJI
      </div>
      <div className="relative mx-auto grid max-w-[1640px] grid-cols-2 gap-14 pb-20 md:grid-cols-4 lg:grid-cols-[1.7fr_repeat(4,1fr)] lg:gap-10 lg:pb-28">
        <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:pr-12">
          <Link
            href="/"
            aria-label="ZENJI home"
            className="relative block h-12 w-16"
          >
            <Image
              src="/images/Outlook-ZENJI mono.png"
              alt="ZENJI monogram"
              fill
              sizes="64px"
              className="object-contain object-left brightness-0 invert"
            />
          </Link>
          <p className="mt-8 max-w-[320px] font-mono text-[10px] leading-[1.9] text-white/45">
            Wear the Arc. Anime-inspired streetwear for gamers and otaku. Every
            drop limited. No restocks. Ever.
          </p>
          <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
            Follow the lore
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            <a
              href="#"
              aria-label="ZENJI on TikTok"
              className="flex h-11 items-center gap-2 bg-white px-4 font-mono text-[9px] text-black transition hover:bg-white/80"
            >
              <Music2 className="size-3.5" /> TikTok
            </a>
            <a
              href="#"
              aria-label="ZENJI on Instagram"
              className="flex h-11 items-center gap-2 bg-gradient-to-r from-[#f59d32] via-[#ef4c53] to-[#b92da3] px-4 font-mono text-[9px] text-white transition hover:brightness-110"
            >
              <Instagram className="size-3.5" /> Instagram
            </a>
            <a
              href="#"
              aria-label="ZENJI on Facebook"
              className="flex h-11 items-center gap-2 bg-[#2374e1] px-4 font-mono text-[9px] text-white transition hover:bg-[#3485f2]"
            >
              <Facebook className="size-3.5" /> Facebook
            </a>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="mb-8 font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
              {column.title}
            </p>
            <ul className="space-y-5">
              {column.links.map((link) => (
                <li key={link}>
                  <Link
                    href={footerHref(link)}
                    className="font-mono text-[11px] text-white/85 transition hover:text-signal"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative -mx-5 border-t border-white/10 px-5 md:-mx-10 md:px-10">
        <div className="mx-auto flex max-w-[1640px] flex-col gap-4 py-7 font-mono text-[8px] tracking-wider text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 ZENJI. All drops are final. No restocks. Ever.</span>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/faq" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/faq" className="hover:text-white">
              Terms
            </Link>
            <Link href="/faq" className="hover:text-white">
              Cookies
            </Link>
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-yellow-400" />{" "}
              Anime-inspired. Gamer-built. Community-owned.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
