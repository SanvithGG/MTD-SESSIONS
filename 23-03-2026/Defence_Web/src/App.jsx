import Navbar from "./Components/UI/Navbar";
import Hero from "./Components/UI/Hero";
import FloatingLabels from "./Components/UI/FloatingLabels";
import LogoStrip from "./Components/UI/LogoStrip";

function App() {
  return (
    <div className="min-h-screen bg-[#080810] text-white font-sans overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center">

        {/* BACKGROUND GLOW BLOBS */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-green-500/10 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-white/5 blur-[100px]" />

        {/* FLOATING LABELS */}
        <FloatingLabels />

        {/* HERO CONTENT */}
        <Hero />

      </section>

      {/* DIVIDER */}
      <div className="w-full h-px bg-white/5" />

      {/* LOGO STRIP */}
      <LogoStrip />

    </div>
  );
}

export default App;
