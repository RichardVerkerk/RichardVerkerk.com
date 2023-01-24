/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"B612 Mono"'],
        pacifico: ['"Pacifico"'],
      },
      colors: {
        'primary': {
          DEFAULT: '#E9FF70',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FCFFEA',
          300: '#F6FFC2',
          400: '#EFFF99',
          500: '#E9FF70',
          600: '#E0FF38',
          700: '#D8FF00',
          800: '#A8C700',
          900: '#798F00'
        },
        'secondary': {
          DEFAULT: '#04122B',
          50: '#1458D3',
          100: '#1251C0',
          200: '#0E419B',
          300: '#0B3176',
          400: '#072250',
          500: '#04122B',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        },
      }
    },
    
  },
  plugins: [],
};
