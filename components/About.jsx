import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { eventObjectives } from "../content";

// ─────────────────────────────────────────────────────────────────────────────
// FILOSOFI LOGO — PANDUAN SETUP GAMBAR
// ─────────────────────────────────────────────────────────────────────────────
// Setiap elemen filosofi bisa ditambahkan gambar/ilustrasi sendiri.
// Letakkan file gambar di folder: /public/filosofi/
//
// Contoh penamaan file:
//   public/filosofi/drama-seni.png
//   public/filosofi/api-semangat.png
//   public/filosofi/angka-5101.png
//   public/filosofi/lingkaran-persatuan.png
//   public/filosofi/gontor-kmi.png
//   public/filosofi/dinamisme.png
//
// Lalu isi bagian "img" di setiap objek logoPhilosophy di bawah:
// ─────────────────────────────────────────────────────────────────────────────

const logoPhilosophy = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Drama & Seni Pertunjukan",
    desc: "Dua topeng drama melambangkan dualitas seni pertunjukan — suka dan duka, realita dan mimpi yang menjadi jiwa dari setiap penampilan siswa kelas 5.",
    img: null, // Ganti dengan: "/filosofi/drama-seni.png"
    // Setelah file tersedia, ubah baris di atas menjadi:
    // img: "/filosofi/drama-seni.png",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6M12 18v4M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M18 12h4M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"/>
      </svg>
    ),
    title: "Api Semangat",
    desc: "Nyala api di pusat logo mencerminkan semangat membara, energi kolektif, dan tekad siswa dalam mewujudkan idealisme kehidupan tanpa batas.",
    img: null, // Ganti dengan: "/filosofi/api-semangat.png"
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h4"/>
      </svg>
    ),
    title: "Angka 5 & 101",
    desc: "Angka '5' merepresentasikan kelas 5 KMI, sedangkan '101' adalah nomor kamar bersejarah yang menjadi identitas dan kenangan tak terlupakan bagi seluruh anggota.",
    img: null, // Ganti dengan: "/filosofi/angka-5101.png"
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 1 0 20 14.5 14.5 0 0 1 0-20"/><path d="M2 12h20"/>
      </svg>
    ),
    title: "Lingkaran Persatuan",
    desc: "Bentuk melingkar pada logo menggambarkan persatuan, kebersamaan, dan ikatan tanpa putus antar sesama santri kelas 5 KMI Gontor.",
    img: null, // Ganti dengan: "/filosofi/lingkaran-persatuan.png"
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Gontor & KMI",
    desc: "Elemen arsitektur dalam logo terinspirasi dari Pondok Modern Darussalam Gontor, tempat lahirnya generasi pemimpin umat dan bangsa sepanjang zaman.",
    img: null, // Ganti dengan: "/filosofi/gontor-kmi.png"
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "Dinamisme & Kreativitas",
    desc: "Garis-garis dinamis mencerminkan gerak, kreativitas, dan inovasi tanpa henti — semangat anak muda yang terus bergerak melampaui batas ekspektasi.",
    img: null, // Ganti dengan: "/filosofi/dinamisme.png"
  },
];

const FONT_NEULIS  = "'Plus Jakarta Sans', sans-serif";
const FONT_WONDRA  = "'Cormorant Garamond', serif";
const FONT_BEBAS   = "'Bebas Neue', cursive";

