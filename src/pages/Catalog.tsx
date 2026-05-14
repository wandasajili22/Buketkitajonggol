import React, { useState } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { products, type Category } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";

const categories: { name: string; value: Category | 'All' }[] = [
  { name: 'Semua', value: 'All' },
  { name: 'Wisuda', value: 'Wisuda' },
  { name: 'Wedding', value: 'Wedding' },
  { name: 'Ulang Tahun', value: 'Ulang Tahun' },
  { name: 'Snack/Money', value: 'Snack' },
  { name: 'Custom', value: 'Custom' },
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchCategory = activeCategory === 'All' || 
      (activeCategory === 'Snack' ? (product.category === 'Snack' || product.category === 'Money') : product.category === activeCategory);
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="mb-4 flex justify-center">
            <span className="bg-primary-500 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Koleksi Terbaik
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-sans font-bold text-[var(--color-base-heading)] dark:text-white mb-6 tracking-tight leading-tight px-4">
            Katalog <span className="text-primary-500 font-black">Buket.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10 font-sans px-4">
            Pilih dari berbagai koleksi buket premium kami atau sesuaikan dengan keinginan Anda.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto px-4 sm:px-0">
            {/* Categories Scrollable */}
            <div className="w-full md:w-auto overflow-x-auto pb-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-3 w-max md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={cn(
                      "px-5 md:px-6 py-2 md:py-2.5 rounded-full whitespace-nowrap text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300",
                      activeCategory === cat.value
                        ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                        : "bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Cari buket..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border-none rounded-full focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white transition-shadow"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            layout
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Tidak ditemukan</h3>
            <p className="text-gray-500 dark:text-gray-400">Maaf, tidak ada buket yang sesuai dengan pencarian Anda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
