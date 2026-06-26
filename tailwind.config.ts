import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lovea: {
          black: "#0A0A0A",
          white: "#FFFFFF",
          rose: "#E8B4C8",
          "rose-light": "#F5D5E3",
          gold: "#C8A882",
        },
        princess: {
          pink: "#F2A7C3",
          "pink-light": "#FDE8F2",
          "pink-dark": "#D4709A",
          cream: "#FFF5F0",
          gold: "#D4AF7A",
        },
        babies: {
          mint: "#B8D8C8",
          "mint-dark": "#7DBFB2",
          "mint-light": "#E8F5F0",
          beige: "#F5EDE0",
          brown: "#8B6F5E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: {
        "ultra-wide": "0.4em",
        "extra-wide": "0.25em",
        wide: "0.15em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "curtain-in": "curtainIn 0.8s cubic-bezier(0.77,0,0.18,1) forwards",
        "curtain-out": "curtainOut 0.8s cubic-bezier(0.77,0,0.18,1) forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        curtainIn: {
          from: { transform: "scaleX(0)", transformOrigin: "left" },
          to: { transform: "scaleX(1)", transformOrigin: "left" },
        },
        curtainOut: {
          from: { transform: "scaleX(1)", transformOrigin: "right" },
          to: { transform: "scaleX(0)", transformOrigin: "right" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
