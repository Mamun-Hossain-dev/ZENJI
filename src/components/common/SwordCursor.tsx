"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function SwordCursor() {
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const x = useSpring(pointerX, { stiffness: 900, damping: 52, mass: 0.18 });
  const y = useSpring(pointerY, { stiffness: 900, damping: 52, mass: 0.18 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("has-sword-cursor");

    const move = (event: PointerEvent) => {
      pointerX.set(event.clientX - 5);
      pointerY.set(event.clientY - 5);
      setVisible(true);
      setActive(
        Boolean(
          (event.target as Element | null)?.closest(
            "a, button, input, [role='button']",
          ),
        ),
      );
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      document.documentElement.classList.remove("has-sword-cursor");
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [pointerX, pointerY]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden md:block"
      style={{ x, y }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: active ? 1.18 : 1,
        rotate: active ? -4 : 0,
      }}
      transition={{
        opacity: { duration: 0.12 },
        scale: { duration: 0.18 },
        rotate: { duration: 0.18 },
      }}
    >
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible drop-shadow-[0_3px_5px_rgba(0,0,0,.82)]"
      >
        <defs>
          <linearGradient
            id="steel"
            x1="5"
            y1="5"
            x2="47"
            y2="43"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#34383C" />
            <stop offset="0.28" stopColor="#08090A" />
            <stop offset="0.58" stopColor="#25282B" />
            <stop offset="0.8" stopColor="#050505" />
            <stop offset="1" stopColor="#31363A" />
          </linearGradient>
          <linearGradient
            id="handle"
            x1="50"
            y1="50"
            x2="70"
            y2="70"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#311010" />
            <stop offset="0.45" stopColor="#120D0D" />
            <stop offset="1" stopColor="#050505" />
          </linearGradient>
          <filter id="bladeGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="1.15"
              floodColor="#8B090C"
              floodOpacity="0.72"
            />
          </filter>
        </defs>

        <path
          d="M4.2 4.8C10.8 16.1 20.1 29.2 33.2 38.8C37.2 41.7 41.3 44.2 45.8 45.9L49.1 41.8C44.9 39.8 41 37.2 37.4 34.2C25.1 24.1 15.4 12 4.2 4.8Z"
          fill="url(#steel)"
          stroke="#8E1116"
          strokeWidth="0.9"
          strokeLinejoin="round"
          filter="url(#bladeGlow)"
        />
        <path
          d="M5.4 5.5C12.7 16.2 21.6 28 34.2 37.4C38 40.2 41.8 42.6 46.3 44.2"
          stroke="#F8FAFA"
          strokeOpacity="0.96"
          strokeWidth="0.85"
          strokeLinecap="round"
        />
        <path
          d="M8 8C16.1 18.5 25.1 29.7 36 37.8C39.1 40.1 42.1 42 45 43.3"
          stroke="#D11820"
          strokeWidth="0.72"
          strokeLinecap="round"
          strokeDasharray="2.4 1.35"
        />
        <path d="M4.2 4.8L9 7.7L6.2 8.8L4.2 4.8Z" fill="#F8FAFA" />

        <g transform="rotate(43 48 47.6)">
          <path
            d="M48 41.7L50.2 44.6L54 45.1L51.5 47.8L52.3 51.5L48.6 50L45.7 52.5L45.5 48.9L42 47.2L45.2 45.4L45.7 42Z"
            fill="#050505"
            stroke="#8E1116"
            strokeWidth="1.15"
            strokeLinejoin="round"
          />
          <ellipse
            cx="48"
            cy="47.6"
            rx="2.8"
            ry="1"
            fill="#020202"
            stroke="#C3262D"
            strokeWidth="0.55"
          />
        </g>

        <path
          d="M49.6 49.4L68.5 67.9"
          stroke="#030303"
          strokeWidth="6.2"
          strokeLinecap="round"
        />
        <path
          d="M50.2 50L68 67.4"
          stroke="url(#handle)"
          strokeWidth="4.6"
          strokeLinecap="round"
        />
        <path
          d="M52.4 51.2L51.2 54.3M56.5 55.2L55.2 58.4M60.5 59.1L59.2 62.4M64.5 63L63.2 66.2"
          stroke="#B7191F"
          strokeWidth="1.15"
        />
        <path
          d="M51.3 54.2L54.4 52.9M55.3 58.2L58.5 56.9M59.3 62.2L62.5 60.9M63.3 66.1L66.3 64.9"
          stroke="#B7191F"
          strokeWidth="1.15"
        />
        <path
          d="M67.4 66.8L70.6 69.9"
          stroke="#5D1112"
          strokeWidth="5.4"
          strokeLinecap="round"
        />
        <path
          d="M67.6 67L70.4 69.7"
          stroke="#090909"
          strokeWidth="3.1"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
