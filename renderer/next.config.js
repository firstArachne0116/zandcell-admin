/* eslint-disable no-param-reassign */
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withImages(
  withCSS({
    async exportPathMap() {
      return {
        '/home': { page: '/' },
        '/new': { page: '/add-new', query: { projectId: '' } },
        // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
        // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
        // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
      };
    },
    publicRuntimeConfig: {
      localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
    },
    webpack: (config) => {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.js?$/,
        exclude: [/node_modules/],
        loader: 'eslint-loader',
        options: {
          quiet: true,
        }
      });
      config.node = {
        fs: 'empty'
      };
      Object.assign(config, {
        target: 'electron-renderer',
      });
      return config;
    },
  })
);
