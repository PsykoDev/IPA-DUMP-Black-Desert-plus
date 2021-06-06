function n() {}

var t = null,
  o = {};

function u(n) {
  try {
    return n.then;
  } catch (n) {
    t = n;
    return o;
  }
}

function f(n, u) {
  try {
    return n(u);
  } catch (n) {
    t = n;
    return o;
  }
}

function c(n, u, f) {
  try {
    n(u, f);
  } catch (n) {
    t = n;
    return o;
  }
}

function _(t) {
  if ('object' != typeof this) throw new TypeError('Promises must be constructed via new');
  if ('function' != typeof t) throw new TypeError("Promise constructor's argument is not a function");
  this._40 = 0;
  this._65 = 0;
  this._55 = null;
  this._72 = null;
  if (t !== n) b(t, this);
}

function s(t, o, u) {
  return new t.constructor(function (f, c) {
    var s = new _(n);
    s.then(f, c);
    l(t, new w(o, u, s));
  });
}

function l(n, t) {
  for (; 3 === n._65; ) n = n._55;

  if ((_._37 && _._37(n), 0 === n._65))
    if (0 === n._40) {
      n._40 = 1;
      return void (n._72 = t);
    } else if (1 === n._40) {
      n._40 = 2;
      return void (n._72 = [n._72, t]);
    } else return void n._72.push(t);
  h(n, t);
}

function h(n, u) {
  setImmediate(function () {
    var c = 1 === n._65 ? u.onFulfilled : u.onRejected;

    if (null !== c) {
      var _ = f(c, n._55);

      if (_ === o) v(u.promise, t);
      else p(u.promise, _);
    } else 1 === n._65 ? p(u.promise, n._55) : v(u.promise, n._55);
  });
}

function p(n, f) {
  if (f === n) return v(n, new TypeError('A promise cannot be resolved with itself.'));

  if (f && ('object' == typeof f || 'function' == typeof f)) {
    var c = u(f);
    if (c === o) return v(n, t);

    if (c === n.then && f instanceof _) {
      n._65 = 3;
      n._55 = f;
      return void y(n);
    }

    if ('function' == typeof c) return void b(c.bind(f), n);
  }

  n._65 = 1;
  n._55 = f;
  y(n);
}

function v(n, t) {
  n._65 = 2;
  n._55 = t;
  if (_._87) _._87(n, t);
  y(n);
}

function y(n) {
  if ((1 === n._40 && (l(n, n._72), (n._72 = null)), 2 === n._40)) {
    for (var t = 0; t < n._72.length; t++) l(n, n._72[t]);

    n._72 = null;
  }
}

function w(n, t, o) {
  this.onFulfilled = 'function' == typeof n ? n : null;
  this.onRejected = 'function' == typeof t ? t : null;
  this.promise = o;
}

function b(n, u) {
  var f = false,
    _ = c(
      n,
      function (n) {
        if (!f) {
          f = true;
          p(u, n);
        }
      },
      function (n) {
        if (!f) {
          f = true;
          v(u, n);
        }
      }
    );

  if (!(f || _ !== o)) {
    f = true;
    v(u, t);
  }
}

module.exports = _;
_._37 = null;
_._87 = null;
_._61 = n;

_.prototype.then = function (t, o) {
  if (this.constructor !== _) return s(this, t, o);
  var u = new _(n);
  l(this, new w(t, o, u));
  return u;
};
