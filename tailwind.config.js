/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      pedding: {
        DEFAULT: ".5rem",
        sm: "1rem"
      }
    },
    extend: {
      colors: {
        verde: {
          200: '#ACEF75',
          300: '#91EE77',
          400: '#17E880',
          700: '#2E482C',
          800: '#16281F',
          900: '#0F1C15',
          950: '#030504',
        },
      }
    }
  },
  plugins: [],
};