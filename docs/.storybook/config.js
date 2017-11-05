import { setOptions } from '@storybook/addon-options';
import { configure, addDecorator } from '@storybook/react';
import centered from './decorator-centered';

addDecorator(centered);

setOptions({
  name: 'Lottie',
  url: 'https://react-native-web-community.github.io/react-native-web-lottie',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  downPanelInRight: false
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
