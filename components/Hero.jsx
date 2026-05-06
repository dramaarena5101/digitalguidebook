import { motion } from "framer-motion";
import { eventInfo } from "../content";
import RetroGrid from "./MagicUI/RetroGrid";

const Logo = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outline Box */}
    <rect x="10" y="10" width="80" height="80" stroke="#FF6B00" strokeWidth="2" strokeDasharray="5 5" />
    {/* Main Letters */}
    <text x="50" y="65" textAnchor="middle" fill="#FF6B00" fontSize="40" fontWeight="bold" fontFamily="Syne">DA</text>
    {/* 5 Dots */}
    <circle cx="50" cy="20" r="2" fill="#FF6B00" />
    <circle cx="20" cy="50" r="2" fill="#FF6B00" />
    <circle cx="80" cy="50" r="2" fill="#FF6B00" />
    <circle cx="50" cy="80" r="2" fill="#FF6B00" />
    <circle cx="50" cy="50" r="3" fill="#FF6B00" className="animate-pulse" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      <RetroGrid className="opacity-30" />

      {/* Radial orange glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2" style={{ borderColor: "#FF6B00" }} />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2" style={{ borderColor: "#FF6B00" }} />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2" style={{ borderColor: "#FF6B00" }} />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2" style={{ borderColor: "#FF6B00" }} />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        {/* Subtitle tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ borderColor: "#FF6B00", color: "#FF6B00", background: "rgba(255,107,0,0.08)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          Guide Book of
        </motion.div>

        {/* Logo */}
        <motion.div
          className="flex justify-center mb-6 float-anim"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Logo />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-[80px] md:text-[130px] lg:text-[160px] leading-none tracking-wider"
          style={{ color: "#FF6B00", fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05em" }}
        >
          DRAMA ARENA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-1 w-full mb-4"
          style={{ background: "linear-gradient(90deg, transparent, #FF6B00, transparent)" }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl tracking-[0.3em] mb-2"
          style={{ fontFamily: "'Bebas Neue', cursive", color: "#E8E8E8" }}
        >
          FIVE A HUNDRED ONE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm md:text-base tracking-widest mb-10"
          style={{ color: "#888", fontFamily: "'Inter', sans-serif", letterSpacing: "0.15em" }}
        >
          {eventInfo.motto}
        </motion.p>

        {/* Info pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { label: "📅", value: "05 Mei 2026" },
            { label: "🕕", value: "19.15 WIB" },
            { label: "📍", value: "Depan Lab KMI" },
          ].map((item) => (
            <div
              key={item.value}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #2a2a2a", fontFamily: "'Inter', sans-serif" }}
            >
              <span>{item.label}</span>
              <span style={{ color: "#E8E8E8" }}>{item.value}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#performances"
            className="px-8 py-3 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              background: "#FF6B00",
              color: "#fff",
              boxShadow: "0 0 30px rgba(255,107,0,0.4)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Lihat Penampilan
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid #FF6B00",
              color: "#FF6B00",
              background: "transparent",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Tentang Acara
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "#888" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
