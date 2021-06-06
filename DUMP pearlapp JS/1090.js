var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module1091 = require('./1091'),
  module1092 = require('./1092'),
  module1093 = require('./1093'),
  module1095 = require('./1095'),
  module1096 = require('./1096'),
  module799 = require('./799'),
  module613 = require('./613'),
  module609 = require('./609'),
  module755 = require('./755'),
  module498 = require('./498'),
  module650 = require('./650'),
  module714 = require('./714');

function N() {
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

var E = (function (n) {
    module9.default(T, n);

    var t = T,
      module406 = N(),
      E = function () {
        var n,
          o = module13.default(t);

        if (module406) {
          var u = module13.default(this).constructor;
          n = Reflect.construct(o, arguments, u);
        } else n = o.apply(this, arguments);

        return module11.default(this, n);
      };

    function T(n) {
      var t;
      module7.default(this, T);
      (t = E.call(this, n)).state = {
        isLoading: false,
      };
      return t;
    }

    module8.default(T, [
      {
        key: 'getHeaderContent',
        value: function () {
          var n = this;
          return this.props.isLoggined
            ? this.props.platform == this.props.linkingPlatform && this.props.region == this.props.linkingRegion
              ? React.default.createElement(
                  module17.Text,
                  {
                    style: module1091.default.userNickname,
                  },
                  this.props.userNickname
                )
              : undefined != this.props.linkingPlatform && undefined != this.props.linkingRegion
              ? React.default.createElement(module1092.default, {
                  title: this.props.uiLanguage.Alert_Disharmony_Account_Title,
                  content: this.props.uiLanguage.Alert_Disharmony_Account_Alarm_Content,
                  joinTitle: this.props.uiLanguage.Text_Button_Move_Title,
                  onPress: function () {
                    module613.bindAction.system.setPlatform(n.props.linkingPlatform);
                    module613.bindAction.system.setRegion(n.props.linkingRegion);
                    module613.bindAction.service.manageSystemTopic(false, n.props.platform, n.props.region, n.props.uiLanguage.LanguageCode);
                    module613.bindAction.service.manageSystemTopic(true, n.props.linkingPlatform, n.props.linkingRegion, n.props.uiLanguage.LanguageCode);
                  },
                })
              : undefined
            : null;
        },
      },
      {
        key: 'getHeaderStyle',
        value: function () {
          return this.props.isLoggined
            ? this.props.platform == this.props.linkingPlatform && this.props.region == this.props.linkingRegion
              ? module1091.default.smallHeaderContainer
              : undefined == this.props.linkingPlatform && undefined == this.props.linkingRegion
              ? module1091.default.smallHeaderContainer
              : module1091.default.bigHeaderContainer
            : module1091.default.smallHeaderContainer;
        },
      },
      {
        key: 'getContentStyle',
        value: function () {
          return this.props.isLoggined
            ? this.props.platform == this.props.linkingPlatform && this.props.region == this.props.linkingRegion
              ? module1091.default.bigContentsContainer
              : undefined == this.props.linkingPlatform && undefined == this.props.linkingRegion
              ? module1091.default.bigContentsContainer
              : module1091.default.smallContentsContainer
            : module1091.default.bigContentsContainer;
        },
      },
      {
        key: 'render',
        value: function () {
          var n = this;
          return React.default.createElement(
            module17.SafeAreaView,
            {
              style: module1091.default.container,
            },
            React.default.createElement(
              module17.ScrollView,
              {
                style: this.getContentStyle(),
              },
              React.default.createElement(
                module17.View,
                {
                  style: this.getHeaderStyle(),
                },
                React.default.createElement(module799.PAButton, {
                  buttonColor: module755.Color.borderLine,
                  title: this.props.platform + ' - ' + this.props.region,
                  titleColor: 'white',
                  width: 70,
                  height: 20,
                  fontSize: 9,
                  onPress: function () {
                    module650.NavigationService.navigate({
                      router: module650.NavigationService.routers.MainRoute_DefaultSetting,
                      needLogin: false,
                      needAccountLinking: false,
                    });
                  },
                }),
                this.getHeaderContent()
              ),
              React.default.createElement(
                module17.SafeAreaView,
                null,
                React.default.createElement(module17.View, {
                  style: {
                    marginTop: 16,
                  },
                }),
                React.default.createElement(module1096.default, {
                  title: this.props.uiLanguage.Hamburger_Guide,
                  onPress: function () {
                    return module650.NavigationService.navigate({
                      url: module714.replacedUrl.guide(n.props.region),
                      title: n.props.uiLanguage.Hamburger_Guide,
                      router: module650.NavigationService.routers.MainRoute_ContentWeb,
                      needLogin: false,
                      needAccountLinking: false,
                    });
                  },
                  source: module755.ImageMap.icn_nav_guide,
                  visible: module498.RemoteConfigManager.isValidConfigValue('config/URL/GUIDE'),
                  accessibilityLabel: 'LeftMenu_Guide',
                }),
                React.default.createElement(module1096.default, {
                  title: this.props.uiLanguage.Hamburger_News,
                  onPress: function () {
                    module650.NavigationService.navigate({
                      url: module714.replacedUrl.news(n.props.region),
                      title: n.props.uiLanguage.Hamburger_News,
                      router: module650.NavigationService.routers.MainRoute_ContentWeb,
                      needLogin: false,
                      needAccountLinking: false,
                    });
                  },
                  source: module755.ImageMap.icn_news,
                  visible: module498.RemoteConfigManager.isValidConfigValue('config/URL/GUIDE'),
                  accessibilityLabel: 'LeftMenu_News',
                }),
                React.default.createElement(module1096.default, {
                  title: this.props.uiLanguage.Hamburger_Forum,
                  onPress: function () {
                    module609.simpleAlert({
                      title: n.props.uiLanguage.Forum_Linking_MessageTitle,
                      content: n.props.uiLanguage.Forum_Linking_Message,
                      confirmText: n.props.uiLanguage.Yes,
                      confirmOnPress: function () {
                        module17.Linking.canOpenURL(module498.RemoteConfigManager.getConfig('config/URL/FORUM')).then(function (t) {
                          if (t) module17.Linking.openURL(module498.RemoteConfigManager.getConfig('config/URL/FORUM'));
                          else
                            module609.simpleAlert({
                              content: n.props.uiLanguage.Alert_LeftMenu_Error_Msg1,
                              confirmText: n.props.uiLanguage.Yes,
                            });
                        });
                      },
                      cancelText: n.props.uiLanguage.No,
                    });
                  },
                  source: module755.ImageMap.icn_nav_forum,
                  visible: module498.RemoteConfigManager.isValidConfigValue('config/URL/FORUM'),
                  accessibilityLabel: 'LeftMenu_Forum',
                }),
                React.default.createElement(module1096.default, {
                  title: this.props.uiLanguage.Hamburger_Community,
                  onPress: function () {
                    module650.NavigationService.navigate({
                      url: module714.replacedUrl.community(n.props.region, n.props.regionLanguage),
                      title: n.props.uiLanguage.Hamburger_Community,
                      router: module650.NavigationService.routers.MainRoute_ContentWeb,
                      needLogin: true,
                      needAccountLinking: true,
                    });
                  },
                  source: module755.ImageMap.icn_nav_forum,
                  visible: module498.RemoteConfigManager.isValidConfigValue('config/URL/COMMUNITY'),
                  accessibilityLabel: 'LeftMenu_Community',
                }),
                React.default.createElement(module1096.default, {
                  title: this.props.uiLanguage.Hamburger_TV,
                  onPress: function () {
                    module650.NavigationService.navigate({
                      url: module714.replacedUrl.blackDesertTV(n.props.regionLanguage),
                      title: n.props.uiLanguage.Setting_BlackDesert_TV,
                      router: module650.NavigationService.routers.MainRoute_ContentWeb,
                      needLogin: false,
                      needAccountLinking: false,
                    });
                  },
                  source: module755.ImageMap.icn_nav_tv,
                  visible: module498.RemoteConfigManager.isValidConfigValue('config/URL/TV'),
                  accessibilityLabel: 'LeftMenu_TV',
                }),
                React.default.createElement(module1096.default, {
                  title: this.props.uiLanguage.Hamburger_Coupon,
                  onPress: function () {
                    module650.NavigationService.navigate({
                      url: module714.replacedUrl.coupon(n.props.region, n.props.regionLanguage),
                      title: n.props.uiLanguage.Hamburger_Coupon,
                      router: module650.NavigationService.routers.MainRoute_CertifiedWeb,
                      needLogin: true,
                      needAccountLinking: true,
                    });
                  },
                  source: module755.ImageMap.icn_nav_coupon,
                  visible: module498.RemoteConfigManager.isValidConfigValue('config/URL/REEDEM_COUPON'),
                  accessibilityLabel: 'LeftMenu_Coupon',
                }),
                React.default.createElement(module1096.default, {
                  title: this.props.uiLanguage.Hamburger_Market,
                  onPress: function () {
                    module650.NavigationService.navigate({
                      url: module714.replacedUrl.market(n.props.region, n.props.regionLanguage),
                      title: n.props.uiLanguage.Hamburger_Market,
                      router: module650.NavigationService.routers.MainRoute_CertifiedWeb,
                      needLogin: true,
                      needAccountLinking: true,
                    });
                  },
                  source: module755.ImageMap.icn_nav_trade,
                  visible: module498.RemoteConfigManager.isValidConfigValue('config/URL/MARKET'),
                  accessibilityLabel: 'LeftMenu_Market',
                }),
                React.default.createElement(module1096.default, {
                  title: this.props.uiLanguage.Hamburger_Boss,
                  onPress: function () {
                    module650.NavigationService.navigate({
                      router: module650.NavigationService.routers.MainRoute_BossTimeTable,
                      needLogin: false,
                      needAccountLinking: false,
                    });
                  },
                  source: module755.ImageMap.icn_boss_menu,
                  accessibilityLabel: 'LeftMenu_Boss',
                }),
                React.default.createElement(module1096.default, {
                  title: this.props.uiLanguage.Hamburger_FAQAndSupports,
                  onPress: function () {
                    module650.NavigationService.navigate({
                      url: module714.replacedUrl.FAQSupport(n.props.platform, n.props.region, n.props.regionLanguage),
                      title: n.props.uiLanguage.Hamburger_FAQAndSupports,
                      router: module650.NavigationService.routers.MainRoute_CertifiedWeb,
                      needLogin: true,
                      needAccountLinking: false,
                    });
                  },
                  source: module755.ImageMap.icn_nav_faq,
                  visible: module498.RemoteConfigManager.isValidConfigValue('config/URL/FAQ_SUPPORT'),
                  accessibilityLabel: 'LeftMenu_FAQ',
                }),
                React.default.createElement(module799.BorderLine, {
                  color: module755.Color.borderLine,
                  marginTop: 4,
                  marginBottom: 4,
                }),
                React.default.createElement(module1096.default, {
                  title: this.props.uiLanguage.Hamburger_Settings,
                  onPress: function () {
                    module650.NavigationService.navigate({
                      router: module650.NavigationService.routers.MainRoute_Setting,
                      needLogin: false,
                      needAccountLinking: false,
                    });
                  },
                  source: module755.ImageMap.icn_nav_setting,
                  visible: true,
                  accessibilityLabel: 'LeftMenu_Setting',
                }),
                React.default.createElement(module1096.default, {
                  title: this.props.uiLanguage.Hamburger_Login,
                  onPress: function () {
                    n.props.navigation.navigate('MainRoute_Login');
                  },
                  source: module755.ImageMap.icn_login,
                  visible: !this.props.isLoggined,
                  accessibilityLabel: 'LeftMenu_Login',
                }),
                React.default.createElement(module1096.default, {
                  title: this.props.uiLanguage.Hamburger_Logout,
                  onPress: function () {
                    module609.simpleAlert({
                      title: n.props.uiLanguage.Alert_Logout_Title,
                      content: n.props.uiLanguage.Alert_Logout_Msg,
                      confirmText: n.props.uiLanguage.Yes,
                      confirmOnPress: function () {
                        module613.bindAction.account.fetchLogout();
                      },
                      cancelText: n.props.uiLanguage.No,
                    });
                  },
                  source: module755.ImageMap.icn_logout,
                  visible: this.props.isLoggined,
                  accessibilityLabel: 'LeftMenu_Logout',
                })
              )
            ),
            React.default.createElement(module1093.default, {
              navigation: this.props.navigation,
              platform: this.props.platform,
              region: this.props.region,
              visible: undefined !== module498.RemoteConfigManager.getConfig('config/OPTION/SNS_LINK_LIST'),
            }),
            React.default.createElement(module1095.default, null),
            React.default.createElement(module799.WaitModal, {
              loading: this.props.loginProgress || this.props.logoutProgress,
            })
          );
        },
      },
    ]);
    return T;
  })(React.Component),
  T = module406.connect(function (n) {
    return {
      platform: n.system.platform,
      region: n.system.region,
      uiLanguage: n.system.uiLanguage,
      regionLanguage: n.system.regionLanguage,
      isLoggined: n.account.isLoggined,
      accessToken: n.account.accessToken,
      linkingPlatform: n.account.linkingPlatform,
      linkingRegion: n.account.linkingRegion,
      userNickname: n.account.userNickname,
      loginProgress: n.progress.loginProgress,
      logoutProgress: n.progress.logoutProgress,
    };
  })(E);

exports.default = T;
