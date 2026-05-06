import { motion } from "framer-motion";
import { performances } from "../content";

const rundown = [
  { no: 1, item: 'Visual "Semangat Al-Akhku"', type: "visual" },
  { no: 2, item: "Senandung Sholawat", type: "music" },
  { no: 3, item: 'Visual "Bayangkan jika kita tidak menyerah"', type: "visual" },
  { no: 4, item: 'Band 5101: "Lomba Sihir!"', type: "music" },
  { no: 5, item: "Visual Sapa MC", type: "visual" },
  { no: 6, item: "Master of Ceremony", type: "language" },
  { no: 7, item: "Tilawah Ayat Suci Al-Qur'an", type: "music" },
  { no: 8, item: "Sambutan Ketua", type: "language" },
  { no: 9, item: "Sambutan Bapak Pimpinan", type: "language" },
  { no: 10, item: "Udal Adul Well", type: "dance" },
  { no: 11, item: "SKA N DUT", type: "dance" },
  { no: 12, item: "Visual POV 3 = Mudabbir", type: "visual" },
  { no: 13, item: "Drama POV 3 = Mudabbir", type: "theater" },
  { no: 14, item: 'Puisi "Antara Uswah dan Amanah"', type: "theater" },
  { no: 15, item: 'Visual "Langkah Abadi"', type: "visual" },
  { no: 16, item: 'Band 5101: "Tangguh"', type: "music" },
  { no: 17, item: "Iklan Temukan Makna Bersama", type: "visual" },
  { no: 18, item: "Tari Ratoeh Jaroe", type: "dance" },
  { no: 19, item: 'Visual "Jati Diri Surgawi"', type: "visual" },
  { no: 20, item: 'Grand Opening: "OST DA 5101"', type: "music" },
  { no: 21, item: "Visual POV 1 = Bintang", type: "visual" },
  { no: 22, item: "Drama POV 1 = Bintang", type: "theater" },
  { no: 23, item: "Choir 5101", type: "music" },
  { no: 24, item: 'Nasyid 5101: "Syukur Alhamdulillah"', type: "music" },
  { no: 25, item: "Visual POV 2 = Azka", type: "visual" },
  { no: 26, item: "Drama POV 2 = Azka", type: "theater" },
  { no: 27, item: "Ya Maulay Ya Maulay", type: "dance" },
  { no: 28, item: "Black Mask Rhythm", type: "dance" },
  { no: 29, item: "Infinity Beatbox", type: "dance" },
  { no: 30, item: "Le Le Re Dance", type: "dance" },
  { no: 31, item: "Visual POV 4 = Atlan", type: "visual" },
  { no: 32, item: 'Band 5101: "Medley Tongkrongan"', type: "music" },
  { no: 33, item: "Drama POV 4 = Atlan", type: "theater" },
  { no: 34, item: "Raqs Arabian", type: "dance" },
  { no: 35, item: "Art of Balance", type: "dance" },
  { no: 36, item: "Hikaru Toki DA", type: "dance" },
  { no: 37, item: "Tong Basudara", type: "dance" },
  { no: 38, item: "Visual POV 5 = Pijar", type: "visual" },
  { no: 39, item: "Drama POV 5 = Pijar", type: "theater" },
  { no: 40, item: 'Grand Closing: "Api Perjuangan"', type: "music" },
];

const typeStyles = {
  music: "text-da-orange border-da-orange/20",
  dance: "text-orange-500 border-orange-500/20",
  theater: "text-red-500 border-red-500/20",
  language: "text-yellow-500 border-yellow-500/20",
  visual: "text-gray-500 border-gray-500/20",
};

const dotColors = {
  music: "bg-da-orange",
  dance: "bg-orange-500",
  theater: "bg-red-500",
  language: "bg-yellow-500",
  visual: "bg-gray-500",
}

const typeLabels = {
  music: "Musik",
  dance: "Tari",
  theater: "Theater",
  language: "Bahasa",
  visual: "Visual",
};

export default function RundownSequence() {
  return (
    <section id="rundown" className="py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-da-orange" />
              <span className="text-sm md:text-base tracking-[0.3em] uppercase text-da-orange font-inter font-bold">Bab 07</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-bebas tracking-wider text-white leading-tight">
              SUSUNAN <span className="text-gray-600">ACARA</span>
            </h2>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 mb-12 p-4 md:p-6"
        >
          {Object.entries(typeLabels).map(([k, v]) => (
            <div key={k} className="flex items-center gap-3 text-sm font-inter text-gray-400 bg-white/[0.02] px-6 py-3 rounded-full border border-white/5">
              <span className={`w-2 h-2 rounded-full ${dotColors[k]}`} />
              {v}
            </div>
          ))}
        </motion.div>

        {/* Rundown list */}
        <div className="space-y-4 md:space-y-6">
          {rundown.map((item, i) => {
            const isVisual = item.type === "visual";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: (i % 10) * 0.05, ease: "easeOut" }}
                className={`flex items-center gap-6 sm:gap-8 px-6 py-5 md:py-6 rounded-3xl transition-all duration-300 group ${
                  isVisual 
                    ? "bg-transparent border border-transparent hover:bg-white/[0.02]" 
                    : "bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04]"
                }`}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-2xl flex items-center justify-center text-base md:text-lg font-bold border ${typeStyles[item.type]} bg-white/[0.01]`}>
                  {String(item.no).padStart(2, "0")}
                </div>
                
                <div className="flex-1">
                  <span className={`text-base md:text-lg lg:text-xl font-inter ${isVisual ? "text-gray-500 italic" : "text-gray-200 group-hover:text-white font-medium"}`}>
                    {item.item}
                  </span>
                </div>
                
                <span
                  className={`text-xs md:text-sm px-4 py-2 rounded-full uppercase tracking-[0.2em] font-inter border hidden sm:block ${typeStyles[item.type]} bg-white/[0.01]`}
                >
                  {typeLabels[item.type]}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
