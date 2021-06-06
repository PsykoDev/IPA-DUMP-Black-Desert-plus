var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module1031 = require('./1031'),
  module1032 = require('./1032'),
  module210 = require('./210');

function y() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var h = 4,
  _ = 0.001,
  p = 1e-7,
  b = 10,
  R = 11,
  z = 0.1,
  A = 'function' == typeof Float32Array;

function w(t, n) {
  return 1 - 3 * n + 3 * t;
}

function D(t, n) {
  return 3 * n - 6 * t;
}

function k(t) {
  return 3 * t;
}

function B(t, n, u) {
  return ((w(n, u) * t + D(n, u)) * t + k(n)) * t;
}

function F(t, n, u) {
  return 3 * w(n, u) * t * t + 2 * D(n, u) * t + k(n);
}

function M(t, n, u, f, o) {
  var c = 0,
    l = 0,
    v = 0;

  do {
    if ((c = B((l = n + (u - n) / 2), f, o) - t) > 0) u = l;
    else n = l;
  } while (Math.abs(c) > p && ++v < b);

  return l;
}

function P(t, n, u, f) {
  for (var o = 0; o < h; ++o) {
    var c = F(n, u, f);
    if (0 === c) return n;
    n -= (B(n, u, f) - t) / c;
  }

  return n;
}

function S(t, n, u, f) {
  var o = A ? new Float32Array(R) : new Array(R);
  if (t !== n || u !== f) for (var c = 0; c < R; ++c) o[c] = B(c * z, t, u);

  function l(n) {
    for (var f = 0, c = 1; 10 !== c && o[c] <= n; ++c) f += z;

    var l = f + ((n - o[--c]) / (o[c + 1] - o[c])) * z,
      v = F(l, t, u);
    return v >= _ ? P(n, l, t, u) : 0 === v ? l : M(n, f, f + z, t, u);
  }

  return function (o) {
    return t === n && u === f ? o : 0 === o ? 0 : 1 === o ? 1 : B(l(o), n, f);
  };
}

var X = (function (t) {
  module9.default(b, t);

  var h = b,
    _ = y(),
    p = function () {
      var t,
        n = module13.default(h);

      if (_) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function b(t, u, f, o, c) {
    var l;
    module7.default(this, b);
    module210.default(t instanceof module1032.default, 'Reanimated: Bezier node argument should be of type AnimatedNode but got ' + t);
    (l = p.call(
      this,
      {
        type: 'bezier',
        mX1: u,
        mY1: f,
        mX2: o,
        mY2: c,
        input: t,
      },
      [t]
    ))._value = t;
    l._bezier = S(u, f, o, c);
    return l;
  }

  module8.default(b, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedBezier, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        return this._bezier(module1031.val(this._value));
      },
    },
  ]);
  return b;
})(module1032.default);

exports.default = X;
