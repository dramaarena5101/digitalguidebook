import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { timeline } from "../content";

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isRight = index % 2 === 0;
  const isSpecial = item.event.includes("Time to Shine");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className="relative flex items-center justify-center group"
    >
      <div className={`w-5/12 ${isRight ? "text-right pr-6 md:pr-16" : "text-left pl-6 md:pl-16 ml-auto"}`}>
        <div
          className={`p-8 md:p-12 rounded-[2.5rem] inline-block w-full transition-all duration-300 relative ${
            isSpecial 
              ? "bg-da-orange/[0.05] border-da-orange/30 hover:bg-da-orange/[0.08]" 
              : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]"
          } border`}
        >
          <div className={`text-sm uppercase tracking-widest mb-4 font-inter font-bold ${isSpecial ? "text-da-orange" : "text-gray-500"}`}>
            {item.date}
          </div>
          <div className={`text-2xl md:text-3xl lg:text-4xl font-bold font-syne leading-snug ${isSpecial ? "text-da-orange" : "text-gray-200"}`}>
            {item.event}
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <div
          className={`w-6 h-6 rounded-full border-[3px] transition-all duration-500 ${
            isSpecial 
              ? "bg-[#030303] border-da-orange shadow-[0_0_20px_rgba(255,107,0,0.6)] scale-125" 
              : "bg-[#030303] border-white/20 group-hover:border-da-orange group-hover:scale-110"
          }`}
        />
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20 md:mb-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-da-orange" />
            <span className="text-sm md:text-base tracking-[0.3em] uppercase text-da-orange font-inter font-bold">Bab 05</span>
            <div className="w-10 h-px bg-da-orange" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-bebas tracking-wider text-white">
            KEJADIAN <span className="text-gray-600">PENTING</span>
          </h2>
        </motion.div>

        <div className="relative py-12">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="flex flex-col gap-16 md:gap-20">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-24"
        >
          <div className="px-12 py-5 rounded-full text-base md:text-lg font-bold bg-white text-black font-bebas tracking-[0.2em] shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            ✦ DRAMA ARENA 5101 ✦
          </div>
        </motion.div>
      </div>
    </section>
  );
}
