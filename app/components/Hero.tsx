"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ChevronDown, Star, Shield, Clock, Phone } from "lucide-react";

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
    <span className="gradient-text-red typing-cursor">{text}</span>
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

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden scroll-mt-20 mt-20"
      style={{
        background: "linear-gradient(135deg, #002D40 0%, #004D6B 30%, #006B94 60%, #00898A 100%)",
      }}
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #00A19A, transparent)" }} />
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #CC2936, transparent)" }} />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #D4A843, transparent)" }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${8 + (i % 4) * 6}px`,
              height: `${8 + (i % 4) * 6}px`,
              top: `${(i * 17 + 5) % 90}%`,
              left: `${(i * 23 + 10) % 95}%`,
              background: i % 3 === 0
                ? "rgba(0,161,154,0.25)"
                : i % 3 === 1
                  ? "rgba(204,41,54,0.2)"
                  : "rgba(255,255,255,0.15)",
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-40 lg:pb-48">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8"
            >
              <span className="text-yellow-400">⭐</span>
              <span className="text-white/90 text-sm font-medium font-body">
                Karachi's Premium Dental Clinic
              </span>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Open Now</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6"
            >
              Your Perfect
              <br />
              Smile Starts
              <br />
              <TypingText />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/75 text-lg font-body leading-relaxed mb-10 max-w-lg"
            >
              DR AK Dental & Aesthetic Clinic delivers world-class dental care with
              cutting-edge technology, compassionate care, and stunning smile transformations —
              all in the heart of Gulistan-e-Johar, Karachi.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="#appointment"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-3 rounded-2xl font-display font-bold text-sm flex items-center justify-center gap-2 transition-all whitespace-nowrap"
              >
                <span>🗓</span>
                <span>Book Appointment</span>
              </motion.a>
              <motion.a
                href="https://wa.me/923178488790"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline px-8 py-3 rounded-2xl font-display font-bold text-sm flex items-center justify-center gap-2 transition-all whitespace-nowrap"
              >
                <span>💬</span>
                <span>WhatsApp Us</span>
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: <Shield size={16} />, text: "Certified Doctors" },
                { icon: <Star size={16} />, text: "5-Star Rated" },
                { icon: <Clock size={16} />, text: "Appointment Only" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/70 text-sm font-body">
                  <span className="text-dental-teal">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Floating cards */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Central image placeholder / dental visual */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Main circle */}
                <div className="absolute inset-8 rounded-full glass animate-pulse-glow flex items-center justify-center"
                  style={{ background: "rgba(0,107,148,0.3)" }}>
                  <div className="text-center">
                    <div className="text-[120px] leading-none">🦷</div>
                    <div className="text-white font-display font-bold text-xl mt-2">DR AK Dental</div>
                    <div className="text-white/60 font-body text-sm">& Aesthetic Clinic</div>
                  </div>
                </div>

                {/* Orbiting circles */}
                <div className="absolute top-4 right-8 w-20 h-20 rounded-full glass flex items-center justify-center animate-float">
                  <div className="text-center">
                    <div className="text-2xl">✨</div>
                    <div className="text-white text-xs font-body mt-1">Whitening</div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-4 w-20 h-20 rounded-full glass flex items-center justify-center"
                  style={{ animation: "float 5s ease-in-out 1s infinite" }}>
                  <div className="text-center">
                    <div className="text-2xl">🔬</div>
                    <div className="text-white text-xs font-body mt-1">Advanced</div>
                  </div>
                </div>
                <div className="absolute top-1/2 -right-4 w-20 h-20 rounded-full glass flex items-center justify-center"
                  style={{ animation: "float 7s ease-in-out 0.5s infinite" }}>
                  <div className="text-center">
                    <div className="text-2xl">💎</div>
                    <div className="text-white text-xs font-body mt-1">Veneers</div>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 -left-10 glass rounded-2xl p-4 min-w-[160px] lg:-left-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-display font-bold text-lg">2,000+</div>
                    <div className="text-white/60 text-xs font-body">Happy Patients</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/3 -left-6 glass rounded-2xl p-4 min-w-[150px]"
              >
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="text-white text-xs font-body mt-1">Google Reviews</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-white font-display font-bold text-2xl">{stat.value}</div>
              <div className="text-white/60 text-sm font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
      >
        <span className="text-xs font-body uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
