/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile': '500px'
      },
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
      // box-shadow: 0px 4px 48px 0px #0000000F;

      boxShadow: {
        chatHover: '0px 4px 48px 0px #0000000F',
        cardshadow:
          '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },

      letterSpacing: {
        'tight-custom': '-0.12px',
        'tight-custom2': '-0.26px',
        'tight-custom3': '-0.24px',
        'tight-custom4': '-1%',
      },
    },
  },
  plugins: [],
};
