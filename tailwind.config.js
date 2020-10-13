module.exports = {
  future: {
    // defaultLineHeights: true,
    // standardFontWeights: true
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontWeight: {
      normal: '400',
      medium: '600',
      bold: '700',
    },
    extend: {
      fontFamily: {
        sans: ['ClearSans','sans-serif'],
      },
      colors: {
        't2u-blue': {
          lighter: '#0094de',
          light: '#0072bb',
          default: '#0068a8',
          dark: '#00498e',
          darker: '#003971',
        },
        't2u-subjects': {
          business: '#00498e',
          economics: '#822f66',
          psychology: '#cd680d',
          sociology: '#3f3f8c',
          geography: '#2f8338',
          politics: '#0d7f5a'
        }
      }
    },
  },
  variants: {},
  plugins: []
}
