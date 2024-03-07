/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: "/:all*(svg|jpg|png)",
            locale: false,
            headers: [
              {
                key: "Cache-Control",
                value: "public, max-age=60",
              },
            ],
          },
        ];
      },
      experimental: {
        appDir: false,
        serverComponentsExternalPackages: ["mongoose"],
      },
      images: {
        domains: ['lh3.googleusercontent.com'],
        loader: 'akamai',
        path: '',
        unoptimized: true 
      },
      webpack(config) {
        config.experiments = {
          ...config.experiments,
          topLevelAwait: true,
        }
        return config
      },
      // assetPrefix: './',
}

module.exports = nextConfig
