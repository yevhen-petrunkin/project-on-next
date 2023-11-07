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
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
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

    // THEME
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
