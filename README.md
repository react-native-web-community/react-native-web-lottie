# react-native-web-lottie

> React Native for Web implementation of Lottie

## Getting started

`$ npm install react-native-web-lottie --save`

Alias the package in your webpack config:

```js
resolve: {
    alias: {
        'react-native': 'react-native-web',
        ...
        'lottie-react-native': 'react-native-web-lottie',
    }
}
```

If you are using [Expo](https://docs.expo.dev/guides/customizing-webpack/), you can simply do

```js
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.resolve.alias['lottie-react-native'] = 'react-native-web-lottie';

  return config;
};
```

## Usage

See [Lottie's docs](https://airbnb.io/lottie/#/react-native).

## Examples

See the [storybook](https://react-native-web-community.github.io/react-native-web-lottie/storybook).

## Contributing

PRs are welcome!

The following important features are not implemented:

- `progress` prop (partially implemented using Animated.Value)
- imperative API
