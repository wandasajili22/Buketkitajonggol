import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { products } from "@/lib/data";
import { formatIDR } from "@/lib/utils";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Produk tidak ditemukan</h2>
        <button onClick={() => navigate('/catalog')} className="text-primary-500 hover:underline">Kembali ke Katalog</button>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" /> Kembali
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[4/5] rounded-[2.5rem] p-4 bg-white shadow-2xl border-2 border-gray-100"
          >
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-gray-800 tracking-widest text-primary-500 dark:text-primary-400 font-bold uppercase text-[10px] mb-6 w-fit">
              {product.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-[var(--color-base-heading)] dark:text-white mb-4">
              {product.name}
            </h1>
            
            <p className="text-3xl font-bold text-primary-500 dark:text-primary-400 mb-8">
              {formatIDR(product.price)}
            </p>
            
            <div className="border-t border-b border-primary-50 dark:border-gray-800 py-8 mb-8">
              <h3 className="text-lg font-bold text-[var(--color-base-heading)] dark:text-white mb-2">Deskripsi</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                {product.description}
              </p>
            </div>

            <a
              href={`https://wa.me/6285883490307?text=${encodeURIComponent(`Halo Buket Kita Jonggol, saya tertarik dengan produk ${product.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-10 py-5 bg-[var(--color-base-heading)] hover:bg-[var(--color-base-text)] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105 shadow-2xl dark:bg-white dark:text-gray-900"
            >
              <ShoppingBag size={18} /> Pesan Sekarang via WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-100 dark:border-gray-800 pt-16 mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Mungkin Anda Suka</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
