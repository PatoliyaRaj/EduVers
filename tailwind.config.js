/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    extend: {
      colors: {
        "superadminprimary": "#B48B4D",
        "studprimary": "#b48c4c",
        "background-light": "#F9FAFB",
        "background-dark": "#111827",
        "sidebar-dark": "#1F2937",
        "lavender-light": "#f3f0ff",
        "lavender-dark": "#1e1b4b",
        "card-border": "rgba(180, 140, 76, 0.15)",
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
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
