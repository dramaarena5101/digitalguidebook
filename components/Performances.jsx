import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { performances } from "../content";

const catColor = {
  "Seni Musik & Suara": "#FF6B00",
  "Seni Musik":          "#FF6B00",
  "Seni Tari & Atraksi": "#EA580C",
  "Seni Theater":        "#DC2626",
  "Seni Bahasa & Literasi": "#D97706",
};
const catBg = {
  "Seni Musik & Suara": "#FFF0E6",
  "Seni Musik":          "#FFF0E6",
  "Seni Tari & Atraksi": "#FFF3ED",
  "Seni Theater":        "#FFF1F2",
  "Seni Bahasa & Literasi": "#FFFBEB",
};

function Card({ perf, onClick, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const color = catColor[perf.category] || "#FF6B00";
  const bg = catBg[perf.category] || "#FFF0E6";

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      onClick={() => onClick(perf)}
      style={{ borderRadius: 20, background: "#fff", border: "1px solid #E5E7EB", padding: "1.75rem", cursor: "pointer", display: "flex", flexDirection: "column", height: "100%", transition: "box-shadow 0.3s, transform 0.3s" }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.09)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#9CA3AF" }}>
          NO.{String(perf.order).padStart(2, "0")}
        </span>
        <span style={{ fontSize: 28, filter: "grayscale(100%)", transition: "filter 0.3s" }}
          onMouseEnter={e => e.target.style.filter = "none"}
          onMouseLeave={e => e.target.style.filter = "grayscale(100%)"}
        >{perf.emoji}</span>
      </div>

      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, color: "#111827", lineHeight: 1.35, marginBottom: 14, flex: 1 }}>
        {perf.name}
      </div>

      <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 999, fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", background: bg, color, marginBottom: 16 }}>
        {perf.category}
      </span>

      <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid #F3F4F6" }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9CA3AF", fontWeight: 500 }}>{perf.duration}</span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9CA3AF", fontWeight: 500 }}>
          {perf.participants === -1 ? "Semua Siswa" : `${perf.participants} Org`}
        </span>
      </div>
    </motion.div>
  );
}

function Modal({ perf, onClose }) {
  if (!perf) return null;
  const color = catColor[perf.category] || "#FF6B00";
  const bg = catBg[perf.category] || "#FFF0E6";
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", background: "rgba(17,24,39,0.45)", backdropFilter: "blur(8px)" }}>
        <motion.div initial={{ scale: 0.95, opacity: 0, y: 12 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 26, stiffness: 280 }}
          onClick={e => e.stopPropagation()}
          style={{ maxWidth: 640, width: "100%", borderRadius: 24, background: "#fff", border: "1px solid #E5E7EB", padding: "2.5rem", position: "relative", boxShadow: "0 24px 64px rgba(0,0,0,0.15)", maxHeight: "90vh", overflowY: "auto" }}>

          <button onClick={onClose} style={{ position: "absolute", top: 20, right: 20, width: 40, height: 40, borderRadius: "50%", border: "none", background: "#F3F4F6", cursor: "pointer", fontSize: 20, color: "#6B7280", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>

          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24 }}>
            <div style={{ width: 64, height: 64, borderRadius: 16, background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, flexShrink: 0 }}>{perf.emoji}</div>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color, marginBottom: 6 }}>Penampilan {String(perf.order).padStart(2,"0")}</div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, color: "#111827", lineHeight: 1.2 }}>{perf.name}</h3>
            </div>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#6B7280", lineHeight: 1.8, marginBottom: 24 }}>{perf.description}</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
            {[["Kategori", perf.category], ["Durasi", perf.duration], ["Peserta", perf.participants === -1 ? "Seluruh Kelas 5" : `${perf.participants} Orang`]].map(([l, v]) => (
              <div key={l} style={{ padding: "1rem", borderRadius: 14, background: "#F9FAFB", border: "1px solid #F3F4F6" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 6 }}>{l}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, color: "#111827" }}>{v}</div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 12 }}>Pembimbing</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {perf.supervisors.map((s, i) => (
                <span key={i} style={{ padding: "6px 16px", borderRadius: 999, background: "#F9FAFB", border: "1px solid #E5E7EB", fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: "#374151" }}>{s}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const FILTERS = ["Semua", "Seni Musik & Suara", "Seni Tari & Atraksi", "Seni Theater", "Seni Bahasa & Literasi"];

export default function Performances() {
  const [filter, setFilter] = useState("Semua");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "Semua" ? performances
    : performances.filter(p => p.category === filter || (filter === "Seni Musik & Suara" && p.category === "Seni Musik"));

  return (
    <section id="performances" style={{ padding: "6rem 1.5rem", background: "#fff", borderTop: "1px solid #F3F4F6" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: "4rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 36, height: 1, background: "#FF6B00" }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF6B00" }}>Bab 04</span>
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05em", color: "#111827", lineHeight: 0.9, fontSize: "clamp(44px, 7vw, 88px)" }}>
              DAFTAR <span style={{ color: "#9CA3AF" }}>PENAMPILAN</span>
            </h2>
          </div>
        </motion.div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: "3rem" }}>
          {[["28", "Total Penampilan"], ["4", "Kategori Seni"], ["43", "Peserta Terbanyak"]].map(([val, lbl]) => (
            <div key={lbl} style={{ padding: "2rem", borderRadius: 20, background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
              <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 64, color: "#FF6B00", lineHeight: 1, marginBottom: 8 }}>{val}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9CA3AF" }}>{lbl}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "2.5rem" }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: "0.6rem 1.5rem", borderRadius: 999, border: "1.5px solid",
              fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s",
              background: filter === f ? "#111827" : "#fff", color: filter === f ? "#fff" : "#6B7280", borderColor: filter === f ? "#111827" : "#E5E7EB",
            }}>
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
          {filtered.map((perf, i) => <Card key={perf.id} perf={perf} onClick={setSelected} index={i} />)}
        </div>
      </div>

      <Modal perf={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
