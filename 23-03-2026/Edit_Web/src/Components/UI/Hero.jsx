function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl px-6">

      {/* BADGE */}
      <span className="text-xs tracking-[0.3em] text-[#39ff14]/80 uppercase border border-[#39ff14]/30 px-4 py-1 rounded-full">
        Professional Video Editing
      </span>

      {/* MAIN HEADING */}
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-tight text-white drop-shadow-lg">
        Edit Like a Pro <br />
        <span className="text-[#39ff14]">And Make Money</span>
      </h1>

      {/* SUBTEXT */}
      <p className="text-base text-white/50 max-w-xl leading-relaxed">
        Master industry-standard tools and turn your creativity into a career.
        Learn Premiere Pro, Photoshop & After Effects from scratch.
      </p>

      {/* CTA BUTTON */}
      <button className="mt-2 px-10 py-4 rounded-full bg-[#39ff14] text-black font-bold text-sm uppercase tracking-widest
        shadow-[0_0_20px_#39ff14aa] hover:shadow-[0_0_40px_#39ff14cc] hover:scale-105 transition-all duration-300">
        Order Now
      </button>

    </div>
  );
}

export default Hero;
