import { motion } from "framer-motion";
import { eventInfo } from "../content";

export function Ticker() {
  const items = [
    "DRAMA ARENA 5101",
    "âœ¦ NYALAKAN API KEBERSAMAAN âœ¦",
    "DRAMA ARENA 5101", "NYALAKAN API KEBERSAMAAN", "FIVE A HUNDRED ONE",
    "IT'S TIME TO SHINE", "GONTOR", "KAMI KELAS 5", "DRAMA ARENA 5101"
  ];

  return (
    <div className="py-4 border-y border-white/5 bg-black overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {items.map((item, i) => (
          <span
            key={i}
            className="text-2xl md:text-4xl font-bold mx-8 tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-default"
            style={{ fontFamily: "'Bebas Neue', cursive", color: "#FF6B00" }}
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
    <footer className="py-20 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 flex items-center justify-center text-xs font-bold rounded bg-orange-500 text-white font-bebas">DA</div>
            <span className="text-xl font-bold tracking-tighter font-bebas">DRAMA ARENA 5101</span>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            Pagelaran Seni Akbar Siswa Kelas 5 KMI Pondok Modern Darussalam Gontor. Mengangkat tema "Nyalakan Api Kebersamaan, Wujudkan Idealisme Kehidupan".
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-orange-500">Navigasi</h4>
          <ul className="space-y-3">
            {["Home", "About", "Performances", "Timeline", "Judges"].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-orange-500">Informasi</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">📍</span>
              <p className="text-sm text-gray-400">Depan Gedung Laboratorium KMI, Pondok Modern Darussalam Gontor.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">📅</span>
              <p className="text-sm text-gray-400">{eventInfo.date}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
        <p className="text-xs text-gray-600">
          © 2026 Drama Arena 5101. All rights reserved.
        </p>
        <p className="text-xs text-gray-600 italic">
          Powered by Class 5 KMI
        </p>
      </div>
    </footer>
  );
}
