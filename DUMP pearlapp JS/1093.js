var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module1094 = require('./1094'),
  module498 = require('./498'),
  module755 = require('./755'),
  module648 = require('./648');

function I() {
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

function b(t) {
  switch (t) {
    case 'Instagram':
      return module755.ImageMap.icn_nav_insta;

    case 'Facebook':
      return module755.ImageMap.icn_nav_facebook;

    case 'Twitter':
      return module755.ImageMap.icn_nav_tw;

    case 'Youtube':
      return module755.ImageMap.icn_nav_youtube;

    case 'Discord':
      return module755.ImageMap.icn_nav_dc;

    default:
      return;
  }
}

var M = (function (t) {
  module9.default(R, t);

  var n = R,
    module755 = I(),
    M = function () {
      var t,
        u = module13.default(n);

      if (module755) {
        var c = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, c);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function R(t) {
    module7.default(this, R);
    return M.call(this, t);
  }

  module8.default(R, [
    {
      key: 'render',
      value: function () {
        var t = this,
          n = module498.RemoteConfigManager.getConfig('common/SNS_LINK_LIST/' + this.props.region);

        if (undefined == n) {
          module648.Logger.error(arguments.callee.name, 'Region\uc5d0 \ud574\ub2f9\ud558\ub294 SNS List \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.');
          return null;
        } else
          return React.default.createElement(
            module17.View,
            {
              style: {
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 16,
              },
            },
            this.props.visible &&
              Object.keys(n).map(function (u) {
                return 0 != n[u].length
                  ? React.default.createElement(module1094.default, {
                      key: u,
                      url: n[u],
                      source: b(u),
                      navigation: t.props.navigation,
                    })
                  : null;
              })
          );
      },
    },
  ]);
  return R;
})(React.Component);

exports.default = M;
