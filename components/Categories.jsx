import { motion } from "framer-motion";
import { categories } from "../content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Categories() {
  return (
    <section id="categories" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
            KATEGORI <span className="text-orange-500">SENI</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto uppercase tracking-widest text-xs">
            Beragam ekspresi kreativitas yang ditampilkan dalam Drama Arena 5101
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-2xl bg-[#111] border border-white/5 p-8 transition-all duration-300 hover:border-orange-500/50"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="text-6xl">{cat.icon}</span>
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                  {cat.name}
                </h3>
                <ul className="space-y-2">
                  {cat.items.slice(0, 3).map((item) => (
                    <li key={item} className="text-sm text-gray-500 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-orange-500/50" />
                      {item}
                    </li>
                  ))}
                  {cat.items.length > 3 && (
                    <li className="text-xs text-orange-500/50 font-medium">
                      + {cat.items.length - 3} lainnya
                    </li>
                  )}
                </ul>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full group-hover:bg-orange-500/10 transition-all" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
