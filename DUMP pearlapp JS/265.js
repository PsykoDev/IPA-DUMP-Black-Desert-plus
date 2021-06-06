var module6 = require('./6'),
  module7 = require('./7');

function l(t, n) {
  var o;

  if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (o = u(t)) || (n && t && 'number' == typeof t.length)) {
      if (o) t = o;
      var s = 0;
      return function () {
        return s >= t.length
          ? {
              done: true,
            }
          : {
              done: false,
              value: t[s++],
            };
      };
    }

    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  return (o = t[Symbol.iterator]()).next.bind(o);
}

function u(t, n) {
  if (t) {
    if ('string' == typeof t) return c(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? c(t, n) : undefined;
  }
}

function c(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, s = new Array(n); o < n; o++) s[o] = t[o];

  return s;
}

var module18 = require('./18'),
  f = (function () {
    function u() {
      var t =
        arguments.length > 0 && undefined !== arguments[0]
          ? arguments[0]
          : {
              viewAreaCoveragePercentThreshold: 0,
            };
      module7(this, u);
      this._hasInteracted = false;
      this._timers = new Set();
      this._viewableIndices = [];
      this._viewableItems = new Map();
      this._config = t;
    }

    module8(u, [
      {
        key: 'dispose',
        value: function () {
          this._timers.forEach(clearTimeout);
        },
      },
      {
        key: 'computeViewableItems',
        value: function (t, n, o, s, l) {
          var u = this._config,
            c = u.itemVisiblePercentThreshold,
            f = u.viewAreaCoveragePercentThreshold,
            b = null != f,
            y = b ? f : c;
          module18(null != y && (null != c) != (null != f), 'Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold');
          var w = [];
          if (0 === t) return w;

          var _ = -1,
            p = l || {
              first: 0,
              last: t - 1,
            },
            I = p.first,
            S = p.last;

          if (S >= t) {
            console.warn(
              'Invalid render range computing viewability ' +
                JSON.stringify({
                  renderRange: l,
                  itemCount: t,
                })
            );
            return [];
          }

          for (var A = I; A <= S; A++) {
            var T = s(A);

            if (T) {
              var k = T.offset - n,
                V = k + T.length;

              if (k < o && V > 0) {
                _ = A;
                if (v(b, y, k, V, o, T.length)) w.push(A);
              } else if (_ >= 0) break;
            }
          }

          return w;
        },
      },
      {
        key: 'onUpdate',
        value: function (t, n, o, s, l, u, c) {
          var h = this;

          if ((!this._config.waitForInteraction || this._hasInteracted) && 0 !== t && s(0)) {
            var f = [];
            if (
              (t && (f = this.computeViewableItems(t, n, o, s, c)),
              this._viewableIndices.length !== f.length ||
                !this._viewableIndices.every(function (t, n) {
                  return t === f[n];
                }))
            )
              if (((this._viewableIndices = f), this._config.minimumViewTime)) {
                var v = setTimeout(function () {
                  h._timers.delete(v);

                  h._onUpdateSync(f, u, l);
                }, this._config.minimumViewTime);

                this._timers.add(v);
              } else this._onUpdateSync(f, u, l);
          }
        },
      },
      {
        key: 'resetViewableIndices',
        value: function () {
          this._viewableIndices = [];
        },
      },
      {
        key: 'recordInteraction',
        value: function () {
          this._hasInteracted = true;
        },
      },
      {
        key: '_onUpdateSync',
        value: function (o, s, u) {
          var c = this;
          o = o.filter(function (t) {
            return c._viewableIndices.includes(t);
          });

          for (
            var h,
              f = this._viewableItems,
              v = new Map(
                o.map(function (t) {
                  var n = u(t, true);
                  return [n.key, n];
                })
              ),
              b = [],
              y = l(v);
            !(h = y()).done;

          ) {
            var [p, I] = h.value;
            if (!f.has(p)) b.push(I);
          }

          for (var S, A = l(f); !(S = A()).done; ) {
            var [V, M] = S.value;
            if (!v.has(V))
              b.push(
                module6({}, M, {
                  isViewable: false,
                })
              );
          }

          if (b.length > 0) {
            this._viewableItems = v;
            s({
              viewableItems: Array.from(v.values()),
              changed: b,
              viewabilityConfig: this._config,
            });
          }
        },
      },
    ]);
    return u;
  })();

