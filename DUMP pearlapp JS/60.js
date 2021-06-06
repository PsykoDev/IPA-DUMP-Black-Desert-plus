require('./86');

var module6 = require('./6'),
  module61 = require('./61'),
  module64 = require('./64'),
  module87 = require('./87'),
  s = module61.roundToNearestPixel(0.4);

if (0 === s) s = 1 / module61.get();
var u = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};
module.exports = {
  hairlineWidth: s,
  absoluteFill: u,
  absoluteFillObject: u,
  compose: function (t, o) {
    return null != t && null != o ? [t, o] : null != t ? t : o;
  },
  flatten: module87,
  setStyleAttributePreprocessor: function (o, n) {
    var s;
    if (true === module64[o]) s = {};
    else {
      if ('object' != typeof module64[o]) return void console.error(o + ' is not a valid style attribute');
      s = module64[o];
    }
    module64[o] = module6({}, s, {
      process: n,
    });
  },
  create: function (t) {
    return t;
  },
};
