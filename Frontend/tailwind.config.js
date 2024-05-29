/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matte-black': '#131313',
        'aesthetic-white' : '#F5F7F8',
        'text-gray' : '#b9b9b9',
        'yellow-main' : '#edab03',
      },
      fontFamily: {
        'Main' : ['Lora']
      }
    },
  },
  plugins: [],
}

