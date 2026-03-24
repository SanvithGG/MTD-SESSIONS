function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl px-6">

      {/* BADGE */}
      <span className="text-xs tracking-[0.25em] text-white/50 uppercase border border-white/10 px-4 py-1 rounded-full bg-white/5">
        Asset Protection Protocol
      </span>

      {/* HEADING */}
      <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
        One-click for <br />
        <span className="bg-gradient-to-r from-green-400 via-blue-400 to-white bg-clip-text text-transparent">
          Asset Defense
        </span>
      </h1>

      {/* SUBTEXT */}
      <p className="text-sm text-white/40 max-w-md leading-relaxed">
        Protect, manage, and grow your digital assets with a single click.
        Built for DeFi users who demand speed, security, and simplicity.
      </p>

      {/* BUTTONS */}
      <div className="flex gap-4 mt-2">
        <button className="px-7 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
          Open App
        </button>
        <button className="px-7 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors duration-300">
          Discover More
        </button>
      </div>

    </div>
  );
}

export default Hero;
