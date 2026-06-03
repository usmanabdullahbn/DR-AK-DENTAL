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

  return (
    <section id="appointment" ref={sectionRef} className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ background: "radial-gradient(circle at 70% 50%, #006B94, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-dental-red/10 text-dental-red font-body font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Book Appointment
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 mb-6">
              Start Your Smile
              <br />
              <span className="gradient-text">Journey Today</span>
            </h2>
            <p className="text-gray-500 font-body text-lg leading-relaxed mb-10">
              Schedule your appointment with DR AK Dental & Aesthetic Clinic.
              Our team will confirm your booking within a few hours.
            </p>

            {/* Contact options */}
            <div className="space-y-4 mb-10">
              {[
                { icon: "📞", label: "Phone", value: "0317-8488790", href: "tel:03178488790" },
                { icon: "💬", label: "WhatsApp", value: "Chat with us", href: "https://wa.me/923178488790" },
                { icon: "📘", label: "Facebook", value: "DR AK Dental", href: "https://www.facebook.com/61564450523227" },
                { icon: "📸", label: "Instagram", value: "@drakdental_clinic", href: "https://www.instagram.com/drakdental_clinic/" },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-dental-blue/30 hover:bg-dental-blue/5 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-dental-blue/10 flex items-center justify-center text-2xl group-hover:bg-dental-blue/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 font-body text-xs uppercase tracking-wide">{item.label}</div>
                    <div className="text-gray-900 font-display font-semibold">{item.value}</div>
                  </div>
                  <div className="ml-auto text-dental-blue opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="bg-dental-blue/5 rounded-2xl p-6 border border-dental-blue/10">
              <h4 className="font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
                🕐 Working Hours
              </h4>
              <div className="space-y-2">
                {[
                  { day: "Monday – Saturday", hours: "10:00 AM – 9:00 PM" },
                  { day: "Sunday", hours: "By Appointment" },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-gray-600 font-body text-sm">{item.day}</span>
                    <span className="text-dental-blue font-semibold font-body text-sm">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-3xl p-12 shadow-2xl shadow-dental-blue/10 border border-dental-blue/10 text-center"
              >
                <div className="text-8xl mb-6">✅</div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
                  Appointment Requested!
                </h3>
                <p className="text-gray-500 font-body mb-8">
                  Thank you, {form.name}! We'll confirm your appointment via WhatsApp or call within a few hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", message: "" }); }}
                  className="btn-primary px-8 py-3 rounded-xl font-display font-semibold transition-all"
                >
                  🗓 Book Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-2xl shadow-dental-blue/10 border border-dental-blue/10 space-y-5">
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
                  Book Your Appointment
                </h3>
                <p className="text-gray-400 font-body text-sm mb-6">
                  Fill in the form and we'll be in touch shortly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder=" "
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                    <label htmlFor="name" className="form-label">Full Name *</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder=" "
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <label htmlFor="email" className="form-label">Email Address</label>
                </div>

                <div className="form-group">
                  <select
                    name="service"
                    id="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="form-input appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <label htmlFor="service" className="form-label">
                    Treatment Required *
                  </label>
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={form.date}
                    onChange={handleChange}
                    className="form-input"
                    min={new Date().toISOString().split("T")[0]}
                  />
                  <label htmlFor="date" className="form-label">
                    Preferred Date
                  </label>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    placeholder=" "
                    value={form.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                  />
                  <label htmlFor="message" className="form-label">Additional Notes</label>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary py-4 rounded-2xl font-display font-bold text-lg flex items-center justify-center gap-3 transition-all"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Booking...</span>
                    </>
                  ) : (
                    <>
                      <span>🗓</span>
                      <span>Confirm Appointment</span>
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-400 font-body text-xs">
                  Or call us directly: <a href="tel:03178488790" className="text-dental-blue font-semibold">0317-8488790</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
