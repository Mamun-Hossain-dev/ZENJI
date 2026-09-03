"use client";

import Image from "next/image";
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { products } from "@/lib/products";

const cards = [
  {
    image: products[3].frontImage,
    name: products[3].name,
    stackX: "-4.8vw",
    x: "-11vw",
    rotate: -3,
  },
  {
    image: products[1].frontImage,
    name: products[1].name,
    stackX: "-1.6vw",
    x: "-3.7vw",
    rotate: -1,
  },
  {
    image: products[0].backImage,
    name: products[0].name,
    stackX: "1.6vw",
    x: "3.7vw",
    rotate: 1,
  },
  {
    image: products[2].frontImage,
    name: products[2].name,
    stackX: "4.8vw",
    x: "11vw",
    rotate: 3,
  },
];

type EditorialCardProps = {
  card: (typeof cards)[number];
  index: number;
  progress: MotionValue<number>;
};

function EditorialCard({ card, index, progress }: EditorialCardProps) {
  const start = 0.49 + index * 0.1;
  const revealed = start + 0.08;
  const fanStart = 0.88;
  const fanEnd = 0.94;
  const opacity = useTransform(progress, [start, start + 0.055], [0, 0.9]);
  const x = useTransform(
    progress,
    [start, revealed, fanStart, fanEnd],
    ["0vw", card.stackX, card.stackX, card.x],
  );
  const y = useTransform(progress, [start, revealed], ["24vh", "0vh"]);
  const rotate = useTransform(progress, [start, revealed], [0, card.rotate]);
  const scale = useTransform(progress, [start, revealed], [0.88, 1]);

  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      style={{ zIndex: index + 1 }}
    >
      <motion.figure
        style={{ x, y, rotate, scale, opacity }}
        className="relative aspect-[2/3] w-[clamp(128px,15vw,248px)] overflow-hidden border border-white/10 bg-[#d8d6d2] shadow-2xl will-change-transform"
      >
        <Image
          src={card.image}
          alt={`${card.name} editorial campaign`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 38vw, 248px"
        />
        <div className="absolute inset-0 bg-black/10" />
      </motion.figure>
    </div>
  );
}

export function DropEditorial() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.07, 0.4, 0.47],
    [0, 1, 1, 0],
  );
  const titleScale = useTransform(scrollYProgress, [0, 0.1], [0.82, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.1], [70, 0]);
  const leftX = useTransform(scrollYProgress, [0.12, 0.4], ["0vw", "-38vw"]);
  const rightX = useTransform(scrollYProgress, [0.12, 0.4], ["0vw", "38vw"]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="drop-editorial-title"
      className="relative h-[620vh] bg-[#030303] text-white md:h-[760vh]"
    >
      <div className="sticky top-[64px] h-[calc(100vh-64px)] overflow-hidden">
        <div className="grain absolute inset-0 opacity-20" />
        <div className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-[1640px] justify-between px-5 pt-10 font-mono text-[8px] uppercase tracking-[0.28em] text-white/28 md:px-10">
          <p>
            <span className="text-signal">Collection</span> &nbsp;//&nbsp;
            The_Origin_Drop
          </p>
          <p className="hidden sm:block">Scroll / Explore / 001</p>
        </div>

        <div className="absolute inset-0">
          {cards.map((card, index) => (
            <EditorialCard
              key={card.name}
              card={card}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <motion.h2
          id="drop-editorial-title"
          style={{ opacity: titleOpacity, scale: titleScale, y: titleY }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center whitespace-nowrap font-display text-[clamp(7rem,18vw,22rem)] font-bold uppercase leading-none tracking-[-0.075em] will-change-transform"
        >
          <motion.span style={{ x: leftX }} className="inline-block">
            The
          </motion.span>
          <motion.span style={{ x: rightX }} className="inline-block">
            Origin
          </motion.span>
        </motion.h2>

        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-signal to-transparent"
        />
      </div>
    </section>
  );
}
