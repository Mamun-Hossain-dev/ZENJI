import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        signal: "#d10a0a",
        paper: "#f3f1ee",
      },
      fontFamily: {
        display: ["Oswald", "Arial Narrow", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
