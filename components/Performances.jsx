import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { performances } from "../content";

const FONT = { neulis: "'Plus Jakarta Sans', sans-serif", bebas: "'Bebas Neue', cursive", wondra: "'Cormorant Garamond', serif" };

// ── Animated counter hook ──────────────────────────────────────────────────
function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const started = useRef(false);
  if (inView && !started.current) {
    started.current = true;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  return { count, ref };
}

// ── SVG icon map ────────────────────────────────────────────────────────────
const catIcon = {
  "Seni Musik & Suara": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
  ),
  "Seni Musik": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
  ),
  "Seni Tari & Atraksi": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/><path d="M6.5 8a2 2 0 0 0-1.905 1.382L3 14l2 1 1.5-3v8h2v-5h3v5h2V12l1.5 3 2-1-1.595-4.618A2 2 0 0 0 11.5 8z"/>
    </svg>
  ),
  "Seni Theater": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10s3-3 6-3 6 3 6 3v4s-3 3-6 3-6-3-6-3v-4z"/><path d="M14 10s3-3 6-3v7s-3 3-6 3"/>
    </svg>
  ),
  "Seni Bahasa & Literasi": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
};

const catColor = { "Seni Musik & Suara": "#FF6B00", "Seni Musik": "#FF6B00", "Seni Tari & Atraksi": "#EA580C", "Seni Theater": "#DC2626", "Seni Bahasa & Literasi": "#D97706" };
const catBg = { "Seni Musik & Suara": "#FFF0E6", "Seni Musik": "#FFF0E6", "Seni Tari & Atraksi": "#FFF3ED", "Seni Theater": "#FFF1F2", "Seni Bahasa & Literasi": "#FFFBEB" };

const FILTERS = ["Semua", "Seni Musik & Suara", "Seni Tari & Atraksi", "Seni Theater", "Seni Bahasa & Literasi"];

// ── Stat Card ───────────────────────────────────────────────────────────────
function StatCard({ target, suffix = "", label, icon }) {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref} style={{ padding: "2rem", borderRadius: 20, background: "#F9FAFB", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ color: "#9CA3AF", marginBottom: 4 }}>{icon}</div>
      <div style={{ fontFamily: FONT.bebas, fontSize: "clamp(44px,5vw,64px)", color: "#FF6B00", lineHeight: 1 }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontFamily: FONT.neulis, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9CA3AF" }}>{label}</div>
    </div>
  );
}

// ── Perf Card ───────────────────────────────────────────────────────────────
function PerfCard({ perf, onClick }) {
  const color = catColor[perf.category] || "#FF6B00";
  const bg = catBg[perf.category] || "#FFF0E6";
  return (
    <div onClick={() => onClick(perf)} style={{ borderRadius: 20, background: "#fff", border: "1px solid #E5E7EB", padding: "1.5rem", cursor: "pointer", display: "flex", flexDirection: "column", height: "100%", minWidth: 0, transition: "all 0.25s", flexShrink: 0 }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.09)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ fontFamily: FONT.neulis, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#9CA3AF" }}>NO.{String(perf.order).padStart(2, "0")}</span>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: bg, color, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {catIcon[perf.category] || catIcon["Seni Musik & Suara"]}
        </div>
      </div>
      <div style={{ fontFamily: FONT.neulis, fontSize: 16, fontWeight: 800, color: "#111827", lineHeight: 1.35, marginBottom: 12, flex: 1 }}>{perf.name}</div>
      <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 999, fontFamily: FONT.neulis, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: bg, color, marginBottom: 14 }}>{perf.category}</span>
      <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid #F3F4F6" }}>
        <span style={{ fontFamily: FONT.neulis, fontSize: 12, color: "#9CA3AF", fontWeight: 600 }}>{perf.duration}</span>
        <span style={{ fontFamily: FONT.neulis, fontSize: 12, color: "#9CA3AF", fontWeight: 600 }}>{perf.participants === -1 ? "Semua Siswa" : `${perf.participants} Org`}</span>
      </div>
    </div>
  );
}

