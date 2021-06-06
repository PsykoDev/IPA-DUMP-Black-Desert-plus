exports.default = function (t) {
  var w =
      arguments.length > 1 && undefined !== arguments[1]
        ? arguments[1]
        : {
            forwardRef: true,
          },
    R = (function (s) {
      module9.default(j, s);

      var b = j,
        R = h(),
        O = function () {
          var t,
            n = module13.default(b);

          if (R) {
            var o = module13.default(this).constructor;
            t = Reflect.construct(n, arguments, o);
          } else t = n.apply(this, arguments);

          return module11.default(this, t);
        };

      function j() {
        module7.default(this, j);
        return O.apply(this, arguments);
      }

      module8.default(j, [
        {
          key: 'render',
          value: function () {
            var n = this,
              o = this.props.navigation;
            return React.default.createElement(module451.default.Consumer, null, function (u) {
              var f = o || u;
              module440.default(
                !!f,
                'withNavigation can only be used on a view hierarchy of a navigator. The wrapped component is unable to get access to navigation from props or context.'
              );
              return React.default.createElement(
                t,
                y({}, n.props, {
                  navigation: f,
                  ref: w.forwardRef ? n.props.onRef : undefined,
                })
              );
            });
          },
        },
      ]);
      return j;
    })(React.default.Component);

  b(R, 'displayName', 'withNavigation('.concat(t.displayName || t.name, ')'));
  return module412.default(R, t);
};

var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module412 = require('./412'),
  module440 = require('./440'),
  module451 = require('./451');

function h() {
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

function y() {
  return (y =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (t[u] = o[u]);
      }

      return t;
    }).apply(this, arguments);
}

function b(t, n, o) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
}
