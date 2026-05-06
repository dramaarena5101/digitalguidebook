import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { eventInfo, eventObjectives, logoPhilosophy } from "../content";

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-4" style={{ background: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-10 h-10 flex items-center justify-center rounded text-sm font-bold" style={{ background: "#FF6B00", color: "#fff", fontFamily: "'Bebas Neue', cursive", fontSize: "16px" }}>02</div>
            <div>
              <div className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "#FF6B00", fontFamily: "'Inter', sans-serif" }}>Section</div>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05em" }}>Tentang Acara</h2>
            </div>
            <div className="flex-1 h-px ml-4" style={{ background: "linear-gradient(90deg, #FF6B00, transparent)" }} />
          </div>
        </AnimatedSection>

        {/* Event info grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <AnimatedSection delay={0.1}>
            <div className="p-8 rounded-2xl" style={{ background: "#111", border: "1px solid #1f1f1f" }}>
              <h3 className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#FF6B00", fontFamily: "'Inter', sans-serif" }}>Nama Acara</h3>
              <p className="text-2xl font-bold mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>Drama Arena 5101</p>
              <p className="text-sm" style={{ color: "#888", fontFamily: "'Inter', sans-serif" }}>
                Geladi Suci Pagelaran Seni siswa kelas 5 Kulliyyatu-l-Mu'allimin Al-Islamiyyah (KMI) Pondok Modern Darussalam Gontor periode 1447-1448 / 2026-2027.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="p-8 rounded-2xl" style={{ background: "#111", border: "1px solid #1f1f1f" }}>
              <h3 className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#FF6B00", fontFamily: "'Inter', sans-serif" }}>Moto Acara</h3>
              <p className="text-2xl font-bold italic" style={{ fontFamily: "'Syne', sans-serif", color: "#FF6B00" }}>
                "Nyalakan Api Kebersamaan,
              </p>
              <p className="text-2xl font-bold italic" style={{ fontFamily: "'Syne', sans-serif", color: "#FF6B00" }}>
                Wujudkan Idealisme Kehidupan."
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="p-8 rounded-2xl" style={{ background: "#111", border: "1px solid #1f1f1f" }}>
              <h3 className="text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "#FF6B00", fontFamily: "'Inter', sans-serif" }}>Waktu & Tempat</h3>
              <div className="space-y-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                {[
                  ["Hari/Tanggal", "Selasa, 18 Dzulqa'dah 1447H / 05 Mei 2026M"],
                  ["Waktu", "Pukul 19.15 s.d. selesai"],
                  ["Tempat", "Depan Gedung Laboratorium KMI"],
                  ["Penanggung Jawab", "Al-Ustadz Ahmad Nur Fajar Dwi Prakosa"],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-3">
                    <span className="text-xs w-32 flex-shrink-0 mt-0.5" style={{ color: "#666" }}>{k}</span>
                    <span className="text-sm font-medium" style={{ color: "#E8E8E8" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div className="p-8 rounded-2xl h-full" style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.1), rgba(255,107,0,0.02))", border: "1px solid rgba(255,107,0,0.3)" }}>
              <h3 className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#FF6B00", fontFamily: "'Inter', sans-serif" }}>Tujuan Acara</h3>
              <ul className="space-y-3">
                {eventObjectives.map((obj, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#ccc" }}>
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ background: "#FF6B00", color: "#fff" }}>{i + 1}</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Logo Philosophy */}
        <AnimatedSection delay={0.1}>
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05em" }}>Filosofi Logo</h3>
            <div className="w-20 h-0.5" style={{ background: "#FF6B00" }} />
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {logoPhilosophy.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className="p-6 rounded-xl transition-all duration-300 group cursor-default"
                style={{ background: "#111", border: "1px solid #1f1f1f" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#FF6B00"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#1f1f1f"}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold mb-2 text-sm" style={{ color: "#FF6B00", fontFamily: "'Syne', sans-serif" }}>{item.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#888", fontFamily: "'Inter', sans-serif" }}>{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
