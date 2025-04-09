/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F26922',
        secondary: '#3F3F46',
        accent1: ' #E4E4E7',
        accent2: '#71717A',
        accent3: '#F4F4F5',
      },
      fontFamily: {
        Onest: ['Onest', 'sans-serif'],
        Bebas: ['Bebas Neue', 'sans-serif'],
      },
      borderRadius: {
        B_ru: '6px',
        M_ru: '10px',
      },
      // border: 1px solid #E4E4E7
      // background: #71717A;

      letterSpacing: {
        'tight-custom': '-0.12px',
        'tight-custom2': '-0.26px',
      },
    },
  },
  plugins: [],
};
