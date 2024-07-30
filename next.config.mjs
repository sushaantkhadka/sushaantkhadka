// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(mp3|wav|ogg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/media/',
            publicPath: '/_next/static/media/',
          },
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  


