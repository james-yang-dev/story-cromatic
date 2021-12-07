/* eslint-disable */
const path = require('path');

const CracoAlias = require('craco-alias');
const resolve = (arg) => path.resolve(__dirname, arg);

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  webpack: {
    alias: {
      '@src': resolve('src'),
    },
    configure: {
      entry: './src/index.tsx',
    },
  },
};
