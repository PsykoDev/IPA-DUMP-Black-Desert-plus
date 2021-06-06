var n,
  module17 = require('./17');

exports.UIManager = n;

(function (n) {
  var o = module17.Dimensions.get('window').width,
    u = module17.Dimensions.get('window').height,
    f = 0;

  n.imageSize = function (n) {
    return f * n;
  };

  n.imageSizeWithMax = function (n, t) {
    var o = f * n;
    return o < t ? o : t;
  };

  n.marginSizeWithMax = function (n, t) {
    var o = (u * n) / 100;
    return o < t ? o : t;
  };

  n.getWidth = function (n) {
    return n <= 1 ? Math.floor(o * n) : Math.floor(1 * u);
  };

  n.getHeight = function (n) {
    return n <= 1 ? Math.floor(u * n) : Math.floor(1 * u);
  };
})(n || (exports.UIManager = n = {}));
