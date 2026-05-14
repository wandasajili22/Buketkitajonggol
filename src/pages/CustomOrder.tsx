import React, { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function CustomOrder() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    budget: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Buket Kita Jonggol, saya mau pesan buket custom.%0A%0ANama: ${formData.name}%0AEvent: ${formData.eventType}%0ABudget: ${formData.budget}%0ADeskripsi: ${formData.description}`;
    const waLink = `https://wa.me/6285883490307?text=${text}`;
    window.open(waLink, '_blank');
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="mb-4 flex justify-center">
            <span className="bg-primary-500 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Konsultasi Gratis
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-sans font-bold text-[var(--color-base-heading)] dark:text-white mb-6 tracking-tight leading-tight px-4">
            Pesanan <span className="text-primary-500 font-bold">Custom.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10 font-sans px-4">
            Isi detail pesanan Anda, kami akan arahkan langsung ke WhatsApp untuk konsultasi lebih lanjut.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 md:p-12 rounded-3xl md:rounded-[2.5rem] shadow-2xl border-2 border-gray-100"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-[var(--color-base-heading)] dark:text-white uppercase tracking-widest">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 focus:outline-none focus:border-primary-300 focus:ring-4 focus:ring-primary-50 transition-all text-[var(--color-base-heading)]"
                  placeholder="Nama Anda"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold text-[var(--color-base-heading)] dark:text-white uppercase tracking-widest">Nomor HP / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 focus:outline-none focus:border-primary-300 focus:ring-4 focus:ring-primary-50 transition-all text-[var(--color-base-heading)]"
                  placeholder="08123456789"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="eventType" className="text-sm font-bold text-[var(--color-base-heading)] dark:text-white uppercase tracking-widest">Jenis Event</label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 focus:outline-none focus:border-primary-300 focus:ring-4 focus:ring-primary-50 transition-all text-[var(--color-base-heading)]"
                >
                  <option value="">Pilih Event</option>
                  <option value="Wisuda">Wisuda</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Ulang Tahun">Ulang Tahun</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-bold text-[var(--color-base-heading)] dark:text-white uppercase tracking-widest">Budget (Estimasi)</label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 focus:outline-none focus:border-primary-300 focus:ring-4 focus:ring-primary-50 transition-all text-[var(--color-base-heading)]"
                >
                  <option value="">Pilih Budget</option>
                  <option value="< 150.000">Di bawah Rp 150.000</option>
                  <option value="150.000 - 300.000">Rp 150.000 - Rp 300.000</option>
                  <option value="300.000 - 500.000">Rp 300.000 - Rp 500.000</option>
                  <option value="> 500.000">Di atas Rp 500.000</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-bold text-[var(--color-base-heading)] dark:text-white uppercase tracking-widest">Deskripsi / Request Khusus</label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 focus:outline-none focus:border-primary-300 focus:ring-4 focus:ring-primary-50 transition-all text-[var(--color-base-heading)]"
                placeholder="Misal: Warna dominan pink, ada snack coklat, dll."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-base-heading)] hover:bg-[var(--color-base-text)] text-white rounded-full font-bold text-sm uppercase tracking-widest transition-transform hover:scale-[1.02] shadow-2xl dark:bg-white dark:text-gray-900"
            >
              <Send size={18} /> Kirim via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
