import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { judges } from "../content";

export default function Judges() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="judges" className="py-24 px-4" style={{ background: "#0D0D0D" }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded text-sm font-bold" style={{ background: "#FF6B00", color: "#fff", fontFamily: "'Bebas Neue', cursive", fontSize: "16px" }}>05</div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "#FF6B00", fontFamily: "'Inter', sans-serif" }}>Section</div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05em" }}>Nama-Nama Juri</h2>
          </div>
          <div className="flex-1 h-px ml-4 hidden md:block" style={{ background: "linear-gradient(90deg, #FF6B00, transparent)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {judges.map((judge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl transition-all duration-300"
              style={{ background: "#111", border: "1px solid #1f1f1f" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#FF6B00"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#1f1f1f"}
            >
              <div className="flex items-start gap-4">
                {/* Number */}
                <div
                  className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-lg font-bold"
                  style={{ background: "rgba(255,107,0,0.15)", color: "#FF6B00", fontFamily: "'Bebas Neue', cursive" }}
                >
                  {judge.no}
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-sm" style={{ color: "#FF6B00", fontFamily: "'Syne', sans-serif" }}>
                    {judge.category}
                  </h3>
                  <div className="flex flex-col gap-1.5">
                    {judge.members.map((m, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm" style={{ color: "#ccc", fontFamily: "'Inter', sans-serif" }}>
                        <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: "#FF6B00" }} />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
