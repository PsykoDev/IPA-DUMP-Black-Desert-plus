var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module755 = require('./755'),
  module799 = require('./799');

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
  module9.default(I, t);

  var v = I,
    _ = y(),
    R = function () {
      var t,
        n = module13.default(v);

      if (_) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function I() {
    module7.default(this, I);
    return R.apply(this, arguments);
  }

  module8.default(I, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          module799.PABackgroundView,
          {
            style: {
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            },
            source: module755.ImageMap.bg_splash_mo,
          },
          React.default.createElement(module17.Image, {
            style: {
              width: 300,
              resizeMode: 'contain',
            },
            source: module755.ImageMap.img_error_mo,
          })
        );
      },
    },
  ]);
  return I;
})(React.default.Component);

exports.default = v;
