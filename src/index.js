import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { View } from 'react-native';
import bodymovin from 'bodymovin';

export default class Animation extends PureComponent {
  animationDOMNode = null;

  componentDidMount() {
    this.loadAnimation(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.source && nextProps.source && this.props.source.nm !== nextProps.source.nm) {
      this.loadAnimation(nextProps);
    }
  }

  loadAnimation = props => {
    if (this.anim) {
      this.anim.destroy();
    }

    this.anim = bodymovin.loadAnimation({
      container: this.animationDOMNode,
      animationData: props.source,
      renderer: 'svg',
      loop: props.loop || false,
      autoplay: true,
    });
  };

  setAnimationDOMNode = ref => (this.animationDOMNode = ReactDOM.findDOMNode(ref));

  render() {
    return <View style={this.props.style} ref={this.setAnimationDOMNode} />;
  }
}