const S = {
  section: { padding: "6rem 1.5rem", background: "#fff", borderTop: "1px solid #F3F4F6" },
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
              <div style={{ fontFamily: FONT_WONDRA, fontSize: 36, fontWeight: 700, color: "#111827", marginBottom: 16, lineHeight: 1.15 }}>Drama Arena 5101</div>
              <p style={{ fontFamily: FONT_NEULIS, fontSize: 15, color: "#6B7280", lineHeight: 1.75 }}>
                Geladi Suci Pagelaran Seni siswa kelas 5 KMI Pondok Modern Darussalam Gontor periode 1447-1448 / 2026-2027.
              </p>
            </div>
          </Fade>
          <Fade delay={0.15}>
            <div style={{ ...S.card, background: "#FFF0E6", border: "1px solid #FDDCBF", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,107,0,0.1)", filter: "blur(40px)" }} />
              <div style={{ fontFamily: FONT_NEULIS, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF6B00", marginBottom: 16, position: "relative" }}>Moto Acara</div>
              <div style={{ position: "relative" }}>
                <p style={{ fontFamily: FONT_WONDRA, fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 600, fontStyle: "italic", color: "#374151", lineHeight: 1.4, marginBottom: 6 }}>"Nyalakan Api Kebersamaan,</p>
                <p style={{ fontFamily: FONT_WONDRA, fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 700, fontStyle: "italic", color: "#FF6B00", lineHeight: 1.4 }}>Wujudkan Idealisme Kehidupan."</p>
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
                ["📅", "Hari/Tanggal", "Selasa, 18 Dzulqa'dah 1447H"],
                ["⏱", "Waktu", "Pukul 19.15 s.d. selesai"],
                ["📍", "Tempat", "Depan Lab KMI, Gontor"],
                ["👤", "Pimpinan", "Ust. Ahmad Nur Fajar"],
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
          <p style={{ fontFamily: FONT_NEULIS, fontSize: 15, color: "#6B7280", lineHeight: 1.7, maxWidth: 600, marginBottom: "3rem" }}>
            Setiap elemen pada logo DA 5101 mengandung makna mendalam yang mencerminkan semangat, identitas, dan cita-cita seluruh siswa kelas 5 KMI.
          </p>
        </Fade>

        {/* Logo image + philosophy overview */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, alignItems: "start", marginBottom: "3rem" }}>
          <Fade delay={0.1}>
            <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid #E5E7EB", background: "#F9FAFB", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 360, position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(255,107,0,0.07) 0%, transparent 70%)" }} />
              <img src="/logo.png" alt="Logo Drama Arena 5101"
                style={{ width: "70%", maxWidth: 260, height: "auto", objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 12px 32px rgba(255,107,0,0.2))" }}
                onError={e => e.target.style.display = "none"}
              />
            </div>
          </Fade>

          {/* Summary cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {logoPhilosophy.map((item, i) => (
              <Fade key={i} delay={i * 0.06}>
                <div
                  style={{ padding: "1rem 1.25rem", borderRadius: 16, background: "#F9FAFB", border: "1px solid #E5E7EB", display: "flex", gap: 14, alignItems: "flex-start", transition: "all 0.25s", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#FFF0E6"; e.currentTarget.style.borderColor = "#FDDCBF"; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#F9FAFB"; e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.transform = "translateX(0)"; }}
                >
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "#fff", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF6B00", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: FONT_NEULIS, fontSize: 13, fontWeight: 800, color: "#111827", marginBottom: 3 }}>{item.title}</div>
                    <p style={{ fontFamily: FONT_NEULIS, fontSize: 12, color: "#6B7280", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>

        {/* ── Per-philosophy image grid ── */}
        <Fade delay={0.1}>
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ fontFamily: FONT_NEULIS, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 20 }}>
              Detail Visual Filosofi
            </div>
            {/* Info box - panduan menambah gambar */}
            <div style={{ padding: "1rem 1.5rem", borderRadius: 16, background: "#F9FAFB", border: "1px dashed #D1D5DB", marginBottom: 24, display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ fontSize: 20, flexShrink: 0 }}>💡</div>
              <div>
                <p style={{ fontFamily: FONT_NEULIS, fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 4 }}>Cara Menambahkan Gambar Per-Filosofi:</p>
                <p style={{ fontFamily: FONT_NEULIS, fontSize: 12, color: "#6B7280", lineHeight: 1.7 }}>
                  Simpan gambar di folder <code style={{ background: "#E5E7EB", padding: "1px 6px", borderRadius: 4, fontSize: 11 }}>/public/filosofi/</code>, 
                  lalu ubah nilai <code style={{ background: "#E5E7EB", padding: "1px 6px", borderRadius: 4, fontSize: 11 }}>img: null</code> di array <code style={{ background: "#E5E7EB", padding: "1px 6px", borderRadius: 4, fontSize: 11 }}>logoPhilosophy</code> dalam file ini menjadi path gambar, 
                  contoh: <code style={{ background: "#FFF0E6", color: "#FF6B00", padding: "1px 6px", borderRadius: 4, fontSize: 11 }}>img: "/filosofi/api-semangat.png"</code>
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {logoPhilosophy.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }}>
                <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #E5E7EB", background: "#fff" }}>
                  {/* Image area */}
                  <div style={{ height: 160, background: item.img ? "transparent" : "#F9FAFB", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                    {item.img ? (
                      <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <div style={{ textAlign: "center", padding: "1.5rem" }}>
                        <div style={{ color: "#FF6B00", marginBottom: 8 }}>{item.icon}</div>
                        <p style={{ fontFamily: FONT_NEULIS, fontSize: 10, color: "#D1D5DB", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          Tambahkan gambar
                        </p>
                        <p style={{ fontFamily: FONT_NEULIS, fontSize: 9, color: "#9CA3AF", marginTop: 2 }}>
                          /filosofi/{item.title.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "")}.png
                        </p>
                      </div>
                    )}
                  </div>
                  {/* Caption */}
                  <div style={{ padding: "1rem 1.25rem" }}>
                    <div style={{ fontFamily: FONT_NEULIS, fontSize: 13, fontWeight: 800, color: "#111827", marginBottom: 4 }}>{item.title}</div>
                    <p style={{ fontFamily: FONT_NEULIS, fontSize: 12, color: "#6B7280", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Fade>

      </div>
    </section>
  );
}
