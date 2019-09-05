module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.ts(x?)$/,
    use: [
      {
        loader: 'ts-loader',
      },
      {
        loader: 'react-docgen-typescript-loader',
      },
    ],
  });

  config.module.rules.push({
    test: /\.stories\.ts(x?)$/,
    use: [
      {
        loader: '@storybook/addon-storysource/loader',
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
