/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8edf4',
          100: '#c6d1e4',
          200: '#a4b5d4',
          300: '#6f8db8',
          400: '#3a659c',
          500: '#003d80',
          600: '#002f66',
          700: '#002147',
          800: '#001833',
          900: '#000f1f',
        },
      },
    },
  },
  plugins: [],
};
