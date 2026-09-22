/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "K2D, sans-serif",
    },

    screens: {
      xxsm: "500px",

      xsm: "550px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      "md-2": "850px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "2.2xl": "1650px",

      "2.5xl": "1770px",

      "3xl": "1900px",
    },

    extend: {},
  },
  plugins: [],
};
