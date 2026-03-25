import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        bg: "#030305",
        surface: "#0B0B12",
        "surface-2": "#12121C",
        hover: "#1A1A28",
        border: "#1C1C2A",
        // Text
        "text-primary": "#F0F0F5",
        "text-secondary": "#9595AD",
        "text-muted": "#5E5E78",
        // Brand palette
        accent: "#00E59B",       // mint — primary CTA
        "accent-dim": "#007A52",
        mint: "#00E59B",
        cyan: "#1CC8C8",
        blue: "#4B8BE0",
        purple: "#8B5CF6",
        // Semantic
        error: "#EF4444",
        warning: "#F5A623",
        success: "#00E59B",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #00E59B 0%, #1CC8C8 35%, #4B8BE0 65%, #8B5CF6 100%)",
        "gradient-subtle": "linear-gradient(135deg, rgba(0,229,155,0.12) 0%, rgba(75,139,224,0.12) 50%, rgba(139,92,246,0.12) 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(0,229,155,0.06) 0%, rgba(139,92,246,0.06) 100%)",
      },
      fontFamily: {
        display: ["Instrument Serif", "Georgia", "serif"],
        body: ["Satoshi", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "slide-in": "slideIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
