var React = require('react'),
  module652 = require('./652'),
  module1017 = require('./1017'),
  module1089 = require('./1089'),
  module498 = require('./498'),
  module755 = require('./755'),
  module613 = require('./613'),
  module1090 = require('./1090'),
  module1097 = require('./1097'),
  module1101 = require('./1101'),
  module1103 = require('./1103'),
  module1104 = require('./1104'),
  module1105 = require('./1105'),
  module1106 = require('./1106'),
  module1107 = require('./1107'),
  module1118 = require('./1118'),
  module1120 = require('./1120'),
  module1124 = require('./1124'),
  module1126 = require('./1126'),
  module1127 = require('./1127'),
  module1128 = require('./1128'),
  module752 = require('./752'),
  module1130 = require('./1130'),
  module1132 = require('./1132'),
  module1137 = require('./1137'),
  module1139 = require('./1139'),
  module1143 = require('./1143'),
  module1147 = require('./1147'),
  module1148 = require('./1148'),
  module1149 = require('./1149'),
  E = module652.createStackNavigator(
    {
      MainRoute_Home: {
        screen: module1107.default,
        navigationOptions: function (t) {
          var n = t.navigation;
          return {
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            title: module613.store.getState().system.uiLanguage.Hamburger_Main,
            headerTitle: function () {
              return React.default.createElement(module1104.default, null);
            },
            headerLeft: function () {
              return React.default.createElement(module1106.default, {
                navigation: n,
              });
            },
            headerRight: function () {
              return React.default.createElement(module1105.default, {
                navigation: n,
              });
            },
            headerTitleAlign: 'center',
          };
        },
      },
      MainRoute_ContentWeb: {
        screen: module1126.default,
        navigationOptions: function () {
          return {
            headerBackAccessibilityLabel: 'MainRoute_ContentWeb',
          };
        },
      },
      MainRoute_CertifiedWeb: {
        screen: module1127.default,
        navigationOptions: function () {
          return {
            headerBackAccessibilityLabel: 'MainRoute_CertifiedWeb',
          };
        },
      },
      MainRoute_DefaultWeb: {
        screen: module1124.default,
        navigationOptions: function () {
          return {
            headerBackAccessibilityLabel: 'MainRoute_DefaultWeb',
          };
        },
      },
      MainRoute_PayWeb: {
        screen: module1147.default,
        navigationOptions: function () {
          return {
            headerBackAccessibilityLabel: 'MainRoute_PayWeb',
          };
        },
      },
      MainRoute_ChatScreen: {
        screen: module1137.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Setting_GuildChat,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'MainRoute_ChatScreen',
          };
        },
      },
      MainRoute_Setting: {
        screen: module1101.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Hamburger_Settings,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'MainRoute_Setting',
          };
        },
      },
      MainRoute_Account: {
        screen: module1130.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Setting_Account,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'MainRoute_Account',
          };
        },
      },
      MainRoute_NotificationSetting: {
        screen: module1103.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Setting_Push_Alarm,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'MainRoute_NotificationSetting',
          };
        },
      },
      MainRoute_BossNotificationSetting: {
        screen: module1132.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Push_Boss_Timer,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'MainRoute_BossNotificationSetting',
          };
        },
      },
      MainRoute_GuildChatSetting: {
        screen: module1143.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Text_Guild_Chat_Notification,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'MainRoute_GuildChatSetting',
          };
        },
      },
      MainRoute_Lang: {
        screen: module1118.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Setting_Language,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'MainRoute_Lang',
          };
        },
      },
      MainRoute_AppVersion: {
        screen: module1128.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Setting_App_Version,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'MainRoute_AppVersion',
          };
        },
      },
      MainRoute_Login: {
        screen: module1120.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Title_Login,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'MainRoute_Login',
          };
        },
      },
      MainRoute_WebLogin: {
        screen: module1148.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Title_Login,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'MainRoute_WebLogin',
          };
        },
      },
      MainRoute_SocialWebLogin: {
        screen: module1149.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Title_Login,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'MainRoute_WebLogin',
          };
        },
      },
      MainRoute_BossTimeTable: {
        screen: module1139.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Hamburger_Boss,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'MainRoute_BossTimeTable',
          };
        },
      },
      MainRoute_DefaultSetting: {
        screen: module752.default,
        navigationOptions: function () {
          return {
            title: module613.store.getState().system.uiLanguage.Platform,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'MainRoute_DefaultSetting',
          };
        },
      },
    },
    {
      initialRouteName: 'MainRoute_Home',
      defaultNavigationOptions: {
        transitionSpec: module498.SystemManager.isIos() ? module1089.transitionSepcConfigIOS : module1089.transitionSepcConfigAndroid,
        headerStyleInterpolator: module498.SystemManager.isIos() ? module652.HeaderStyleInterpolators.forUIKit : module652.HeaderStyleInterpolators.forNoAnimation,
        cardStyleInterpolator: module498.SystemManager.isIos()
          ? undefined
          : function (t) {
              return module1089.fromBottomToTopAndroid(t);
            },
        headerTitleAlign: module498.SystemManager.isIos() ? 'center' : 'left',
      },
    }
  ),
  G = module1017.createDrawerNavigator(
    {
      ContentStack: E,
    },
    {
      drawerPosition: 'left',
      contentComponent: function (t) {
        return React.default.createElement(module1090.default, t);
      },
      drawerOpenRoute: 'LeftMenu',
      drawerCloseRoute: 'LeftMenuClose',
      drawerToggleRoute: 'LeftMenuToggle',
      overlayColor: 'rgba(0, 0, 0, 0.45)',
      edgeWidth: module498.SystemManager.isIos() ? 16 : undefined,
    }
  ),
  V = module1017.createDrawerNavigator(
    {
      LeftDrawer: {
        screen: G,
        navigationOptions: {
          headerBackTitle: '',
        },
      },
    },
    {
      drawerPosition: 'right',
      contentComponent: function (t) {
        return React.default.createElement(module1097.default, t);
      },
      drawerOpenRoute: 'AlarmMenu',
      drawerCloseRoute: 'AlarmMenuClose',
      drawerToggleRoute: 'AlarmMenuToggle',
      overlayColor: 'rgba(0, 0, 0, 0.45)',
      drawerLockMode: 'locked-open',
      getCustomActionCreators: function (t, o) {
        return {
          toggleOuterDrawer: function () {
            return module1017.DrawerActions.toggleDrawer({
              key: o,
            });
          },
        };
      },
      edgeWidth: module498.SystemManager.isIos() ? 16 : undefined,
    }
  );

exports.default = V;
