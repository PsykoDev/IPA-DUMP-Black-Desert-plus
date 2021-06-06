var module654 = require('./654'),
  module657 = require('./657'),
  module658 = require('./658'),
  module17 = require('./17'),
  S = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: module658.TransitionIOSSpec,
      close: module658.TransitionIOSSpec,
    },
    cardStyleInterpolator: module654.forHorizontalIOS,
    headerStyleInterpolator: module657.forFade,
  };

exports.SlideFromRightIOS = S;
var c = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: module658.TransitionIOSSpec,
    close: module658.TransitionIOSSpec,
  },
  cardStyleInterpolator: module654.forVerticalIOS,
  headerStyleInterpolator: module657.forFade,
};
exports.ModalSlideFromBottomIOS = c;
var p = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: module658.TransitionIOSSpec,
    close: module658.TransitionIOSSpec,
  },
  cardStyleInterpolator: module654.forModalPresentationIOS,
  headerStyleInterpolator: module657.forFade,
};
exports.ModalPresentationIOS = p;
var s = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: module658.FadeInFromBottomAndroidSpec,
    close: module658.FadeOutToBottomAndroidSpec,
  },
  cardStyleInterpolator: module654.forFadeFromBottomAndroid,
  headerStyleInterpolator: module657.forFade,
};
exports.FadeFromBottomAndroid = s;
var F = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: module658.RevealFromBottomAndroidSpec,
    close: module658.RevealFromBottomAndroidSpec,
  },
  cardStyleInterpolator: module654.forRevealFromBottomAndroid,
  headerStyleInterpolator: module657.forFade,
};
exports.RevealFromBottomAndroid = F;
var I = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: module658.ScaleFromCenterAndroidSpec,
    close: module658.ScaleFromCenterAndroidSpec,
  },
  cardStyleInterpolator: module654.forScaleFromCenterAndroid,
  headerStyleInterpolator: module657.forFade,
};
exports.ScaleFromCenterAndroid = I;
var f = module17.Platform.select({
  ios: S,
  default: 'android' === module17.Platform.OS && module17.Platform.Version >= 28 ? F : s,
});
exports.DefaultTransition = f;
var v = module17.Platform.select({
  ios: c,
  default: f,
});
exports.ModalTransition = v;
