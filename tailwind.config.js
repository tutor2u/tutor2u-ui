const colors = require('tailwindcss/colors')

module.exports = {
  presets: [require('tailwindcss/defaultConfig')],
  future: {
    defaultLineHeights: true,
    standardFontWeights: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ['ClearSans','sans-serif'],
    },
    fontWeight: {
      normal: '400',
      medium: '600',
      bold: '700',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: colors.coolGray,
      bley: colors.blueGray,
      red: colors.red,
      pink: colors.pink,
      blue: colors.lightBlue,
      yellow: colors.amber,
      green: colors.emerald
    },
    extend: {
      width: {
        '5/18': '27.7777777778%',
        '13/18': '72.2222222222%'
      },
      colors: {
        social: {
          email: '#69757c',
          facebook: '#4a66a4',
          linkedin: '#4374b4',
          messenger: '#007fff',
          pinterest: '#BD081C',
          twitter: '#00aeef',
          whatsapp: '#67c15e',
          youtube: '#e33228'
        },
        subjects: {
          business: '#00498e',
          economics: '#822f66',
          psychology: '#cd680d',
          sociology: '#3f3f8c',
          geography: '#2f8338',
          politics: '#0d7f5a'
        },
        't2u-pink': {
          darker: '#440930',
          dark: '#880150',
          DEFAULT: '#ba006d',
          light: '#a10b5f',
          lighter: '#d1127c'
        },
        't2u-blue': {
          dark: '#01498e',
          DEFAULT: '#0068a8',
          light: '#0073bb',
          lighter: '#0094de'
        },        
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
