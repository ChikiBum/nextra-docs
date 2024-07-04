const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

// module.exports = withNextra()


const nextConfig = {
  images: {
    unoptimized: true,
  }
};

module.exports = {
  ...withNextra(),
  ...nextConfig,
};