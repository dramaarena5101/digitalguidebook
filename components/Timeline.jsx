import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { timeline } from "../content";

function TimelineItem({ item, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isRight = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isRight ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex items-center justify-center"
    >
      {/* Content */}
      <div className={`w-5/12 ${isRight ? "text-right pr-8" : "text-left pl-8 ml-auto"}`}>
        <div
          className="p-4 rounded-xl inline-block w-full transition-all duration-300"
          style={{
            background: item.event.includes("Time to Shine") ? "rgba(255,107,0,0.15)" : "#111",
            border: item.event.includes("Time to Shine") ? "1px solid #FF6B00" : "1px solid #1f1f1f",
          }}
        >
          <div
            className="text-xs mb-1 font-medium"
            style={{ color: "#FF6B00", fontFamily: "'Inter', sans-serif" }}
          >
            {item.date}
          </div>
          <div
            className="text-sm font-semibold"
            style={{ fontFamily: "'Syne', sans-serif", color: item.event.includes("Time to Shine") ? "#FF6B00" : "#E8E8E8" }}
          >
            {item.event}
          </div>
        </div>
      </div>

      {/* Center dot */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <div
          className="w-4 h-4 rounded-full border-2 transition-all duration-300"
          style={{
            background: item.event.includes("Time to Shine") ? "#FF6B00" : "#111",
            borderColor: "#FF6B00",
            boxShadow: item.event.includes("Time to Shine") ? "0 0 20px rgba(255,107,0,0.6)" : "none",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-4" style={{ background: "#0A0A0A" }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded text-sm font-bold" style={{ background: "#FF6B00", color: "#fff", fontFamily: "'Bebas Neue', cursive", fontSize: "16px" }}>04</div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "#FF6B00", fontFamily: "'Inter', sans-serif" }}>Section</div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05em" }}>Kejadian Penting</h2>
          </div>
          <div className="flex-1 h-px ml-4 hidden md:block" style={{ background: "linear-gradient(90deg, #FF6B00, transparent)" }} />
        </motion.div>

        {/* Timeline vertical line */}
        <div className="relative">
          {/* Center vertical line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, #FF6B00, rgba(255,107,0,0.1))" }}
          />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} isLast={i === timeline.length - 1} />
            ))}
          </div>
        </div>

        {/* Bottom star */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div
            className="px-6 py-3 rounded-full text-sm font-bold"
            style={{ background: "#FF6B00", color: "#fff", fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.1em", boxShadow: "0 0 30px rgba(255,107,0,0.5)" }}
          >
            ✦ DRAMA ARENA 5101 ✦
          </div>
        </motion.div>
      </div>
    </section>
  );
}
