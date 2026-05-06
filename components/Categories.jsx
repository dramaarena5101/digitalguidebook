import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { categories } from "../content";

const S = {
  section: { padding: "6rem 1.5rem", background: "#F9FAFB", borderTop: "1px solid #F3F4F6" },
  inner: { maxWidth: 1280, margin: "0 auto" },
  heading: { fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05em", color: "#111827", lineHeight: 0.9, fontSize: "clamp(44px, 7vw, 88px)" },
};

function Fade({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }} style={style}>
      {children}
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section id="categories" style={S.section}>
      <div style={S.inner}>

        {/* Header */}
        <Fade style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: "4rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 36, height: 1, background: "#FF6B00" }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF6B00" }}>Bab 03</span>
            </div>
            <h2 style={S.heading}>KATEGORI <span style={{ color: "#9CA3AF" }}>SENI</span></h2>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#6B7280", maxWidth: 380, lineHeight: 1.8 }}>
            Eksplorasi beragam medium ekspresi kreativitas dalam panggung Drama Arena 5101.
          </p>
        </Fade>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {categories.map((cat, i) => (
            <Fade key={cat.name} delay={i * 0.08}>
              <div
                style={{ borderRadius: 20, background: "#fff", border: "1px solid #E5E7EB", padding: "2rem", height: "100%", display: "flex", flexDirection: "column", transition: "box-shadow 0.3s, transform 0.3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.09)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {/* Icon */}
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "#F9FAFB", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 20 }}>
                  {cat.icon}
                </div>

                {/* Name */}
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, color: "#111827", marginBottom: 16, lineHeight: 1.25 }}>
                  {cat.name}
                </div>

                {/* Items */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 16, flex: 1 }}>
                  {cat.items.slice(0, 3).map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#6B7280", fontWeight: 500 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF6B00", flexShrink: 0, opacity: 0.7 }} />
                      {item}
                    </li>
                  ))}
                </ul>

                {cat.items.length > 3 && (
                  <div style={{ paddingTop: 14, borderTop: "1px solid #F3F4F6", fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    + {cat.items.length - 3} Lainnya
                  </div>
                )}
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
