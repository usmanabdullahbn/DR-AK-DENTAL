"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  "Teeth Cleaning & Polishing",
  "Root Canal Therapy",
  "Dental Crowns & Bridges",
  "Tooth Extraction",
  "Teeth Whitening",
  "Braces & Orthodontics",
  "Dental Implants",
  "Veneers & Smile Makeover",
  "General Checkup",
];

export default function Appointment() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", date: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  // Common styling configuration for all inputs
  const inputBaseStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
    color: "#111827",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "all 200ms"
  };

  return (
    <section
      id="appointment"
      ref={sectionRef}
      style={{
        padding: "80px 0",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        className="animate-blob"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
          background: "radial-gradient(circle at 70% 50%, #006B94, transparent)"
        }}
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "20%",
          left: "5%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(204, 41, 54, 0.05)",
          filter: "blur(20px)",
          pointerEvents: "none"
        }}
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(0, 161, 154, 0.06)",
          filter: "blur(20px)",
          pointerEvents: "none"
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start" style={{ boxSizing: "border-box" }}>

          {/* Left Block - Informational Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(204, 41, 54, 0.1)", color: "#CC2936" }}
            >
              Book Appointment
            </motion.span>
            <h2
              className="font-black text-gray-900 mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.2" }}
            >
              Start Your Smile
              <br />
              <span className="gradient-text">Journey Today</span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 text-base md:text-lg mb-8"
              style={{ lineHeight: "1.6" }}
            >
              Schedule your appointment with DR AK Dental & Aesthetic Clinic.
              Our team will confirm your booking within a few hours.
            </motion.p>

            {/* Visual Action Link Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              {[
                { icon: "📞", label: "Phone", value: "0317-8488790", href: "tel:03178488790" },
                { icon: "💬", label: "WhatsApp", value: "Chat with us", href: "https://wa.me/923178488790" },
                { icon: "📘", label: "Facebook", value: "DR AK Dental", href: "https://www.facebook.com/61564450523227" },
                { icon: "📸", label: "Instagram", value: "@drakdental_clinic", href: "https://www.instagram.com/drakdental_clinic/" },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 8, borderColor: "rgba(0, 107, 148, 0.3)" }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px",
                    borderRadius: "16px",
                    border: "1px solid #f3f4f6",
                    textDecoration: "none",
                    backgroundColor: "#ffffff",
                    boxSizing: "border-box",
                    transition: "all 200ms"
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(0, 107, 148, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px"
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <div style={{ color: "#9ca3af", fontSize: "11px", fontWeight: "600", textTransform: "uppercase", marginBottom: "2px" }}>{item.label}</div>
                    <div style={{ color: "#111827", fontWeight: "700", fontSize: "15px" }}>{item.value}</div>
                  </div>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    style={{ marginLeft: "auto", color: "#006B94", fontWeight: "bold" }}
                  >
                    →
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* Operational Clinic Hours Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{
                backgroundColor: "rgba(0, 107, 148, 0.04)",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid rgba(0, 107, 148, 0.08)",
                boxSizing: "border-box"
              }}
            >
              <h4 className="font-bold text-gray-900 mb-3" style={{ display: "flex", alignItems: "center", gap: "8px", margin: "0 0 12px 0", fontSize: "16px" }}>
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🕐
                </motion.span>
                Working Hours
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { day: "Monday – Saturday", hours: "10:00 AM – 9:00 PM" },
                  { day: "Sunday", hours: "By Appointment" },
                ].map((item, i) => (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, x: -15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.0 + i * 0.1 }}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
                  >
                    <span style={{ color: "#4b5563", fontSize: "14px", flexGrow: 1 }}>{item.day}</span>
                    <span style={{ color: "#006B94", fontWeight: "600", fontSize: "14px" }}>{item.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Block - Booking Form Sheet Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  padding: "48px 24px",
                  boxShadow: "0 25px 50px -12px rgba(0, 107, 148, 0.08)",
                  border: "1px solid rgba(0, 107, 148, 0.08)",
                  textAlign: "center",
                  boxSizing: "border-box"
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ fontSize: "72px", marginBottom: "20px", display: "inline-block" }}
                >
                  ✅
                </motion.div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">
                  Appointment Requested!
                </h3>
                <p className="text-gray-500 mb-8 mx-auto" style={{ maxWidth: "340px", fontSize: "15px" }}>
                  Thank you, {form.name}! We'll confirm your appointment via WhatsApp or call within a few hours.
                </p>
                <motion.button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", message: "" }); }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    backgroundColor: "#006B94",
                    color: "#ffffff",
                    padding: "12px 28px",
                    borderRadius: "12px",
                    fontWeight: "600",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  🗓 Book Another
                </motion.button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  padding: "32px",
                  boxShadow: "0 25px 50px -12px rgba(0, 107, 148, 0.08)",
                  border: "1px solid rgba(0, 107, 148, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  boxSizing: "border-box"
                }}
              >
                <div>
                  <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-1">
                    Book Your Appointment
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm" style={{ margin: 0 }}>
                    Fill in the form and we'll be in touch shortly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <span style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#4b5563", marginBottom: "6px" }}>Full Name *</span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      style={inputBaseStyle}
                      placeholder="e.g. Ali Khan"
                      onFocus={(e) => e.currentTarget.style.borderColor = "#006B94"}
                      onBlur={(e) => e.currentTarget.style.borderColor = "#e5e7eb"}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <span style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#4b5563", marginBottom: "6px" }}>Phone Number *</span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      style={inputBaseStyle}
                      placeholder="e.g. 03001234567"
                      onFocus={(e) => e.currentTarget.style.borderColor = "#006B94"}
                      onBlur={(e) => e.currentTarget.style.borderColor = "#e5e7eb"}
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#4b5563", marginBottom: "6px" }}>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    style={inputBaseStyle}
                    placeholder="name@example.com"
                    onFocus={(e) => e.currentTarget.style.borderColor = "#006B94"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "#e5e7eb"}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#4b5563", marginBottom: "6px" }}>Treatment Required *</span>
                  <div style={{ position: "relative" }}>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputBaseStyle, paddingRight: "40px" }}
                    >
                      <option value="" disabled>Select a treatment service</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <div style={{ position: "absolute", top: "50%", right: "16px", transform: "translateY(-50%)", pointerEvents: "none", color: "#6b7280", fontSize: "12px" }}>▼</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#4b5563", marginBottom: "6px" }}>Preferred Appointment Date</span>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    style={inputBaseStyle}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <span style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#4b5563", marginBottom: "6px" }}>Additional Notes</span>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputBaseStyle, resize: "none" }}
                    placeholder="Describe your request or medical history notes here..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.0 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(0, 107, 148, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #006B94, #00898A)",
                    backgroundSize: "200% 200%",
                    animation: "gradient-shift 5s ease infinite",
                    color: "#ffffff",
                    padding: "14px",
                    borderRadius: "14px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    boxSizing: "border-box"
                  }}
                >
                  {loading ? (
                    <>
                      <div style={{ width: "18px", height: "18px", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#ffffff", borderRadius: "50%" }} className="animate-spin" />
                      <span>Booking...</span>
                    </>
                  ) : (
                    <>
                      <motion.span
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🗓
                      </motion.span>
                      <span>Confirm Appointment</span>
                    </>
                  )}
                </motion.button>

                <p style={{ textAlign: "center", color: "#9ca3af", fontSize: "12px", margin: 0 }}>
                  Or call us directly: <a href="tel:03178488790" style={{ color: "#006B94", fontWeight: "600", textDecoration: "none" }}>0317-8488790</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}