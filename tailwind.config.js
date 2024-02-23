/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-dark": "#1E1E1E",
        "gray-light": "#26292F",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
