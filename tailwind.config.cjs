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
        loading: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        reveal: 'reveal 0.3s ease-out',
        loading: 'loading 0.6s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
