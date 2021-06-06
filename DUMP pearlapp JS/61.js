var module7 = require('./7'),
  module62 = require('./62'),
  o = (function () {
    function o() {
      module7(this, o);
    }

    module8(o, null, [
      {
        key: 'get',
        value: function () {
          return module62.get('window').scale;
        },
      },
      {
        key: 'getFontScale',
        value: function () {
          return module62.get('window').fontScale || o.get();
        },
      },
      {
        key: 'getPixelSizeForLayoutSize',
        value: function (t) {
          return Math.round(t * o.get());
        },
      },
      {
        key: 'roundToNearestPixel',
        value: function (t) {
          var n = o.get();
          return Math.round(t * n) / n;
        },
      },
      {
        key: 'startDetecting',
        value: function () {},
      },
    ]);
    return o;
  })();

module.exports = o;
