import React, { Component } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { Switch, matchPath, withRouter } from 'react-router-native';
import PropTypes from 'prop-types';

const SCREEN = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
};

export const DEFAULT_ANIMATION_SETUP = {
  type: 'spring',
  init: {
    fromValue: 0,
    toValue: 1,
    duration: 250,
    useNativeDriver: true
  }
};

export const ANIMATE_SLIDE = {
  previous: anim => ({
    position: 'absolute',
    transform: [
      {
        translateX: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -SCREEN.width]
        })
      }
    ]
  }),
  new: anim => ({
    position: 'absolute',
    transform: [
      {
        translateX: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [SCREEN.width, 0]
        })
      }
    ]
  }),
  backPrevious: anim => ({
    position: 'absolute',
    transform: [
      {
        translateX: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, SCREEN.width]
        })
      }
    ]
  }),
  backNew: anim => ({
    position: 'absolute',
    transform: [
      {
        translateX: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [-SCREEN.width, 0]
        })
      }
    ]
  })
};

export const ANIMATE_FADE = {
  previous: anim => ({
    opacity: anim.interpolate({
      inputRange: [0, 0.75],
      outputRange: [1, 0]
    })
  }),
  new: anim => ({
    opacity: anim.interpolate({
      inputRange: [0, 0.75],
      outputRange: [0, 1]
    })
  }),
  backPrevious: anim => ({
    opacity: anim.interpolate({
      inputRange: [0, 0.75],
      outputRange: [1, 0]
    })
  }),
  backNew: anim => ({
    opacity: anim.interpolate({
      inputRange: [0, 0.75],
      outputRange: [0, 1]
    })
  })
};

class AnimatedSwitch extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
    animationType: PropTypes.shape({
      new: PropTypes.func.isRequired,
      previous: PropTypes.func.isRequired,
      backNew: PropTypes.func.isRequired,
      backPrevious: PropTypes.func.isRequired
    }),
    animationSetup: PropTypes.shape({
      type: PropTypes.string.isRequired,
      init: PropTypes.object.isRequired
    })
  };

  static defaultProps = {
    animationType: ANIMATE_SLIDE,
    animationSetup: DEFAULT_ANIMATION_SETUP
  };

  state = {
    anim: new Animated.Value(0),
    animating: false,

    // we're going to save the previous matching route so we can render
    // it when it doesnt' actually match the location anymore
    previousRoute: null
  };

  componentDidUpdate(prevProps) {
    // console.log('componentDidUpdate prevProps', prevProps);
    // console.log('  new props', this.props);
    // Pull out the location and the nested routes
    const needsAnimation =
      prevProps.location.pathname !== this.props.location.pathname;

    const { location, children: routes } = prevProps;
    const { history, animationType } = this.props;

    const previousRoute = this.getPreviousRoute(location.pathname, routes);

    if (needsAnimation && previousRoute) {
      // we were rendering, but now we're heading back up to the parent,
      // so we need to save the previousRoute so we can render it
      // while the animation is playing

      let newAnimationStyle = animationType.new(this.state.anim);
      let prevAnimationStyle = animationType.previous(this.state.anim);

      if (history.action === 'POP' || history.action === 'REPLACE') {
        newAnimationStyle = animationType.backNew(this.state.anim);
        prevAnimationStyle = animationType.backPrevious(this.state.anim);
      }

      this.setState(
        {
          previousRoute,
          animating: true,
          newAnimationStyle,
          prevAnimationStyle
        },
        () => {
          // console.log('animation setup=', this.props.animationSetup);
          switch (this.props.animationSetup.type) {
            case 'decay':
              Animated.decay(
                this.state.anim,
                this.props.animationSetup.init
              ).start(this.finishAnimating);
              break;
            case 'timing':
              Animated.timing(
                this.state.anim,
                this.props.animationSetup.init
              ).start(this.finishAnimating);
              break;
            case 'spring':
            default:
              Animated.spring(
                this.state.anim,
                this.props.animationSetup.init
              ).start(this.finishAnimating);
          }
        }
      );
    }
  }

  getPreviousRoute(prevPath, routes) {
    return routes.find(route => {
      // console.log('checking route', prevPath, route.props);
      const match = matchPath(prevPath, route.props);
      // console.log('match', match);
      if (this.props.exact) {
        return match != null && match.isExact;
      } else {
        return match != null;
      }
    });
  }

  finishAnimating = () => {
    this.setState({
      animating: false,
      previousRoute: null
    });
  };

  render() {
    // console.log('AnimatedSwitch props on render=', this.props);
    // console.log(' state on render=', this.state);

    const { children } = this.props;
    const { previousRoute } = this.state;

    if (this.state.animating) {
      return (
        <View style={styles.view}>
          <Animated.View key="newView" style={this.state.newAnimationStyle}>
            <Switch>{children}</Switch>
          </Animated.View>

          <Animated.View key="prevView" style={this.state.prevAnimationStyle}>
            <Switch>
              {React.createElement(previousRoute.props.component)}
            </Switch>
          </Animated.View>
        </View>
      );
    } else {
      return (
        <View style={styles.view}>
          <Animated.View key="newView" style={{ position: 'absolute' }}>
            <Switch>{children}</Switch>
          </Animated.View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default withRouter(AnimatedSwitch);
