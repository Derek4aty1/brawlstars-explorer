import textShadow from 'tailwindcss-textshadow';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'common': '#94d7f4',
        'rare': '#2edd1b',
        'super-rare': '#0087fa',
        'epic': '#b116ec',
        'mythic': '#ff0021',
        'legendary': '#fff11e',
        'ultra-legendary': '#e7f751',
      },
      fontFamily: {
        'lilita-one': 'Lilita One',
      },
      textShadow: {
        outline:
          '-1px -1px black, 0px -1px black, 1px -1px black, 1px 0px black, 1px 1px black, 0px 1px black, -1px 1px black, -1px 0px black, 0px 2.5px black',
      },
    },
  },
  plugins: [textShadow],
};

export default config;
