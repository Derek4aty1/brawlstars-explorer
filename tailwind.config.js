/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lilita-one': 'Lilita One'
      },
      textShadow: {
        'outline': '1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black',
      }
    }
  },
  plugins: [
    require('tailwindcss-textshadow') // Add this if you installed the plugin
  ]
}
