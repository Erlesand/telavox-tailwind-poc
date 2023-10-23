/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      base: "var(--color-text-base)",
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      green: "#2dc659",
      red: "#fd6234",

      "grass-green": "#2DC659",
      "happy-red": "#FD6234",
      "ink-spot": "#2C3551",
      "all-clear": "#FFFFFF",
      "jet-black": "#000000",
      gray: {
        100: "#F3F3F3",
        200: "#E5E5E5",
        300: "#D8D8D8",
        400: "#ADADAD",
        500: "#727272",
        600: "#474747",
        800: "#242424",
        900: "#161616",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
