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
    <section id="why-us" ref={sectionRef} className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #002D40 0%, #004D6B 50%, #006B94 100%)" }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />

      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-white/80 font-body font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            The DR AK Difference
          </h2>
          <p className="text-white/60 font-body text-lg max-w-2xl mx-auto">
            We're committed to delivering exceptional dental care with state-of-the-art
            technology and a patient-first approach.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ margin: "0 24px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group glass rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:bg-white/15 h-full flex flex-col"
            >
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3">
                {reason.title}
              </h3>
              <p className="text-white/60 font-body text-sm leading-relaxed flex-grow">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ margin: "0 24px" }}
          className="mt-16 glass rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display font-bold text-white text-2xl mb-2">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-white/60 font-body">
              📍 Shop no. G-2, Al Mussawir Tower, Block 12, Gulistan-e-Johar, Karachi
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="tel:03178488790"
              whileHover={{ scale: 1.05 }}
              className="btn-primary px-6 py-3 rounded-xl font-display font-bold text-sm flex items-center gap-2"
            >
              📞 Call Now
            </motion.a>
            <motion.a
              href="https://wa.me/923178488790"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="btn-outline px-6 py-3 rounded-xl font-display font-bold text-sm flex items-center gap-2"
            >
              💬 WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
