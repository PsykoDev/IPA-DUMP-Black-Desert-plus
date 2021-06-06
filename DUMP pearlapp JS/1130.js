var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module847 = require('./847'),
  module1131 = require('./1131'),
  module799 = require('./799'),
  module613 = require('./613'),
  module609 = require('./609'),
  module498 = require('./498'),
  module651 = require('./651');

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

var R = (function (t) {
  module9.default(S, t);

  var module406 = S,
    module847 = y(),
    R = function () {
      var t,
        n = module13.default(module406);

      if (module847) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function S() {
    module7.default(this, S);
    return R.apply(this, arguments);
  }

  module8.default(S, [
    {
      key: 'componentDidMount',
      value: function () {
        this.props.navigation.setParams({
          refreshIcon: function () {
            module613.bindAction.account.refreshLinkingInfo();
          },
        });
      },
    },
    {
      key: 'getNickname',
      value: function (t) {
        if (this.props.isLoggined) {
          for (var n in this.props.accountLinkInfo) {
            var o = this.props.accountLinkInfo[n];
            if (o.linkingPlatform == t) return o.userNickname;
          }

          return this.props.uiLanguage.Setting_Account_No_Linking;
        }

        return this.props.uiLanguage.Text_Content_Need_Login;
      },
    },
    {
      key: 'getRegion',
      value: function (t) {
        if (this.props.isLoggined)
          for (var n in this.props.accountLinkInfo) {
            var o = this.props.accountLinkInfo[n];
            if (o.linkingPlatform == t) return o.linkingRegion;
          }
        return null;
      },
    },
    {
      key: 'logout',
      value: function () {
        module609.simpleAlert({
          title: this.props.uiLanguage.Alert_Logout_Title,
          content: this.props.uiLanguage.Alert_Logout_Msg,
          confirmText: this.props.uiLanguage.Yes,
          confirmOnPress: function () {
            module613.bindAction.account.fetchLogout();
          },
          cancelText: this.props.uiLanguage.No,
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          module799.PABackgroundView,
          {
            style: module1131.default.content,
          },
          React.default.createElement(
            module17.ScrollView,
            null,
            React.default.createElement(module799.PASettingColumnMenu, {
              title: this.props.uiLanguage.Text_Email,
              value: this.props.isLoggined ? this.props.accountID : this.props.uiLanguage.Text_Content_Need_Login,
            }),
            'PC' == this.props.platform &&
              React.default.createElement(module799.PASettingColumnMenu, {
                title: 'PC ' + (null != this.getRegion('PC') ? '- ' + this.getRegion('PC') : ''),
                value: this.getNickname('PC'),
              }),
            'PC' != this.props.platform &&
              React.default.createElement(module799.PASettingColumnMenu, {
                title: 'XBOX ' + (null != this.getRegion('XBOX') ? '- ' + this.getRegion('XBOX') : ''),
                value: this.getNickname('XBOX'),
              }),
            'PC' != this.props.platform &&
              React.default.createElement(module799.PASettingColumnMenu, {
                title: 'PS ' + (null != this.getRegion('PS') ? '- ' + this.getRegion('PS') : ''),
                value: this.getNickname('PS'),
              }),
            React.default.createElement(module799.PASettingArrowMenu, {
              titleStyle: {
                fontWeight: '500',
                fontSize: 16,
              },
              title: this.props.isLoggined ? this.props.uiLanguage.Hamburger_Logout : this.props.uiLanguage.Hamburger_Login,
              onPress: function () {
                if (t.props.isLoggined) t.logout();
                else t.props.navigation.navigate(module651.NavigationService.routers.MainRoute_Login);
              },
            }),
            React.default.createElement(module799.BorderLine, null),
            'PC' != this.props.platform &&
              React.default.createElement(module799.PASettingArrowMenu, {
                titleStyle: {
                  fontWeight: '500',
                  fontSize: 16,
                },
                title: this.props.uiLanguage.Text_Linking_Guide,
                onPress: function () {
                  module651.NavigationService.navigate({
                    url: module498.RemoteConfigManager.getConfig('config/URL/ACCOUNT_LINKING_GUIDE/' + t.props.platform + '/' + t.props.uiLanguage.LanguageCode),
                    title: t.props.uiLanguage.Text_Linking_Guide,
                    router: module651.NavigationService.routers.MainRoute_ContentWeb,
                    needLogin: false,
                    needAccountLinking: false,
                  });
                },
              })
          ),
          React.default.createElement(module799.WaitModal, {
            loading: this.props.logoutProgress || this.props.loginProgress || this.props.refreshLinkingInfoProgress,
          })
        );
      },
    },
  ]);
  return S;
})(React.default.Component);

R.navigationOptions = function (t) {
  var n = t.navigation;
  return {
    headerRight: function () {
      return React.default.createElement(
        module17.TouchableOpacity,
        {
          style: {
            marginEnd: 6,
          },
          onPress: n.getParam('refreshIcon'),
        },
        n.getParam('isLoggined') &&
          'PC' != n.getParam('platform') &&
          React.default.createElement(module847.default, {
            name: 'refresh',
            size: 32,
            color: 'rgb(201,167,104)',
          })
      );
    },
  };
};

var S = module406.connect(function (t) {
  return {
    uiLanguage: t.system.uiLanguage,
    platform: t.system.platform,
    region: t.system.region,
    isNetworkConnected: t.system.isNetworkConnected,
    accountID: t.account.accountID,
    accessToken: t.account.accessToken,
    accountLinkInfo: t.account.accountLinkInfo,
    linkingRegion: t.account.linkingRegion,
    linkingPlatform: t.account.linkingPlatform,
    isLoggined: t.account.isLoggined,
    loginProgress: t.progress.loginProgress,
    logoutProgress: t.progress.logoutProgress,
    refreshLinkingInfoProgress: t.progress.refreshLinkingInfoProgress,
  };
})(R);
exports.default = S;
