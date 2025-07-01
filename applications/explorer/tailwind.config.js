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
  safelist: [
    // Button component color styles
    'bg-blue-500',
    'dark:bg-blue-400',
    'bg-red-500',
    'dark:bg-red-400',
    'border-blue-500',
    'dark:border-blue-400',
    'border-red-500',
    'dark:border-red-400',
    'text-blue-500',
    'dark:text-blue-400',
    'text-red-500',
    'dark:text-red-400',
    // Other static classes used with dynamic styles
    'text-white',
    'dark:text-white',
    'bg-transparent',
    'rounded-md',
    'opacity-50',
    'cursor-not-allowed',
  ],
  plugins: []
};
