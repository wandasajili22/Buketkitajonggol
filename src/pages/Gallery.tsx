import React from "react";
import { motion } from "motion/react";

const galleryImages = [
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&q=80&w=800",
];

export default function Gallery() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <div className="mb-6">
            <span className="bg-primary-500 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Our Portofolio
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-sans font-bold text-[var(--color-base-heading)] dark:text-white mb-6 tracking-tight leading-tight px-4">
            Galeri <span className="text-primary-500 font-bold">Karya.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-sans px-6">
            Lihat berbagai koleksi buket bunga terbaik dari Buket Kita Jonggol
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group rounded-3xl md:rounded-[2.5rem] p-2 md:p-3 aspect-[4/5] shadow-xl md:shadow-2xl border-2 border-gray-100 bg-white"
            >
              <div className="w-full h-full rounded-2xl md:rounded-[1.5rem] overflow-hidden relative">
                <img
                  src={image}
                  alt={`Karya ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <p className="text-white font-bold uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Lihat Detail
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
