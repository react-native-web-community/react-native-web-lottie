import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { View } from 'react-native';
import lottie from 'lottie-web';

class Animation extends PureComponent {
  animationDOMNode = null;

  componentDidMount() {
    this.loadAnimation(this.props);

    if (typeof this.props.progress === 'object' && this.props.progress._listeners) {
      this.props.progress.addListener((progress) => {
        const { value } = progress;
        let frame = value / (1 / this.anim.getDuration(true));
        this.anim.goToAndStop(frame, true);
      });
    }
  }

  componentWillUnmount() {
    if (typeof this.props.progress === 'object' && this.props.progress._listeners) {
      this.props.progress.removeAllListeners();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.source && nextProps.source && (this.props.source.nm !== nextProps.source.nm || this.props.source.uri !== nextProps.source.uri)) {
      this.loadAnimation(nextProps);
    }
    if(this.props.speed !== nextProps.speed){
      this.anim.setSpeed(nextProps.speed);
    }
  }

  loadAnimation = (props) => {
    if (this.anim) {
      this.anim.destroy();
    }

    this.anim = lottie.loadAnimation({
      container: this.animationDOMNode,
      renderer: 'svg',
      loop: props.loop || false,
      autoplay: props.autoPlay,
      rendererSettings: props.rendererSettings || {},
      ...(props.source.uri && typeof props.source.uri === "string" ? {path:props.source.uri} : {animationData: props.source})
    });

    if(props.speed !== undefined){
      this.anim.setSpeed(props.speed)
    }

    if (props.onAnimationFinish) {
      this.anim.addEventListener('complete', props.onAnimationFinish);
    }
  };

  setAnimationDOMNode = (ref) => (this.animationDOMNode = ReactDOM.findDOMNode(ref));

  play = (...frames) => {
    if (!this.anim) {
      return;
    }

    this.anim.playSegments(frames, true);
  };

  reset = () => {
    if (!this.anim) {
      return;
    }

    this.anim.stop();
  };

  render() {
    return <View style={this.props.style} ref={this.setAnimationDOMNode} />;
  }
}

export default React.forwardRef((props, ref) => (
  <Animation {...props} ref={typeof ref == 'function' ? (c) => ref(c && c.anim) : ref} />
));
