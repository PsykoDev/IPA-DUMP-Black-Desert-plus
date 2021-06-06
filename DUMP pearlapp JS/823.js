var module17 = require('./17'),
  module17 = module17.Platform.select({
    ios: module17.NativeModules.LRDRCTSimpleToast,
    android: require('./17').ToastAndroid,
  }),
  T = {
    SHORT: module17.SHORT,
    LONG: module17.LONG,
    TOP: module17.TOP,
    BOTTOM: module17.BOTTOM,
    CENTER: module17.CENTER,
    show: function (o, T, O) {
      module17.show(o, undefined === T ? module17.SHORT : T, O);
    },
    showWithGravity: function (o, T, O, s) {
      module17.showWithGravity(o, undefined === T ? module17.SHORT : T, O, s);
    },
  };

exports.default = T;
