/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FAF8F4',
          100: '#F5F1EB',
          200: '#EDE5D8',
          300: '#E8DED1',
          400: '#DDD0BC',
          500: '#CDBFA7',
        },
        gold: {
          200: '#DEC88A',
          300: '#C6A96B',
          400: '#B8973A',
          500: '#A07C2F',
        },
        brown: {
          300: '#A89272',
          400: '#8B7355',
          500: '#6E5A3E',
          600: '#52422D',
        },
        ink: '#1E1E1E',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.75s ease-out forwards',
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.65s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-28px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
