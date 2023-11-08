/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Noto+Sans+TC': ['Noto+Sans+TC', 'sans-serif'],
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'gray-100': '##C1C1C1',
      'gray-200': '#B9B9B9',
      'gray-300': '#A9A9A9',
      'gray-400': '#999',
      'title-light': '#FAFAFA',
      'title-dark': '#222',
      'primary-100': '#e8e8ff',
      'primary-200': '#ccccff',
      'primary-300': '#3e2390',
      primary: '#4527A0',
      'primary-600': '#351e7b',
      secondary: '#26A69A',
      warning: '#FFB300',
      error: '#EC407A',
      background: '#E3E3E3',
    },
  },
  plugins: [],
};
