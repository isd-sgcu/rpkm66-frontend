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
                purple: {
                    300: '#6B3BF1',
                    400: '#393061',
                },
                pink: {
                    400: '#E95682',
                    600: '#C03786',
                    800: '#A45BD0',
                },
                yellow: '#FFC32A',
                green: '#46B9AD',
                orange: '#E36131',
            },
            fontFamily: {
                ibm: ['var(--font-ibm)'],
            },
            ringWidth: {
                16: '16px',
                24: '24px',
                32: '32px',
            },
            aspectRatio: {
                '3/4': '3 / 4',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '3rem',
                '6xl': '4.5rem',
            },
            maxWidth: {
                xxs: '14rem',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};

module.exports = config;
