/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'neutralSilver' : '#F5F7FA',
      'neutralDGrey' : '#4D4D4D',
      'brandPrimary' : '#407BFF',
      'brandSecondary' : '#90CAF9',
      'neutralGrey' : '#717171',
      'white' : 'FFFFFF'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

