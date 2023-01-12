/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors : {
        'primary-head' : '#202226',
        'primary-bg' : '#d2bf8c',
        'primary-img-bg' : '#2F343E',
        'primary-cat-bg' : '#F5F8FB',
        'primary-post-cat' : '#4278D9'
      },
      fontFamily : {
        'sans-serif' : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
