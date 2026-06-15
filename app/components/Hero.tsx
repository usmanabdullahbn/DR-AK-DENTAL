"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Star, Shield, Clock } from "lucide-react";

const typingPhrases = [
  "Professional Dental Care",
  "Aesthetic Smile Makeovers",
  "Advanced Orthodontics",
  "Painless Root Canals",
  "Teeth Whitening Experts",
];

function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const phrase = typingPhrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < phrase.length) {
      timeout = setTimeout(() => {
        setText(phrase.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 70);
    } else if (!deleting && charIndex === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(phrase.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % typingPhrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <span
      style={{
        background: "linear-gradient(135deg, #FF6B6B, #CC2936)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        borderRight: "3px solid #CC2936",
        paddingRight: "4px",
        display: "inline-block"
      }}
    >
      {text || "\u00A0"}
    </span>
  );
}

const stats = [
  { icon: "😊", value: "2,000+", label: "Happy Patients" },
  { icon: "⭐", value: "5.0", label: "Google Rating" },
  { icon: "🦷", value: "8+", label: "Services Offered" },
  { icon: "📍", value: "Karachi", label: "Gulistan-e-Johar" },
];

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    const particles = particlesRef.current.children;
    Array.from(particles).forEach((p, i) => {
      gsap.to(p, {
        y: `${-30 - i * 15}px`,
        x: `${Math.sin(i) * 20}px`,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  }, []);

  const glassStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)"
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #002D40 0%, #004D6B 30%, #006B94 60%, #00898A 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 12s ease infinite",
        boxSizing: "border-box",
        paddingTop: "120px",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 overflow-hidden" style={{ pointerEvents: "none" }}>
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #00A19A, transparent)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #CC2936, transparent)" }}
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #D4A843, transparent)" }}
          animate={{ scale: [1, 1.1, 1], x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rotating decorative rings */}
        <div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04] animate-spin-slow"
          style={{ border: "2px dashed rgba(255,255,255,0.6)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.05] animate-spin-reverse"
          style={{ border: "1px solid rgba(255,255,255,0.5)" }}
        />

        {/* Backdrop Grid Pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
      </div>

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              borderRadius: "50%",
              width: `${8 + (i % 4) * 6}px`,
              height: `${8 + (i % 4) * 6}px`,
              top: `${(i * 17 + 5) % 90}%`,
              left: `${(i * 23 + 10) % 95}%`,
              background: i % 3 === 0
                ? "rgba(0,161,154,0.25)"
                : i % 3 === 1
                  ? "rgba(204,41,54,0.2)"
                  : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>

      {/* Main Centered Structural Layout Wrapper */}
      <div
        className="relative z-10 w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center"
        style={{ maxWidth: "1280px", boxSizing: "border-box" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full" style={{ boxSizing: "border-box" }}>

          {/* Left Text Block (Takes up 7/12 layout columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left" style={{ boxSizing: "border-box" }}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-white"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                lineHeight: "1.15",
                margin: "0 0 24px 0",
                letterSpacing: "-0.02em"
              }}
            >
              Your Perfect
              <br />
              Smile Starts
              <br />
              <div style={{ minHeight: "1.2em", display: "inline-block", verticalAlign: "top" }}>
                <TypingText />
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/80 text-base sm:text-lg font-body"
              style={{ lineHeight: "1.65", maxWidth: "560px", margin: "0 0 36px 0" }}
            >
              DR AK Dental & Aesthetic Clinic delivers world-class dental care with
              cutting-edge technology, compassionate care, and stunning smile transformations —
              all in the heart of Gulistan-e-Johar, Karachi.
            </motion.p>

            {/* Interactive Call to Action Layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "36px", boxSizing: "border-box" }}
            >
              <motion.a
                className="btn-primary"
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
                  padding: "14px 28px",
                  borderRadius: "16px",
                  fontWeight: "700",
                  fontSize: "14px",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(0, 107, 148, 0.4)",
                  whiteSpace: "nowrap"
                }}
              >
                <span>🗓</span>
                <span>Book Appointment</span>
              </motion.a>
              <motion.a
                href="https://wa.me/923178488790"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  padding: "14px 28px",
                  borderRadius: "16px",
                  fontWeight: "700",
                  fontSize: "14px",
                  textDecoration: "none",
                  border: "2px solid rgba(255, 255, 255, 0.4)",
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                  transition: "border-color 300ms, background-color 300ms"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#ffffff";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <span>💬</span>
                <span>WhatsApp Us</span>
              </motion.a>
            </motion.div>

            {/* Micro-Trust Badges Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "24px", boxSizing: "border-box" }}
            >
              {[
                { icon: <Shield size={16} />, text: "Certified Doctors" },
                { icon: <Star size={16} />, text: "5-Star Rated Clinic" },
                { icon: <Clock size={16} />, text: "By Appointment Only" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.85)", fontSize: "14px" }}>
                  <span style={{ color: "#00A19A", display: "flex", alignItems: "center" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Floating Visual Container (Takes up 5/12 columns, balances layout) */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center" style={{ boxSizing: "border-box" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ position: "relative", width: "100%", maxWidth: "420px" }}
            >
              {/* Central Circle Display Element */}
              <div className="relative w-full aspect-square mx-auto">
                {/* Pulse rings behind central circle */}
                <div
                  className="absolute inset-6 rounded-full animate-pulse-ring"
                  style={{ background: "rgba(0, 107, 148, 0.25)" }}
                />
                <div
                  className="absolute inset-6 rounded-full animate-pulse-ring"
                  style={{ background: "rgba(0, 161, 154, 0.18)", animationDelay: "1.2s" }}
                />

                {/* Rotating ring around circle */}
                <div
                  className="absolute inset-2 rounded-full animate-spin-slow"
                  style={{ border: "1px dashed rgba(255,255,255,0.18)" }}
                />

                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  style={{
                    position: "absolute",
                    inset: "24px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    ...glassStyle,
                    backgroundColor: "rgba(0, 107, 148, 0.25)"
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ fontSize: "90px", lineHeight: "1" }}
                  >
                    🦷
                  </motion.div>
                  <div className="font-display" style={{ color: "#ffffff", fontWeight: "700", fontSize: "22px", marginTop: "12px" }}>DR AK Dental</div>
                  <div className="font-body" style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginTop: "2px" }}>& Aesthetic Clinic</div>
                </motion.div>

                {/* Orbiting Satellite Badges */}
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.15 }}
                  style={{ position: "absolute", top: "8px", right: "16px", width: "84px", height: "84px", borderRadius: "50%", display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center", justifyContent: "center", ...glassStyle, cursor: "pointer" }}
                >
                  <div style={{ fontSize: "18px" }}>✨</div>
                  <div className="font-body" style={{ color: "#ffffff", fontSize: "11px", fontWeight: "600", marginTop: "2px" }}>Whitening</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ scale: 1.15 }}
                  style={{ position: "absolute", bottom: "16px", left: "0px", width: "84px", height: "84px", borderRadius: "50%", display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center", justifyContent: "center", ...glassStyle, cursor: "pointer" }}
                >
                  <div style={{ fontSize: "18px" }}>🔬</div>
                  <div className="font-body" style={{ color: "#ffffff", fontSize: "11px", fontWeight: "600", marginTop: "2px" }}>Advanced</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  whileHover={{ scale: 1.15 }}
                  style={{ position: "absolute", top: "50%", right: "-24px", transform: "translateY(-50%)", width: "84px", height: "84px", borderRadius: "50%", display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center", justifyContent: "center", ...glassStyle, cursor: "pointer" }}
                >
                  <div style={{ fontSize: "18px" }}>💎</div>
                  <div className="font-body" style={{ color: "#ffffff", fontSize: "11px", fontWeight: "600", marginTop: "2px" }}>Veneers</div>
                </motion.div>
              </div>

              {/* Floating Star Reviews Panel */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.08, y: -12 }}
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "-32px",
                  borderRadius: "16px",
                  padding: "14px",
                  minWidth: "150px",
                  ...glassStyle,
                  cursor: "pointer"
                }}
              >
                <div style={{ display: "flex", gap: "2px", color: "#FBBF24" }}>
                  {[...Array(5)].map((_, s) => (
                    <motion.span
                      key={s}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: s * 0.15 }}
                      style={{ display: "inline-flex" }}
                    >
                      <Star size={13} fill="#FBBF24" stroke="none" />
                    </motion.span>
                  ))}
                </div>
                <div className="font-body" style={{ color: "#ffffff", fontSize: "12px", fontWeight: "600", marginTop: "6px" }}>Top Google Reviews</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Metrics Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
          style={{ marginTop: "72px", boxSizing: "border-box" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03, borderColor: "rgba(255,255,255,0.4)" }}
              style={{
                ...glassStyle,
                borderRadius: "20px",
                padding: "24px 16px",
                textAlign: "center",
                boxSizing: "border-box",
                cursor: "pointer"
              }}
            >
              <motion.div
                animate={{ y: [0, -4, 0], rotate: [0, 6, -6, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                style={{ fontSize: "28px", marginBottom: "8px", display: "inline-block" }}
              >
                {stat.icon}
              </motion.div>
              <div className="font-display" style={{ color: "#ffffff", fontWeight: "800", fontSize: "24px", lineHeight: "1.2" }}>{stat.value}</div>
              <div className="font-body" style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginTop: "4px" }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}