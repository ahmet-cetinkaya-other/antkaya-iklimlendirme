/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/preline/preline.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F38310",
        secondary: "#529FE9",
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
  },
  plugins: [require("tailwindcss/nesting"), require("preline/plugin"), require("@tailwindcss/forms")],
};
