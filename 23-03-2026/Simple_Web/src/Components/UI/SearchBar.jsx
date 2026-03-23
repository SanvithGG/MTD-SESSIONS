function SearchBar() {
  return (
    <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 w-full max-w-3xl">

      {/* TOP OPTIONS */}
      <div className="flex gap-6 text-sm text-white/80 mb-4">
        <span className="cursor-pointer hover:text-white transition">Round trip ▾</span>
        <span className="cursor-pointer hover:text-white transition">Passengers ▾</span>
      </div>

      {/* SEARCH ROW */}
      <div className="flex items-center gap-3">

        {/* FROM */}
        <div className="bg-white/90 px-5 py-4 rounded-xl shadow-sm flex-1">
          <p className="text-xs text-gray-400 mb-1">From</p>
          <p className="font-medium text-gray-800">Warsaw, Poland</p>
        </div>

        {/* SWAP */}
        <div className="bg-white/20 hover:bg-white/30 transition p-3 rounded-full shadow cursor-pointer text-white text-lg">
          ⇄
        </div>

        {/* TO */}
        <div className="bg-white/90 px-5 py-4 rounded-xl shadow-sm flex-1">
          <p className="text-xs text-gray-400 mb-1">To</p>
          <p className="font-medium text-gray-800">Bangkok, Thailand</p>
        </div>

        {/* SEARCH BUTTON */}
        <button className="px-8 py-4 rounded-xl text-white bg-linear-to-r from-gray-800 to-black shadow-lg hover:opacity-90 transition font-medium">
          Search
        </button>

      </div>
    </div>
  );
}
export default SearchBar;
