var module6 = require('./6'),
  module216 = require('./216'),
  o = module216.AnimatedEvent,
  u = module216.attachNativeEvent,
  module226 = require('./226'),
  module227 = require('./227'),
  module228 = require('./228'),
  module218 = require('./218'),
  module229 = require('./229'),
  module230 = require('./230'),
  module219 = require('./219'),
  module231 = require('./231'),
  module234 = require('./234'),
  module235 = require('./235'),
  module217 = require('./217'),
  module236 = require('./236'),
  module237 = require('./237'),
  module239 = require('./239'),
  module241 = require('./241'),
  module244 = require('./244'),
  k = function (n, t) {
    return n && t.onComplete
      ? function () {
          if (t.onComplete) t.onComplete.apply(t, arguments);
          if (n) n.apply(undefined, arguments);
        }
      : n || t.onComplete;
  },
  V = function (t, o, u) {
    if (t instanceof module236) {
      var s = module6({}, o),
        c = module6({}, o);

      for (var f in o) {
        var v = o[f],
          p = v.x,
          l = v.y;

        if (undefined !== p && undefined !== l) {
          s[f] = p;
          c[f] = l;
        }
      }

      var h = u(t.x, s),
        _ = u(t.y, c);

      return x([h, _], {
        stopTogether: false,
      });
    }

    return null;
  },
  C = function t(o, u) {
    var s = function (n, t, o) {
      o = k(o, t);
      var u = n,
        s = t;
      u.stopTracking();
      if (t.toValue instanceof module219) u.track(new module235(u, t.toValue, module241, s, o));
      else u.animate(new module241(s), o);
    };

    return (
      V(o, u, t) || {
        start: function (n) {
          s(o, u, n);
        },
        stop: function () {
          o.stopAnimation();
        },
        reset: function () {
          o.resetAnimation();
        },
        _startNativeLoop: function (t) {
          var c = module6({}, u, {
            iterations: t,
          });
          s(o, c);
        },
        _isUsingNativeDriver: function () {
          return u.useNativeDriver || false;
        },
      }
    );
  },
  T = function (n) {
    var t = 0;
    return {
      start: function (o) {
        if (0 === n.length) {
          if (o)
            o({
              finished: true,
            });
        } else
          n[t].start(function u(s) {
            if (s.finished && ++t !== n.length) n[t].start(u);
            else if (o) o(s);
          });
      },
      stop: function () {
        if (t < n.length) n[t].stop();
      },
      reset: function () {
        n.forEach(function (n, o) {
          if (o <= t) n.reset();
        });
        t = 0;
      },
      _startNativeLoop: function () {
        throw new Error('Loops run using the native driver cannot contain Animated.sequence animations');
      },
      _isUsingNativeDriver: function () {
        return false;
      },
    };
  },
  x = function (n, t) {
    var o = 0,
      u = {},
      s = !(t && false === t.stopTogether),
      c = {
        start: function (t) {
          if (o !== n.length)
            n.forEach(function (f, v) {
              var p = function (f) {
                if (((u[v] = true), ++o === n.length)) {
                  o = 0;
                  return void (t && t(f));
                }

                if (!f.finished && s) c.stop();
              };

              if (f) f.start(p);
              else
                p({
                  finished: true,
                });
            });
          else if (t)
            t({
              finished: true,
            });
        },
        stop: function () {
          n.forEach(function (n, t) {
            if (!u[t]) n.stop();
            u[t] = true;
          });
        },
        reset: function () {
          n.forEach(function (n, t) {
            n.reset();
            u[t] = false;
            o = 0;
          });
        },
        _startNativeLoop: function () {
          throw new Error('Loops run using the native driver cannot contain Animated.parallel animations');
        },
        _isUsingNativeDriver: function () {
          return false;
        },
      };
    return c;
  },
  q = function (n) {
    return C(new module217(0), {
      toValue: 0,
      delay: n,
      duration: 0,
      useNativeDriver: false,
    });
  };

