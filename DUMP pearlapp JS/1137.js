var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module1138 = require('./1138'),
  module799 = require('./799'),
  module755 = require('./755'),
  module651 = require('./651');

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

var P = (function (t) {
  module9.default(P, t);

  var n = P,
    module755 = _(),
    R = function () {
      var t,
        u = module13.default(n);

      if (module755) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, o);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function P(t) {
    module7.default(this, P);
    return R.call(this, t);
  }

  module8.default(P, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          module17.View,
          {
            style: module1138.default.content,
          },
          React.default.createElement(module799.ChatWebView, {
            url: this.props.navigation.getParam('returnUrl', ''),
            navigation: this.props.navigation,
          })
        );
      },
    },
  ]);
  return P;
})(React.Component);

exports.default = P;

P.navigationOptions = function () {
  return {
    headerRight: function () {
      return React.default.createElement(module799.PAImageButton, {
        width: 40,
        source: module755.ImageMap.icn_alarm_bell,
        onPress: function () {
          module651.NavigationService.navigate({
            router: module651.NavigationService.routers.MainRoute_GuildChatSetting,
            needLogin: false,
            needAccountLinking: false,
          });
        },
      });
    },
  };
};
