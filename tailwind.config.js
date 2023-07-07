// @ts-check

/** @satisfies {import('tailwindcss').Config} */
const config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                purple: '#393061',
                pink: '#E95682',
                yellow: '#FFC32A',
                green: '#46B9AD',
                orange: '#E36131',
            },
            fontFamily: {
                ibm: ['var(--font-ibm)'],
            },
            ringWidth: {
                16: '16px',
            },
            aspectRatio: {
                '3/4': '3 / 4',
            },
        },
    },
    plugins: [],
};

module.exports = config;
