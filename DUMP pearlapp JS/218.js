var module7 = require('./7'),
  module49 = require('./49'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module6 = require('./6');

function l() {
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

require('./219');

var module222 = require('./222'),
  module220 = require('./220'),
  module18 = require('./18'),
  module67 = require('./67'),
  y = function (t) {
    return t;
  };

function R(t) {
  if (t.outputRange && 'string' == typeof t.outputRange[0]) return C(t);
  var n = t.outputRange;
  w('outputRange', n);
  var o = t.inputRange;
  w('inputRange', o);
  N(o);
  module18(o.length === n.length, 'inputRange (' + o.length + ') and outputRange (' + n.length + ') must have the same length');
  var u = t.easing || y,
    c = 'extend';
  if (undefined !== t.extrapolateLeft) c = t.extrapolateLeft;
  else if (undefined !== t.extrapolate) c = t.extrapolate;
  var p = 'extend';
  if (undefined !== t.extrapolateRight) p = t.extrapolateRight;
  else if (undefined !== t.extrapolate) p = t.extrapolate;
  return function (t) {
    module18('number' == typeof t, 'Cannot interpolation an input which is not a number');
    var f = L(t, o);
    return x(t, o[f], o[f + 1], n[f], n[f + 1], u, c, p);
  };
}

function x(t, n, o, u, c, p, f, l) {
  var h = t;

  if (h < n) {
    if ('identity' === f) return h;
    if ('clamp' === f) h = n;
  }

  if (h > o) {
    if ('identity' === l) return h;
    if ('clamp' === l) h = o;
  }

  return u === c
    ? u
    : n === o
    ? t <= n
      ? u
      : c
    : (n === -1 / 0 ? (h = -h) : o === 1 / 0 ? (h -= n) : (h = (h - n) / (o - n)), (h = p(h)), u === -1 / 0 ? (h = -h) : c === 1 / 0 ? (h += u) : (h = h * (c - u) + u), h);
}

function k(t) {
  var n = module67(t);
  return null === n ? t : 'rgba(' + ((4278190080 & (n = n || 0)) >>> 24) + ', ' + ((16711680 & n) >>> 16) + ', ' + ((65280 & n) >>> 8) + ', ' + (255 & n) / 255 + ')';
}

var b = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;

function C(t) {
  var n = t.outputRange;
  module18(n.length >= 2, 'Bad output range');
  D((n = n.map(k)));
  var o = n[0].match(b).map(function () {
    return [];
  });
  n.forEach(function (t) {
    t.match(b).forEach(function (t, n) {
      o[n].push(+t);
    });
  });
  var u,
    c = n[0].match(b).map(function (n, u) {
      return R(
        module6({}, t, {
          outputRange: o[u],
        })
      );
    }),
    p = 'string' == typeof (u = n[0]) && u.startsWith('rgb');
  return function (t) {
    var o = 0;
    return n[0].replace(b, function () {
      var n = +c[o++](t);
      if (p) n = o < 4 ? Math.round(n) : Math.round(1e3 * n) / 1e3;
      return String(n);
    });
  };
}

function D(t) {
  for (var n = t[0].replace(b, ''), o = 1; o < t.length; ++o) module18(n === t[o].replace(b, ''), 'invalid pattern ' + t[0] + ' and ' + t[o]);
}

function L(t, n) {
  var o;

  for (o = 1; o < n.length - 1 && !(n[o] >= t); ++o);

  return o - 1;
}

function N(t) {
  module18(t.length >= 2, 'inputRange must have at least 2 elements');

  for (var n = 1; n < t.length; ++n) module18(t[n] >= t[n - 1], 'inputRange must be monotonically non-decreasing ' + t);
}

function w(t, n) {
  module18(n.length >= 2, t + ' must have at least 2 elements');
  module18(2 !== n.length || n[0] !== -1 / 0 || n[1] !== 1 / 0, t + 'cannot be ]-infinity;+infinity[ ' + n);
}

class E {
  constructor(n, o) {
    var u;
    module7(this, k);
    (u = x.call(this))._parent = n;
    u._config = o;
    u._interpolation = R(o);
    return u;
  }

  __makeNative() {
    this._parent.__makeNative();

    module49(module13(k.prototype), '__makeNative', this).call(this);
  }

  __getValue() {
    var t = this._parent.__getValue();

    module18('number' == typeof t, 'Cannot interpolate an input which is not a number.');
    return this._interpolation(t);
  }

  interpolate(t) {
    return new k(this, t);
  }

  __attach() {
    this._parent.__addChild(this);
  }

  __detach() {
    this._parent.__removeChild(this);

    module49(module13(k.prototype), '__detach', this).call(this);
  }

  __transformDataType(t) {
    return t.map(module220.transformDataType);
  }

  __getNativeConfig() {
    return {
      inputRange: this._config.inputRange,
      outputRange: this.__transformDataType(this._config.outputRange),
      extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || 'extend',
      extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || 'extend',
      type: 'interpolation',
    };
  }
}

E.__createInterpolation = R;
module.exports = E;
