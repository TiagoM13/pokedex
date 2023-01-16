/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        orange: "url('./src/assets/background/background_orange.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
