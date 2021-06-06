var t = {
  cond: true,
  set: true,
  startClock: true,
  stopClock: true,
  clockRunning: true,
  debug: true,
  call: true,
  event: true,
  always: true,
  concat: true,
  block: true,
  adapt: true,
  proc: true,
};
Object.defineProperty(exports, 'cond', {
  enumerable: true,
  get: function () {
    return module1029.createAnimatedCond;
  },
});
Object.defineProperty(exports, 'set', {
  enumerable: true,
  get: function () {
    return module1035.createAnimatedSet;
  },
});
Object.defineProperty(exports, 'startClock', {
  enumerable: true,
  get: function () {
    return module1036.createAnimatedStartClock;
  },
});
Object.defineProperty(exports, 'stopClock', {
  enumerable: true,
  get: function () {
    return module1039.createAnimatedStopClock;
  },
});
Object.defineProperty(exports, 'clockRunning', {
  enumerable: true,
  get: function () {
    return module1040.createAnimatedClockTest;
  },
});
Object.defineProperty(exports, 'debug', {
  enumerable: true,
  get: function () {
    return module1041.createAnimatedDebug;
  },
});
Object.defineProperty(exports, 'call', {
  enumerable: true,
  get: function () {
    return module1042.createAnimatedCall;
  },
});
Object.defineProperty(exports, 'event', {
  enumerable: true,
  get: function () {
    return module1044.createAnimatedEvent;
  },
});
Object.defineProperty(exports, 'always', {
  enumerable: true,
  get: function () {
    return module1052.createAnimatedAlways;
  },
});
Object.defineProperty(exports, 'concat', {
  enumerable: true,
  get: function () {
    return module1054.createAnimatedConcat;
  },
});
Object.defineProperty(exports, 'block', {
  enumerable: true,
  get: function () {
    return module1030.createAnimatedBlock;
  },
});
Object.defineProperty(exports, 'adapt', {
  enumerable: true,
  get: function () {
    return module1030.adapt;
  },
});
Object.defineProperty(exports, 'proc', {
  enumerable: true,
  get: function () {
    return module1049.createAnimatedFunction;
  },
});

var module1029 = require('./1029'),
  module1035 = require('./1035'),
  module1036 = require('./1036'),
  module1039 = require('./1039'),
  module1040 = require('./1040'),
  module1041 = require('./1041'),
  module1042 = require('./1042'),
  module1044 = require('./1044'),
  module1052 = require('./1052'),
  module1054 = require('./1054'),
  module1030 = require('./1030'),
  module1049 = require('./1049'),
  module1047 = require('./1047');

Object.keys(module1047).forEach(function (n) {
  if ('default' !== n && '__esModule' !== n)
    Object.prototype.hasOwnProperty.call(t, n) ||
      Object.defineProperty(exports, n, {
        enumerable: true,
        get: function () {
          return module1047[n];
        },
      });
});
