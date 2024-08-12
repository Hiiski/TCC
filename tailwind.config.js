/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        '57': '.57',
      },

      backgroundImage: {
        'beach': "url('/public/bg-img (3).png')"
      },
      colors: {
        'sand': '#F3EEE8',
        'dark-blue': '#002877',
        'dark-red': '#ba0000',
      },

      fontFamily: {
        'super-ocean': '"super-ocean"',
        'alata': '"Alata"'
      },

      '.underline': {
        'textDecoration': 'underline',
        'text-decoration-color': 'dark-red',
      },

      fontSize: {
        plus: '163px',
      },

      spacing: {
        900: '900px',
      }
    
  },
  plugins: [],
  }
}