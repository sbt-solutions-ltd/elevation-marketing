import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        display: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ink: "#1d1d1f",
        brand: {
          body: "#f3f3f3",
          "dark-blue": "#01437D",
          "light-blue": "#3D7DB1",
          "footer-border": "#ffffff",
        },
        muted: "#404040",
        line: "#f7f7f7",
      },
      borderRadius: {
        pill: "55px",
        card: "2rem",
      },
      flex: {
        // Tailwind only ships flex-1; add flex-2 so `lg:flex-2` resolves.
        2: "2 2 0%",
      },
    },
  },
  plugins: [typography],
};
