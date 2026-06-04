"use client";
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
  return (
    <footer className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #001A27 0%, #002D40 50%, #003D54 100%)" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }} />

      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-dental-blue flex items-center justify-center text-2xl">⚕</div>
              <div>
                <div className="font-display font-bold text-white text-xl">DR AK</div>
                <div className="text-white/50 font-body text-xs uppercase tracking-widest">Dental & Aesthetic</div>
              </div>
            </div>
            <p className="text-white/50 font-body text-sm leading-relaxed mb-6">
              Your perfect smile is just a visit away. Premium dental care in the heart of Karachi's Gulistan-e-Johar.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/61564450523227" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-dental-blue transition-colors text-lg">
                📘
              </a>
              <a href="https://www.instagram.com/drakdental_clinic/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-dental-blue transition-colors text-lg">
                📸
              </a>
              <a href="https://wa.me/923178488790" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-dental-blue transition-colors text-lg">
                💬
              </a>
              <a href="tel:03178488790"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-dental-blue transition-colors text-lg">
                📞
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-white/50 font-body text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-dental-blue/50 group-hover:bg-dental-red transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services"
                    className="text-white/50 font-body text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-dental-teal/50 group-hover:bg-dental-teal transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-xl flex-shrink-0">📍</span>
                <p className="text-white/50 font-body text-sm leading-relaxed">
                  Shop no. G-2, Al Mussawir Tower,<br />
                  Block 12, Gulistan-e-Johar,<br />
                  Karachi, Sindh
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-xl">📞</span>
                <a href="tel:03178488790" className="text-white/50 font-body text-sm hover:text-white transition-colors">
                  0317-8488790
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-xl">🕐</span>
                <p className="text-white/50 font-body text-sm">Mon–Sat: 10AM–9PM</p>
              </div>
            </div>

            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-6 btn-primary px-6 py-3 rounded-xl font-display font-semibold text-sm"
            >
              🗓 Book Appointment
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 font-body text-sm text-center md:text-left">
              © 2025 DR AK Dental & Aesthetic Clinic. All rights reserved.
            </p>
            <p className="text-white/20 font-body text-xs">
              Shop no. G-2, Al Mussawir Tower, Block 12, Gulistan-e-Johar, Karachi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
