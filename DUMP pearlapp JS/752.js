var module6 = require('./6'),
  module437 = require('./437'),
  module652 = require('./652'),
  module753 = require('./753'),
  module1012 = require('./1012'),
  module1014 = require('./1014'),
  module498 = require('./498'),
  module755 = require('./755'),
  module613 = require('./613'),
  C = module652.createStackNavigator(
    {
      Beginning_Platform: {
        screen: module753.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Platform,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'DefaultSettingScreenRoute_Platform',
          };
        },
      },
      Beginning_Region: {
        screen: module1014.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Region,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'DefaultSettingScreenRoute_Region',
          };
        },
      },
      Beginning_Language: {
        screen: module1012.default,
        navigationOptions: function () {
          return {
            headerTitle: module613.store.getState().system.uiLanguage.Setting_Language,
            headerTintColor: module755.Color.headerTitle,
            headerStyle: {
              backgroundColor: module755.Color.mainTheme,
            },
            headerBackAccessibilityLabel: 'DefaultSettingScreenRoute_Language',
          };
        },
      },
    },
    {
      headerMode: 'none',
      defaultNavigationOptions: module498.SystemManager.isAndroid() ? module6.default({}, module652.TransitionPresets.FadeFromBottomAndroid) : undefined,
    }
  ),
  T = module437.createAppContainer(C);

exports.default = T;
