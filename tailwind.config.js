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
            backgroundImage: {
                'background-desktop': "url('/images/background-desktop.png')",
                'background-mobile': "url('/images/background-mobile.png')",
            },
            ringWidth: {
                16: '16px',
            },
        },
    },
    plugins: [],
};

module.exports = config;
