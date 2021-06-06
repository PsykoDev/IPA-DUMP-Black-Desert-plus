exports.default = function (t) {
  var v = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    h = (function (h, ...args) {
      module9.default(C, h);

      var A = C,
        w = b(),
        j = function () {
          var t,
            n = module13.default(A);

          if (w) {
            var o = module13.default(this).constructor;
            t = Reflect.construct(n, arguments, o);
          } else t = n.apply(this, arguments);

          return module11.default(this, t);
        };

      function C() {
        var t;
        module7.default(this, C);

        (t = j.call(this, ...args))._refHandler = function (n) {
          for (var o = n; null != o; ) {
            for (var u, l = y(Object.getOwnPropertyNames(o)); !(u = l()).done; ) {
              var f = u.value;
              if (!(f.startsWith('_') || f.startsWith('component') || S.has(f) || 'function' != typeof o[f] || undefined !== t[f]))
                o[f].prototype ? (t[f] = o[f].bind(n)) : (t[f] = o[f]);
            }

            o = Object.getPrototypeOf(o);
          }
        };

        return t;
      }

      module8.default(C, [
        {
          key: 'render',
          value: function () {
            var o = this,
              u = Object.keys(this.props).reduce(function (t, n) {
                if (-1 !== O.indexOf(n)) t[n] = o.props[n];
                return t;
              }, module6.default({}, v));
            return React.default.createElement(
              module383.default,
              u,
              React.default.createElement(
                t,
                module6.default({}, this.props, {
                  ref: this._refHandler,
                })
              )
            );
          },
        },
      ]);
      return C;
    })(React.default.Component);

  h.propTypes = module6.default({}, t.propTypes);
  h.displayName = t.displayName || 'ComponentWrapper';
  return h;
};

var module6 = require('./6'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module383 = require('./383');

function y(t, n) {
  var o;

  if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (o = v(t)) || (n && t && 'number' == typeof t.length)) {
      if (o) t = o;
      var u = 0;
      return function () {
        return u >= t.length
          ? {
              done: true,
            }
          : {
              done: false,
              value: t[u++],
            };
      };
    }

    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  return (o = t[Symbol.iterator]()).next.bind(o);
}

function v(t, n) {
  if (t) {
    if ('string' == typeof t) return h(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? h(t, n) : undefined;
  }
}

function h(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, u = new Array(n); o < n; o++) u[o] = t[o];

  return u;
}

function b() {
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

var S = new Set(['replaceState', 'isMounted']),
  O = [
    'id',
    'minPointers',
    'enabled',
    'waitFor',
    'simultaneousHandlers',
    'shouldCancelWhenOutside',
    'hitSlop',
    'onGestureEvent',
    'onHandlerStateChange',
    'onBegan',
    'onFailed',
    'onCancelled',
    'onActivated',
    'onEnded',
    'shouldActivateOnStart',
    'disallowInterruption',
    'onGestureHandlerEvent',
    'onGestureHandlerStateChange',
  ];
