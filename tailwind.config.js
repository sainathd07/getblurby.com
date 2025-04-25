/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blurby: {
          primary: "#00ADB5",
          background: "#222831",
          card: "rgba(255,255,255,0.08)",
          secondary: "#393E46",
          success: "#2ecc71",
          error: "#ff6b6b",
          text: "#fff",
          textLight: "#e0e0e0"
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
