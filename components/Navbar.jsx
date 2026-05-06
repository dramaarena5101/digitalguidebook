import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Categories", href: "#categories" },
  { label: "Performances", href: "#performances" },
  { label: "Timeline", href: "#timeline" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-[#020202]/80 backdrop-blur-2xl border-b border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center bg-white/[0.03] border border-white/10 text-white font-bold rounded-xl font-bebas text-lg group-hover:bg-white/[0.05] transition-colors">
            DA
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wide leading-none font-bebas text-white">DRAMA ARENA</span>
            <span className="text-[9px] text-gray-500 font-bold tracking-[0.2em] uppercase font-inter mt-1">5101 EDITION</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="flex items-center bg-white/[0.02] border border-white/5 px-2 py-1.5 rounded-full mr-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-5 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/[0.05] font-inter"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <a
            href="#performances"
            className="px-7 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-[0.15em] rounded-full hover:scale-105 transition-transform font-inter"
          >
            Digital Guide
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-white/[0.03] border border-white/10 rounded-xl"
        >
          <div className={`w-4 h-0.5 bg-white transition-all ${mobileMenu ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-4 h-0.5 bg-white transition-all ${mobileMenu ? "opacity-0" : ""}`} />
          <div className={`w-4 h-0.5 bg-white transition-all ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#030303] overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="flex flex-col px-6 py-12 gap-8 min-h-[calc(100vh-80px)]">
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="text-4xl font-bebas tracking-wide text-gray-400 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto pb-10">
                <a
                  href="#performances"
                  onClick={() => setMobileMenu(false)}
                  className="block w-full py-5 text-center bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-2xl font-inter"
                >
                  Open Digital Guide
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
