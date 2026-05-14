import React from "react";
import { motion } from "motion/react";
import { formatIDR } from "@/lib/utils";
import { Product } from "@/lib/data";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-4 md:p-5 rounded-3xl md:rounded-[2.5rem] shadow-xl md:shadow-2xl border-2 border-gray-100 transition-all duration-500 group flex flex-col h-full"
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/5] bg-gray-50 rounded-2xl md:rounded-[2rem] border border-gray-100 mb-4 w-full">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </Link>
      
      <Link to={`/product/${product.id}`} className="block mt-auto">
        <h3 className="font-sans text-lg font-bold text-center text-[var(--color-base-heading)] dark:text-white line-clamp-1 group-hover:text-primary-500 transition-colors">
          {product.name}
        </h3>
      </Link>
      
      <p className="text-[10px] uppercase tracking-widest opacity-40 text-center mb-3 mt-1 text-[var(--color-base-heading)] dark:text-gray-400">
        {product.category}
      </p>
      
      <div className="w-full h-px bg-primary-50 dark:bg-gray-800 mb-3"></div>
      
      <span className="block text-center text-sm font-bold text-primary-500">
        {formatIDR(product.price)}
      </span>
      
      <a
        href={`https://wa.me/6285883490307?text=${encodeURIComponent(`Halo Buket Kita Jonggol, saya tertarik dengan produk ${product.name}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex flex-none items-center justify-center gap-2 bg-[var(--color-base-heading)] text-white dark:bg-white dark:text-gray-900 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform"
      >
        <ShoppingBag size={14} /> Pesan
      </a>
    </motion.div>
  );
}
