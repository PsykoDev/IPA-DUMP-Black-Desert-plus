var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module1100 = require('./1100'),
  module799 = require('./799');

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

var h = (function (t) {
  module9.default(P, t);

  var h = P,
    R = v(),
    _ = function () {
      var t,
        n = module13.default(h);

      if (R) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function P() {
    module7.default(this, P);
    return _.apply(this, arguments);
  }

  module8.default(P, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          module17.View,
          {
            style: module1100.default.content,
          },
          React.default.createElement(module799.PushAlarmListWebView, null)
        );
      },
    },
  ]);
  return P;
})(React.default.Component);

exports.default = h;
