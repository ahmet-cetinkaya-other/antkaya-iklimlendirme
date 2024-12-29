/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/preline/preline.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: "#529FE9",
          50: "#F5F9FE",
          100: "#E3EFFB",
          200: "#BFDBF7",
          300: "#9AC7F2",
          400: "#76B3EE",
          500: "#529FE9",
          600: "#2083E3",
          700: "#1767B4",
          800: "#114A82",
          900: "#0A2E50",
          950: "#072037",
        },
        primary: {
          DEFAULT: "#F38310",
          50: "#FCDEBF",
          100: "#FBD4AB",
          200: "#F9BF85",
          300: "#F7AB5E",
          400: "#F59737",
          500: "#F38310",
          600: "#C1670A",
          700: "#8C4A07",
          800: "#562E04",
          900: "#492704",
          950: "#391F04",
        },
      },
      keyframes: {
        "ac-glow": {
          from: {
            filter: "drop-shadow(0 0 2px currentColor)",
            opacity: "0.7",
          },
          to: {
            filter: "drop-shadow(0 0 8px currentColor)",
            opacity: "1",
          },
        },
      },
      animation: {
        "ac-glow": "ac-glow 2s ease-in-out infinite alternate",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
  },
  plugins: [require("tailwindcss/nesting"), require("preline/plugin"), require("@tailwindcss/forms")],
};
