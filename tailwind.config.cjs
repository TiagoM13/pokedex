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
      keyframes: {
        reveal: {
          '0%': { opacity: 0, transform: 'translate(0, 40%)' },
          '100%': { opacity: 1, transform: 'translate(0, 0)' },
        },
      },
      animation: {
        reveal: 'reveal 0.5s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
