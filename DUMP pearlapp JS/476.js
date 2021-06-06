var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module477 = require('./477');

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

var y = {
    willFocus: 'onWillFocus',
    didFocus: 'onDidFocus',
    willBlur: 'onWillBlur',
    didBlur: 'onDidBlur',
  },
  h = Object.keys(y),
  b = (function (t, ...args) {
    module9.default(D, t);

    var React = D,
      module477 = v(),
      b = function () {
        var t,
          n = module13.default(React);

        if (module477) {
          var u = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function D() {
      var t, module8, c, module11;
      module7.default(this, D);
      t = b.call(this, ...args);
      module8 = module12.default(t);

      module11 = function (n) {
        return t.props[y[n]];
      };

      if ((c = 'getPropListener') in module8)
        Object.defineProperty(module8, c, {
          value: module11,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      else module8[c] = module11;
      return t;
    }

    module8.default(D, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this.subscriptions = {};
          h.forEach(function (n) {
            t.subscriptions[n] = t.props.navigation.addListener(n, function () {
              var u = t.getPropListener(n);
              return u && u.apply(undefined, arguments);
            });
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          var t = this;
          h.forEach(function (n) {
            t.subscriptions[n].remove();
          });
        },
      },
      {
        key: 'render',
        value: function () {
          return null;
        },
      },
    ]);
    return D;
  })(React.default.Component),
  D = module477.default(b);

exports.default = D;
