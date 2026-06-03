"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const galleryItems = [
  { emoji: "✨", label: "Teeth Whitening", desc: "4 shades brighter in one session", color: "#006B94" },
  { emoji: "😁", label: "Smile Makeover", desc: "Complete transformation", color: "#CC2936" },
  { emoji: "💎", label: "Veneers", desc: "Porcelain perfection", color: "#D4A843" },
  { emoji: "🦷", label: "Implants", desc: "Permanent restoration", color: "#00A19A" },
  { emoji: "😊", label: "Orthodontics", desc: "Perfect alignment", color: "#7B2FBE" },
  { emoji: "👑", label: "Crowns", desc: "Natural-looking caps", color: "#006B94" },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block bg-dental-gold/20 text-dental-gold font-body font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Before & After
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
            Smile <span className="gradient-text">Transformations</span>
          </h2>
          <p className="text-gray-500 font-body text-lg max-w-2xl mx-auto">
            Real results from real patients — witness the stunning transformations
            our clinic delivers every day.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setActive(i)}
              className="relative rounded-3xl overflow-hidden cursor-pointer group h-full flex flex-col"
              style={{
                aspectRatio: i === 0 || i === 5 ? "1/1.3" : "1/1",
                background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
                border: `2px solid ${item.color}20`,
              }}
            >
              {/* Visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                <div className="text-7xl group-hover:scale-125 transition-transform duration-500">
                  {item.emoji}
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-gray-900 text-lg">{item.label}</div>
                  <div className="text-gray-500 font-body text-sm">{item.desc}</div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: `${item.color}CC` }}>
                <div className="text-center">
                  <div className="text-5xl mb-3">{item.emoji}</div>
                  <div className="text-white font-display font-bold text-xl">{item.label}</div>
                  <div className="text-white/80 font-body text-sm mt-1">{item.desc}</div>
                  <div className="mt-4 px-4 py-2 border border-white/40 rounded-full text-white text-xs font-body">
                    View Details
                  </div>
                </div>
              </div>

              {/* Corner label */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full font-body font-semibold text-xs text-white"
                style={{ background: item.color }}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl"
              >
                <div className="text-9xl mb-6">{galleryItems[active].emoji}</div>
                <h3 className="font-display font-black text-3xl text-gray-900 mb-3">
                  {galleryItems[active].label}
                </h3>
                <p className="text-gray-500 font-body mb-2">{galleryItems[active].desc}</p>
                <p className="text-gray-400 font-body text-sm mb-8">
                  Delivered by DR AK Dental & Aesthetic Clinic with precision and care.
                </p>
                <div className="flex gap-3">
                  <a href="#appointment"
                    onClick={() => setActive(null)}
                    className="flex-1 btn-primary py-3 rounded-xl font-display font-semibold text-sm">
                    Book This Treatment
                  </a>
                  <button
                    onClick={() => setActive(null)}
                    className="px-5 py-3 rounded-xl border-2 border-gray-200 font-body text-gray-500 hover:bg-gray-50 transition-colors text-sm">
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 font-body mb-4">
            Want to see more? Follow our Instagram for real patient transformations.
          </p>
          <a
            href="https://www.instagram.com/drakdental_clinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-display font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            📸 @drakdental_clinic
          </a>
        </motion.div>
      </div>
    </section>
  );
}
