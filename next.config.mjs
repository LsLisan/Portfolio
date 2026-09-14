const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/Portfolio' : '',
  assetPrefix: isProd ? '/Portfolio/' : '',
  images: { unoptimized: true }
};

export default nextConfig;