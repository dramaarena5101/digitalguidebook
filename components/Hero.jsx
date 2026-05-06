import { motion } from "framer-motion";
import { eventInfo } from "../content";
import RetroGrid from "./MagicUI/RetroGrid";

const Logo = () => (
  <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[100px] h-[100px] md:w-[140px] md:h-[140px]">
    {/* Outline Box */}
    <rect x="10" y="10" width="80" height="80" stroke="url(#orange-grad)" strokeWidth="1.5" strokeDasharray="6 6" rx="6" />
    <defs>
      <linearGradient id="orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B00" />
        <stop offset="100%" stopColor="#cc5500" />
      </linearGradient>
    </defs>
    {/* Main Letters */}
    <text x="50" y="66" textAnchor="middle" fill="url(#orange-grad)" fontSize="44" fontWeight="bold" className="font-bebas tracking-wider">DA</text>
    {/* Dots */}
    <circle cx="50" cy="20" r="2.5" fill="#FF6B00" />
    <circle cx="20" cy="50" r="2.5" fill="#FF6B00" />
    <circle cx="80" cy="50" r="2.5" fill="#FF6B00" />
    <circle cx="50" cy="80" r="2.5" fill="#FF6B00" />
    <circle cx="50" cy="50" r="3.5" fill="#FF6B00" className="animate-pulse" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#030303] px-4 pt-20"
    >
      <RetroGrid className="opacity-[0.15]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-da-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="hidden md:block absolute top-10 left-10 w-8 h-8 border-l border-t border-white/20" />
      <div className="hidden md:block absolute top-10 right-10 w-8 h-8 border-r border-t border-white/20" />
      <div className="hidden md:block absolute bottom-10 left-10 w-8 h-8 border-l border-b border-white/20" />
      <div className="hidden md:block absolute bottom-10 right-10 w-8 h-8 border-r border-b border-white/20" />

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto flex flex-col items-center justify-center h-full">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 mb-8 md:mb-10 px-5 md:px-6 py-2 md:py-2.5 rounded-full border border-white/10 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-gray-300 bg-white/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-da-orange animate-pulse" />
          Digital Guide Book
        </motion.div>

        <motion.div
          className="flex justify-center mb-6 md:mb-8 hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <Logo />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-bebas text-6xl sm:text-8xl md:text-[120px] lg:text-[140px] xl:text-[160px] leading-[0.85] tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500 pb-2"
        >
          DRAMA ARENA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          className="h-px w-3/4 max-w-lg my-6 md:my-8 bg-gradient-to-r from-transparent via-da-orange/60 to-transparent"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="font-bebas text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.3em] md:tracking-[0.4em] mb-6 md:mb-8 text-da-orange"
        >
          FIVE A HUNDRED ONE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-sm sm:text-base md:text-lg tracking-[0.1em] sm:tracking-[0.15em] text-gray-400 font-inter max-w-3xl mx-auto leading-relaxed px-4"
        >
          {eventInfo.motto}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 mt-12 w-full px-4"
        >
          <a
            href="#performances"
            className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg tracking-[0.15em] transition-all duration-300 bg-da-orange text-white hover:bg-white hover:text-da-orange font-inter uppercase flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
          >
            Lihat Penampilan
            <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-inter font-bold">Scroll</span>
        <div className="w-px h-10 md:h-14 bg-gradient-to-b from-gray-400 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
