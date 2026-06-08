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
    <section
      id="services"
      ref={sectionRef}
      style={{
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff"
      }}
    >
      {/* Background Ambient Gradients */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.02,
          pointerEvents: "none",
          backgroundImage: "radial-gradient(circle at 25% 25%, #006B94 0%, transparent 50%), radial-gradient(circle at 75% 75%, #CC2936 0%, transparent 50%)"
        }} 
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header Section with defined bottom margin */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span 
            className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{ backgroundColor: "rgba(204, 41, 54, 0.1)", color: "#CC2936" }}
          >
            Our Services
          </span>
          <h2 
            className="font-black text-gray-900 mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.2" }}
          >
            Comprehensive <span className="gradient-text">Dental Treatments</span>
          </h2>
          <p className="text-gray-500 text-lg mx-auto" style={{marginTop:"12px"}}>
            From preventive care to cosmetic transformations — we offer a full range of <br /> dental
            services tailored to your unique needs.
          </p>
        </motion.div>

        {/* Responsive Services Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          style={{ marginBottom: "56px" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
              style={{
                position: "relative",
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                padding: "28px", 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
                border: "1px solid #f3f4f6",
                cursor: "pointer",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxSizing: "border-box"
              }}
            >
              {/* Gradient border on hover */}
              <div 
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "24px",
                  opacity: 0,
                  transition: "opacity 300ms",
                  zIndex: 1,
                  background: `linear-gradient(135deg, ${service.color}, ${service.color}33)`,
                  pointerEvents: "none"
                }} 
                className="group-hover:opacity-100"
              />
              <div 
                style={{
                  position: "absolute",
                  inset: "1px",
                  backgroundColor: "#ffffff",
                  borderRadius: "23px",
                  zIndex: 2,
                  transition: "opacity 300ms",
                  pointerEvents: "none"
                }} 
                className="group-hover:opacity-95"
              />

              {/* Card Content Elements Wrapped securely over hover layers */}
              <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
                
                {/* Icon Wrapper */}
                <div 
                  style={{ 
                    width: "56px", 
                    height: "56px", 
                    borderRadius: "16px", 
                    display: "flex", 
                    // itemsCenter: "center", 
                    justifyContent: "center", 
                    fontSize: "28px", 
                    marginBottom: "20px",
                    backgroundColor: service.light,
                    alignItems: "center",
                    transition: "transform 300ms"
                  }}
                  className="group-hover:scale-110"
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-base mb-3 leading-tight">
                  {service.title}
                </h3>
                
                {/* Description - ensuring proper margin separation */}
                <p className="text-gray-500 text-sm leading-relaxed" style={{ flexGrow: 1, marginBottom: "20px" }}>
                  {service.description}
                </p>

                {/* Arrow Action Link */}
                <div 
                  className="flex items-center gap-1 text-xs font-semibold transition-all duration-300 group-hover:gap-2"
                  style={{ color: service.color, marginTop: "auto" }}
                >
                  Learn more <span>→</span>
                </div>
              </div>

              {/* Background structural decoration circle */}
              <div 
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  right: "-24px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  opacity: 0.05,
                  transition: "opacity 300ms",
                  background: service.color,
                  zIndex: 2
                }} 
                className="group-hover:opacity-10"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section with balanced vertical gaps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ textAlign: "center" }}
        >
          <p className="text-gray-500 mb-5" style={{ fontSize: "1rem" }}>
            Not sure which treatment you need? Our expert team will guide you.
          </p>
          <motion.a
            href="#appointment"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-8 py-4 rounded-2xl font-display font-bold text-base flex items-center justify-center gap-2"
          >
            <span>🗓</span>
            <span>Schedule a Free Consultation</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}