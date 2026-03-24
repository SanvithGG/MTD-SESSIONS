const logos = ["Vercel", "Zapier", "Notion", "Linear", "Stripe", "Figma"];

function LogoStrip() {
  return (
    <div className="relative z-10 w-full flex flex-col items-center gap-4 pb-16 px-6">

      <p className="text-xs text-white/20 tracking-widest uppercase">Trusted by teams at</p>

      <div className="flex flex-wrap justify-center gap-10">
        {logos.map((logo) => (
          <span key={logo} className="text-white/20 text-sm font-semibold tracking-widest uppercase">
            {logo}
          </span>
        ))}
      </div>

    </div>
  );
}

export default LogoStrip;
