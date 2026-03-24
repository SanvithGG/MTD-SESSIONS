const labels = [
  { name: "Cortex",  top: "20%", left: "8%"  },
  { name: "Quant",   top: "35%", left: "82%" },
  { name: "Aelf",    top: "65%", left: "10%" },
  { name: "Meeton",  top: "70%", left: "78%" },
];

function FloatingLabels() {
  return (
    <>
      {labels.map((label) => (
        <div
          key={label.name}
          style={{ top: label.top, left: label.left }}
          className="absolute px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white/40 text-xs tracking-widest"
        >
          {label.name}
        </div>
      ))}
    </>
  );
}

export default FloatingLabels;
