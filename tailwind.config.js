/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        bgColor: '#efefef',
        headingColor: '#3d3d3d',
        textColor: '#7e7e7e'
      }
    },
  },
  plugins: [],
};

