import Button from "./Components/UI/Button";
import Hero from "./Components/UI/Hero";
import SearchBar from "./Components/UI/SearchBar";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('https://wallpaperbat.com/img/9692762-nature-cloud-4k-ultra-hd-wallpaper.jpg')" }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Button />
        <main className="flex flex-col items-center justify-center flex-1 px-4">
          <Hero />
          <SearchBar />
        </main>
      </div>
    </div>
  );
}

export default App;
