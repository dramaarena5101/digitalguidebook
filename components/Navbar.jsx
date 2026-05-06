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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white font-bold rounded-xl transform group-hover:rotate-12 transition-transform">
            DA
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tighter leading-none">DRAMA ARENA</span>
            <span className="text-[10px] text-orange-500 font-bold tracking-[0.2em]">5101 EDITION</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#performances"
            className="ml-4 px-6 py-2.5 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
          >
            Digital Guide
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenu ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenu ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="text-lg font-bold tracking-tighter"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
