import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { performances, categories } from "../content";

const categoryColors = {
  "Seni Musik & Suara": "#FF6B00",
  "Seni Tari & Atraksi": "#e85d04",
  "Seni Theater": "#cc4400",
  "Seni Bahasa & Literasi": "#FF8C35",
  "Seni Musik": "#FF6B00",
};

function PerformanceCard({ perf, onClick, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      onClick={() => onClick(perf)}
      className="cursor-pointer rounded-2xl p-5 transition-all duration-300 group"
      style={{ 
        background: "#111", 
        border: "1px solid #1f1f1f",
        boxShadow: perf.color ? `0 0 20px ${perf.color}10` : "none"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = perf.color || "#FF6B00";
        e.currentTarget.style.boxShadow = perf.color ? `0 0 30px ${perf.color}30` : "0 0 30px rgba(255,107,0,0.2)";
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#1f1f1f";
        e.currentTarget.style.boxShadow = perf.color ? `0 0 20px ${perf.color}10` : "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Order number + emoji */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
          style={{ background: "rgba(255,107,0,0.15)", color: "#FF6B00", fontFamily: "'Inter', sans-serif" }}
        >
          {String(perf.order).padStart(2, "0")}
        </div>
        <span className="text-2xl">{perf.emoji}</span>
      </div>

      {/* Name */}
      <h3 className="font-bold text-sm mb-2 leading-tight" style={{ fontFamily: "'Syne', sans-serif", color: "#E8E8E8" }}>
        {perf.name}
      </h3>

      {/* Category badge */}
      <div
        className="inline-block text-xs px-2 py-0.5 rounded-full mb-3"
        style={{ background: `${categoryColors[perf.category]}20`, color: categoryColors[perf.category] || "#FF6B00", fontFamily: "'Inter', sans-serif" }}
      >
        {perf.category}
      </div>

      {/* Footer info */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs" style={{ color: "#666", fontFamily: "'Inter', sans-serif" }}>
          ⏱ {perf.duration}
        </span>
        <span className="text-xs" style={{ color: "#666", fontFamily: "'Inter', sans-serif" }}>
          👥 {perf.participants === -1 ? "All Students" : `${perf.participants} Orang`}
        </span>
      </div>
    </motion.div>
  );
}

function Modal({ perf, onClose }) {
  if (!perf) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="max-w-lg w-full rounded-2xl p-8 relative"
          style={{ background: "#161616", border: `1px solid ${perf.color || "#FF6B00"}` }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-lg"
            style={{ background: "#2a2a2a", color: "#888" }}
          >
            ×
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{perf.emoji}</span>
            <div>
              <div className="text-xs mb-1" style={{ color: perf.color || "#FF6B00", fontFamily: "'Inter', sans-serif" }}>
                Penampilan #{String(perf.order).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>{perf.name}</h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm mb-6 leading-relaxed" style={{ color: "#aaa", fontFamily: "'Inter', sans-serif" }}>
            {perf.description}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { label: "Kategori", value: perf.category },
              { label: "Durasi", value: perf.duration },
              { label: "Peserta", value: perf.participants === -1 ? "Seluruh Siswa Kelas 5 KMI" : `${perf.participants} Orang` },
            ].map(item => (
              <div key={item.label} className="p-3 rounded-lg" style={{ background: "#1a1a1a" }}>
                <div className="text-xs mb-1" style={{ color: "#666", fontFamily: "'Inter', sans-serif" }}>{item.label}</div>
                <div className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Supervisors */}
          <div>
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: "#FF6B00", fontFamily: "'Inter', sans-serif" }}>Pembimbing</div>
            <div className="flex flex-col gap-1">
              {perf.supervisors.map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "#ccc", fontFamily: "'Inter', sans-serif" }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: perf.color || "#FF6B00" }} />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Performances() {
  const [filter, setFilter] = useState("Semua");
  const [selected, setSelected] = useState(null);

  const filters = ["Semua", "Seni Musik & Suara", "Seni Tari & Atraksi", "Seni Theater", "Seni Bahasa & Literasi"];

  const filtered = filter === "Semua"
    ? performances
    : performances.filter(p => p.category === filter || (filter === "Seni Musik & Suara" && p.category === "Seni Musik"));

  return (
    <section id="performances" className="py-24 px-4" style={{ background: "#0D0D0D" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded text-sm font-bold" style={{ background: "#FF6B00", color: "#fff", fontFamily: "'Bebas Neue', cursive", fontSize: "16px" }}>03</div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "#FF6B00", fontFamily: "'Inter', sans-serif" }}>Section</div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05em" }}>Keterangan Penampilan</h2>
          </div>
          <div className="flex-1 h-px ml-4 hidden md:block" style={{ background: "linear-gradient(90deg, #FF6B00, transparent)" }} />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-6 mb-10 flex-wrap"
        >
          {[
            { label: "Total Penampilan", value: "28" },
            { label: "Kategori Seni", value: "4" },
            { label: "Peserta Terbanyak", value: "43" },
          ].map(s => (
            <div key={s.label}>
              <div className="text-3xl font-bold" style={{ fontFamily: "'Bebas Neue', cursive", color: "#FF6B00" }}>{s.value}</div>
              <div className="text-xs" style={{ color: "#666", fontFamily: "'Inter', sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-4 py-2 rounded-full text-xs tracking-wider transition-all duration-200"
              style={{
                background: filter === f ? "#FF6B00" : "rgba(255,255,255,0.05)",
                color: filter === f ? "#fff" : "#888",
                border: filter === f ? "1px solid #FF6B00" : "1px solid #2a2a2a",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((perf, i) => (
            <PerformanceCard key={perf.id} perf={perf} onClick={setSelected} index={i} />
          ))}
        </div>
      </div>

      <Modal perf={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
