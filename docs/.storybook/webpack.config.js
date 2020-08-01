const path = require('path');
const webpack = require('webpack');

module.exports = ({config, mode}) => {
  const DEV = mode === 'DEVELOPMENT';

  const libDirectory = path.resolve(__dirname, '../../');

  config.module.rules.push({
    test: /\.js$/,
    include: [
      path.resolve(libDirectory, 'src'),
      path.resolve(libDirectory, 'docs'),
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

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.__REACT_NATIVE_DEBUG_ENABLED__': DEV
    })
  );

  config.resolve.extensions = ['.web.js', '.js', '.json', '.web.jsx', '.jsx'];

  config.resolve.alias = {
    'react-native$': 'react-native-web',
    'lottie-react-native': path.join(__dirname, '../../src/')
  };

  return config;
};
