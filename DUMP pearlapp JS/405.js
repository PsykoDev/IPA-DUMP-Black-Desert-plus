var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module406 = require('./406'),
  module435 = require('./435'),
  module436 = require('./436'),
  module613 = require('./613'),
  module650 = require('./650');

function _() {
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

console.disableYellowBox = true;

var P = (function (t) {
  module9.default(b, t);

  var n = b,
    P = _(),
    E = function () {
      var t,
        u = module13.default(n);

      if (P) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, o);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function b() {
    module7.default(this, b);
    return E.apply(this, arguments);
  }

  module8.default(b, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          module406.Provider,
          {
            store: module613.store,
          },
          React.default.createElement(
            module435.PersistGate,
            {
              loading: null,
              persistor: module613.persistor,
            },
            React.default.createElement(module436.default, {
              ref: function (t) {
                if (null != t) module650.NavigationService.setNavigation(t._navigation);
              },
            })
          )
        );
      },
    },
  ]);
  return b;
})(React.Component);

exports.default = P;
