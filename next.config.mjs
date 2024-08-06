/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          },
          {
            protocol: 'http',
            hostname: '**',
          },
        ],
        domains : ["api.microlink.io",]
      },
};

export default nextConfig;
