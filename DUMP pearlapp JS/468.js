var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module451 = require('./451');

function p() {
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

var v = (function (t) {
  module9.default(P, t);

  var v = P,
    y = p(),
    h = function () {
      var t,
        n = module13.default(v);

      if (y) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function P() {
    module7.default(this, P);
    return h.apply(this, arguments);
  }

  module8.default(P, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.screenProps,
          u = t.component,
          f = t.navigation;
        return React.default.createElement(
          module451.default.Provider,
          {
            value: f,
          },
          React.default.createElement(u, {
            screenProps: n,
            navigation: f,
          })
        );
      },
    },
  ]);
  return P;
})(React.default.PureComponent);

exports.default = v;
