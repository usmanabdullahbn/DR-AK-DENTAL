"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Siddiqui",
    role: "Patient — Teeth Whitening",
    review: "Amazing experience! My teeth are several shades whiter after just one session. The doctor was very professional and the procedure was completely painless. Highly recommended!",
    rating: 5,
    avatar: "AS",
    color: "#006B94",
  },
  {
    name: "Muhammad Tariq",
    role: "Patient — Root Canal",
    review: "I was terrified of root canals but DR AK made it completely painless. The clinic is clean, modern, and the doctor explained everything clearly. I'm so glad I came here.",
    rating: 5,
    avatar: "MT",
    color: "#CC2936",
  },
  {
    name: "Fatima Malik",
    role: "Patient — Braces",
    review: "Getting braces as an adult seemed daunting, but the team here made it easy. My smile has completely transformed in just over a year. Worth every penny!",
    rating: 5,
    avatar: "FM",
    color: "#00A19A",
  },
  {
    name: "Hassan Ahmed",
    role: "Patient — Dental Implant",
    review: "Outstanding results with my dental implant. Looks and feels completely natural. The doctor's skill and attention to detail is remarkable. Best clinic in Karachi!",
    rating: 5,
    avatar: "HA",
    color: "#D4A843",
  },
  {
    name: "Sana Rizvi",
    role: "Patient — Veneers",
    review: "I got porcelain veneers and I'm absolutely in love with my new smile! The transformation is incredible. Professional, gentle, and the results exceeded my expectations.",
    rating: 5,
    avatar: "SR",
    color: "#7B2FBE",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
        padding: "80px 0",
        backgroundColor: "#f9fafb",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Floating decorative shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "2px dashed rgba(0, 107, 148, 0.1)",
          pointerEvents: "none"
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          border: "2px dashed rgba(204, 41, 54, 0.1)",
          pointerEvents: "none"
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header Section */}
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
            Testimonials
          </motion.span>
          <h2
            className="font-black text-gray-900 mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.2" }}
          >
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-500 text-base md:text-lg mx-auto"
          >
            Real stories from real patients who transformed their smiles with<br /> DR AK Dental.
          </motion.p>
        </motion.div>

        {/* Main Review Slider Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ position: "relative", boxSizing: "border-box" }}
        >
          <div style={{ maxWidth: "896px", margin: "0 auto" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, rotateX: 15 }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  padding: "40px 24px",
                  boxShadow: "0 20px 25px -5px rgba(0, 107, 148, 0.08)",
                  border: "1px solid rgba(0, 107, 148, 0.05)",
                  textAlign: "center",
                  position: "relative",
                  boxSizing: "border-box",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Big Quote Accent mark */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  style={{ fontSize: "64px", color: "rgba(0, 107, 148, 0.1)", fontFamily: "serif", lineHeight: 1, marginBottom: "8px" }}
                >“</motion.div>

                {/* Patient Review Text Block */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-700 font-medium italic mb-6 mx-auto"
                  style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", lineHeight: "1.6", maxWidth: "750px" }}
                >
                  {testimonials[index].review}
                </motion.p>

                {/* Rating Stars Grid */}
                <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "24px" }}>
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1, type: "spring" }}
                      style={{ fontSize: "20px", display: "inline-block" }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Patient Profile Card Wrapper */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      color: "#ffffff",
                      fontSize: "16px",
                      background: `linear-gradient(135deg, ${testimonials[index].color}, ${testimonials[index].color}99)`,
                      boxShadow: `0 8px 16px ${testimonials[index].color}40`
                    }}
                  >
                    {testimonials[index].avatar}
                  </motion.div>
                  <div style={{ textAlign: "left" }}>
                    <div className="font-bold text-gray-900 text-base md:text-lg" style={{ lineHeight: "1.2", marginBottom: "2px" }}>
                      {testimonials[index].name}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">
                      {testimonials[index].role}
                    </div>
                  </div>
                </motion.div>

                {/* Corner Decorative Visual Dot */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    position: "absolute",
                    top: "24px",
                    right: "24px",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    opacity: 0.08,
                    background: testimonials[index].color
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Dots and Controls */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", marginTop: "32px" }}>
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1, backgroundColor: "#006B94", color: "#ffffff" }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "2px solid rgba(0, 107, 148, 0.25)",
                  backgroundColor: "transparent",
                  color: "#006B94",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <ChevronLeft size={18} />
              </motion.button>

              <div style={{ display: "flex", gap: "8px" }}>
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setIndex(i)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      padding: 0,
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "99px",
                      height: "10px",
                      width: i === index ? "32px" : "10px",
                      backgroundColor: i === index ? "#006B94" : "rgba(0, 107, 148, 0.2)"
                    }}
                  />
                ))}
              </div>

              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1, backgroundColor: "#006B94", color: "#ffffff" }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "2px solid rgba(0, 107, 148, 0.25)",
                  backgroundColor: "transparent",
                  color: "#006B94",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Quick-Jump Avatar Selection Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-5 gap-4"
          style={{ marginTop: "40px", boxSizing: "border-box" }}
        >
          {testimonials.map((t, i) => {
            const isSelected = i === index;
            return (
              <motion.button
                key={i}
                onClick={() => setIndex(i)}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  borderRadius: "16px",
                  padding: "16px",
                  textAlign: "center",
                  cursor: "pointer",
                  border: isSelected ? "1px solid transparent" : "1px solid #f3f4f6",
                  boxShadow: isSelected ? "0 10px 25px -3px rgba(0, 107, 148, 0.3)" : "0 1px 3px rgba(0,0,0,0.05)",
                  transform: isSelected ? "scale(1.04)" : "scale(1)",
                  backgroundColor: isSelected ? "#006B94" : "#ffffff",
                  transition: "all 300ms"
                }}
              >
                <motion.div
                  animate={isSelected ? { rotate: [0, 360] } : {}}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "13px",
                    margin: "0 auto 10px auto",
                    backgroundColor: isSelected ? "rgba(255, 255, 255, 0.2)" : `${t.color}15`,
                    color: isSelected ? "#ffffff" : t.color
                  }}
                >
                  {t.avatar}
                </motion.div>
                <div
                  className="font-semibold text-xs truncate"
                  style={{ color: isSelected ? "#ffffff" : "#374151" }}
                >
                  {t.name.split(" ")[0]}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}