// @ts-check

/** @satisfies {import('eslint').Linter.Config} */
const config = {
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/jsx-runtime',
    ],
};

module.exports = config;
