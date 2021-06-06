var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module498 = require('./498'),
  module755 = require('./755'),
  module799 = require('./799'),
  module650 = require('./650'),
  module714 = require('./714');

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

var C = (function (t) {
    module9.default(A, t);

    var n = A,
      module406 = _(),
      C = function () {
        var t,
          o = module13.default(n);

        if (module406) {
          var u = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, u);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function A() {
      module7.default(this, A);
      return C.apply(this, arguments);
    }

    module8.default(A, [
      {
        key: 'render',
        value: function () {
          var t = this;
          return React.default.createElement(
            module17.View,
            {
              style: {
                flexDirection: 'row',
              },
              accessibilityLabel: this.props.accessibilityLabel,
            },
            React.default.createElement(module799.PAImageButton, {
              visible: module498.RemoteConfigManager.isValidConfigValue('config/URL/GUILD_CHAT'),
              width: 40,
              source: module755.ImageMap.icn_chat,
              onPress: function () {
                module650.NavigationService.navigate({
                  url: module714.replacedUrl.guildChat(t.props.region),
                  title: t.props.uiLanguage.Setting_GuildChat,
                  router: module650.NavigationService.routers.MainRoute_ChatScreen,
                  needLogin: true,
                  needAccountLinking: true,
                });
              },
              accessibilityLabel: 'RightHeader_GuildChat',
            }),
            React.default.createElement(module799.PAImageButton, {
              visible: module498.RemoteConfigManager.isValidConfigValue('config/URL/ALARM'),
              width: 40,
              source: module755.ImageMap.icn_alarm_bell,
              onPress: function () {
                t.props.navigation.toggleOuterDrawer();
                t.setState({
                  alarmCount: 0,
                });
              },
              accessibilityLabel: 'RightHeader_Alarm',
            })
          );
        },
      },
    ]);
    return A;
  })(React.Component),
  A = module406.connect(function (t) {
    return {
      uiLanguage: t.system.uiLanguage,
      platform: t.system.platform,
      region: t.system.region,
    };
  })(C);

exports.default = A;
