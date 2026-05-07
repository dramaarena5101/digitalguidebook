import { motion } from "framer-motion";
import { sponsors } from "../content";
import Marquee from "./MagicUI/Marquee";

export default function Sponsors() {
  const FONT_NEULIS = "'Plus Jakarta Sans', sans-serif";
  const FONT_BEBAS = "'Bebas Neue', cursive";

  return (
    <section id="sponsors" style={{ padding: "4rem 0", background: "#fff", borderTop: "1px solid #F3F4F6", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", marginBottom: "2.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{ width: 36, height: 1, background: "#FF6B00" }} />
          <span style={{ fontFamily: FONT_NEULIS, fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF6B00" }}>Sponsorship</span>
        </div>
        <h2 style={{ fontFamily: FONT_BEBAS, letterSpacing: "0.05em", color: "#111827", lineHeight: 0.9, fontSize: "clamp(32px, 5vw, 48px)" }}>
          DIDUKUNG <span style={{ color: "#9CA3AF" }}>OLEH</span>
        </h2>
      </div>

      <div style={{ background: "#F9FAFB", padding: "3rem 0", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
        <Marquee pauseOnHover className="[--duration:40s] [--gap:4rem]">
          {sponsors.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 15, opacity: 0.8, transition: "opacity 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "1"}
              onMouseLeave={e => e.currentTarget.style.opacity = "0.8"}>
              <div style={{ width: 80, height: 80, borderRadius: 16, background: "#fff", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: 10, boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                <img src={s.logo} alt={s.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} 
                  onError={e => { 
                    e.target.style.display = "none"; 
                    e.target.parentElement.innerHTML = `<span style="font-family:${FONT_BEBAS}; font-size:16px; color:#FF6B00">${s.name.substring(0,2)}</span>`; 
                  }} 
                />
              </div>
              <span style={{ fontFamily: FONT_NEULIS, fontSize: 14, fontWeight: 700, color: "#374151", letterSpacing: "0.05em" }}>{s.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