module.exports = {
  Value: module217,
  ValueXY: module236,
  Interpolation: module218,
  Node: module219,
  decay: function t(o, u) {
    var s = function (n, t, o) {
      o = k(o, t);
      var u = n,
        s = t;
      u.stopTracking();
      u.animate(new module237(s), o);
    };

    return (
      V(o, u, t) || {
        start: function (n) {
          s(o, u, n);
        },
        stop: function () {
          o.stopAnimation();
        },
        reset: function () {
          o.resetAnimation();
        },
        _startNativeLoop: function (t) {
          var c = module6({}, u, {
            iterations: t,
          });
          s(o, c);
        },
        _isUsingNativeDriver: function () {
          return u.useNativeDriver || false;
        },
      }
    );
  },
  timing: C,
  spring: function t(o, u) {
    var s = function (n, t, o) {
      o = k(o, t);
      var u = n,
        s = t;
      u.stopTracking();
      if (t.toValue instanceof module219) u.track(new module235(u, t.toValue, module239, s, o));
      else u.animate(new module239(s), o);
    };

    return (
      V(o, u, t) || {
        start: function (n) {
          s(o, u, n);
        },
        stop: function () {
          o.stopAnimation();
        },
        reset: function () {
          o.resetAnimation();
        },
        _startNativeLoop: function (t) {
          var c = module6({}, u, {
            iterations: t,
          });
          s(o, c);
        },
        _isUsingNativeDriver: function () {
          return u.useNativeDriver || false;
        },
      }
    );
  },
  add: function (n, t) {
    return new module226(n, t);
  },
  subtract: function (n, t) {
    return new module234(n, t);
  },
  divide: function (n, t) {
    return new module228(n, t);
  },
  multiply: function (n, t) {
    return new module230(n, t);
  },
  modulo: function (n, t) {
    return new module229(n, t);
  },
  diffClamp: function (n, t, o) {
    return new module227(n, t, o);
  },
  delay: q,
  sequence: T,
  parallel: x,
  stagger: function (n, t) {
    return x(
      t.map(function (t, o) {
        return T([q(n * o), t]);
      })
    );
  },
  loop: function (n) {
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
      o = t.iterations,
      u = undefined === o ? -1 : o,
      s = t.resetBeforeIteration,
      c = undefined === s || s,
      f = false,
      v = 0;
    return {
      start: function (t) {
        if (n && 0 !== u)
          n._isUsingNativeDriver()
            ? n._startNativeLoop(u)
            : (function o() {
                var s =
                  arguments.length > 0 && undefined !== arguments[0]
                    ? arguments[0]
                    : {
                        finished: true,
                      };
                if (f || v === u || false === s.finished) {
                  if (t) t(s);
                } else {
                  v++;
                  if (c) n.reset();
                  n.start(o);
                }
              })();
        else if (t)
          t({
            finished: true,
          });
      },
      stop: function () {
        f = true;
        n.stop();
      },
      reset: function () {
        v = 0;
        f = false;
        n.reset();
      },
      _startNativeLoop: function () {
        throw new Error('Loops run using the native driver cannot contain Animated.loop animations');
      },
      _isUsingNativeDriver: function () {
        return n._isUsingNativeDriver();
      },
    };
  },
  event: function (n, t) {
    var u = new o(n, t);
    return u.__isNative ? u : u.__getHandler();
  },
  createAnimatedComponent: module244,
  attachNativeEvent: u,
  forkEvent: function (n, t) {
    return n
      ? n instanceof o
        ? (n.__addListener(t), n)
        : function () {
            if ('function' == typeof n) n.apply(undefined, arguments);
            t.apply(undefined, arguments);
          }
      : t;
  },
  unforkEvent: function (n, t) {
    if (n && n instanceof o) n.__removeListener(t);
  },
  Event: o,
  __PropsOnlyForTests: module231,
};
