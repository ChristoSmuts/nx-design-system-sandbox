import type { StorybookConfig } from '@storybook/angular';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: async (config) => {
    if (!config.module) {
      config.module = {};
    }
    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                ["@tailwindcss/postcss", {}],
              ],
            },
          },
        },
      ],
      include: [path.resolve(__dirname, "../src"), path.resolve(__dirname, "../.storybook"), /node_modules/],
    })

    config.resolve?.extensions?.push(".css")

    return config
  },
};

export default config;
