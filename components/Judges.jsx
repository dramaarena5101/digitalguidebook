import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { judges } from "../content";

export default function Judges() {
  return (
    <section id="judges" style={{ padding: "6rem 1.5rem", background: "#fff", borderTop: "1px solid #F3F4F6" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 36, height: 1, background: "#FF6B00" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF6B00" }}>Bab 06</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05em", color: "#111827", lineHeight: 0.9, fontSize: "clamp(44px, 7vw, 88px)" }}>
            NAMA-NAMA <span style={{ color: "#9CA3AF" }}>JURI</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {judges.map((judge, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-60px" });
            return (
              <motion.div key={i} ref={ref}
                initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{ padding: "2rem 2.5rem", borderRadius: 20, background: "#F9FAFB", border: "1px solid #E5E7EB", transition: "box-shadow 0.3s, transform 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 56, color: "#E5E7EB", lineHeight: 1, flexShrink: 0 }}>
                    {String(judge.no).padStart(2, "0")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 800, color: "#FF6B00", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16, lineHeight: 1.3 }}>
                      {judge.category}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {judge.members.map((m, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#374151" }}>
                          <span style={{ width: 18, height: 1, background: "#D1D5DB", flexShrink: 0 }} />
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
