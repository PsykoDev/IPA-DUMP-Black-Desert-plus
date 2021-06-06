var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module498 = require('./498'),
  module755 = require('./755');

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

function y(t, n) {
  for (var c = [], u = 1; u < n + 1; u++)
    c[u - 1] =
      u != t
        ? {
            width: 4,
            source: '../../img/05_select/icn_nav_mo.png',
          }
        : {
            width: 13,
            source: '../../img/05_select/icn_nav_active_mo.png',
          };

  return c;
}

var w = (function (t) {
  module9.default(R, t);

  var n = R,
    w = _(),
    M = function () {
      var t,
        c = module13.default(n);

      if (w) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(c, arguments, u);
      } else t = c.apply(this, arguments);

      return module11.default(this, t);
    };

  function R(t) {
    var n;
    module7.default(this, R);
    (n = M.call(this, t)).navList = y(1, 3);
    return n;
  }

  module8.default(R, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          module17.View,
          {
            style: {
              flexDirection: 'row',
              marginTop: module498.UIManager.marginSizeWithMax(5, 10),
            },
          },
          this.navList.map(function (t) {
            return React.default.createElement(module17.Image, {
              style: {
                width: t.width,
                resizeMode: 'contain',
                marginLeft: 3,
              },
              source: module755.ImageMap.icn_nav_mo,
            });
          })
        );
      },
    },
  ]);
  return R;
})(React.Component);

exports.default = w;
