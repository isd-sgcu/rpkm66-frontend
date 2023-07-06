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
            boxShadow: {
                'custom': '0px 4px 4px 51px rgba(70, 44, 113, 0.25)',
            },
            shadowCustom: {
                'box-shadow': '0px 1px 1px 14px rgba(25, 25, 74, 0.25)',
            },
        },
    },
    plugins: [],
};

module.exports = config;
