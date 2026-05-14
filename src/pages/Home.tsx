import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ui/ProductCard";
import { products, testimonials } from "@/lib/data";

export default function Home() {
  const popularProducts = products.filter((p) => p.isPopular).slice(0, 4);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center pt-24 md:pt-32 pb-12 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[80%] md:w-[40%] h-full bg-primary-100 opacity-20 md:opacity-30 -skew-x-12 transform translate-x-16 md:translate-x-32 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <div className="mb-6 flex justify-center lg:justify-start">
                <span className="bg-primary-500 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Premium Florist 2026
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-sans leading-[1.2] lg:leading-[1.1] font-bold text-[var(--color-base-heading)] dark:text-white mb-6 md:mb-8">
                BUKET KITA <br className="hidden md:block" />
                <span className="text-primary-500 font-bold">JONGGOL</span>
              </h1>
              <p className="text-base md:text-xl opacity-80 max-w-md mx-auto lg:mx-0 mb-8 md:mb-10 font-sans leading-relaxed text-[var(--color-base-heading)] dark:text-gray-300">
                Sentuhan estetik untuk setiap momen berharga—dari wisuda hingga wedding, kami hadirkan buket eksklusif untuk Anda.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center lg:items-center lg:justify-start">
                <a
                  href="https://wa.me/6285883490307?text=Halo%20Buket%20Kita%20Jonggol,%20saya%20ingin%20memesan%20buket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[var(--color-base-heading)] text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl dark:bg-white dark:text-gray-900 border-none"
                >
                  Pesan Sekarang
                </a>
                <div className="hidden sm:block h-px w-12 bg-primary-500 opacity-30"></div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary-500">Mulai Rp 150rb</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:grid lg:col-span-5 grid-cols-2 gap-6 relative"
            >
              <div className="bg-white p-5 rounded-[2.5rem] shadow-2xl border-2 border-gray-100 transform -rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="w-full aspect-[4/5] bg-gray-50 rounded-[2rem] mb-4 flex items-center justify-center overflow-hidden border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=400" alt="Wedding" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-sans text-base font-bold text-center text-[var(--color-base-heading)] dark:text-white">Eternal Rose</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-40 text-center mb-3">Wedding Edition</p>
                <div className="w-full h-px bg-gray-200 mb-3"></div>
                <span className="block text-center text-sm font-bold text-primary-500">Rp 450.000</span>
              </div>
              <div className="bg-white p-5 rounded-[2.5rem] shadow-2xl border-2 border-gray-100 transform rotate-6 translate-y-12 hover:rotate-0 transition-all duration-500">
                <div className="w-full aspect-[4/5] bg-gray-50 rounded-[2rem] mb-4 flex items-center justify-center overflow-hidden border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=400" alt="Snack Bouquet" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-sans text-base font-bold text-center text-[var(--color-base-heading)] dark:text-white">Snack Tower</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-40 text-center mb-3">Graduation</p>
                <div className="w-full h-px bg-gray-200 mb-3"></div>
                <span className="block text-center text-sm font-bold text-primary-500">Rp 250.000</span>
              </div>
              <div className="absolute -top-10 -right-6 w-32 h-32 bg-primary-500 rounded-full flex items-center justify-center text-white text-center p-4 border-8 border-[var(--color-base-bg)] dark:border-gray-950 rotate-12 z-20 shadow-lg">
                <Link
                  to="/custom"
                  className="text-[10px] font-bold uppercase tracking-tight hover:scale-105 transition-transform block"
                >
                  Pesan Custom Sekarang
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[var(--color-base-bg)] dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative px-2 sm:px-0"
            >
              <div className="aspect-[4/5] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-gray-100 p-2 md:p-3 bg-white">
                <div className="w-full h-full rounded-2xl md:rounded-[1.5rem] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800" alt="About Buket Kita Jonggol" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-2 lg:-right-4 w-32 h-32 sm:w-48 sm:h-48 bg-white dark:bg-gray-900 rounded-full border-4 md:border-8 border-gray-100 flex flex-col items-center justify-center p-4 shadow-xl z-10">
                <p className="font-bold text-2xl sm:text-4xl text-primary-500">5+</p>
                <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-center mt-1 font-bold text-[var(--color-base-heading)] dark:text-gray-300">Tahun Pengalaman</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <span className="bg-primary-500 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Tentang Kami
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-[var(--color-base-heading)] dark:text-white mb-6 leading-tight">
                Merajut Kasih dalam Setiap <span className="text-primary-500 font-bold">Rangkaian.</span>
              </h2>
              <p className="text-lg opacity-80 mb-6 font-sans leading-relaxed text-[var(--color-base-heading)] dark:text-gray-300">
                Buket Kita Jonggol berawal dari mimpi sederhana: menghadirkan senyum melalui bunga. Kami percaya setiap bunga memiliki bahasa tersendiri untuk menyampaikan perasaan yang tak terucap.
              </p>
              <p className="text-lg opacity-80 mb-10 font-sans leading-relaxed text-[var(--color-base-heading)] dark:text-gray-300">
                Setiap buket dirangkai dengan teliti, perpaduan bunga segar berkualitas dengan sentuhan desain modern. Kami menemani ribuan momen spesial pelanggan kami, menjadikannya kenangan yang tak terlupakan.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[var(--color-base-heading)] dark:text-white text-xl mb-2">10k+</h4>
                  <p className="text-xs uppercase tracking-widest opacity-60 text-[var(--color-base-heading)] dark:text-gray-400">Happy Customers</p>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-base-heading)] dark:text-white text-xl mb-2">Premium</h4>
                  <p className="text-xs uppercase tracking-widest opacity-60 text-[var(--color-base-heading)] dark:text-gray-400">Quality Flowers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Terfavorit Bulan Ini
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Koleksi buket best-seller kami yang paling banyak diminati untuk berbagai momen spesial.
              </p>
            </motion.div>
            <Link
              to="/catalog"
              className="group inline-flex items-center font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors shrink-0"
            >
              Lihat Semua <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {popularProducts.map((product, index) => (
              <motion.div key={product.id} variants={itemFadeUp}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary-50/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Lebih dari ribuan momen bahagia telah kami lengkapi dengan senyuman.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, i) => (
              <motion.div
                key={testi.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-2 border-gray-100 relative"
              >
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(testi.rating)].map((_, j) => (
                    <Star key={j} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testi.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-gray-700 flex items-center justify-center font-bold text-primary-600 dark:text-primary-400">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testi.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testi.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-[var(--color-base-bg)] dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-12 rounded-3xl md:rounded-[3.5rem] shadow-2xl border-2 border-gray-100 flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <MapPin size={32} className="md:size-10 text-primary-500" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-base-heading)] dark:text-white mb-4">
              Kunjungi Toko Kami
            </h2>
            <p className="text-base md:text-lg opacity-80 text-[var(--color-base-heading)] max-w-2xl mx-auto mb-8 leading-relaxed">
              Kami siap menyambut Anda. Lihat rute perjalanan menuju Buket Kita Jonggol melalui peta di bawah ini.
            </p>
            <div className="w-full h-[300px] md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-4 border-primary-100 shadow-2xl mb-8 group relative lg:max-w-4xl mx-auto">
              <iframe
                src="https://maps.google.com/maps?q=-6.4966968,107.0065493(Buket%20Kita%20Jonggol)&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Buket Kita Jonggol"
                className="transition-transform duration-500 group-hover:scale-[1.01]"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/giKSRQqq36BiMy8y5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl active:scale-95"
            >
              <MapPin size={22} />
              Dapatkan Petunjuk Arah
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
