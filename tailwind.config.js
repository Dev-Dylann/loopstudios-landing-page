/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata", "sans"],
        josefin: ["Josefin Sans", "sans"],
      },
      colors: {
        gray: {
          dark: "hsl(0, 0%, 55%)",
          darkTrans: "hsla(0, 0%, 55%, 0.6)",
          darker: "hsl(0, 0%, 41%)",
        },
        transBlack: "rgba(0, 0, 0, 0.8)",
        transWhite: "rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
