import Navbar from "./Components/UI/Navbar";
import Hero from "./Components/UI/Hero";
import Cards from "./Components/UI/Cards";

function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-white font-sans">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#050510]/70" />

        <Hero />
        <Cards />

      </section>

    </div>
  );
}

export default App;
