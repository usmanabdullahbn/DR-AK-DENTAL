import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          blue: "#006B94",
          "blue-dark": "#004D6B",
          "blue-light": "#0088BB",
          red: "#CC2936",
          "red-dark": "#A01F2B",
          teal: "#00A19A",
          gold: "#D4A843",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,107,148,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0,107,148,0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #004D6B 0%, #006B94 50%, #00A19A 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(0,107,148,0.1) 0%, rgba(0,161,154,0.1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
