/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app/**/*.{tsx,ts,jsx,js}',
    'assets/**/*.svg',
    'components/**/*.{tsx,ts,jsx,js}',
    'constants/**/*.{tsx,ts,jsx,js}',
    'elements/**/*.{tsx,ts,jsx,js}',
    'methods/**/*.{tsx,ts,jsx,js}',
    'types/**/*.{tsx,ts,jsx,js}',
    '../../libraries/shared/src/**/*.{tsx,ts,jsx,js}'
  ],
  presets: [
    require('nativewind/preset')
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
