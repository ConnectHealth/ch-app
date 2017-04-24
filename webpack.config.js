function buildConfig(env) {
  return require(`./config/webpack.${env || 'dev'}.js`)({ env });
}

module.exports = buildConfig;
