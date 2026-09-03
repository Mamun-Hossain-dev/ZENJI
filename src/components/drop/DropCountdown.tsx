"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const emptyTime: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function getTimeLeft(target: string): TimeLeft {
  const remaining = Math.max(0, new Date(target).getTime() - Date.now());

  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1_000) % 60),
  };
}

const units: Array<{ key: keyof TimeLeft; label: string }> = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

const revealGroup: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const revealItem: Variants = {
  hidden: { opacity: 0, y: 52 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export function DropCountdown({ target }: { target: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(emptyTime);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const update = () => setTimeLeft(getTimeLeft(target));
    update();
    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, [target]);

  function submitEarlyAccess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    localStorage.setItem(
      "zenji-awakening-access",
      JSON.stringify({ email: data.get("email"), drop: "Awakening" }),
    );
    setSubmitted(true);
  }

  return (
    <section className="drop-scanlines bg-[#f7f5f3] px-5 py-24 text-black md:px-10 md:py-32">
      <div className="mx-auto max-w-[1000px] text-center">
        <motion.div
          variants={revealGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={revealItem}
            className="font-mono text-[9px] font-bold uppercase tracking-[0.38em] text-signal"
          >
            <span className="mr-3 inline-block size-2 rounded-full bg-signal" />{" "}
            Awakening // Is live
          </motion.p>

          <motion.div
            variants={revealItem}
            aria-live="polite"
            className="mx-auto mt-12 grid max-w-[800px] grid-cols-2 gap-5 sm:grid-cols-4"
          >
            {units.map(({ key, label }, index) => (
              <div
                key={key}
                className="relative border border-signal bg-white/40 px-4 py-7 shadow-[0_0_28px_rgba(209,10,10,.13)]"
              >
                <strong className="block font-display text-6xl font-bold leading-none tabular-nums">
                  {String(timeLeft[key]).padStart(index === 0 ? 1 : 2, "0")}
                </strong>
                <span className="mt-4 block font-mono text-[9px] uppercase tracking-widest text-black/35">
                  {label}
                </span>
                {index < units.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-[18px] top-1/2 hidden -translate-y-1/2 font-display text-4xl text-signal sm:block"
                  >
                    :
                  </span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.h2
            variants={revealItem}
            className="mt-14 font-display text-3xl font-bold uppercase tracking-[0.04em]"
          >
            The drop is coming
          </motion.h2>
          <motion.p
            variants={revealItem}
            className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-black/45"
          >
            01 September 2026 — Australia
          </motion.p>
          <motion.div variants={revealItem} className="mt-10">
            <Link
              href="#origin-drop"
              className="inline-flex min-h-14 items-center bg-signal px-8 font-display text-lg font-bold uppercase text-white transition hover:bg-black"
            >
              The wait is over — enter the archive →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          id="early-access"
          variants={revealGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-24 max-w-[620px] border-t border-black/10 pt-20"
        >
          <motion.p
            variants={revealItem}
            className="font-mono text-[9px] font-bold uppercase tracking-[0.38em] text-signal"
          >
            Get early access
          </motion.p>
          <motion.h2
            variants={revealItem}
            className="mt-7 font-display text-5xl font-bold uppercase tracking-[-0.04em] md:text-6xl"
          >
            Join the waitlist.
          </motion.h2>
          <motion.p
            variants={revealItem}
            className="mx-auto mt-7 max-w-lg font-mono text-[10px] leading-6 text-black/45"
          >
            Be first to shop Awakening. Exclusive early access and pre-drop
            updates, sent directly to your inbox.
          </motion.p>

          <motion.div variants={revealItem}>
            {submitted ? (
              <div className="mt-8 border border-black bg-black px-6 py-5 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                Transmission received. You&apos;re on the list.
              </div>
            ) : (
              <form
                onSubmit={submitEarlyAccess}
                className="mt-8 flex flex-col sm:flex-row"
              >
                <input
                  required
                  name="email"
                  type="email"
                  aria-label="Email address"
                  placeholder="YOUR EMAIL ADDRESS"
                  className="h-14 min-w-0 flex-1 border border-black bg-white/65 px-5 font-mono text-[9px] uppercase tracking-wider outline-none placeholder:text-black/30 focus:border-signal"
                />
                <button
                  type="submit"
                  className="h-14 bg-signal px-7 font-display text-base font-bold uppercase text-white transition hover:bg-black"
                >
                  Join the waitlist →
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
