import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { eventObjectives, logoPhilosophy, eventInfo } from "../content";

const FONT_NEULIS = "'Plus Jakarta Sans', sans-serif";
const FONT_WONDRA = "'Cormorant Garamond', serif";
const FONT_BEBAS = "'Bebas Neue', cursive";

const S = {
  section: { padding: "6rem 1.5rem", background: "#fff", borderTop: "1px solid #F3F4F6", overflow: "hidden" },
  inner: { maxWidth: 1280, margin: "0 auto" },
  label: { display: "flex", alignItems: "center", gap: 12, marginBottom: 14 },
  labelLine: { width: 36, height: 1, background: "#FF6B00" },
  labelText: { fontFamily: FONT_NEULIS, fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF6B00" },
  heading: { fontFamily: FONT_BEBAS, letterSpacing: "0.05em", color: "#111827", lineHeight: 0.9, marginBottom: "1.5rem", fontSize: "clamp(44px, 7vw, 88px)" },
  card: { borderRadius: 24, background: "#F9FAFB", border: "1px solid #E5E7EB", padding: "2.5rem", height: "100%" },
};

function Fade({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }} style={style}>
      {children}
    </motion.div>
  );
}

// ── Interactive Philosophy Component ──
function InteractivePhilosophy() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Positions for the arrows pointing from the central logo to the surrounding cards
  // This is a simplified conceptual layout: logo in center, items around it.
  // For mobile, it'll stack gracefully.

  return (
    <div style={{ position: "relative", marginTop: "4rem", marginBottom: "4rem" }}>
      {/* Background soft circle */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "clamp(300px, 80vw, 600px)", height: "clamp(300px, 80vw, 600px)", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,0,0.04) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>

        {/* Interactive Center Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
          style={{ width: 280, height: 280, borderRadius: 32, background: "#FFF0E6", border: "2px solid #FDDCBF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 10, boxShadow: "0 24px 48px rgba(255,107,0,0.15)", marginBottom: "3rem", gap: 10, padding: 20 }}
        >
          <img src="/logo.png" alt="Logo DA" style={{ width: "100px", height: "100px", objectFit: "contain", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }} onError={e => e.target.style.display = 'none'} />
          <img src="/Typo DA.png" alt="Typo DA" style={{ width: "180px", height: "auto", objectFit: "contain", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }} onError={e => e.target.style.display = 'none'} />

          {/* Pulsing ring behind logo */}
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", inset: -10, borderRadius: 40, border: "2px solid #FF6B00", zIndex: -1 }} />
        </motion.div>

        {/* Philosophy Details Viewer */}
        <div style={{ width: "100%", maxWidth: 800, background: "#fff", borderRadius: 24, border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 12px 32px rgba(0,0,0,0.05)" }}>
          {/* Tabs/Selectors */}
          <div style={{ display: "flex", overflowX: "auto", background: "#F9FAFB", borderBottom: "1px solid #E5E7EB", scrollbarWidth: "none" }}>
            {logoPhilosophy.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                style={{ flex: "1 0 auto", padding: "1rem 1.5rem", border: "none", background: activeIdx === i ? "#fff" : "transparent", fontFamily: FONT_NEULIS, fontSize: 13, fontWeight: 700, color: activeIdx === i ? "#FF6B00" : "#6B7280", cursor: "pointer", transition: "all 0.2s", borderBottom: activeIdx === i ? "2px solid #FF6B00" : "2px solid transparent", position: "relative" }}
              >
                {item.title}
                {activeIdx === i && (
                  <motion.div layoutId="philTab" style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 2, background: "#FF6B00" }} />
                )}
              </button>
            ))}
          </div>

          {/* Active Content */}
          <div style={{ padding: "3rem 2rem", position: "relative", minHeight: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {logoPhilosophy.map((item, i) => (
              activeIdx === i && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                  style={{ textAlign: "center", maxWidth: 600 }}
                >
                  <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: 16, background: "#FFF0E6", color: "#FF6B00", fontSize: 24, fontWeight: "bold", fontFamily: FONT_WONDRA, marginBottom: 20, border: "1px solid #FDDCBF", overflow: "hidden" }}>
                    {item.icon.startsWith("/") || item.icon.includes(".") ? (
                      <img src={item.icon} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "contain", padding: 8 }} onError={e => { e.target.style.display = 'none'; e.target.parentElement.innerText = item.title.substring(0, 1); }} />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <h4 style={{ fontFamily: FONT_BEBAS, fontSize: "clamp(28px, 4vw, 40px)", color: "#111827", marginBottom: 16, letterSpacing: "0.05em" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontFamily: FONT_NEULIS, fontSize: 16, color: "#4B5563", lineHeight: 1.8 }}>
                    {item.desc}
                  </p>
                </motion.div>
              )
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}


export default function About() {
  return (
    <section id="about" style={S.section}>
      <div style={S.inner}>

        {/* ── Header ── */}
        <Fade style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: "4rem" }}>
          <div>
            <div style={S.label}><div style={S.labelLine} /><span style={S.labelText}>Bab 01</span></div>
            <h2 style={S.heading}>TENTANG ACARA <span style={{ color: "#9CA3AF" }}>DRAMA ARENA</span></h2>
          </div>
          <p style={{ fontFamily: FONT_NEULIS, fontSize: 16, color: "#6B7280", maxWidth: 400, lineHeight: 1.8 }}>
            Memahami lebih dalam tentang filosofi, tujuan, dan detail pelaksanaan pagelaran seni terbesar tahun ini.
          </p>
        </Fade>

        {/* ── Row 1: Nama Acara + Moto ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 24 }}>
          <Fade delay={0.1}>
            <div style={S.card}>
              <div style={{ fontFamily: FONT_NEULIS, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 16 }}>Nama Acara</div>
              <div style={{ fontFamily: FONT_WONDRA, fontSize: 36, fontWeight: 700, color: "#111827", marginBottom: 16, lineHeight: 1.15 }}>{eventInfo.name}</div>
              <p style={{ fontFamily: FONT_NEULIS, fontSize: 15, color: "#6B7280", lineHeight: 1.75 }}>
                Pagelaran Seni siswa kelas 5 KMI Pondok Modern Darussalam Gontor periode {eventInfo.period}.
              </p>
            </div>
          </Fade>
          <Fade delay={0.15}>
            <div style={{ ...S.card, background: "#FFF0E6", border: "1px solid #FDDCBF", position: "relative", overflow: "visible" }}>
              {/* Jargon Image */}
              <motion.img
                src="/jargon.png"
                alt="Jargon DA"
                initial={{ opacity: 0, scale: 0.5, rotate: 15, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -8, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.3 }}
                style={{ position: "absolute", top: -35, right: -25, width: 140, height: "auto", zIndex: 20, filter: "drop-shadow(0 8px 16px rgba(255,107,0,0.25))", transformOrigin: "bottom right" }}
                onError={e => e.target.style.display = 'none'}
              />

              <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,107,0,0.1)", filter: "blur(40px)" }} />
              <div style={{ fontFamily: FONT_NEULIS, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF6B00", marginBottom: 16, position: "relative" }}>Moto Acara</div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <p style={{ fontFamily: FONT_WONDRA, fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 600, fontStyle: "italic", color: "#374151", lineHeight: 1.4, marginBottom: 6 }}>"{eventInfo.motto.split(',')[0]},</p>
                <p style={{ fontFamily: FONT_WONDRA, fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 700, fontStyle: "italic", color: "#FF6B00", lineHeight: 1.4 }}>{eventInfo.motto.split(',')[1]}."</p>
              </div>
            </div>
          </Fade>
        </div>

        {/* ── Row 2: Waktu & Tempat ── */}
        <Fade delay={0.2} style={{ marginBottom: 24 }}>
          <div style={{ ...S.card, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: "#FF6B00", borderRadius: "24px 0 0 24px" }} />
            <div style={{ fontFamily: FONT_NEULIS, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 28, paddingLeft: 16 }}>Waktu & Tempat</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 28, paddingLeft: 16 }}>
              {[
                ["📅", "Hari/Tanggal", eventInfo.date.split('/')[0].trim()],
                ["⏱", "Waktu", eventInfo.time],
                ["📍", "Tempat", eventInfo.venue],
                ["👤", "Pembimbing", eventInfo.picInCharge],
              ].map(([icon, label, val]) => (
                <div key={label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "#fff", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: FONT_NEULIS, fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 4 }}>{label}</div>
                    <div style={{ fontFamily: FONT_NEULIS, fontSize: 14, fontWeight: 700, color: "#1F2937", lineHeight: 1.4 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        {/* ── Row 3: Tujuan ── */}
        <Fade delay={0.25} style={{ marginBottom: "6rem" }}>
          <div style={{ ...S.card, background: "#FFF0E6", border: "1px solid #FDDCBF" }}>
            <div style={{ fontFamily: FONT_NEULIS, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF6B00", marginBottom: 24 }}>Tujuan Acara</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px 48px" }}>
              {eventObjectives.map((obj, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF6B00", flexShrink: 0, marginTop: 7 }} />
                  <p style={{ fontFamily: FONT_NEULIS, fontSize: 14, color: "#374151", lineHeight: 1.7, fontWeight: 500 }}>{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        {/* ── Bab 02: Filosofi Logo ── */}
        <Fade>
          <div style={{ ...S.label, marginBottom: 12 }}><div style={S.labelLine} /><span style={S.labelText}>Bab 02</span></div>
          <h3 style={{ ...S.heading, marginBottom: "0.75rem" }}>FILOSOFI <span style={{ color: "#9CA3AF" }}>LOGO</span></h3>
          <p style={{ fontFamily: FONT_NEULIS, fontSize: 15, color: "#6B7280", lineHeight: 1.7, maxWidth: 600, marginBottom: "1rem" }}>
            Setiap elemen pada logo DA 5101 mengandung makna mendalam yang mencerminkan semangat, identitas, dan cita-cita seluruh siswa kelas 5 KMI.
          </p>
        </Fade>

        <Fade delay={0.1}>
          <InteractivePhilosophy />
        </Fade>

      </div>
    </section>
  );
}
