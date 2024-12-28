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
    },
  },
  plugins: [require("tailwindcss/nesting"), require("preline/plugin"), require("@tailwindcss/forms")],
};
