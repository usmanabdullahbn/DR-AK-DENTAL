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
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-28 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-dental-blue/10 text-dental-blue font-body font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <p className="text-gray-500 font-body text-lg max-w-2xl mx-auto">
            Real stories from real patients who transformed their smiles with DR AK Dental.
          </p>
        </motion.div>

        {/* Main testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-10 shadow-xl shadow-dental-blue/10 border border-dental-blue/5 text-center relative"
              >
                {/* Quote icon */}
                <div className="text-7xl text-dental-blue/10 font-serif leading-none mb-4">"</div>

                {/* Review */}
                <p className="text-gray-700 font-body text-xl leading-relaxed mb-8 italic">
                  {testimonials[index].review}
                </p>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>

                {/* Patient info */}
                <div className="flex items-center justify-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-white text-lg"
                    style={{ background: `linear-gradient(135deg, ${testimonials[index].color}, ${testimonials[index].color}88)` }}
                  >
                    {testimonials[index].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-display font-bold text-gray-900 text-lg">
                      {testimonials[index].name}
                    </div>
                    <div className="text-gray-400 font-body text-sm">
                      {testimonials[index].role}
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-6 right-8 w-12 h-12 rounded-full opacity-10"
                  style={{ background: testimonials[index].color }} />
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border-2 border-dental-blue/30 flex items-center justify-center text-dental-blue hover:bg-dental-blue hover:text-white transition-all"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === index ? "w-8 h-3 bg-dental-blue" : "w-3 h-3 bg-dental-blue/20"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border-2 border-dental-blue/30 flex items-center justify-center text-dental-blue hover:bg-dental-blue hover:text-white transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mini testimonial cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12"
        >
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-2xl p-4 text-center transition-all duration-300 ${
                i === index
                  ? "bg-dental-blue text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border border-gray-100 hover:border-dental-blue/30"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-2 ${
                  i === index ? "bg-white/20 text-white" : ""
                }`}
                style={i !== index ? { background: `${t.color}20`, color: t.color } : {}}
              >
                {t.avatar}
              </div>
              <div className={`text-xs font-semibold font-body truncate ${i === index ? "text-white" : "text-gray-700"}`}>
                {t.name.split(" ")[0]}
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
