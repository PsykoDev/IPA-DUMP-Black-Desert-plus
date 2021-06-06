var module17 = require('./17');

exports.TransitionIOSSpec = {
  animation: 'spring',
  config: {
    stiffness: 1e3,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
var o = {
  animation: 'timing',
  config: {
    duration: 350,
    easing: module17.Easing.out(module17.Easing.poly(5)),
  },
};
exports.FadeInFromBottomAndroidSpec = o;
var t = {
  animation: 'timing',
  config: {
    duration: 150,
    easing: module17.Easing.in(module17.Easing.linear),
  },
};
exports.FadeOutToBottomAndroidSpec = t;
var s = {
  animation: 'timing',
  config: {
    duration: 425,
    easing: module17.Easing.bezier(0.35, 0.45, 0, 1),
  },
};
exports.RevealFromBottomAndroidSpec = s;
var c = {
  animation: 'timing',
  config: {
    duration: 400,
    easing: module17.Easing.bezier(0.35, 0.45, 0, 1),
  },
};
exports.ScaleFromCenterAndroidSpec = c;
