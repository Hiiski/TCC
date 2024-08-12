/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Background': "url('./public/backGroundImage.png')"
      },
      colors: {
        'sand': '#F4E5CF',
      },
  },
  plugins: [],
  }
}