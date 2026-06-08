"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: "80px 0",
        backgroundColor: "#f9fafb",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "rgba(0, 107, 148, 0.1)", color: "#006B94" }}
          >
            Contact Us
          </span>
          <h2
            className="font-black text-gray-900 mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.2" }}
          >
            Find Us in <span style={{ background: "linear-gradient(135deg, #006B94, #00A19A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Karachi</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg mx-auto">
            Located conveniently in Gulistan-e-Johar, Block 12. We look forward <br />to seeing you!
          </p>
        </motion.div>

        {/* Main Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12" style={{ boxSizing: "border-box" }}>

          {/* Left Column - Essential Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: "16px", boxSizing: "border-box" }}
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
                style={{
                  display: "flex",
                  gap: "16px",
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0, 107, 148, 0.05)",
                  boxSizing: "border-box"
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(0, 107, 148, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    flexShrink: 0
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div className="font-bold text-gray-900 mb-1" style={{ fontSize: "16px" }}>{item.title}</div>
                  {item.lines.map((line, j) =>
                    item.href && j === 0 ? (
                      <a
                        key={j}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#006B94", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}
                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"}
                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={j} className="text-gray-500 font-normal" style={{ margin: "2px 0 0 0", fontSize: "14px", lineHeight: "1.4" }}>{line}</p>
                    )
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Channels Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(0, 107, 148, 0.05)",
                boxSizing: "border-box"
              }}
            >
              <div className="font-bold text-gray-900 mb-3" style={{ fontSize: "15px" }}>Follow Us</div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="https://www.facebook.com/61564450523227"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flex: "1 1 180px",
                    padding: "12px",
                    backgroundColor: "#f0f7ff",
                    borderRadius: "12px",
                    textDecoration: "none",
                    boxSizing: "border-box"
                  }}
                >
                  <span style={{ fontSize: "24px" }}>📘</span>
                  <div>
                    <div style={{ color: "#1d4ed8", fontWeight: "600", fontSize: "13px" }}>Facebook</div>
                    <div style={{ color: "#3b82f6", fontSize: "11px" }}>DR AK Dental</div>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/drakdental_clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flex: "1 1 180px",
                    padding: "12px",
                    backgroundColor: "#fdf2f8",
                    borderRadius: "12px",
                    textDecoration: "none",
                    boxSizing: "border-box"
                  }}
                >
                  <span style={{ fontSize: "24px" }}>📸</span>
                  <div>
                    <div style={{ color: "#be185d", fontWeight: "600", fontSize: "13px" }}>Instagram</div>
                    <div style={{ color: "#ec4899", fontSize: "11px" }}>@drakdental_clinic</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Map Canvas Component Container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 25px -5px rgba(0, 107, 148, 0.05)",
              border: "1px solid rgba(0, 107, 148, 0.08)",
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box"
            }}
          >
            <div style={{ padding: "16px", borderBottom: "1px solid #f3f4f6" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "#006B94", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "14px" }}>📍</div>
                <div>
                  <div className="font-bold text-gray-900" style={{ fontSize: "14px", lineHeight: "1.2" }}>DR AK Dental & Aesthetic Clinic</div>
                  <div style={{ color: "#9ca3af", fontSize: "12px", marginTop: "2px" }}>Block 12, Gulistan-e-Johar, Karachi</div>
                </div>
              </div>
            </div>

            {/* Embedded Visual Map Element Container */}
            <iframe
              src="https://maps.google.com/maps?q=Al%20Mussawir%20Tower,%20Block%2012,%20Gulistan-e-Johar,%20Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DR AK Dental Clinic Location Map"
              className="block"
            />

            <div style={{ padding: "16px", backgroundColor: "rgba(0, 107, 148, 0.03)", textAlign: "center" }}>
              <a
                href="https://maps.google.com/?q=Al+Mussawir+Tower,+Block+12,+Gulistan-e-Johar,+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#006B94",
                  fontWeight: "600",
                  fontSize: "14px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px"
                }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}
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