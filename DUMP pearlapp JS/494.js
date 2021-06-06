var regeneratorRuntime = require('regenerator-runtime'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module495 = require('./495'),
  R = require(d[12]),
  module497 = require('./497'),
  module498 = require('./498'),
  module613 = require('./613'),
  module609 = require('./609'),
  module745 = require('./745');

function L() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (n) {
    return false;
  }
}

var b = (function (n) {
    module9.default(b, n);

    var t = b,
      React = L(),
      C = function () {
        var n,
          o = module13.default(t);

        if (React) {
          var s = module13.default(this).constructor;
          n = Reflect.construct(o, arguments, s);
        } else n = o.apply(this, arguments);

        return module11.default(this, n);
      };

    function b(n) {
      module7.default(this, b);
      return C.call(this, n);
    }

    module8.default(b, [
      {
        key: 'alertStoreUpdate',
        value: function () {
          module609.simpleAlert({
            title: this.props.uiLanguage.Required_Update_Title,
            content: this.props.uiLanguage.Required_Update_Content,
            confirmText: this.props.uiLanguage.Confirm_Required_Update,
            confirmOnPress: function () {
              if (module498.SystemManager.isAndroid()) module17.Linking.openURL('market://details?id=com.pearlabyss.pearlapp');
              else module17.Linking.openURL('itms-apps://itunes.apple.com/app/apple-store/id1460559702');
            },
          });
        },
      },
      {
        key: 'hideSplashScreen',
        value: function () {
          setTimeout(function () {
            if (module498.SystemManager.isIos()) module495.default.hide();
            else if (module498.SystemManager.isAndroid()) R.default.setColor('#FFFFFF');
          }, 100);
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var n, t, s, p, module9, f, c, l, h;
          return regeneratorRuntime.default.async(
            function (C) {
              for (;;)
                switch ((C.prev = C.next)) {
                  case 0:
                    module613.bindAction.system.setUILanguage(this.props.uiLanguageCode);
                    module498.SystemManager.initAppVersion();
                    n = module498.RemoteConfigManager.fetchConfig('BOSS_TIME_TABLE');
                    t = module498.RemoteConfigManager.fetchConfig('COMMON');
                    C.next = 6;
                    return regeneratorRuntime.default.awrap(module498.RemoteConfigManager.fetchConfig(module745.BuildKey));

                  case 6:
                    if (undefined !== (s = C.sent)) {
                      C.next = 10;
                      break;
                    }

                    this.props.navigation.navigate('AppRoute_Error');
                    return C.abrupt('return', this.hideSplashScreen());

                  case 10:
                    if ((module498.RemoteConfigManager.setConfig('appConfig', s), !module498.RemoteConfigManager.getConfig('appConfig/OPTION/REQUIRED_UPDATE'))) {
                      C.next = 15;
                      break;
                    }

                    this.alertStoreUpdate();
                    this.props.navigation.navigate('AppRoute_RequiredUpdate');
                    return C.abrupt('return', this.hideSplashScreen());

                  case 15:
                    if (!module498.RemoteConfigManager.getConfig('appConfig/OPTION/IS_INSPECTION')) {
                      C.next = 18;
                      break;
                    }

                    this.props.navigation.navigate('AppRoute_Inspection');
                    return C.abrupt('return', this.hideSplashScreen());

                  case 18:
                    if ('LIVE' != module498.RemoteConfigManager.getConfig('appConfig/CONFIG_TYPE')) {
                      n = module498.RemoteConfigManager.fetchConfig('BOSS_TIME_TABLE_TEST');
                      t = module498.RemoteConfigManager.fetchConfig('COMMON_TEST');
                    }

                    C.next = 21;
                    return regeneratorRuntime.default.awrap(t);

                  case 21:
                    if (undefined !== (p = C.sent)) {
                      C.next = 25;
                      break;
                    }

                    this.props.navigation.navigate('AppRoute_Error');
                    return C.abrupt('return', this.hideSplashScreen());

                  case 25:
                    module498.RemoteConfigManager.setConfig('appCommonConfig', p);
                    module9 = module498.SystemManager.fetchIpCountryCode(module498.RemoteConfigManager.getConfig('appCommonConfig/API/IP_CHECK'));

                    if (module498.SystemManager.isAndroid() && this.props.needInitAndroidChannel) {
                      new module498.NotificationManager().initChannelForAndroid();
                      module613.bindAction.service.completeInitAndroidChannel();
                    }

                    C.next = 30;
                    return regeneratorRuntime.default.awrap(n);

                  case 30:
                    if (((f = C.sent), module498.RemoteConfigManager.setConfig('boss', f), 'PC' != this.props.platform || 'KR' != this.props.region || this.props.isLoggined)) {
                      C.next = 35;
                      break;
                    }

                    C.next = 35;
                    return regeneratorRuntime.default.awrap(module9);

                  case 35:
                    if (!this.props.isLoggined) {
                      C.next = 40;
                      break;
                    }

                    C.next = 38;
                    return regeneratorRuntime.default.awrap(module497.getGenericPassword());

                  case 38:
                    if ((c = C.sent)) module613.bindAction.account.changeToken(c.username, c.password);

                  case 40:
                    if (this.props.isFinishedDefaultSetting) {
                      module498.SystemManager.fetchFirebaseCloudToken();
                      l = module498.ServiceManager.getPlatformKey(this.props.platform, this.props.region);
                      module498.RemoteConfigManager.setConfig('config', module498.RemoteConfigManager.getConfig('appConfig/PLATFORMS/' + l));
                      module498.RemoteConfigManager.setConfig('common', module498.RemoteConfigManager.getConfig('appCommonConfig/PLATFORMS/' + l));

                      if (this.props.isLoggined) {
                        h = module498.SystemManager.generateGroupKey();
                        if (!module498.BossNotificationManager.checkGroupExist(h)) module613.bindAction.service.addGroupKey(h);
                        module498.BossNotificationManager.checkNotificationUpdate(h);
                        module613.bindAction.account.checkAccountIsValid();
                      }

                      this.props.navigation.navigate('AppRoute_Main');
                    } else this.props.navigation.navigate('AppRoute_DefaultSetting');

                    this.hideSplashScreen();

                  case 42:
                  case 'end':
                    return C.stop();
                }
            },
            null,
            this,
            null,
            Promise
          );
        },
      },
      {
        key: 'render',
        value: function () {
          return null;
        },
      },
    ]);
    return b;
  })(React.Component),
  I = module406.connect(function (n) {
    return {
      platform: n.system.platform,
      region: n.system.region,
      uiLanguageCode: n.system.uiLanguageCode,
      uiLanguage: n.system.uiLanguage,
      isFinishedDefaultSetting: n.system.isFinishedDefaultSetting,
      isLoggined: n.account.isLoggined,
      bossNotifications: n.service.bossNotifications,
      needInitAndroidChannel: n.service.needInitAndroidChannel,
    };
  })(b);

exports.default = I;
