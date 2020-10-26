module.exports = {
  presets: [require('tailwindcss/defaultConfig')],
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
        'social': {
          email: '#69757c',
          facebook: '#4a66a4',
          linkedin: '#4374b4',
          messenger: '#007fff',
          pinterest: '#BD081C',
          twitter: '#00aeef',
          whatsapp: '#67c15e',
          youtube: '#e33228'
        },
        't2u-blue': {
          lighter: '#0094de',
          light: '#0072bb',
          default: '#0068a8',
          dark: '#00498e',
          darker: '#003971',
        },
        't2u-bley': {
          'xx-light': '#f9fafb',
          'x-light': '#f3f5f8',
          'light': 'red',
          'base': '#edeff2',
          'dark': '#e2e6e8',
          'x-dark': 'red',
          'xx-dark': 'red',
        },
        't2u-pink': {
          'xx-light': 'red',
          'x-light': '#ed028c',
          'light': 'red',
          'base': '#ba006d',
          'dark': 'red',
          'x-dark': '#88004f',
          'xx-dark': 'red',
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
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
}
