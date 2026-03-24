const navLinks = ["Main", "About", "Program", "Price", "Contact"];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-transparent">

      {/* LOGO */}
      <span className="text-xl font-bold tracking-widest text-white">
        Steve<span className="text-[#39ff14]">Editor</span>
      </span>

      {/* NAV LINKS */}
      <ul className="flex gap-8 text-sm text-white/70">
        {navLinks.map((link) => (
          <li key={link} className="cursor-pointer hover:text-[#39ff14] transition-colors duration-200">
            {link}
          </li>
        ))}
      </ul>

      {/* SOCIAL ICONS */}
      <div className="flex gap-5 text-white/70">

        {/* Facebook */}
        <a href="#" className="hover:text-[#39ff14] transition-colors duration-200" aria-label="Facebook">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="#" className="hover:text-[#39ff14] transition-colors duration-200" aria-label="LinkedIn">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>

        {/* Instagram */}
        <a href="#" className="hover:text-[#39ff14] transition-colors duration-200" aria-label="Instagram">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
