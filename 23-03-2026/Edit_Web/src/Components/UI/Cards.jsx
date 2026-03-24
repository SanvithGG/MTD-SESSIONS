const cards = [
  { name: "Premiere Pro",  icon: "🎬", color: "from-purple-900/60 to-purple-800/30", rotate: "-rotate-3" },
  { name: "Photoshop",     icon: "🖼️", color: "from-blue-900/60 to-blue-800/30",    rotate: "rotate-0"  },
  { name: "After Effects", icon: "✨", color: "from-indigo-900/60 to-indigo-800/30", rotate: "rotate-3"  },
];

function Cards() {
  return (
    <div className="relative z-10 flex gap-6 mt-12 flex-wrap justify-center">
      {cards.map((card) => (
        <div
          key={card.name}
          className={`${card.rotate} bg-gradient-to-br ${card.color} border border-white/10
            backdrop-blur-md rounded-2xl px-6 py-5 w-48 shadow-xl
            hover:scale-105 hover:rotate-0 hover:shadow-[0_0_20px_#39ff1433] transition-all duration-300 cursor-pointer`}
        >
          <div className="text-3xl mb-3">{card.icon}</div>
          <p className="text-sm font-semibold text-white">{card.name}</p>
          <p className="text-xs text-white/40 mt-1">Adobe Suite</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
