export function StoryBanner() {
  return (
    <header className="relative overflow-hidden bg-black px-5 py-24 text-white md:px-10 md:py-32">
      <div className="grain absolute inset-0 opacity-20" />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8vw] top-[8vh] font-display text-[30vw] font-bold leading-none text-white/[0.018]"
      >
        魂
      </div>
      <div className="relative mx-auto max-w-[760px]">
        <p className="font-mono text-[9px] font-bold uppercase tracking-[0.27em] text-signal">
          About // Zenji
        </p>
        <div className="my-5 h-px w-10 bg-signal" />
        <h1 className="font-display text-[58px] font-bold uppercase leading-[0.88] tracking-[-0.05em] sm:text-7xl md:text-[92px]">
          Anime streetwear Australia.
          <br />
          Born from the warrior spirit.
        </h1>
        <div className="mt-10 space-y-6 font-mono text-[11px] leading-7 text-white/65 md:text-xs">
          <p>ZENJI began with one belief: what you wear should tell a story.</p>
          <p>
            Inspired by samurai discipline, anime art and modern street culture,
            we create premium streetwear for those who choose their own path.
          </p>
          <p>
            Every ZENJI piece combines Japanese-inspired artwork, powerful
            symbolism and oversized silhouettes to express courage, creativity
            and individuality.
          </p>
        </div>
      </div>
    </header>
  );
}
