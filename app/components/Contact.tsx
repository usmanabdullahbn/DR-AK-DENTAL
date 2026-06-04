
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-dental-blue/10 text-dental-blue font-body font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
            Find Us in <span className="gradient-text">Karachi</span>
          </h2>
          <p className="text-gray-500 font-body text-lg max-w-2xl mx-auto">
            Located conveniently in Gulistan-e-Johar, Block 12. We look forward to seeing you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: "📍",
                title: "Our Address",
                lines: [
                  "Shop no. G-2, Al Mussawir Tower",
                  "Opposite Bin Hashim Mart",
                  "Block 12, Gulistan-e-Johar",
                  "Karachi City, Sindh",
                ],
              },
              {
                icon: "📞",
                title: "Phone",
                lines: ["0317-8488790"],
                href: "tel:03178488790",
              },
              {
                icon: "💬",
                title: "WhatsApp",
                lines: ["Chat with us on WhatsApp"],
                href: "https://wa.me/923178488790",
              },
              {
                icon: "🕐",
                title: "Working Hours",
                lines: ["Mon – Sat: 10:00 AM – 9:00 PM", "Sunday: By Appointment Only"],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex gap-4 bg-white rounded-2xl p-6 shadow-sm border border-dental-blue/5 hover:border-dental-blue/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-dental-blue/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-display font-bold text-gray-900 mb-1">{item.title}</div>
                  {item.lines.map((line, j) =>
                    item.href && j === 0 ? (
                      <a key={j} href={item.href} target="_blank" rel="noopener noreferrer"
                        className="block text-dental-blue font-body text-sm hover:underline">
                        {line}
                      </a>
                    ) : (
                      <p key={j} className="text-gray-500 font-body text-sm">{line}</p>
                    )
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-dental-blue/5"
            >
              <div className="font-display font-bold text-gray-900 mb-4">Follow Us</div>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/61564450523227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 flex-1 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <span className="text-2xl">📘</span>
                  <div>
                    <div className="text-blue-700 font-body font-semibold text-sm">Facebook</div>
                    <div className="text-blue-500 text-xs font-body">DR AK Dental</div>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/drakdental_clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 flex-1 p-3 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors"
                >
                  <span className="text-2xl">📸</span>
                  <div>
                    <div className="text-pink-700 font-body font-semibold text-sm">Instagram</div>
                    <div className="text-pink-500 text-xs font-body">@drakdental_clinic</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-dental-blue/10 border border-dental-blue/10"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-dental-blue flex items-center justify-center text-white text-lg">📍</div>
                <div>
                  <div className="font-display font-bold text-gray-900 text-sm">DR AK Dental & Aesthetic Clinic</div>
                  <div className="text-gray-400 font-body text-xs">Block 12, Gulistan-e-Johar, Karachi</div>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.6!2d67.1!3d24.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGulistan-e-Johar%20Block%2012%2C%20Karachi!5e0!3m2!1sen!2spk!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DR AK Dental Clinic Location"
              className="block"
            />
            <div className="p-4 bg-dental-blue/5">
              <a
                href="https://maps.google.com/?q=Gulistan-e-Johar+Block+12+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-dental-blue font-body font-semibold text-sm hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
