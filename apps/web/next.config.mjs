/** @type {import('next').NextConfig} */

const { DOCS_URL} = process.env

const nextConfig = {
    async rewrites() {
        return [
            /**
             * Rewrites for Multi Zones
             */
            {
                source: '/docs',
                destination: `${DOCS_URL}/docs`,
            },
            {
                source: '/docs/:path*',
                destination: `${DOCS_URL}/docs/:path*`,
            },
        ]
    },
};

export default nextConfig;
