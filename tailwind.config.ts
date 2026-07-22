import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        content: "1700px",
      },
      colors: {
        bg: "#04060B",
        card: "#080D16",
        border: "#0F172A",
        blue: {
          DEFAULT: "#00A8FF",
        },
        red: {
          DEFAULT: "#FF003C",
        },
        green: {
          DEFAULT: "#00FF66",
        },
        white: {
          DEFAULT: "#F8FAFC",
        },
        gray: {
          DEFAULT: "#94A3B8",
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0,168,255,0.35)",
        "glow-red": "0 0 20px rgba(255,0,60,0.35)",
        "glow-green": "0 0 20px rgba(0,255,102,0.35)",
        "glow-blue-lg": "0 0 60px rgba(0,168,255,0.25)",
        "glow-red-lg": "0 0 60px rgba(255,0,60,0.25)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spinSlow 20s linear infinite",
        "spin-slower": "spinSlow 32s linear infinite reverse",
        marquee: "marquee 30s linear infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};

export default config;
