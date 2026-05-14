import { Menu, ShoppingBag, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Catalog", path: "/catalog" },
    { name: "Custom Bouquet", path: "/custom" },
    { name: "Galeri", path: "/gallery" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-sans font-black text-primary-500 tracking-tight">
              Buket Kita Jonggol.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 text-[10px] uppercase tracking-[0.25em] font-bold opacity-80">
            {navLinks.map((link) => (
              link.path.includes("#") ? (
                <a
                  key={link.name}
                  href={link.path}
                  className="hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, display: "block" },
          closed: { opacity: 0, y: -20, transitionEnd: { display: "none" } }
        }}
        className="md:hidden glass-nav absolute w-full border-t border-gray-100 dark:border-gray-800 shadow-xl"
      >
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -10 }}
              animate={isOpen ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.05 }}
            >
              {link.path.includes("#") ? (
                <a
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-bold text-gray-800 dark:text-gray-100 hover:text-primary-600 border-b border-gray-50 dark:border-gray-800/50"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className="block py-3 text-lg font-bold text-gray-800 dark:text-gray-100 hover:text-primary-600 border-b border-gray-50 dark:border-gray-800/50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
