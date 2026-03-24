const navLinks = ["Home", "DeFi App", "Assets", "Features", "Pricing", "FAQ"];

function Navbar() {
  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-6">
      <nav className="w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
            <span className="text-white text-xs font-black">D</span>
          </div>
          <span className="text-white font-semibold text-sm tracking-wide">Defence</span>
        </div>

        {/* NAV LINKS */}
        <ul className="flex gap-6 text-sm text-white/60">
          {navLinks.map((link) => (
            <li key={link} className="cursor-pointer hover:text-white transition-colors duration-300">
              {link}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-colors duration-300">
          Create Account
        </button>

      </nav>
    </div>
  );
}

export default Navbar;
