exports.default = function (t) {
  var w = (function (p) {
    module9.default(R, p);

    var w = R,
      D = v(),
      L = function () {
        var t,
          n = module13.default(w);

        if (D) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function R() {
      var t;
      module7.default(this, R);
      t = L.call(this);
      O(module12.default(t), 'handleOrientationChange', function (n) {
        var o = n.window,
          u = b(o);
        t.setState({
          isLandscape: u,
        });
      });
      var o = b(module17.Dimensions.get('window'));
      t.state = {
        isLandscape: o,
      };
      return t;
    }

    module8.default(R, [
      {
        key: 'componentDidMount',
        value: function () {
          module17.Dimensions.addEventListener('change', this.handleOrientationChange);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          module17.Dimensions.removeEventListener('change', this.handleOrientationChange);
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(t, y({}, this.props, this.state));
        },
      },
    ]);
    return R;
  })(React.default.Component);

  return module412.default(w, t);
};

var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module412 = require('./412');

function v() {
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

function O(t, n, o) {
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

var b = function (t) {
  return t.width > t.height;
};

exports.isOrientationLandscape = b;
