import { light } from '@fortawesome/fontawesome-svg-core/import.macro';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a090b',
        secondary: '#212529',
        beige: '#a6877c',
        lightBeige: '#d9c3b0',
      },
      fontFamily: {
        heading: ['Nova Flat', 'cursive'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

