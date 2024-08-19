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
        'beach': "url('/bg-img.svg')",
        'sand': "url('/bg-sand.svg')"
      },

      colors: {
        'areia': '#F4E5CF',
        'dark-blue': '#002877',
        'light-blue': '#4C6290',
        'very-dark-blue': '#000462',
        'dark-red': '#ba0000',
        'white' : '#ffff'
      },

      fontFamily: {
        'super-ocean': '"super-ocean"',
        'alata': '"Alata"'
      },

      '.underline': {
        'textDecoration': 'underline',
        'text-decoration-color': 'dark-red'
      },

      fontSize: {
        plus: '163px',
        quarenta: '40px'
      },

      spacing: {
        900: '900px',
        525: '525px',
        70: '70px'
      },

      dropShadow: {
        '4xl': [
            '0 4px 3px rgba(0, 0, 0, 0.25)',
            '0 2px 2px rgba(0, 0, 0, 0.15)'
        ]
      }
    
  },
  plugins: [],
  }
}