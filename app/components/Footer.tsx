"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Teeth Cleaning", "Root Canal", "Dental Crowns",
  "Tooth Extraction", "Teeth Whitening", "Braces",
  "Dental Implants", "Veneers",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book Appointment", href: "#appointment" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  // Use client-side state for the copyright year to avoid SSR mismatch bugs
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer 
      className="relative overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, #001A27 0%, #002D40 50%, #003D54 100%)",
        boxSizing: "border-box"
      }}
    >
      {/* Background decoration pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none"
        }} 
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px 32px 24px", position: "relative" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12" style={{ marginBottom: "48px", boxSizing: "border-box" }}>
          
          {/* Brand Panel */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div 
                style={{ 
                  width: "48px", 
                  height: "48px", 
                  borderRadius: "12px", 
                  backgroundColor: "#006B94", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  color: "#ffffff",
                  fontSize: "24px" 
                }}
              >
                ⚕
              </div>
              <div>
                <div style={{ color: "#ffffff", fontWeight: "700", fontSize: "20px", lineHeight: "1.2" }}>DR AK</div>
                <div style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "11px", fontWeight: "600", textTransform: "uppercase",  }}>
                  Dental & Aesthetic
                </div>
              </div>
            </div>
            <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px", margin: "0 0 24px 0" }}>
              Your perfect smile is just a visit away. Premium dental care in the heart of Karachi's Gulistan-e-Johar.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { icon: "📘", href: "https://www.facebook.com/61564450523227" },
                { icon: "📸", href: "https://www.instagram.com/drakdental_clinic/" },
                { icon: "💬", href: "https://wa.me/923178488790" },
                { icon: "📞", href: "https://tel:03178488790" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    textDecoration: "none",
                    transition: "background-color 200ms"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#006B94"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ color: "#ffffff", fontWeight: "700", fontSize: "18px", margin: "0 0 24px 0" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    style={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: "14px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "color 200ms"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                      if (e.currentTarget.firstElementChild) {
                        (e.currentTarget.firstElementChild as HTMLElement).style.backgroundColor = "#CC2936";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
                      if (e.currentTarget.firstElementChild) {
                        (e.currentTarget.firstElementChild as HTMLElement).style.backgroundColor = "rgba(0, 107, 148, 0.5)";
                      }
                    }}
                  >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "rgba(0, 107, 148, 0.5)", transition: "background-color 200ms", flexShrink: 0 }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ color: "#ffffff", fontWeight: "700", fontSize: "18px", margin: "0 0 24px 0" }}>Our Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    style={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: "14px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "color 200ms"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                      if (e.currentTarget.firstElementChild) {
                        (e.currentTarget.firstElementChild as HTMLElement).style.backgroundColor = "#00A19A";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
                      if (e.currentTarget.firstElementChild) {
                        (e.currentTarget.firstElementChild as HTMLElement).style.backgroundColor = "rgba(0, 161, 154, 0.5)";
                      }
                    }}
                  >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "rgba(0, 161, 154, 0.5)", transition: "background-color 200ms", flexShrink: 0 }} />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 style={{ color: "#ffffff", fontWeight: "700", fontSize: "18px", margin: "0 0 24px 0" }}>Contact Info</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", gap: "12px" }}>
                <span style={{ fontSize: "20px", flexShrink: 0 }}>📍</span>
                <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>
                  Shop no. G-2, Al Mussawir Tower,<br />
                  Block 12, Gulistan-e-Johar,<br />
                  Karachi, Sindh
                </p>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "20px", flexShrink: 0 }}>📞</span>
                <a 
                  href="tel:03178488790" 
                  style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "14px", textDecoration: "none", transition: "color 200ms" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)"}
                >
                  0317-8488790
                </a>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "20px", flexShrink: 0 }}>🕐</span>
                <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "14px", margin: 0 }}>Mon–Sat: 10AM–9PM</p>
              </div>
            </div>

            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "24px",
                // backgroundColor: "#006B94",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "14px",
                textDecoration: "none"
              }} className="btn-primary"
            >
              🗓 Book Appointment
            </motion.a>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "32px" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4" style={{ boxSizing: "border-box" }}>
            <p style={{ color: "rgba(255, 255, 255, 0.3)", fontSize: "14px", margin: 0, textAlign: "center" }}>
              © {currentYear} DR AK Dental & Aesthetic Clinic. All rights reserved.
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "14px", margin: 0, textAlign: "center" }}>
              Design by <span style={{ fontWeight: "600", color: "#00A19A" }}>codeVersePk</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}