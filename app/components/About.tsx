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
    <section id="about" ref={sectionRef} className="py-20 md:py-28 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5"
        style={{ background: "radial-gradient(circle at right, #006B94, transparent)" }} />

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block bg-dental-blue/10 text-dental-blue font-body font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full">
            About Us
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
            Welcome to <span className="gradient-text">DR AK Dental</span>
            <br />& Aesthetic Clinic
          </h2>
          <p className="text-gray-500 font-body text-lg mx-auto">
            Your perfect smile is just a visit away. We combine advanced dental technology
            with <br /> compassionate care for outstanding results.
          </p>
        </motion.div>

        <div
          style={{ margin: "0 24px" }}

          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[650px] mb-20">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-dental-blue/20"
              style={{ background: "linear-gradient(135deg, #004D6B, #006B94, #00898A)", minHeight: "400px" }}>
              <div className="p-10 text-white h-full flex flex-col justify-center">
                <div className="text-8xl mb-6 text-center">🦷</div>
                <h3 className="font-display font-black text-3xl text-center mb-4">
                  DR AK Dental
                  <br />& Aesthetic Clinic
                </h3>
                <p className="text-white/80 font-body text-center text-sm leading-relaxed">
                  "Your perfect Smile is just a visit away"
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">⭐⭐⭐⭐⭐</div>
                    <div className="text-white/60 text-xs">Google Reviews</div>
                  </div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full border border-white/10" />
            </div>

            {/* Floating achievement card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-0 lg:bottom-4 right-0 lg:right-4 lg:-bottom-8 lg:-right-8 bg-white rounded-2xl p-5 shadow-xl shadow-dental-blue/15 min-w-[180px] z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-dental-blue/10 flex items-center justify-center text-2xl">📍</div>
                <div>
                  <div className="font-display font-bold text-gray-900 text-sm">Gulistan-e-Johar</div>
                  <div className="text-gray-500 text-xs font-body">Karachi, Sindh</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center h-full"
          >
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
              Comprehensive Dental Care You Can Trust
            </h3>
            <p className="text-gray-500 font-body leading-relaxed mb-6">
              At DR AK Dental & Aesthetic Clinic, we provide comprehensive dental care with a gentle
              touch. Located in Gulistan-e-Johar, Karachi, our clinic is equipped with the latest
              technology to deliver exceptional results.
            </p>
            <p className="text-gray-500 font-body leading-relaxed mb-8">
              From routine cleanings to complete smile makeovers, our experienced team is dedicated
              to helping you achieve the smile you've always dreamed of — comfortably and affordably.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feat, i) => (
                <motion.div
                  key={feat}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-dental-blue/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-dental-blue" />
                  </div>
                  <span className="text-gray-700 font-body text-sm">{feat}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary mt-8"
              style={{ background: "linear-gradient(135deg, #006B94, #004D6B)" }}
            >
              <span>Explore Our Services</span>
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          style={{ margin: "0 24px" }}

          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl p-8 text-center shadow-lg shadow-dental-blue/5 border border-dental-blue/10"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="font-display font-black text-4xl text-dental-blue mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-500 font-body text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
