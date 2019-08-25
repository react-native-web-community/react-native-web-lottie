import React, {Component } from 'react';
import Animation from 'lottie-react-native';

import { storiesOf } from '@storybook/react';

// Gift animation by Jan Semler https://www.lottiefiles.com/u/141
storiesOf('Lottie', module)
  .add('basic', () => <Animation source={require('./assets/gift.json')} autoPlay />)
  .add('loop', () => <Animation source={require('./assets/gift.json')} loop autoPlay />);


class ReactReference extends Component {
  constructor(props) {
    super(props);
    this.animationRef = React.createRef();
  }
  render() {
    return <Animation ref={this.animationRef} source={require('./assets/gift.json')} />
  }
  componentDidMount() {
    setTimeout(() => {
      this.animationRef.current.play()
    }, 1000)
  }
}

storiesOf('Manual trigger', module)
  .add('React Ref', () => <ReactReference />);
