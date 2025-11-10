/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#5C4B9B',
          DEFAULT: '#6B5BA8',
          light: '#8A7BBF',
          lighter: '#9A8BCF',
        },
      },
    },
  },
  plugins: [],
};
