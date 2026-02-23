/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        superadminprimary: "#B48B4D",
        studprimary: "#b48c4c",
        "background-light": "#F9FAFB",
        "background-dark": "#1a1d2b",
        "sidebar-dark": "#1F2937",
        "lavender-light": "#f3f0ff",
        "lavender-dark": "#1e1b4b",
        "card-border": "rgba(180, 140, 76, 0.15)",
        // Premium Dark Theme Colors
        "premium-gold": "#B08D57",
        "deep-charcoal": "#0F0F12",
        "navy-charcoal": "#1A1B23",
        "gold-glow": "rgba(176, 141, 87, 0.15)",
        // HomeNew accent colors
        primary: "#ecb613",
        "accent-gold": "#ecb613",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 20px rgba(176, 141, 87, 0.15)",
        "inner-glass": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)",
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "2.5xl": "2.5rem",
      },
      backdropBlur: {
        13.3: "13.3px",
      },
      animation: {
        bounce: "bounce 2s infinite",
        "bounce-sm": "bounce 1.5s infinite",
        "accordion-down": "accordion-down 0.3s ease-in-out",
        "accordion-up": "accordion-up 0.3s ease-in-out",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "dark:bg-navy-charcoal",
    "dark:bg-navy-charcoal/80",
    "dark:bg-navy-charcoal/95",
    "dark:bg-background-dark",
  ],
};

export default config;
