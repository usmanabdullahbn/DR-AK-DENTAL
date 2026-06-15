"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: "🔬",
    title: "Advanced Equipment",
    description: "Digital X-rays, modern dental instruments, and sterilized tools for precision and safety.",
    color: "#006B94",
  },
  {
    icon: "👨‍⚕️",
    title: "Experienced Doctor",
    description: "Highly qualified and certified dentist with years of experience across all dental specialties.",
    color: "#CC2936",
  },
  {
    icon: "🛋️",
    title: "Comfortable Environment",
    description: "A calming, modern clinic designed to ease dental anxiety with a welcoming atmosphere.",
    color: "#00A19A",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    description: "Transparent, competitive pricing with no hidden costs. Quality dental care for every budget.",
    color: "#D4A843",
  },
  {
    icon: "🚨",
    title: "Emergency Care",
    description: "We accommodate dental emergencies promptly. Severe toothache? Call us immediately.",
    color: "#7B2FBE",
  },
  {
    icon: "📱",
    title: "Easy Booking",
    description: "Book appointments via call, WhatsApp, or our online form — quick and hassle-free.",
    color: "#006B94",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="why-us"
      ref={sectionRef}
      style={{
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #002D40 0%, #004D6B 50%, #006B94 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 14s ease infinite"
      }}
    >
      {/* Background structural background dot grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Floating animated orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="animate-drift"
          style={{
            position: "absolute",
            top: `${15 + i * 18}%`,
            left: `${i * 22}%`,
            width: `${40 + i * 15}px`,
            height: `${40 + i * 15}px`,
            borderRadius: "50%",
            background: i % 2 === 0 ? "rgba(0, 161, 154, 0.15)" : "rgba(204, 41, 54, 0.12)",
            filter: "blur(8px)",
            pointerEvents: "none",
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.9)" }}
          >
            Why Choose Us
          </motion.span>
          <h2
            className="font-black text-white mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.2" }}
          >
            The DR AK Difference
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 text-base md:text-lg mx-auto"
          >
            We're committed to delivering exceptional dental care with state-of-the-art
            <br />technology and a patient-first approach.
          </motion.p>
        </motion.div>

        {/* Reason Card Matrix Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          style={{ marginBottom: "48px", boxSizing: "border-box" }}
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 80 }}
              whileHover={{
                scale: 1.04,
                y: -8,
                boxShadow: `0 25px 50px -10px ${reason.color}50`
              }}
              className="group"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "24px",
                padding: "28px",
                cursor: "pointer",
                transition: "background-color 300ms",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxSizing: "border-box"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)"}
            >
              <motion.div
                animate={{ y: [0, -4, 0], rotate: [0, 8, -8, 0] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                style={{ fontSize: "40px", marginBottom: "16px", display: "inline-block" }}
              >
                {reason.icon}
              </motion.div>
              <h3
                className="font-bold text-white text-lg mb-2"
                style={{ position: "relative", display: "inline-block" }}
              >
                {reason.title}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background: reason.color,
                    transformOrigin: "left"
                  }}
                />
              </h3>
              <p className="text-white/70 text-sm leading-relaxed" style={{ flexGrow: 1, margin: 0 }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Contact Banner Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.01 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "24px",
            padding: "32px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxSizing: "border-box"
          }}
        >
          <div style={{ flex: "1" }}>
            <h3 className="font-bold text-white text-xl md:text-2xl mb-2">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-white/70 text-sm md:text-base mb-0" style={{ margin: 0 }}>
              📍 Shop no. G-2, Al Mussawir Tower, Block 12, Gulistan-e-Johar, Karachi
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignSelf: "stretch", alignItems: "center" }}>
            <motion.a
              href="tel:03178488790"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(204, 41, 54, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "#CC2936",
                color: "#ffffff",
                padding: "14px 24px",
                borderRadius: "14px",
                fontSize: "14px",
                fontWeight: "bold",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none"
              }}
            >
              <motion.span
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                📞
              </motion.span>
              Call Now
            </motion.a>
            <motion.a
              href="https://wa.me/923178488790"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 211, 102, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                padding: "14px 24px",
                borderRadius: "14px",
                fontSize: "14px",
                fontWeight: "bold",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                textDecoration: "none"
              }}
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                💬
              </motion.span>
              WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}