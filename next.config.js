module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // reactStrictMode: true,
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false;
  //   }
  //   return config;
  // },
  reactStrictMode: false,
  // https://github.com/vercel/next.js/issues/21079
  // Remove this workaround whenever the issue is fixed
  images: {
    loader: "akamai",
    path: "/",
  },
  output: 'export'
};
