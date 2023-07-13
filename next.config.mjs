// @ts-check

/** @satisfies {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['storage.googleapis.com'],
        unoptimized: true,
    },
};

export default nextConfig;
