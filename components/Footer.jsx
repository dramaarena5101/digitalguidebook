import { motion } from "framer-motion";
import { eventInfo } from "../content";
import Marquee from "./MagicUI/Marquee";

export function Ticker() {
  const items = [
    "DRAMA ARENA 5101",
    "✦ NYALAKAN API KEBERSAMAAN ✦",
    "DRAMA ARENA 5101", "NYALAKAN API KEBERSAMAAN", "FIVE A HUNDRED ONE",
    "IT'S TIME TO SHINE", "GONTOR", "KAMI KELAS 5", "DRAMA ARENA 5101"
  ];

  return (
    <div className="py-6 border-y border-white/5 bg-[#030303] overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-da-orange/5 blur-[100px] pointer-events-none" />
      
      <Marquee pauseOnHover className="[--duration:30s]">
        {items.map((item, i) => (
          <span
            key={i}
            className="text-2xl md:text-5xl font-bold mx-10 tracking-wider opacity-20 hover:opacity-100 transition-opacity cursor-default font-bebas text-da-orange"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="py-24 px-4 sm:px-6 lg:px-12 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-da-orange/30 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 relative z-10">
        
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center text-sm font-bold rounded-xl bg-white/[0.03] border border-white/10 text-white font-bebas">
              DA
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wide font-bebas text-white">DRAMA ARENA 5101</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-da-orange font-inter">Digital Guidebook</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 max-w-sm leading-relaxed font-inter">
            Pagelaran Seni Akbar Siswa Kelas 5 KMI Pondok Modern Darussalam Gontor. Mengangkat tema <span className="text-gray-300 italic">"Nyalakan Api Kebersamaan, Wujudkan Idealisme Kehidupan"</span>.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-gray-600 font-inter">Navigasi</h4>
          <ul className="space-y-4 font-inter">
            {["Home", "About", "Performances", "Timeline", "Judges"].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-da-orange transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-gray-600 font-inter">Informasi</h4>
          <div className="space-y-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-inter">Lokasi</div>
              <p className="text-sm text-gray-300 font-inter leading-relaxed">Depan Gedung Laboratorium KMI, Pondok Modern Darussalam Gontor.</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-inter">Waktu Pelaksanaan</div>
              <p className="text-sm text-gray-300 font-inter leading-relaxed">{eventInfo.date}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-[11px] text-gray-600 font-inter uppercase tracking-widest">
          © 2026 Drama Arena 5101. All rights reserved.
        </p>
        <p className="text-[11px] text-gray-600 font-inter uppercase tracking-widest">
          Powered by <span className="text-gray-400">Class 5 KMI</span>
        </p>
      </div>
    </footer>
  );
}
