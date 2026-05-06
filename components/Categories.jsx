import { motion } from "framer-motion";
import { categories } from "../content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Categories() {
  return (
    <section id="categories" className="py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-da-orange" />
              <span className="text-sm md:text-base tracking-[0.3em] uppercase text-da-orange font-inter font-bold">Bab 03</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-bebas tracking-wider text-white leading-tight">
              KATEGORI <span className="text-gray-600">SENI</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-400 font-inter md:max-w-md leading-relaxed text-left md:text-right">
            Eksplorasi beragam medium ekspresi kreativitas yang akan ditampilkan dalam panggung Drama Arena 5101.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={itemVariants}
              className="group rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] p-8 md:p-12 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-4xl mb-10 text-gray-400 group-hover:text-da-orange transition-colors">
                {cat.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-6 font-syne text-gray-200 group-hover:text-white transition-colors">
                {cat.name}
              </h3>
              
              <ul className="space-y-4 mb-10">
                {cat.items.slice(0, 3).map((item) => (
                  <li key={item} className="text-base text-gray-400 font-inter flex items-center gap-3 group/item hover:text-gray-200 transition-colors">
                    <span className="text-xs text-da-orange opacity-0 group-hover:opacity-100 transition-opacity">✦</span>
                    <span className="-ml-5 group-hover:ml-0 transition-all duration-300">{item}</span>
                  </li>
                ))}
              </ul>

              {cat.items.length > 3 && (
                <div className="mt-auto pt-6 border-t border-white/5">
                  <span className="text-xs text-gray-600 font-inter tracking-widest uppercase">
                    + {cat.items.length - 3} Lainnya
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
