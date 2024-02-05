/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
      images: {
        loader: 'akamai',
        path: '',
      },
      assetPrefix: './',
}

module.exports = nextConfig
