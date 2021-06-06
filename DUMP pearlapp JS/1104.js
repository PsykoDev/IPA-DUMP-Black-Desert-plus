var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module755 = require('./755');

function y() {
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
  module9.default(R, t);

  var n = R,
    v = y(),
    _ = function () {
      var t,
        u = module13.default(n);

      if (v) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, o);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function R() {
    module7.default(this, R);
    return _.apply(this, arguments);
  }

  module8.default(R, [
    {
      key: 'shouldComponentUpdate',
      value: function () {
        return false;
      },
    },
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          module17.View,
          {
            style: {
              width: 160,
              height: 50,
              flex: 1,
            },
          },
          React.default.createElement(module17.Image, {
            style: {
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            },
            source: module755.ImageMap.u_channel_logo_mo,
          })
        );
      },
    },
  ]);
  return R;
})(React.Component);

exports.default = v;
