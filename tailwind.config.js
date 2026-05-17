/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(56, 189, 248, 0.22)"
      }
    }
  },
  plugins: []
};
