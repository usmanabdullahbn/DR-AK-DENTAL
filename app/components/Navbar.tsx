"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
          scrolled
            ? "bg-white/90 shadow-lg shadow-dental-blue/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 px-2">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled ? "bg-dental-blue" : "bg-white/20 border border-white/40"
              }`}>
                <span className={`text-xl font-black ${scrolled ? "text-white" : "text-white"}`}>⚕</span>
              </div>
              <div>
                <div className={`font-display font-bold text-lg leading-none transition-colors duration-300 ${
                  scrolled ? "text-dental-blue-dark" : "text-white"
                }`}>
                  DR AK
                </div>
                <div className={`font-body text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                  scrolled ? "text-dental-blue/70" : "text-white/70"
                }`}>
                  Dental & Aesthetic
                </div>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-link font-body font-medium text-sm transition-colors duration-300 ${
                    scrolled ? "text-gray-700 hover:text-dental-blue" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:03178488790"
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-dental-blue" : "text-white/90"
                }`}
              >
                <Phone size={16} />
                <span>0317-8488790</span>
              </a>
              <motion.a
                href="#appointment"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-6 py-2 rounded-2xl font-display font-bold text-sm flex items-center justify-center gap-2 transition-all whitespace-nowrap"
              >
                <span>🗓</span>
                <span>Book Appointment</span>
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-dental-blue" : "text-white"
              }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white/95 nav-blur shadow-xl shadow-dental-blue/10 border-t border-dental-blue/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-700 font-medium font-body py-2 border-b border-gray-100 hover:text-dental-blue transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#appointment"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className="btn-primary px-6 py-3 rounded-2xl font-display font-bold flex items-center justify-center gap-2 transition-all mt-2"
              >
              
                <span>Book Appointment</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
