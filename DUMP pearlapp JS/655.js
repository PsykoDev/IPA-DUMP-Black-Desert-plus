exports.isIphoneX = n;
exports.ifIphoneX = o;

exports.getStatusBarHeight = function (n) {
  return module17.Platform.select({
    ios: o(n ? 44 : 30, 20),
    android: module17.StatusBar.currentHeight,
    default: 0,
  });
};

exports.getBottomSpace = function () {
  return n() ? 34 : 0;
};

var module17 = require('./17');

function n() {
  var n = module17.Dimensions.get('window');
  return !('ios' !== module17.Platform.OS || module17.Platform.isPad || module17.Platform.isTVOS || (812 !== n.height && 812 !== n.width && 896 !== n.height && 896 !== n.width));
}

function o(t, o) {
  return n() ? t : o;
}
