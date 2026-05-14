import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-purple-900 border-t border-purple-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bold text-2xl tracking-tight text-white">
                Buket Kita <span className="text-purple-300">Jonggol</span>
              </span>
            </Link>
            <p className="text-purple-200 text-sm leading-relaxed">
              Toko buket bunga premium dan custom dengan desain elegan untuk setiap momen berharga Anda.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com/buketkita.jonggol" className="text-purple-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/catalog" className="text-purple-200 hover:text-white transition-colors text-sm">Our Catalog</Link></li>
              <li><Link to="/custom" className="text-purple-200 hover:text-white transition-colors text-sm">Custom Bouquet</Link></li>
              <li><a href="/#about" className="text-purple-200 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="/#faq" className="text-purple-200 hover:text-white transition-colors text-sm">FAQ</a></li>
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-3">
              <li><Link to="/catalog?cat=Wisuda" className="text-purple-200 hover:text-white transition-colors text-sm">Buket Wisuda</Link></li>
              <li><Link to="/catalog?cat=Wedding" className="text-purple-200 hover:text-white transition-colors text-sm">Buket Wedding</Link></li>
              <li><Link to="/catalog?cat=Ulang Tahun" className="text-purple-200 hover:text-white transition-colors text-sm">Ulang Tahun</Link></li>
              <li><Link to="/catalog?cat=Snack" className="text-purple-200 hover:text-white transition-colors text-sm">Snack & Money</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-purple-200 text-sm">
                <MapPin size={18} className="text-purple-300 shrink-0 mt-0.5" />
                <span>Jonggol, Bogor</span>
              </li>
              <li className="flex items-center gap-3 text-purple-200 text-sm">
                <Phone size={18} className="text-purple-300 shrink-0" />
                <span>+62 858-8349-0307</span>
              </li>
              <li className="flex items-center gap-3 text-purple-200 text-sm">
                <Instagram size={18} className="text-purple-300 shrink-0" />
                <span>@buketkita.jonggol</span>
              </li>
              <li className="flex items-center gap-3 text-purple-200 text-sm">
                <Mail size={18} className="text-purple-300 shrink-0" />
                <span>info@buketkitajonggol.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-purple-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-purple-300">
            &copy; {new Date().getFullYear()} Buket Kita Jonggol. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-purple-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
