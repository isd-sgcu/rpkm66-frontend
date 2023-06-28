/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: "#393061",
        pink: "#E95682",
        yellow: "#FFC32A",
        green: "#46B9AD",
        orange: "#E36131"
      },
      fontFamily: {
        ibm: ['var(--font-ibm)'],
      }
    },
  },
  plugins: [],
}
