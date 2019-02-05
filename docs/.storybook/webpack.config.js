const path = require('path');
const webpack = require('webpack');

module.exports = (storybookBaseConfig, configType) => {
  const DEV = configType === 'DEVELOPMENT';

  const libDirectory = path.resolve(__dirname, '../../');

  storybookBaseConfig.module.rules.push({
    test: /\.js$/,
    include: [
      path.resolve(libDirectory, 'src'),
    ],
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['module:metro-react-native-babel-preset'],
        plugins: ['react-native-web'],
      }
    }
  });

  storybookBaseConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.__REACT_NATIVE_DEBUG_ENABLED__': DEV
    })
  );

  storybookBaseConfig.resolve.extensions = ['.web.js', '.js', '.json', '.web.jsx', '.jsx'];

  storybookBaseConfig.resolve.alias = {
    'react-native$': 'react-native-web',
    'lottie-react-native': path.join(__dirname, '../../src/')
  };

  return storybookBaseConfig;
};
