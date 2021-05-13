module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          superlight: '#f5f7f4',
          light: '#b5dca1'
        }
      },
      screens: {
        "xs": "400px",
        "3xl": "1920px"
      },
      
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
