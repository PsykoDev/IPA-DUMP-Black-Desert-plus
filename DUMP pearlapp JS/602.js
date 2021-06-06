var t = 'Expected a function',
  n = '__lodash_hash_undefined__',
  o = '[object Function]',
  u = '[object GeneratorFunction]',
  c = '[object Symbol]',
  f = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  s = /^\w*$/,
  p = /^\./,
  l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  _ = /\\(\\)?/g,
  h = /^\[object .+?Constructor\]$/,
  y = 'object' == typeof globals && globals && globals.Object === Object && globals,
  v = 'object' == typeof self && self && self.Object === Object && self,
  b = y || v || Function('return this')();

function j(t, n) {
  return null == t ? undefined : t[n];
}

function O(t) {
  var n = false;
  if (null != t && 'function' != typeof t.toString)
    try {
      n = !!(t + '');
    } catch (t) {}
  return n;
}

var w,
  $ = Array.prototype,
  S = Function.prototype,
  x = Object.prototype,
  E = b['__core-js_shared__'],
  F = (w = /[^.]+$/.exec((E && E.keys && E.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + w : '',
  A = S.toString,
  C = x.hasOwnProperty,
  P = x.toString,
  k = RegExp(
    '^' +
      A.call(C)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  ),
  R = b.Symbol,
  T = $.splice,
  G = Q(b, 'Map'),
  I = Q(Object, 'create'),
  M = R ? R.prototype : undefined,
  q = M ? M.toString : undefined;

function z(t) {
  var n = -1,
    o = t ? t.length : 0;

  for (this.clear(); ++n < o; ) {
    var u = t[n];
    this.set(u[0], u[1]);
  }
}

function B(t) {
  var n = -1,
    o = t ? t.length : 0;

  for (this.clear(); ++n < o; ) {
    var u = t[n];
    this.set(u[0], u[1]);
  }
}

function D(t) {
  var n = -1,
    o = t ? t.length : 0;

  for (this.clear(); ++n < o; ) {
    var u = t[n];
    this.set(u[0], u[1]);
  }
}

function H(t, n) {
  for (var o, u, c = t.length; c--; ) if ((o = t[c][0]) === (u = n) || (o != o && u != u)) return c;

  return -1;
}

function J(t) {
  return !(!rt(t) || (F && F in t)) && (tt(t) || O(t) ? k : h).test(X(t));
}

function K(t) {
  if ('string' == typeof t) return t;
  if (et(t)) return q ? q.call(t) : '';
  var n = t + '';
  return '0' == n && 1 / t == -1 / 0 ? '-0' : n;
}

function L(t) {
  return Z(t) ? t : V(t);
}

function N(t, n) {
  var o,
    u,
    c = t.__data__;
  return ('string' == (u = typeof (o = n)) || 'number' == u || 'symbol' == u || 'boolean' == u ? '__proto__' !== o : null === o)
    ? c['string' == typeof n ? 'string' : 'hash']
    : c.map;
}

function Q(t, n) {
  var o = j(t, n);
  return J(o) ? o : undefined;
}

function U(t, n) {
  if (Z(t)) return false;
  var o = typeof t;
  return !('number' != o && 'symbol' != o && 'boolean' != o && null != t && !et(t)) || s.test(t) || !f.test(t) || (null != n && t in Object(n));
}

z.prototype.clear = function () {
  this.__data__ = I ? I(null) : {};
};

z.prototype.delete = function (t) {
  return this.has(t) && delete this.__data__[t];
};

z.prototype.get = function (t) {
  var o = this.__data__;

  if (I) {
    var u = o[t];
    return u === n ? undefined : u;
  }

  return C.call(o, t) ? o[t] : undefined;
};

z.prototype.has = function (t) {
  var n = this.__data__;
  return I ? undefined !== n[t] : C.call(n, t);
};

z.prototype.set = function (t, o) {
  this.__data__[t] = I && undefined === o ? n : o;
  return this;
};

B.prototype.clear = function () {
  this.__data__ = [];
};

B.prototype.delete = function (t) {
  var n = this.__data__,
    o = H(n, t);
  return !(o < 0 || (o == n.length - 1 ? n.pop() : T.call(n, o, 1), 0));
};

B.prototype.get = function (t) {
  var n = this.__data__,
    o = H(n, t);
  return o < 0 ? undefined : n[o][1];
};

B.prototype.has = function (t) {
  return H(this.__data__, t) > -1;
};

B.prototype.set = function (t, n) {
  var o = this.__data__,
    u = H(o, t);
  if (u < 0) o.push([t, n]);
  else o[u][1] = n;
  return this;
};

D.prototype.clear = function () {
  this.__data__ = {
    hash: new z(),
    map: new (G || B)(),
    string: new z(),
  };
};

D.prototype.delete = function (t) {
  return N(this, t).delete(t);
};

D.prototype.get = function (t) {
  return N(this, t).get(t);
};

D.prototype.has = function (t) {
  return N(this, t).has(t);
};

D.prototype.set = function (t, n) {
  N(this, t).set(t, n);
  return this;
};

var V = Y(function (t) {
  var n;
  t = null == (n = t) ? '' : K(n);
  var o = [];
  if (p.test(t)) o.push('');
  t.replace(l, function (t, n, u, c) {
    o.push(u ? c.replace(_, '$1') : n || t);
  });
  return o;
});

function W(t) {
  if ('string' == typeof t || et(t)) return t;
  var n = t + '';
  return '0' == n && 1 / t == -1 / 0 ? '-0' : n;
}

function X(t) {
  if (null != t) {
    try {
      return A.call(t);
    } catch (t) {}

    try {
      return t + '';
    } catch (t) {}
  }

  return '';
}

function Y(n, o) {
  if ('function' != typeof n || (o && 'function' != typeof o)) throw new TypeError(t);

  var u = function t() {
    var u = arguments,
      c = o ? o.apply(this, u) : u[0],
      f = t.cache;
    if (f.has(c)) return f.get(c);
    var s = n.apply(this, u);
    t.cache = f.set(c, s);
    return s;
  };

  u.cache = new (Y.Cache || D)();
  return u;
}

Y.Cache = D;
var Z = Array.isArray;

function tt(t) {
  var n = rt(t) ? P.call(t) : '';
  return n == o || n == u;
}

function rt(t) {
  var n = typeof t;
  return !!t && ('object' == n || 'function' == n);
}

function nt(t) {
  return !!t && 'object' == typeof t;
}

function et(t) {
  return 'symbol' == typeof t || (nt(t) && P.call(t) == c);
}

module.exports = function (t, n, o) {
  var u = -1,
    c = (n = U(n, t) ? [n] : L(n)).length;

  for (c || ((t = undefined), (c = 1)); ++u < c; ) {
    var f = null == t ? undefined : t[W(n[u])];

    if (undefined === f) {
      u = c;
      f = o;
    }

    t = tt(f) ? f.call(t) : f;
  }

  return t;
};
