module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',

      // TailwindCSS
      white: '#fff',
      black: '#000',
      gray: {
        200: '#E5E7EB',
        300: '#D1D5DB',
        500: '#6B7280',
        600: '#4B5563',
        700: '#4a5568'
      },
      indigo: {
        200: '#c3dafe',
        500: '#667eea',
        700: '#4c51bf',
      },
      green: {
        700: '#047857',
      },
      red: {
        800: '#991B1B'
      },

      // platformOS
      page: '#f3f4f6',
      panel: '#fff',
      frame: '#e2e8f0',
      content: {
        DEFAULT: '#374151',
        inverted: '#fff',
        sidenote: '#4a586d',
      },
      interaction: {
        DEFAULT: '#1d4ed8',
        hover: '#3466e3',
        disabled: '#bfdbfe',
      },
      danger: {
        DEFAULT: '#b91c1c',
        hover: '#ca3a31',
        disabled: '#fecaca',
      },
      confirmation: {
        DEFAULT: '#047857',
        hover: '#098f69',
        disabled: '#bbddd3',
      },
      warning: {
        DEFAULT: '#f3b14e',
        hover: '#ffbe5b',
        disabled: '#ffe9c8',
      },
    },

    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      10.5: '2.55rem',
      11: '2.75rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      18: '4.5rem',
      24: '6rem',
      32: '8rem',
      36: '9rem',
      48: '12rem',
      56: '14rem',
      44: '11rem',
      60: '15rem',
      64: '16rem',
      96: '24rem',
      100: '25rem'
    },

    extend: {
      boxShadow: {
        dropdown: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -7px 10px -5px rgba(0, 0, 0, 0.06)',
      },

      fontSize: {
        '2xs': '.5rem',
      },

      lineHeight: {
        '11': '2.75rem',
      },

      minWidth: {
        '44': '11rem',
        '80': '20rem',
      },

      zIndex: {
        '-10': '-10',
      },
    },

    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.frame'),
    }),

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
      },
    },

    ringColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.interaction.hover'),
    }),

    ringOpacity: (theme) => ({
      ...theme('opacity'),
      DEFAULT: 1,
    }),
  },

  variants: {
    borderWidth: ['responsive', 'hover', 'last'],
    margin: ['responsive', 'first', 'last'],
    padding: ['responsive', 'last'],
    ringWidth: ['focus-visible'],
  },

  plugins: [require('@tailwindcss/forms'), require('tailwindcss-rtl')],

  corePlugins: {
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    divideWidth: false,
    backgroundAttachment: false,
    backgroundClip: false,
    fontVariantNumeric: false,
    overscrollBehavior: false,
    placeItems: false,
    placeSelf: false,
    scale: false,
    skew: false,
    stroke: false,
    strokeWidth: false,
    userSelect: false,
  },

  darkMode: false,

  purge: {
    content: ['**/*.liquid', './src/js/**/*.js'],
    options: {
      keyframes: true,
    },
  },
};
