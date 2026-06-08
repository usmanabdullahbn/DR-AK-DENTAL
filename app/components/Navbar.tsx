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
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          boxSizing: "border-box",
          transition: "background-color 400ms ease, border-color 400ms ease, box-shadow 400ms ease",
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0, 107, 148, 0.1)" : "1px solid transparent",
          boxShadow: scrolled ? "0 10px 30px -10px rgba(0, 26, 39, 0.15)" : "none"
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
          <div className="flex items-center justify-between h-20" style={{ boxSizing: "border-box" }}>
            
            {/* Brand Logo Layout Block */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.01 }}
              style={{ textDecoration: "none" }}
            >
              <div 
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 300ms, border-color 300ms",
                  backgroundColor: scrolled ? "#006B94" : "rgba(255, 255, 255, 0.15)",
                  border: scrolled ? "1px solid transparent" : "1px solid rgba(255, 255, 255, 0.3)"
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "900", color: "#ffffff" }}>⚕</span>
              </div>
              <div>
                <div 
                  style={{ 
                    fontWeight: "700", 
                    fontSize: "18px", 
                    lineHeight: "1", 
                    transition: "color 300ms",
                    color: scrolled ? "#001A27" : "#ffffff" 
                  }}
                >
                  DR AK
                </div>
                <div 
                  style={{ 
                    fontSize: "10px", 
                    fontWeight: "600", 
                    letterSpacing: "0.15em", 
                    textTransform: "uppercase", 
                    transition: "color 300ms",
                    color: scrolled ? "rgba(0, 107, 148, 0.75)" : "rgba(255, 255, 255, 0.7)" 
                  }}
                >
                  Dental & Aesthetic
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8" style={{ boxSizing: "border-box" }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    textDecoration: "none",
                    transition: "color 300ms",
                    color: scrolled ? "#4A5568" : "rgba(255, 255, 255, 0.9)"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = scrolled ? "#006B94" : "#ffffff"}
                  onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? "#4A5568" : "rgba(255, 255, 255, 0.9)"}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Action Interface */}
            <div className="hidden md:flex items-center gap-6" style={{ boxSizing: "border-box" }}>
              <a
                href="tel:03178488790"
                className="flex items-center gap-2"
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "color 300ms",
                  color: scrolled ? "#006B94" : "rgba(255, 255, 255, 0.9)"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = scrolled ? "#002D40" : "#ffffff"}
                onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? "#006B94" : "rgba(255, 255, 255, 0.9)"}
              >
                <Phone size={15} />
                <span>0317-8488790</span>
              </a>
              <motion.a
                href="#appointment"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  // backgroundColor: "#006B94",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "14px",
                  fontWeight: "700",
                  fontSize: "13px",
                  textDecoration: "none",
                  boxShadow: scrolled ? "0 4px 12px rgba(0, 107, 148, 0.2)" : "none",
                  whiteSpace: "nowrap"
                }}
                className="btn-primary"
              >
                <span>🗓</span>
                <span>Book Appointment</span>
              </motion.a>
            </div>

            {/* Responsive Mobile Layout Interface Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              style={{
                background: "none",
                border: "none",
                padding: "8px",
                cursor: "pointer",
                borderRadius: "8px",
                transition: "color 300ms",
                color: scrolled ? "#006B94" : "#ffffff"
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Expanded Mobile View Interface */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 right-0 z-40"
            style={{
              top: "80px",
              boxSizing: "border-box",
              backgroundColor: "rgba(255, 255, 255, 0.96)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(0, 107, 148, 0.1)",
              boxShadow: "0 20px 40px rgba(0, 26, 39, 0.15)"
            }}
          >
            <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "8px", boxSizing: "border-box" }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: "#2D3748",
                    fontWeight: "600",
                    fontSize: "15px",
                    padding: "12px 0",
                    textDecoration: "none",
                    borderBottom: "1px solid #EDF2F7",
                    display: "block",
                    boxSizing: "border-box"
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px", boxSizing: "border-box" }}>
                <a
                  href="tel:03178488790"
                  className="flex items-center justify-center gap-2"
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    textDecoration: "none",
                    color: "#006B94",
                    padding: "12px 0"
                  }}
                >
                  <Phone size={16} />
                  <span>0317-8488790</span>
                </a>

                <motion.a
                  href="#appointment"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    backgroundColor: "#006B94",
                    color: "#ffffff",
                    padding: "14px",
                    borderRadius: "16px",
                    fontWeight: "700",
                    fontSize: "14px",
                    textDecoration: "none",
                    textAlign: "center",
                    boxSizing: "border-box"
                  }}
                >
                  <span>🗓</span>
                  <span>Book Appointment</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}