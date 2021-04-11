module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
      'openSans': ['Open Sans', 'sans-serif']
    },

    extend: {
      colors: {
        blue: {
          dark: 'hsl(243, 87%, 12%)',
          desatured: 'hsl(238, 22%, 44%)',
          bright: 'hsl(224, 93%, 58%)',
          cyan: 'hsl(170, 45%, 43%)'
        },
        gray: {
          lightGrayBlue: 'hsl(240, 75%, 98%)',
          light: 'hsl(0, 0%, 75%)',
        },
        white: '#ffffff',
      },

      screens: {
        'mobile': '375px',
        'desktop': '1024px',
      },

      maxWidth: {
        'container': '1440px',
      }
    },


  },
  variants: {
    extend: {},
  },
  plugins: [],
}
