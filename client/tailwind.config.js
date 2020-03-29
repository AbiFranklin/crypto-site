const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '500': '#bdc2ca'
        },
        'cyan-blue': '#161e2e',
        'blue-highlight': '#1c2535',
        'black-111': '#111',
        'black-222': '#222',
        'blue-mid': '#202c42',
        'bet-green': '#00c74d',
        'bet-black': '#2d3035',
        'user-bet': '#212c3e'
      }
    }
  }
}
