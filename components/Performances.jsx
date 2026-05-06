import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { performances } from "../content";

const categoryColors = {
  "Seni Musik & Suara": "text-da-orange bg-da-orange/5 border-da-orange/10 group-hover:border-da-orange/30",
  "Seni Tari & Atraksi": "text-orange-500 bg-orange-500/5 border-orange-500/10 group-hover:border-orange-500/30",
  "Seni Theater": "text-red-500 bg-red-500/5 border-red-500/10 group-hover:border-red-500/30",
  "Seni Bahasa & Literasi": "text-yellow-500 bg-yellow-500/5 border-yellow-500/10 group-hover:border-yellow-500/30",
  "Seni Musik": "text-da-orange bg-da-orange/5 border-da-orange/10 group-hover:border-da-orange/30",
};

function PerformanceCard({ perf, onClick, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const catStyle = categoryColors[perf.category] || categoryColors["Seni Musik & Suara"];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
      onClick={() => onClick(perf)}
      className="cursor-pointer rounded-3xl p-8 bg-white/[0.02] border border-white/[0.05] transition-all duration-300 group hover:bg-white/[0.04] hover:border-white/10 flex flex-col h-full"
    >
      {/* Order number + emoji */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-sm font-inter font-bold tracking-widest text-gray-500 group-hover:text-da-orange transition-colors">
          NO.{String(perf.order).padStart(2, "0")}
        </div>
        <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300">{perf.emoji}</div>
      </div>

      <h3 className="font-bold text-2xl mb-6 leading-snug font-syne text-gray-200 group-hover:text-white transition-colors">
        {perf.name}
      </h3>

      <div className="mb-8">
        <span className={`inline-block text-xs px-4 py-2 rounded-full font-inter uppercase tracking-wider border transition-colors duration-300 ${catStyle}`}>
          {perf.category}
        </span>
      </div>

      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
        <div className="text-sm text-gray-500 font-inter group-hover:text-gray-300 transition-colors">
          {perf.duration}
        </div>
        <div className="text-sm text-gray-500 font-inter group-hover:text-gray-300 transition-colors">
          {perf.participants === -1 ? "Semua Siswa" : `${perf.participants} Org`}
        </div>
      </div>
    </motion.div>
  );
}

function Modal({ perf, onClose }) {
  if (!perf) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-[#030303]/90 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="max-w-2xl w-full rounded-[2.5rem] p-8 md:p-14 relative bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-10"
          >
            ×
          </button>

          <div className="flex items-center gap-8 mb-10">
            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl">
              {perf.emoji}
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] mb-2 text-da-orange font-inter font-bold">
                Penampilan {String(perf.order).padStart(2, "0")}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-syne text-white leading-tight">{perf.name}</h3>
            </div>
          </div>

          <p className="text-base md:text-lg mb-12 leading-relaxed text-gray-400 font-inter">
            {perf.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Kategori", value: perf.category },
              { label: "Durasi", value: perf.duration },
              { label: "Peserta", value: perf.participants === -1 ? "Seluruh Kelas 5" : `${perf.participants} Orang` },
            ].map(item => (
               <div key={item.label} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                 <div className="text-xs uppercase tracking-widest mb-2 text-gray-500 font-inter">{item.label}</div>
                 <div className="text-base font-medium font-inter text-gray-200">{item.value}</div>
               </div>
            ))}
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-4 text-gray-500 font-inter font-bold">Pembimbing</div>
            <div className="flex flex-wrap gap-4">
              {perf.supervisors.map((s, i) => (
                <div key={i} className="px-5 py-3 rounded-full text-sm text-gray-300 font-inter bg-white/5 border border-white/5">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Performances() {
  const [filter, setFilter] = useState("Semua");
  const [selected, setSelected] = useState(null);

  const filters = ["Semua", "Seni Musik & Suara", "Seni Tari & Atraksi", "Seni Theater", "Seni Bahasa & Literasi"];

  const filtered = filter === "Semua"
    ? performances
    : performances.filter(p => p.category === filter || (filter === "Seni Musik & Suara" && p.category === "Seni Musik"));

  return (
    <section id="performances" className="py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-da-orange" />
              <span className="text-sm md:text-base tracking-[0.3em] uppercase text-da-orange font-inter font-bold">Bab 04</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-bebas tracking-wider text-white leading-tight">
              DAFTAR <span className="text-gray-600">PENAMPILAN</span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { label: "Total Penampilan", value: "28" },
            { label: "Kategori Seni", value: "4" },
            { label: "Peserta Terbanyak", value: "43" },
          ].map(s => (
            <div key={s.label} className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] flex flex-col justify-center">
              <div className="text-6xl md:text-7xl font-bold font-bebas text-da-orange mb-4">{s.value}</div>
              <div className="text-sm uppercase tracking-widest text-gray-500 font-inter">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-4 rounded-full text-sm font-bold tracking-widest transition-all duration-300 font-inter uppercase ${
                filter === f 
                  ? "bg-white text-black" 
                  : "bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filtered.map((perf, i) => (
            <PerformanceCard key={perf.id} perf={perf} onClick={setSelected} index={i} />
          ))}
        </div>
      </div>

      <Modal perf={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
