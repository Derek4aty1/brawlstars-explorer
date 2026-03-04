/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // Temporary
        minimumCacheTTL: 2678400, // 31 days
        formats: ['image/webp']
    }
};

export default nextConfig;
