exports.default = function () {
  var t = {
    translationX: {},
    translationY: {},
    state: {},
    oldState: {},
    absoluteX: {},
    absoluteY: {},
    x: {},
    y: {},
    velocityX: {},
    velocityY: {},
    scale: {},
    focalX: {},
    focalY: {},
    rotation: {},
    anchorX: {},
    anchorY: {},
    velocity: {},
    numberOfPointers: {},
    layout: {
      x: {},
      y: {},
      width: {},
      height: {},
    },
    contentOffset: {
      y: {},
      x: {},
    },
    layoutMeasurement: {
      width: {},
      height: {},
    },
    contentSize: {
      width: {},
      height: {},
    },
    zoomScale: {},
    contentInset: {
      right: {},
      top: {},
      left: {},
      bottom: {},
    },
  };

  (function t(n) {
    for (var l in n) {
      t(n[l]);
      module6.default(n[l], {
        __isProxy: true,
      });
    }
  })(t);

  return t;
};

var module6 = require('./6');
