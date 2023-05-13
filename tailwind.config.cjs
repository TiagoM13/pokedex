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
        orange:
          'linear-gradient(to right, #EE7B56, #DD613A, #EA5525, #E7430F,  #D43300)',
      },
      keyframes: {
        modal: {
          '0%': { opacity: 0, transform: 'translate(-50%, 0%)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%)' },
        },
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
        modal: 'modal 0.6s ease-out',
      },
    },
    screens: {
      'screen-5x': { max: '1100px' },
      'screen-4x': { max: '1024px' },
      'screen-3x': { max: '940px' },
      'screen-2x': { max: '780px' },
      'screen-1x': { max: '512px' },
      'screen-xs': { max: '380px' },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