class f {
  constructor() {
    var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            viewAreaCoveragePercentThreshold: 0,
          };
    module7(this, u);
    this._hasInteracted = false;
    this._timers = new Set();
    this._viewableIndices = [];
    this._viewableItems = new Map();
    this._config = t;
  }

  dispose() {
    this._timers.forEach(clearTimeout);
  }

  computeViewableItems(t, n, o, s, l) {
    var u = this._config,
      c = u.itemVisiblePercentThreshold,
      f = u.viewAreaCoveragePercentThreshold,
      b = null != f,
      y = b ? f : c;
    module18(null != y && (null != c) != (null != f), 'Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold');
    var w = [];
    if (0 === t) return w;

    var _ = -1,
      p = l || {
        first: 0,
        last: t - 1,
      },
      I = p.first,
      S = p.last;

    if (S >= t) {
      console.warn(
        'Invalid render range computing viewability ' +
          JSON.stringify({
            renderRange: l,
            itemCount: t,
          })
      );
      return [];
    }

    for (var A = I; A <= S; A++) {
      var T = s(A);

      if (T) {
        var k = T.offset - n,
          V = k + T.length;

        if (k < o && V > 0) {
          _ = A;
          if (v(b, y, k, V, o, T.length)) w.push(A);
        } else if (_ >= 0) break;
      }
    }

    return w;
  }

  onUpdate(t, n, o, s, l, u, c) {
    var h = this;

    if ((!this._config.waitForInteraction || this._hasInteracted) && 0 !== t && s(0)) {
      var f = [];
      if (
        (t && (f = this.computeViewableItems(t, n, o, s, c)),
        this._viewableIndices.length !== f.length ||
          !this._viewableIndices.every(function (t, n) {
            return t === f[n];
          }))
      )
        if (((this._viewableIndices = f), this._config.minimumViewTime)) {
          var v = setTimeout(function () {
            h._timers.delete(v);

            h._onUpdateSync(f, u, l);
          }, this._config.minimumViewTime);

          this._timers.add(v);
        } else this._onUpdateSync(f, u, l);
    }
  }

  resetViewableIndices() {
    this._viewableIndices = [];
  }

  recordInteraction() {
    this._hasInteracted = true;
  }

  _onUpdateSync(o, s, u) {
    var c = this;
    o = o.filter(function (t) {
      return c._viewableIndices.includes(t);
    });

    for (
      var h,
        f = this._viewableItems,
        v = new Map(
          o.map(function (t) {
            var n = u(t, true);
            return [n.key, n];
          })
        ),
        b = [],
        y = l(v);
      !(h = y()).done;

    ) {
      var [p, I] = h.value;
      if (!f.has(p)) b.push(I);
    }

    for (var S, A = l(f); !(S = A()).done; ) {
      var [V, M] = S.value;
      if (!v.has(V))
        b.push(
          module6({}, M, {
            isViewable: false,
          })
        );
    }

    if (b.length > 0) {
      this._viewableItems = v;
      s({
        viewableItems: Array.from(v.values()),
        changed: b,
        viewabilityConfig: this._config,
      });
    }
  }
}

function v(t, n, o, s, l, u) {
  if (y(o, s, l)) return true;
  var c = b(o, s, l);
  return 100 * (t ? c / l : c / u) >= n;
}

function b(t, n, o) {
  var s = n ** o - t ** 0;
  return 0 ** s;
}

function y(t, n, o) {
  return t >= 0 && n <= o && n > t;
}

module.exports = f;