// ── Modal ───────────────────────────────────────────────────────────────────
// ── Modal ───────────────────────────────────────────────────────────────────
function Modal({ perf, onClose }) {
  const [showPdf, setShowPdf] = useState(false);
  if (!perf) return null;
  const color = catColor[perf.category] || "#FF6B00";
  const bg = catBg[perf.category] || "#FFF0E6";

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", background: "rgba(17,24,39,0.5)", backdropFilter: "blur(8px)" }}>
        <motion.div initial={{ scale: 0.95, opacity: 0, y: 12 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 26, stiffness: 280 }}
          onClick={e => e.stopPropagation()}
          style={{ maxWidth: 1100, width: "100%", borderRadius: 24, background: "#fff", border: "1px solid #E5E7EB", padding: "2rem", position: "relative", boxShadow: "0 24px 64px rgba(0,0,0,0.15)", maxHeight: "90vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>

          <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, width: 36, height: 36, borderRadius: "50%", border: "none", background: "#F3F4F6", cursor: "pointer", fontSize: 18, color: "#6B7280", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>✕</button>

          {/* Header */}
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 24 }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: bg, display: "flex", alignItems: "center", justifyContent: "center", color, flexShrink: 0 }}>
              {catIcon[perf.category] || catIcon["Seni Musik & Suara"]}
            </div>
            <div>
              <div style={{ fontFamily: FONT.neulis, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color, marginBottom: 4 }}>Penampilan {String(perf.order).padStart(2, "0")}</div>
              <h3 style={{ fontFamily: FONT.neulis, fontSize: "clamp(17px,2.5vw,22px)", fontWeight: 800, color: "#111827", lineHeight: 1.25 }}>{perf.name}</h3>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            <button 
              onClick={() => setShowPdf(false)}
              style={{ padding: "8px 16px", borderRadius: 99, border: "none", background: !showPdf ? "#111827" : "#F3F4F6", color: !showPdf ? "#fff" : "#6B7280", fontFamily: FONT.neulis, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", cursor: "pointer", transition: "all 0.2s" }}
            >
              DETAIL TEKS
            </button>
            <button 
              onClick={() => setShowPdf(true)}
              style={{ padding: "8px 16px", borderRadius: 99, border: "none", background: showPdf ? "#FF6B00" : "#F3F4F6", color: showPdf ? "#fff" : "#6B7280", fontFamily: FONT.neulis, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", cursor: "pointer", transition: "all 0.2s" }}
            >
              PRATINJAU DESAIN (PDF)
            </button>
          </div>

          {/* Content Area */}
          <div style={{ flex: 1, overflowY: "auto", paddingRight: 8 }} className="custom-scroll">
            {!showPdf ? (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                {/* Description */}
                <p style={{ fontFamily: FONT.neulis, fontSize: 14, color: "#6B7280", lineHeight: 1.8, marginBottom: 24, padding: "1.25rem", background: "#F9FAFB", borderRadius: 16 }}>{perf.description}</p>

                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12, marginBottom: 24 }}>
                  {[["Kategori", perf.category], ["Durasi", perf.duration], ["Peserta", perf.participants === -1 ? "Seluruh Kelas 5" : `${perf.participants} Orang`]].map(([l, v]) => (
                    <div key={l} style={{ padding: "1rem", borderRadius: 14, background: "#fff", border: "1.2px solid #F3F4F6", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                      <div style={{ fontFamily: FONT.neulis, fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 6 }}>{l}</div>
                      <div style={{ fontFamily: FONT.neulis, fontSize: 13, fontWeight: 700, color: "#111827" }}>{v}</div>
                    </div>
                  ))}
                </div>

                {/* Lyrics / Script */}
                {perf.lyrics && (
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontFamily: FONT.neulis, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 12 }}>Lirik Lagu</div>
                    <div style={{ padding: "1.5rem", borderRadius: 18, background: "#FFF0E6", border: "1px solid #FDDCBF", fontFamily: FONT.wondra, fontSize: 17, fontStyle: "italic", color: "#374151", lineHeight: 1.9, whiteSpace: "pre-line" }}>
                      {perf.lyrics}
                    </div>
                  </div>
                )}
                {perf.mcScript && (
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontFamily: FONT.neulis, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 12 }}>Teks MC / Dialog</div>
                    <div style={{ padding: "1.5rem", borderRadius: 18, background: "#F9FAFB", border: "1px solid #E5E7EB", fontFamily: FONT.neulis, fontSize: 14, color: "#374151", lineHeight: 1.85, whiteSpace: "pre-line" }}>
                      {perf.mcScript}
                    </div>
                  </div>
                )}
                {perf.songs && (
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontFamily: FONT.neulis, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 12 }}>Daftar Lagu</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {perf.songs.map((s, i) => (
                        <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "1rem 1.25rem", borderRadius: 16, background: "#F9FAFB", border: "1px solid #F3F4F6" }}>
                          <span style={{ fontFamily: FONT.bebas, fontSize: 20, color: "#FF6B00", flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                          <div>
                            <div style={{ fontFamily: FONT.neulis, fontSize: 14, fontWeight: 700, color: "#111827" }}>{s.title}</div>
                            {s.desc && <div style={{ fontFamily: FONT.neulis, fontSize: 13, color: "#6B7280", marginTop: 4 }}>{s.desc}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Supervisors */}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: FONT.neulis, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 12 }}>Pembimbing</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {perf.supervisors.map((s, i) => (
                      <span key={i} style={{ padding: "6px 16px", borderRadius: 999, background: "#F9FAFB", border: "1px solid #E5E7EB", fontFamily: FONT.neulis, fontSize: 12, fontWeight: 600, color: "#374151" }}>{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
                style={{ height: "100%", minHeight: 450, borderRadius: 16, overflow: "hidden", background: "#F9FAFB", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column", position: "relative" }}>
                <div style={{ padding: "12px 16px", background: "#fff", borderBottom: "1px solid #E5E7EB", fontFamily: FONT.neulis, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280", display: "flex", justifyContent: "space-between", zIndex: 5 }}>
                  <span>PRATINJAU DESAIN</span>
                  <span style={{ color: "#FF6B00" }}>HALAMAN {perf.pdfPage || perf.order}</span>
                </div>
                <iframe 
                  src={`/guidebook.pdf#page=${perf.pdfPage || perf.order}&view=Fit&toolbar=0&navpanes=0&scrollbar=0`} 
                  title="PDF Preview"
                  style={{ width: "100%", flex: 1, border: "none", background: "#fff" }}
                />
                <button 
                  onClick={() => window.open(`/guidebook.pdf#page=${perf.pdfPage || perf.order}&view=Fit`, '_blank')}
                  style={{ position: "absolute", bottom: 16, right: 16, padding: "10px 20px", borderRadius: 99, background: "rgba(17,24,39,0.8)", backdropFilter: "blur(4px)", color: "#fff", border: "none", cursor: "pointer", fontFamily: FONT.neulis, fontSize: 10, fontWeight: 700, letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: 8 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  LIHAT FULLSCREEN
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Slider ──────────────────────────────────────────────────────────────────
const CARD_W = 260;
const GAP = 16;

function Slider({ items, onCardClick }) {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);
  const total = items.length;
  const perPage = Math.max(1, Math.floor((typeof window !== "undefined" ? Math.min(window.innerWidth, 1280) - 128 : 960) / (CARD_W + GAP)));
  const maxIdx = Math.max(0, total - perPage);
  const prev = () => setIdx(i => Math.max(0, i - 1));
  const next = () => setIdx(i => Math.min(maxIdx, i + 1));

  const NavBtn = ({ onClick, disabled, children }) => (
    <button onClick={onClick} disabled={disabled} style={{ width: 44, height: 44, borderRadius: "50%", border: "1.5px solid #E5E7EB", background: disabled ? "#F9FAFB" : "#fff", cursor: disabled ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: disabled ? "#D1D5DB" : "#111827", transition: "all 0.2s", flexShrink: 0 }}
      onMouseEnter={e => { if (!disabled) { e.currentTarget.style.background = "#FF6B00"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#FF6B00"; } }}
      onMouseLeave={e => { e.currentTarget.style.background = disabled ? "#F9FAFB" : "#fff"; e.currentTarget.style.color = disabled ? "#D1D5DB" : "#111827"; e.currentTarget.style.borderColor = "#E5E7EB"; }}>
      {children}
    </button>
  );

  return (
    <div>
      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <span style={{ fontFamily: FONT.neulis, fontSize: 12, color: "#9CA3AF", fontWeight: 600 }}>
          {idx + 1}–{Math.min(idx + perPage, total)} dari {total} penampilan
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          <NavBtn onClick={prev} disabled={idx === 0}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </NavBtn>
          <NavBtn onClick={next} disabled={idx >= maxIdx}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </NavBtn>
        </div>
      </div>

      {/* Slider track */}
      <div style={{ overflow: "hidden" }} ref={trackRef}>
        <motion.div
          drag="x"
          dragConstraints={trackRef}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50 && idx < maxIdx) next();
            else if (info.offset.x > 50 && idx > 0) prev();
          }}
          animate={{ x: -(idx * (CARD_W + GAP)) }}
          transition={{ type: "spring", damping: 30, stiffness: 260 }}
          style={{ display: "flex", gap: GAP, cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
        >
          {items.map((perf) => (
            <div key={perf.id} style={{ width: CARD_W, flexShrink: 0 }}>
              <PerfCard perf={perf} onClick={onCardClick} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 20 }}>
        {Array.from({ length: maxIdx + 1 }).map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 24 : 8, height: 8, borderRadius: 999, background: i === idx ? "#FF6B00" : "#E5E7EB", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
        ))}
      </div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────
export default function Performances() {
  const [filter, setFilter] = useState("Semua");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "Semua"
    ? performances
    : performances.filter(p => p.category === filter || (filter === "Seni Musik & Suara" && p.category === "Seni Musik"));

  const statIcons = [
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 10h16M4 14h10"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  ];

  return (
    <section id="performances" style={{ padding: "6rem 1.5rem", background: "#fff", borderTop: "1px solid #F3F4F6" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: "3.5rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 36, height: 1, background: "#FF6B00" }} />
              <span style={{ fontFamily: FONT.neulis, fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF6B00" }}>Bab 04</span>
            </div>
            <h2 style={{ fontFamily: FONT.bebas, letterSpacing: "0.05em", color: "#111827", lineHeight: 0.9, fontSize: "clamp(44px, 7vw, 88px)" }}>
              DAFTAR <span style={{ color: "#9CA3AF" }}>PENAMPILAN</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={{ fontFamily: FONT.neulis, fontSize: 15, color: "#6B7280", maxWidth: 360, lineHeight: 1.8, margin: 0 }}>
              28 penampilan memukau dari 4 kategori seni yang berbeda, disajikan oleh 440 santri terbaik kelas 5 KMI.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#FF6B00", boxShadow: "0 8px 24px rgba(255,107,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/guidebook.pdf', '_blank')}
              style={{ width: "fit-content", padding: "10px 20px", borderRadius: 999, background: "#111827", color: "#fff", border: "none", cursor: "pointer", fontFamily: FONT.neulis, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              LIHAT FULL GUIDEBOOK
            </motion.button>
          </div>
        </motion.div>

        {/* Animated Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: "3rem" }}>
          <StatCard target={28} label="Total Penampilan" icon={statIcons[0]} />
          <StatCard target={4} label="Kategori Seni" icon={statIcons[1]} />
          <StatCard target={440} label="Siswa Kelas 5" icon={statIcons[2]} />
          <StatCard target={700} suffix="+" label="Penonton" icon={statIcons[3]} />
        </div>

        {/* Filter tabs */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem" }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: "0.55rem 1.25rem", borderRadius: 999, border: "1.5px solid",
              fontFamily: FONT.neulis, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s",
              background: filter === f ? "#111827" : "#fff", color: filter === f ? "#fff" : "#6B7280", borderColor: filter === f ? "#111827" : "#E5E7EB",
            }}>
              {f}
            </button>
          ))}
        </motion.div>

        {/* Slider */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Slider items={filtered} onCardClick={setSelected} />
        </motion.div>

        {/* Hint */}
        <p style={{ fontFamily: FONT.neulis, fontSize: 12, color: "#9CA3AF", textAlign: "center", marginTop: 20 }}>
          Klik kartu untuk melihat detail penampilan
        </p>
      </div>

      <Modal perf={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
