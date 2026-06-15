"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 2000, suffix: "+", label: "Happy Patients", icon: "😊" },
  { value: 5, suffix: "★", label: "Google Rating", icon: "⭐" },
  { value: 8, suffix: "+", label: "Services", icon: "🦷" },
  { value: 100, suffix: "%", label: "Satisfaction", icon: "💯" },
];

const features = [
  "Advanced Digital X-Rays",
  "Painless Anesthesia Techniques",
  "Sterilized Equipment",
  "Experienced & Certified Dentist",
  "Affordable & Transparent Pricing",
  "Flexible Appointment Booking",
];

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f9fafb"
      }}
    >
      {/* Background decoration */}
      <div
        className="animate-blob"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "33.333%",
          height: "100%",
          opacity: 0.06,
          pointerEvents: "none",
          background: "radial-gradient(circle at right, #006B94, transparent)"
        }}
      />
      <div
        className="animate-blob"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "26%",
          height: "60%",
          opacity: 0.05,
          pointerEvents: "none",
          background: "radial-gradient(circle at left, #CC2936, transparent)",
          animationDelay: "4s"
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
            style={{ backgroundColor: "rgba(0, 107, 148, 0.1)", color: "#006B94" }}
          >
            About Us
          </motion.span>
          <h2
            className="font-black text-gray-900 mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.2" }}
          >
            Welcome to <span className="gradient-text">DR AK Dental</span>
            <br />& Aesthetic Clinic
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-500 text-base md:text-lg mx-auto"
          >
            Your perfect smile is just a visit away. We combine advanced dental technology with<br /> compassionate care for outstanding results.
          </motion.p>
        </motion.div>

        {/* Main Grid Content - Reduced top gap */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch"
          style={{ marginBottom: "48px", boxSizing: "border-box" }}
        >
          {/* Left - Visual Banner Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 0.5 }}
              transition={{ duration: 0.4 }}
              style={{
                background: "linear-gradient(135deg, #004D6B, #006B94, #00898A)",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 8s ease infinite",
                minHeight: "380px",
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 107, 148, 0.25)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px 24px",
                boxSizing: "border-box"
              }}
            >
              <div style={{ position: "relative", zIndex: 3, textAlign: "center", color: "#ffffff" }}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ fontSize: "72px", marginBottom: "16px", display: "inline-block" }}
                >
                  🦷
                </motion.div>
                <h3 className="font-bold text-2xl md:text-3xl mb-3" style={{ lineHeight: "1.3" }}>
                  DR AK Dental
                  <br />& Aesthetic Clinic
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", fontStyle: "italic", marginBottom: "24px" }}>
                  "Your perfect Smile is just a visit away"
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                  <div>
                    <div style={{ fontSize: "20px", letterSpacing: "2px", marginBottom: "4px" }}>
                      {[...Array(5)].map((_, s) => (
                        <motion.span
                          key={s}
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: s * 0.2 }}
                          style={{ display: "inline-block" }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                    <div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "12px", textTransform: "uppercase", }}>Google Reviews</div>
                  </div>
                </div>
              </div>

              {/* Decorative structural accent circles - rotating */}
              <div
                className="animate-spin-slow"
                style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", border: "1px solid rgba(255, 255, 255, 0.1)", pointerEvents: "none" }}
              />
              <div
                className="animate-spin-reverse"
                style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "128px", height: "128px", borderRadius: "50%", border: "1px solid rgba(255, 255, 255, 0.1)", pointerEvents: "none" }}
              />

              {/* Floating mini dots */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4
                  }}
                  style={{
                    position: "absolute",
                    top: `${15 + i * 12}%`,
                    left: `${10 + i * 13}%`,
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.4)",
                    pointerEvents: "none"
                  }}
                />
              ))}
            </motion.div>

            {/* Floating Location Badge */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              whileHover={{ scale: 1.08 }}
              style={{
                position: "absolute",
                bottom: "16px",
                right: "16px",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 20px 25px -5px rgba(0, 107, 148, 0.15)",
                minWidth: "190px",
                zIndex: 4,
                boxSizing: "border-box",
                cursor: "pointer"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: "40px", height: "40px", borderRadius: "12px", backgroundColor: "rgba(0, 107, 148, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}
                >
                  📍
                </motion.div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Gulistan-e-Johar</div>
                  <div className="text-gray-500 text-xs">Karachi, Sindh</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Text Content Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <h3
              className="font-bold text-2xl text-gray-900 mb-4"
              style={{ overflow: "hidden" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ display: "inline-block" }}
              >
                Comprehensive Dental Care You Can Trust
              </motion.span>
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-500 text-sm md:text-base leading-relaxed mb-4"
            >
              At DR AK Dental & Aesthetic Clinic, we provide comprehensive dental care with a gentle
              touch. Located in Gulistan-e-Johar, Karachi, our clinic is equipped with the latest
              technology to deliver exceptional results.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-500 text-sm md:text-base leading-relaxed mb-6"
            >
              From routine cleanings to complete smile makeovers, our experienced team is dedicated
              to helping you achieve the smile you've always dreamed of — comfortably and affordably.
            </motion.p>

            {/* Feature Check Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3" style={{ marginBottom: "32px" }}>
              {features.map((feat, i) => (
                <motion.div
                  key={feat}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(0, 107, 148, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#006B94" }}
                    />
                  </motion.div>
                  <span className="text-gray-700 text-sm font-medium">{feat}</span>
                </motion.div>
              ))}
            </div>

            {/* Primary Action Button */}
            <motion.a
              href="#services"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(0, 107, 148, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-2xl font-display font-bold text-sm flex items-center justify-center gap-2 transition-all whitespace-nowrap text-white"
              style={{
                background: "linear-gradient(135deg, #006B94, #00898A)",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 5s ease infinite",
                padding: "8px",
                alignSelf: "flex-start"
              }}
            >
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                📚
              </motion.span>
              <span style={{ fontWeight: "bold", padding: "8px" }}>Explore Our Services</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Counter Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.12, type: "spring", stiffness: 100 }}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(0, 107, 148, 0.2)",
                borderColor: "rgba(0, 107, 148, 0.3)"
              }}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                padding: "24px 16px",
                textAlign: "center",
                boxShadow: "0 10px 25px -5px rgba(0, 107, 148, 0.04)",
                border: "1px solid rgba(0, 107, 148, 0.08)",
                cursor: "pointer"
              }}
            >
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [0, 8, -8, 0] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                style={{ fontSize: "36px", marginBottom: "8px", display: "inline-block" }}
              >
                {stat.icon}
              </motion.div>
              <div
                className="font-black mb-1"
                style={{ color: "#006B94", fontSize: "32px", letterSpacing: "-0.5px" }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 font-medium text-xs md:text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}