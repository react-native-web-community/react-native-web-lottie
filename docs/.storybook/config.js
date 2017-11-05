import { setOptions } from '@storybook/addon-options';
import { configure, addDecorator } from '@storybook/react';
import centered from './decorator-centered';

addDecorator(centered);

setOptions({
  name: 'Name',
  url: 'https://react-native-web-community.github.io/react-native-web-name',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  downPanelInRight: false
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
