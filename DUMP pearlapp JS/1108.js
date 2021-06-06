var o = {
  fetch: true,
  addEventListener: true,
  useNetInfo: true,
  removeEventListener: true,
  getConnectionInfo: true,
  isConnectionExpensive: true,
  isConnected: true,
};
exports.fetch = C;
exports.addEventListener = _;
exports.useNetInfo = N;
exports.removeEventListener = O;
exports.getConnectionInfo = h;
exports.isConnectionExpensive = y;

var module26 = require('@babel/runtime/helpers/slicedToArray'),
  React = require('react'),
  module1109 = require('./1109'),
  module1111 = require('./1111'),
  module1116 = require('./1116');

Object.keys(module1116).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    Object.prototype.hasOwnProperty.call(o, t) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return module1116[t];
        },
      });
});

var module1112 = require('./1112'),
  module1110 = require('./1110');

Object.keys(module1110).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    Object.prototype.hasOwnProperty.call(o, t) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return module1110[t];
        },
      });
});
module1112.default.setup();
module1111.default.setup();
var p = new Map();

function C() {
  return module1112.default.latest();
}

function _(t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : undefined;

  if ('string' == typeof t) {
    module1109.default.warnOnce();
    return t === module1116.CHANGE_EVENT_NAME && n
      ? (module1111.default.add(n),
        {
          remove: function () {
            module1111.default.remove(n);
          },
        })
      : {
          remove: function () {},
        };
  }

  var o = t;
  module1112.default.add(o);
  return function () {
    module1112.default.remove(o);
  };
}

function N() {
  var t = React.useState({
      type: module1110.NetInfoStateType.unknown,
      isConnected: false,
      isInternetReachable: false,
      details: null,
    }),
    n = module26.default(t, 2),
    o = n[0],
    c = n[1];
  React.useEffect(function () {
    return _(c);
  }, []);
  return o;
}

function O(t, n) {
  module1109.default.warnOnce();
  if (t === module1116.CHANGE_EVENT_NAME) module1111.default.remove(n);
}

function h() {
  module1109.default.warnOnce();
  return module1111.default.latest();
}

function y() {
  module1109.default.warnOnce();
  return module1112.default.latest().then(module1109.default.isConnectionExpensive);
}

var b = {
  addEventListener: function (t, n) {
    if (t !== module1116.CHANGE_EVENT_NAME)
      return {
        remove: function () {},
      };

    var o = function (t) {
      n(module1109.default.isConnected(t));
    };

    p.set(n, o);
    module1112.default.add(o);
    return {
      remove: function () {
        module1112.default.remove(o);
      },
    };
  },
  removeEventListener: function (t, n) {
    var o = p.get(n);
    if (o) module1112.default.remove(o);
    p.delete(n);
  },
  fetch: function () {
    return module1112.default.latest().then(module1109.default.isConnected);
  },
};
exports.isConnected = b;
var w = {
  fetch: C,
  addEventListener: _,
  useNetInfo: N,
  removeEventListener: O,
  getConnectionInfo: h,
  isConnectionExpensive: y,
  isConnected: b,
};
exports.default = w;
