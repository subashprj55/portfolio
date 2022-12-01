/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        scall: "scall 5s ease-in-out infinite",
        html: "html 2s linear forwards",
        css: "css 2s linear forwards",
        js: "js 2s linear forwards",
        react: "react 2s linear forwards",
        my: "my 0.5s linear forwards",
      },
      keyframes: {
        scall: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
        },
        html: {
          "100%": { width: "93%" },
        },
        css: {
          "100%": { width: "88%" },
        },
        js: {
          "100%": { width: "70%" },
        },
        react: {
          "100%": { width: "65%" },
        },
        my: {
          "0%": { transform: "translate(50px,50px)" },
          "100%": { transform: "translate(0px,0px)" },
        },
      },
    },
  },
  plugins: [],
};
