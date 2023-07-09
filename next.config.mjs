// @ts-check

/** @satisfies {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['storage.googleapis.com'],
    },
};

export default nextConfig;
