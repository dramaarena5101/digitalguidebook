import { motion } from "framer-motion";
import { judges } from "../content";

export default function Judges() {
  return (
    <section id="judges" className="py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-[#030303] relative border-t border-white/5">
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
              <span className="text-sm md:text-base tracking-[0.3em] uppercase text-da-orange font-inter font-bold">Bab 06</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-bebas tracking-wider text-white leading-tight">
              NAMA-NAMA <span className="text-gray-600">JURI</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {judges.map((judge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="p-10 md:p-14 rounded-[2.5rem] transition-all duration-300 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-8 md:gap-10">
                <div className="text-6xl lg:text-7xl font-bebas text-white/10 group-hover:text-da-orange/30 transition-colors">
                  {String(judge.no).padStart(2, "0")}
                </div>
                <div className="flex-1 w-full">
                  <h3 className="font-bold mb-6 text-xl lg:text-2xl tracking-wide text-da-orange font-syne uppercase">
                    {judge.category}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {judge.members.map((m, j) => (
                      <div key={j} className="flex items-center gap-4 text-base md:text-lg text-gray-400 font-inter group/item hover:text-white transition-colors">
                        <span className="w-2 h-px bg-gray-600 group-hover/item:bg-white group-hover/item:w-4 transition-all" />
                        <span className="leading-relaxed">{m}</span>
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
