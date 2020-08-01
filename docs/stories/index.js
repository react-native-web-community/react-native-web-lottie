import React from 'react';
import Animation from 'lottie-react-native';

import { storiesOf } from '@storybook/react';

// Gift animation by Jan Semler https://www.lottiefiles.com/u/141
storiesOf('Lottie', module)
  .add('basic', () => <Animation source={require('./assets/gift.json')} autoPlay />)
  .add('loop', () => <Animation source={require('./assets/gift.json')} loop autoPlay />)
  .add('onAnimationFinish', () => <Animation source={require('./assets/gift.json')} autoPlay onAnimationFinish={() => alert('Finished!')}/>);
