"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: "🪥",
    title: "Teeth Cleaning & Polishing",
    description: "Professional scaling and polishing to remove plaque, tartar, and stains — leaving your teeth brilliantly clean and healthy.",
    color: "#006B94",
    light: "#E8F4F8",
  },
  {
    icon: "🦷",
    title: "Root Canal Therapy & Fillings",
    description: "Pain-free root canal treatment and modern composite fillings to restore damaged teeth and relieve discomfort.",
    color: "#CC2936",
    light: "#FCE8EA",
  },
  {
    icon: "👑",
    title: "Dental Crowns & Bridges",
    description: "High-quality ceramic crowns and bridges that look and feel like natural teeth, restoring full function and beauty.",
    color: "#D4A843",
    light: "#FDF5E8",
  },
  {
    icon: "🔧",
    title: "Tooth Extractions",
    description: "Gentle and precise extractions, including surgical procedures for impacted wisdom teeth with minimal discomfort.",
    color: "#00A19A",
    light: "#E5F6F5",
  },
  {
    icon: "✨",
    title: "Teeth Whitening & Bleaching",
    description: "Advanced whitening treatments that brighten your smile by several shades in a single visit — safe and effective.",
    color: "#7B2FBE",
    light: "#F3E8FD",
  },
  {
    icon: "😁",
    title: "Braces & Orthodontics",
    description: "Traditional metal braces and modern clear aligner options to straighten your teeth and perfect your bite.",
    color: "#006B94",
    light: "#E8F4F8",
  },
  {
    icon: "🔩",
    title: "Dental Implants & Restoration",
    description: "Permanent titanium implants that look, feel, and function like natural teeth — the gold standard for tooth replacement.",
    color: "#CC2936",
    light: "#FCE8EA",
  },
  {
    icon: "💎",
    title: "Veneers & Smile Makeovers",
    description: "Ultra-thin porcelain veneers and complete smile design for a flawless Hollywood smile transformation.",
    color: "#D4A843",
    light: "#FDF5E8",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, #006B94 0%, transparent 50%), radial-gradient(circle at 75% 75%, #CC2936 0%, transparent 50%)"
        }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-dental-red/10 text-dental-red font-body font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
            Comprehensive <span className="gradient-text">Dental Treatments</span>
          </h2>
          <p className="text-gray-500 font-body text-lg max-w-2xl mx-auto">
            From preventive care to cosmetic transformations — we offer a full range of dental
            services tailored to your unique needs.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="service-card group relative bg-white rounded-3xl p-6 shadow-lg shadow-gray-100 border border-gray-100 cursor-pointer overflow-hidden"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}33)` }} />
              <div className="absolute inset-[1px] bg-white rounded-3xl -z-10 group-hover:opacity-95 transition-opacity" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: service.light }}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-gray-900 text-base mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 font-body text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold font-body transition-all duration-300 group-hover:gap-2"
                style={{ color: service.color }}>
                Learn more <span>→</span>
              </div>

              {/* Background decoration */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ background: service.color }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 font-body mb-6">
            Not sure which treatment you need? Our expert team will guide you.
          </p>
          <motion.a
            href="#appointment"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-2xl font-display font-bold text-base"
          >
            Schedule a Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
