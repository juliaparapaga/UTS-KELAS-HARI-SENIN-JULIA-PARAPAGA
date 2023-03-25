/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','Explore.html','stats.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      screens:{
        '2xl' :'1320px',
      },
    },
  },
  plugins: [],
}
