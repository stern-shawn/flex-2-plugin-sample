module.exports = (config, { isProd, isDev, isTest }) => {
  /**
   * Customize the webpack by modifying the config object.
   * Consult https://webpack.js.org/configuration for more information
   */

  if (isDev) {
    config.devtool = 'cheap-module-source-map';
  }

  return config;
};
