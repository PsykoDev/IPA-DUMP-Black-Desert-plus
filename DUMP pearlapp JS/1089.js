exports.fromBottomToTopAndroid = function (t) {
  var o = t.current,
    s = t.inverted,
    p = t.layouts,
    u = module17.Animated.multiply,
    c = p.screen,
    l = u(
      o.progress.interpolate({
        inputRange: [0, 0.3, 0.9, 1],
        outputRange: [c.height, 0.7 * c.height, 0.1 * c.height, 0],
        extrapolate: 'clamp',
      }),
      s
    ),
    f = o.progress.interpolate({
      inputRange: [0, 0.36, 1],
      outputRange: [0, 0.1, 0.1],
    });
  return {
    cardStyle: {
      transform: [
        {
          translateY: l,
        },
      ],
    },
    overlayStyle: {
      opacity: f,
    },
  };
};

var module17 = require('./17');

var t = {
  open: {
    animation: 'timing',
    config: {
      duration: 250,
      easing: module17.Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
    },
  },
  close: {
    animation: 'timing',
    config: {
      duration: 150,
      easing: module17.Easing.bezier(0.2833, 0.31833, 0.48, 0.99),
    },
  },
};
exports.transitionSepcConfigIOS = t;
var o = {
  open: {
    animation: 'timing',
    config: {
      duration: 250,
      easing: module17.Easing.out(module17.Easing.poly(5)),
      useNativeDriver: true,
    },
  },
  close: {
    animation: 'timing',
    config: {
      duration: 150,
      easing: module17.Easing.bezier(0.2833, 0.4833, 0.66, 0.99),
      useNativeDriver: true,
    },
  },
};
exports.transitionSepcConfigAndroid = o;
