declare module 'react-native-web-lottie' {
  import { Animated, StyleProp, ViewStyle } from 'react-native';
  /**
   * Serialized animation as generated from After Effects
   */
  export interface AnimationObject {
    v: string;
    fr: number;
    ip: number;
    op: number;
    w: number;
    h: number;
    nm?: string;
    ddd?: number;
    assets: any[];
    layers: any[];
    markers?: any[];
  }

  export interface BaseRendererConfig {
    imagePreserveAspectRatio?: string;
    className?: string;
  }

  export interface FilterSizeConfig {
    width: string;
    height: string;
    x: string;
    y: string;
  }

  export interface SVGRendererConfig extends BaseRendererConfig {
    title?: string;
    description?: string;
    preserveAspectRatio?: string;
    progressiveLoad?: boolean;
    hideOnTransparent?: boolean;
    viewBoxOnly?: boolean;
    viewBoxSize?: string;
    focusable?: boolean;
    filterSize?: FilterSizeConfig;
  }

  export interface AnimatedLottieViewProps {
    /**
     * The source of animation. Can be referenced as a local asset by a string, or remotely
     * with an object with a `uri` property, or it can be an actual JS object of an
     * animation, obtained (for example) with something like
     * `require('../path/to/animation.json')`
     */
    source: string | AnimationObject | { uri: string };

    progress?: Animated.Value;

    /**
     * A boolean flag indicating whether or not the animation should loop.
     */
    loop?: boolean;

    /**
     * Style attributes for the view, as expected in a standard `View`:
     * http://facebook.github.io/react-native/releases/0.39/docs/view.html#style
     * CAVEAT: border styling is not supported.
     */
    style?: StyleProp<ViewStyle>;

    /**
     * A boolean flag indicating whether or not the animation should start automatically when
     * mounted. This only affects the imperative API.
     */
    autoPlay?: boolean;

    /**
     * The speed the animation will progress. This only affects the imperative API. The
     * default value is 1.
     */
    speed?: number;

    /**
     * Check out lottie docs : https://airbnb.io/lottie/#/web?id=other-loading-options
     */
    rendererSettings?: SVGRendererConfig;

    /**
     * A callback function which will be called when animation is finished. Note that this
     * callback will be called only when `loop` is set to false.
     */
    onAnimationFinish?: (isCancelled: boolean) => void;

    /**
     * A string to identify the component during testing
     */
    testID?: string;
  }

  class AnimatedLottieView extends React.Component<AnimatedLottieViewProps, {}> {
    play(startFrame?: number, endFrame?: number): void;
    reset(): void;
  }

  export default AnimatedLottieView;
}
