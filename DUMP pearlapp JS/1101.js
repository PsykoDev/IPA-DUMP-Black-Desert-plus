var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module406 = require('./406'),
  module1102 = require('./1102'),
  module799 = require('./799'),
  module498 = require('./498'),
  module714 = require('./714'),
  module651 = require('./651');

function P() {
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

var L = (function (t) {
    module9.default(b, t);

    var module406 = b,
      L = P(),
      y = function () {
        var t,
          n = module13.default(module406);

        if (L) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function b() {
      module7.default(this, b);
      return y.apply(this, arguments);
    }

    module8.default(b, [
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            o = n.accountID,
            u = n.isLoggined,
            c = n.uiLanguage,
            l = n.platform,
            f = n.region,
            P = n.navigation;
          return React.default.createElement(
            module799.PABackgroundScrollView,
            {
              style: module1102.default.content,
            },
            React.default.createElement(module799.PASettingArrowMenu, {
              title: c.Setting_Account,
              value: o,
              onPress: function () {
                P.navigate('MainRoute_Account', {
                  isLoggined: u,
                  platform: t.props.platform,
                });
              },
              accessibilityLabel: 'SettingScreen_Account',
            }),
            React.default.createElement(module799.PASettingArrowMenu, {
              title: c.Setting_Platform_And_Region,
              value: l + '/' + f,
              onPress: function () {
                P.navigate('MainRoute_DefaultSetting');
              },
              accessibilityLabel: 'SettingScreen_Platform_And_Region',
            }),
            React.default.createElement(module799.PASettingArrowMenu, {
              title: c.Setting_Language,
              value: c.LanguageType,
              onPress: function () {
                P.navigate('MainRoute_Lang');
              },
              accessibilityLabel: 'SettingScreen_Language',
            }),
            React.default.createElement(module799.PASettingArrowMenu, {
              title: c.Setting_Push_Alarm,
              onPress: function () {
                P.navigate('MainRoute_NotificationSetting');
              },
              visible: u,
              accessibilityLabel: 'SettingScreen_Push_Alarm',
            }),
            React.default.createElement(module799.BorderLine, null),
            React.default.createElement(module799.PASettingArrowMenu, {
              title: c.Setting_App_Version,
              value: module498.SystemManager.getMarketAppVersion() === module498.SystemManager.appVersion ? c.Setting_App_New_Version : c.Setting_App_Previous_Version,
              onPress: function () {
                P.navigate('MainRoute_AppVersion');
              },
              accessibilityLabel: 'SettingScreen_App_Version',
            }),
            React.default.createElement(module799.PASettingArrowMenu, {
              title: c.Setting_Privacy_Policy,
              onPress: function () {
                P.navigate(module651.NavigationService.routers.MainRoute_ContentWeb, {
                  returnUrl: module714.replacedUrl.privacyPolicy(t.props.region, t.props.uiLanguage.LanguageCode),
                  title: c.Setting_Privacy_Policy,
                  userAgent: 'pearlApp',
                });
              },
              visible: module498.RemoteConfigManager.isValidConfigValue('config/URL/PRIVACY_POLICY'),
              accessibilityLabel: 'SettingScreen_Privacy_Policy',
            }),
            React.default.createElement(module799.PASettingArrowMenu, {
              title: c.Setting_Terms_Of_Service,
              onPress: function () {
                P.navigate(module651.NavigationService.routers.MainRoute_ContentWeb, {
                  returnUrl: module714.replacedUrl.termsOfService(t.props.region, t.props.uiLanguage.LanguageCode),
                  title: c.Setting_Terms_Of_Service,
                  userAgent: 'pearlApp',
                });
              },
              visible: module498.RemoteConfigManager.isValidConfigValue('config/URL/TERMS_OF_SERVICE'),
              accessibilityLabel: 'SettingScreen_Terms_Of_Service',
            }),
            React.default.createElement(module799.PASettingArrowMenu, {
              title: c.Text_Open_Source_Libraries,
              onPress: function () {
                P.navigate('MainRoute_DefaultWeb', {
                  returnUrl: module498.RemoteConfigManager.getConfig('appCommonConfig/URL/OPENSOURCE_LIBRARIES'),
                  title: t.props.uiLanguage.Text_Open_Source_Libraries,
                  navParam: 'openSourceLibraries',
                });
              },
              accessibilityLabel: 'SettingScreen_Open_Source_Libraries',
            })
          );
        },
      },
    ]);
    return b;
  })(React.default.Component),
  y = module406.connect(function (t) {
    return {
      accountID: t.account.accountID,
      isLoggined: t.account.isLoggined,
      uiLanguage: t.system.uiLanguage,
      platform: t.system.platform,
      region: t.system.region,
    };
  })(L);

exports.default = y;
