import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { eventInfo, eventObjectives, logoPhilosophy } from "../content";

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section header */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-da-orange" />
                <span className="text-sm md:text-base tracking-[0.3em] uppercase text-da-orange font-inter font-bold">Bab 01</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-bebas tracking-wider text-white leading-tight">
                TENTANG ACARA <br className="hidden md:block" />
                <span className="text-gray-600">DRAMA ARENA</span>
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-400 font-inter md:max-w-md leading-relaxed">
              Memahami lebih dalam tentang filosofi, tujuan, dan detail pelaksanaan pagelaran seni terbesar tahun ini.
            </p>
          </div>
        </AnimatedSection>

        {/* Event info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-24 md:mb-32">
          
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-colors h-full flex flex-col justify-center">
                <h3 className="text-sm tracking-[0.2em] uppercase mb-6 text-gray-500 font-inter font-semibold">Nama Acara</h3>
                <p className="text-3xl md:text-4xl font-bold mb-6 font-syne text-white leading-tight">Drama Arena 5101</p>
                <p className="text-base md:text-lg text-gray-400 font-inter leading-relaxed">
                  Geladi Suci Pagelaran Seni siswa kelas 5 Kulliyyatu-l-Mu'allimin Al-Islamiyyah (KMI) Pondok Modern Darussalam Gontor periode 1447-1448 / 2026-2027.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-colors h-full flex flex-col justify-center group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-da-orange/10 blur-[100px] group-hover:bg-da-orange/20 transition-colors duration-700" />
                <h3 className="text-sm tracking-[0.2em] uppercase mb-6 text-gray-500 font-inter font-semibold relative z-10">Moto Acara</h3>
                <div className="relative z-10">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold font-syne text-gray-200 mb-3 leading-tight">
                    "Nyalakan Api Kebersamaan,
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold font-syne text-da-orange leading-tight">
                    Wujudkan Idealisme Kehidupan."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
            <AnimatedSection delay={0.15}>
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-colors h-full">
                <h3 className="text-sm tracking-[0.2em] uppercase mb-10 text-gray-500 font-inter font-semibold">Waktu & Tempat</h3>
                <div className="grid sm:grid-cols-2 gap-10 font-inter">
                  {[
                    ["Hari/Tanggal", "Selasa, 18 Dzulqa'dah 1447H / 05 Mei 2026M", "📅"],
                    ["Waktu", "Pukul 19.15 s.d. selesai", "⏱"],
                    ["Tempat", "Depan Gedung Laboratorium KMI", "📍"],
                    ["Pimpinan", "Al-Ustadz Ahmad Nur Fajar", "👤"],
                  ].map(([k, v, icon]) => (
                    <div key={k} className="flex gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 text-xl text-gray-400">
                        {icon}
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">{k}</div>
                        <div className="text-base font-medium text-gray-200">{v}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="p-8 md:p-12 rounded-[2.5rem] h-full bg-da-orange/[0.03] border border-da-orange/10 hover:bg-da-orange/[0.05] transition-colors">
                <h3 className="text-sm tracking-[0.2em] uppercase mb-8 text-da-orange font-inter font-bold">Tujuan Acara</h3>
                <ul className="grid sm:grid-cols-2 gap-6">
                  {eventObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-4 text-base font-inter text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-da-orange mt-2.5 flex-shrink-0" />
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Logo Philosophy */}
        <AnimatedSection delay={0.1}>
          <div className="mb-16 md:mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-da-orange" />
              <span className="text-sm md:text-base tracking-[0.3em] uppercase text-da-orange font-inter font-bold">Bab 02</span>
            </div>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold font-bebas tracking-wider text-white">
              FILOSOFI <span className="text-gray-600">LOGO</span>
            </h3>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {logoPhilosophy.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className="p-8 md:p-12 rounded-[2.5rem] transition-all duration-300 group cursor-default bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10"
              >
                <div className="text-4xl md:text-5xl mb-8 text-gray-500 group-hover:text-da-orange transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-4 text-2xl font-syne text-gray-200 group-hover:text-white">{item.title}</h4>
                <p className="text-base leading-relaxed text-gray-400 font-inter">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
