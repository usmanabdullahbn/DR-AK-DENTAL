"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const galleryItems = [
  { emoji: "✨", label: "Teeth Whitening", desc: "4 shades brighter in one session", color: "#006B94" },
  { emoji: "😁", label: "Smile Makeover", desc: "Complete transformation", color: "#CC2936" },
  { emoji: "💎", label: "Veneers", desc: "Porcelain perfection", color: "#D4A843" },
  { emoji: "🦷", label: "Implants", desc: "Permanent restoration", color: "#00A19A" },
  { emoji: "😊", label: "Orthodontics", desc: "Perfect alignment", color: "#7B2FBE" },
  { emoji: "👑", label: "Crowns", desc: "Natural-looking caps", color: "#006B94" },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(null);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      style={{
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff"
      }}
    >
      {/* Floating background orbs */}
      <div
        className="animate-blob"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212, 168, 67, 0.08), transparent)",
          filter: "blur(20px)",
          pointerEvents: "none"
        }}
      />
      <div
        className="animate-blob"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 161, 154, 0.08), transparent)",
          filter: "blur(20px)",
          pointerEvents: "none",
          animationDelay: "3s"
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header Section with minimized bottom gap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
            style={{ backgroundColor: "rgba(212, 168, 67, 0.15)", color: "#D4A843" }}
          >
            Before & After
          </motion.span>
          <h2
            className="font-black text-gray-900 mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.2" }}
          >
            Smile <span className="gradient-text">Transformations</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-500 text-base md:text-lg mx-auto"
          >
            Real results from real patients — witness the stunning transformations
            our <br />clinic delivers every day.
          </motion.p>
        </motion.div>

        {/* Gallery Grid Block */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          style={{ marginBottom: "48px", boxSizing: "border-box" }}
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.05, y: -8 }}
              // onClick={() => setActive(i)}
              className="group"
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                aspectRatio: "1/1",
                background: `linear-gradient(135deg, ${item.color}15, ${item.color}33)`,
                border: `1px solid ${item.color}25`,
                boxSizing: "border-box",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)"
              }}
            >
              {/* Inner Base Visual Component Layer */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "28px",
                  boxSizing: "border-box",
                  textAlign: "center"
                }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
                  style={{ fontSize: "64px", marginBottom: "16px", display: "inline-block" }}
                >
                  {item.emoji}
                </motion.div>
                <div style={{ width: "100%" }}>
                  <div className="font-bold text-gray-900 text-base md:text-lg mb-1">{item.label}</div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </div>
              </div>

              {/* Seamless Cover Hover Overlay Layer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `${item.color}E6`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "28px",
                  boxSizing: "border-box"
                }}
              >
                <div style={{ textAlign: "center", color: "#ffffff", width: "100%" }}>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                    style={{ fontSize: "44px", marginBottom: "12px" }}
                  >
                    {item.emoji}
                  </motion.div>
                  <div className="font-bold text-lg md:text-xl mb-1">{item.label}</div>
                  <div style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "14px", marginBottom: "16px" }}>{item.desc}</div>
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="inline-block rounded-full"
                    style={{
                      padding: "8px 18px",
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      fontSize: "12px",
                      fontWeight: "500",
                      cursor: "pointer"
                    }}
                  >
                    View Details
                  </motion.div>
                </div>
              </div>

              {/* Corner Accent Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "#ffffff",
                  background: item.color,
                  zIndex: 5
                }}
              >
                {item.label}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox Popup Frame */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 999,
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
                boxSizing: "border-box"
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  padding: "40px 24px",
                  maxWidth: "440px",
                  width: "100%",
                  textAlign: "center",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  boxSizing: "border-box"
                }}
              >
                <div style={{ fontSize: "96px", marginBottom: "20px" }}>{galleryItems[active].emoji}</div>
                <h3 className="font-black text-2xl md:text-3xl text-gray-900 mb-2">
                  {galleryItems[active].label}
                </h3>
                <p className="text-gray-500 mb-1" style={{ fontSize: "15px" }}>{galleryItems[active].desc}</p>
                <p className="text-gray-400 text-xs md:text-sm mb-6">
                  Delivered by DR AK Dental & Aesthetic Clinic with precision and care.
                </p>
                
                <div style={{ display: "flex", gap: "12px" }}>
                  <a 
                    href="#appointment"
                    onClick={() => setActive(null)}
                    style={{
                      flex: 1,
                      backgroundColor: "#006B94",
                      color: "#ffffff",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      fontWeight: "600",
                      fontSize: "14px",
                      textDecoration: "none",
                      display: "inline-block"
                    }}
                  >
                    Book This Treatment
                  </a>
                  <button
                    onClick={() => setActive(null)}
                    style={{
                      padding: "12px 20px",
                      borderRadius: "12px",
                      border: "2px solid #e5e7eb",
                      color: "#6b7280",
                      backgroundColor: "transparent",
                      fontSize: "14px",
                      fontWeight: "500",
                      cursor: "pointer"
                    }}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Call-To-Action Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <p className="text-gray-500 text-sm md:text-base mb-4">
            Want to see more? Follow our Instagram for real patient transformations.
          </p>
          <motion.a
            href="https://www.instagram.com/drakdental_clinic/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 15px 35px rgba(236, 72, 153, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-white font-semibold shadow-sm transition-all"
            style={{
              background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 4s ease infinite",
              padding: "12px 28px",
              borderRadius: "14px",
              fontSize: "15px",
              textDecoration: "none"
            }}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📸
            </motion.span>
            @drakdental_clinic
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}