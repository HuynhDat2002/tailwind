/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Karla:['Karla', 'sans-serif']
      },
      colors:{
        'coffee':{
          50:'#e8d6d0',
          200:'#c89f94',
          400:'#a25f4b',
          600:'#744838'
        }
      },
      keyframes:{
        slideDown:{
          '0%':{transform:'translateY(-100%)'},
          '100%':{transform:'translateY(0)'}
        },
        slideUp:{
          '0%':{transform:'translateY(0)'},
          '100%':{transform:'translateY(-100%)'}
        }
      },
      animation:{
        slideDown:'slideDown 0.7s ease-in-out',
        slideUp:'slideUp 0.7s ease-in-out'
      }
    },
  },
  plugins: [],
}

