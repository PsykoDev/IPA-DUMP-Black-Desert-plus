exports.default = function (t) {
  var F = (function (p, ...args) {
    module9.default(R, p);

    var module477 = R,
      F = h(),
      w = function () {
        var t,
          n = module13.default(module477);

        if (F) {
          var u = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function R() {
      var t;
      module7.default(this, R);
      t = w.call(this, ...args);
      b(module12.default(t), 'state', {
        isFocused: t.props.navigation.isFocused(),
      });
      return t;
    }

    module8.default(R, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this,
            n = this.props.navigation;
          this.subscriptions = [
            n.addListener('willFocus', function () {
              return t.setState({
                isFocused: true,
              });
            }),
            n.addListener('willBlur', function () {
              return t.setState({
                isFocused: false,
              });
            }),
          ];
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          var t;
          if (!(null === (t = this.subscriptions) || undefined === t))
            t.forEach(function (t) {
              return t.remove();
            });
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            t,
            y({}, this.props, {
              isFocused: this.state.isFocused,
              ref: this.props.onRef,
            })
          );
        },
      },
    ]);
    return R;
  })(React.default.Component);

  b(F, 'displayName', 'withNavigationFocus('.concat(t.displayName || t.name, ')'));
  return module412.default(
    module477.default(F, {
      forwardRef: false,
    }),
    t
  );
};

var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module412 = require('./412'),
  module477 = require('./477');

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
        var u = arguments[n];

        for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (t[o] = u[o]);
      }

      return t;
    }).apply(this, arguments);
}

function b(t, n, u) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: u,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = u;
  return t;
}
