function Button() {
  return (
    <nav className="w-full px-10 py-5 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-white/20">

      {/* LOGO */}
      <div className="font-playfair italic text-xl text-white tracking-wide">
        SkyExplorer
      </div>

      {/* MENU */}
      <div className="flex gap-8 text-sm text-white/80">
        <span className="hover:text-white cursor-pointer transition">Features</span>
        <span className="hover:text-white cursor-pointer transition">Method</span>
        <span className="hover:text-white cursor-pointer transition">Pricing</span>
        <span className="hover:text-white cursor-pointer transition">Changelog</span>
      </div>

      {/* LOGIN */}
      <button className="px-5 py-2 rounded-xl border border-white/40 text-sm text-white hover:bg-white/20 transition">
        Log in
      </button>

    </nav>
  );
}
export default Button;
