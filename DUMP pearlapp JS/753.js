var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module754 = require('./754'),
  module799 = require('./799'),
  module613 = require('./613'),
  module755 = require('./755'),
  module609 = require('./609'),
  module498 = require('./498');

function E() {
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
    module9.default(T, t);

    var module406 = T,
      L = E(),
      I = function () {
        var t,
          n = module13.default(module406);

        if (L) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function T(t) {
      var l;
      module7.default(this, T);
      (l = I.call(this, t)).state = {
        isPlatformSelected: false,
        selectedPlatform: l.props.platform,
      };
      return l;
    }

    module8.default(T, [
      {
        key: 'next',
        value: function () {
          if (this.state.isPlatformSelected) {
            if (this.props.isLoggined && this.props.platform != this.state.selectedPlatform)
              return module609.simpleAlert({
                content: this.props.uiLanguage.Alert_Need_Logout_To_Move,
                confirmText: this.props.uiLanguage.Yes,
                confirmOnPress: function () {
                  module613.bindAction.account.fetchLogout();
                },
                cancelText: this.props.uiLanguage.No,
              });
            this.moveToRegionScreen();
          }
        },
      },
      {
        key: 'moveToRegionScreen',
        value: function () {
          this.props.navigation.navigate('Beginning_Region', {
            selectedPlatform: this.state.selectedPlatform,
            param: this.props.navigation.getParam('param', 'default'),
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
              accessibilityLabel: 'PlatformScreen_Start',
            },
            React.default.createElement(
              module17.View,
              {
                style: module754.default.title,
              },
              React.default.createElement(
                module17.View,
                {
                  style: {
                    marginTop: 20,
                  },
                },
                React.default.createElement(
                  module17.Text,
                  {
                    style: module754.default.titleStyle,
                  },
                  this.props.uiLanguage.Select_Platform
                ),
                React.default.createElement(
                  module17.Text,
                  {
                    style: module754.default.contentStyle,
                  },
                  this.props.uiLanguage.Select_Platform_Guide
                )
              )
            ),
            React.default.createElement(
              module17.View,
              {
                style: module754.default.content,
              },
              React.default.createElement(module17.Image, {
                style: module754.default.logo,
                source: module755.ImageMap.u_channel_logo_mo,
              }),
              React.default.createElement(module17.View, {
                style: {
                  marginTop: 30,
                },
              }),
              React.default.createElement(
                module799.PARadioGroup,
                {
                  initValue: this.props.platform,
                  onSelectChange: function (n) {
                    t.setState({
                      selectedPlatform: n,
                      isPlatformSelected: true,
                    });
                  },
                },
                module498.ServiceManager.getPlatforms().map(function (t) {
                  return 'PC' == t && 'INSPECTION' == module498.RemoteConfigManager.getConfig('appConfig/CONFIG_TYPE')
                    ? React.default.createElement(module17.View, {
                        key: t,
                      })
                    : React.default.createElement(module799.PARadioButton, {
                        key: t,
                        title: t,
                        accessibilityLabel: 'PlatformScreen_' + t,
                      });
                })
              )
            ),
            React.default.createElement(
              module17.View,
              {
                style: [
                  module754.default.footer,
                  {
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginBottom: module498.UIManager.marginSizeWithMax(5, 30),
                  },
                ],
              },
              React.default.createElement(module799.PARoundButton, {
                width: module498.UIManager.getWidth(0.92),
                borderRadius: 32,
                isActive: this.state.isPlatformSelected,
                title: this.props.uiLanguage.Text_Select_Local_Next,
                onPress: function () {
                  return t.next();
                },
                accessibilityLabel: 'PlatformScreen_Next',
              }),
              React.default.createElement(
                module17.View,
                {
                  style: module754.default.nav,
                },
                React.default.createElement(module17.Image, {
                  style: module754.default.activeNav,
                  source: module755.ImageMap.icn_nav_active_mo,
                }),
                React.default.createElement(module17.Image, {
                  style: module754.default.nonActiveNav,
                  source: module755.ImageMap.icn_nav_mo,
                }),
                React.default.createElement(module17.Image, {
                  style: module754.default.nonActiveNav,
                  source: module755.ImageMap.icn_nav_mo,
                })
              )
            ),
            React.default.createElement(module799.WaitModal, {
              loading: this.props.logoutProgress,
            })
          );
        },
      },
    ]);
    return T;
  })(React.default.Component),
  I = module406.connect(function (t) {
    return {
      uiLanguage: t.system.uiLanguage,
      platform: t.system.platform,
      region: t.system.region,
      isFinishedDefaultSetting: t.system.isFinishedDefaultSetting,
      accessToken: t.account.accessToken,
      isLoggined: t.account.isLoggined,
      logoutProgress: t.progress.logoutProgress,
    };
  })(L);

exports.default = I;
