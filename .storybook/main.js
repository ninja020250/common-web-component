const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    '../stories/*.stories.mdx',
    '../stories/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsConfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': toPath('node_modules/@emotion/react'),
      'emotion-theming': toPath('node_modules/@emotion/react'),
    };
    return config;
  },
};
