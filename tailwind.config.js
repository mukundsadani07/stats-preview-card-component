/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        VeryDarkBlue: 'hsl(233, 47%, 7%)',
        DarkDesaturatedBlue:'hsl(244, 38%, 16%)',
        SoftViolet: 'hsl(277, 64%, 61%)',
        SlightlyTransparentWhite: 'hsla(0, 0%, 100%, 0.75)',
        SlightlyMoreTransparentWhite: 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily:{
        Inter: ['Inter', 'sans-serif'],
        LexendDeca:['Lexend Deca', 'sans-serif']
      }
    },
  },
  plugins: [],
}
