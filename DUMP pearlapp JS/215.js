var module6 = require('./6'),
  module216 = require('./216'),
  u = module216.AnimatedEvent,
  o = module216.attachNativeEvent,
  module225 = require('./225'),
  module218 = require('./218'),
  module219 = require('./219'),
  module231 = require('./231'),
  module217 = require('./217'),
  module236 = require('./236'),
  module244 = require('./244'),
  V = {
    start: function () {},
    stop: function () {},
    reset: function () {},
    _startNativeLoop: function () {},
    _isUsingNativeDriver: function () {
      return false;
    },
  };

module.exports = {
  Value: module217,
  ValueXY: module236,
  Interpolation: module218,
  Node: module219,
  decay: function (t, n) {
    return V;
  },
  timing: function (n, u) {
    var o = n;
    return module6({}, V, {
      start: function (t) {
        o.setValue(u.toValue);
        if (t)
          t({
            finished: true,
          });
      },
    });
  },
  spring: function (n, u) {
    var o = n;
    return module6({}, V, {
      start: function (t) {
        o.setValue(u.toValue);
        if (t)
          t({
            finished: true,
          });
      },
    });
  },
  add: module225.add,
  subtract: module225.subtract,
  divide: module225.divide,
  multiply: module225.multiply,
  modulo: module225.modulo,
  diffClamp: module225.diffClamp,
  delay: function (t) {
    return V;
  },
  sequence: function (t) {
    return V;
  },
  parallel: function (t, n) {
    return V;
  },
  stagger: function (t, n) {
    return V;
  },
  loop: function (t) {
    (arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}).iterations;
    return V;
  },
  event: function (t, n) {
    return null;
  },
  createAnimatedComponent: module244,
  attachNativeEvent: o,
  forkEvent: module225.forkEvent,
  unforkEvent: module225.unforkEvent,
  Event: u,
  __PropsOnlyForTests: module231,
};
