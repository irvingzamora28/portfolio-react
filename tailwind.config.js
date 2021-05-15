module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          superlight: '#f5f7f4',
          aguacate: '#03ab00',
          light: '#b5dca1'
        },
        blue: {
          bottle: '#191d29',
          'bottle-light-500': '#4f5b80'
        }
      },
      screens: {
        "xs": "400px",
        "3xl": "1920px"
      },
      animation: {
        float: 'float 3s infinite',
        refloat: 'refloat 3s infinite',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
          '100%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
        },
        refloat: {
          '0%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
          '100%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
        },
      }
    },
  },
  variants: {
    extend: {},
    float: ['responsive'],
    animation: ['responsive'],
  },
  plugins: [],
}
