
/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Add this line
  theme: { 
    extend: {
      backdropBlur: {
        '13.3': '13.3px',
      },
    } 
  },
  plugins: [],
};

export default config;
