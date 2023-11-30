import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      tn: '460px',
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',

      smOnly: { max: '599px' },
      mdOnly: { min: '600px', max: '1023px' },
      notXl: { max: '1279px' },
      mediaHover: { raw: '(hover: hover)' },
    },

    colors: {
      primary: {
        DEFAULT: '#0B6D93',
        100: '#A0E7FF',
        200: '#7FC7F1',
        300: '#5EA8D1',
        400: '#3C8AB2',
        500: '#126F96',
        600: '#0B6D93', // Main color
        700: '#004468', // Main opacity and overlay color
        800: '#00395B',
        900: '#02183F',
      },
      blue: {
        300: '#56A0C9',
        400: '#00BFFF',
        500: '#00A1F2',
        600: '#3B70A3',
        700: '#1369A9',
      },
      green: {
        500: '#008958',
        600: '#007550',
        700: '#006151',
        800: '#004651',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      black: {
        DEFAULT: '#001C27',
      },
      danger: '#AC4246',
      transparent: 'transparent',
    },

    //BOX SHADOW
    boxShadow: {
      'shadow-1': '0px 0px 16px rgba(2, 24, 63, 0.5)',
      'shadow-2': '0px 0px 32px rgba(2, 24, 63, 0.6)',
      'shadow-3': '0px 0px 64px rgba(2, 24, 63, 0.7)',
      'shadow-4': '0px 0px 120px rgba(2, 24, 63, 0.9)',
      'shadow-5': '0px 0px 240px rgb(2, 24, 63)',
    },

    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          md: '32px',
          xl: '20px',
        },
      },
    },
    plugins: [],
  },
};
export default config;
