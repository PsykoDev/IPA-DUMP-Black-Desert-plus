var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module1013 = require('./1013'),
  module799 = require('./799'),
  module613 = require('./613'),
  module755 = require('./755'),
  module498 = require('./498'),
  module650 = require('./650');

function S() {
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

var _ = (function (t) {
    module9.default(M, t);

    var module406 = M,
      _ = S(),
      A = function () {
        var t,
          n = module13.default(module406);

        if (_) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function M(t) {
      var o;
      module7.default(this, M);
      (o = A.call(this, t)).state = {
        isLanguageSelected: false,
        selectedLanguage: undefined,
      };
      o.selectedPlatform = o.props.navigation.getParam('selectedPlatform');
      o.selectedRegion = o.props.navigation.getParam('selectedRegion');
      o.languages = module498.ServiceManager.getLanguages(o.selectedPlatform, o.selectedRegion);
      o.regionLanguageName = module498.LocalizeManager.getLangNameByCode(o.props.regionLanguage);
      return o;
    }

    module8.default(M, [
      {
        key: 'prev',
        value: function () {
          this.props.navigation.goBack();
        },
      },
      {
        key: 'confirm',
        value: function () {
          if (this.state.isLanguageSelected) {
            module613.bindAction.system.setPlatform(this.selectedPlatform);
            module613.bindAction.system.setRegion(this.selectedRegion);
            module613.bindAction.system.setRegionLanguage(this.state.selectedLanguage);
            var t = module498.ServiceManager.getPlatformKey(this.selectedPlatform, this.selectedRegion);
            module498.RemoteConfigManager.setConfig('config', module498.RemoteConfigManager.getConfig('appConfig/PLATFORMS/' + t));
            module498.RemoteConfigManager.setConfig('common', module498.RemoteConfigManager.getConfig('appCommonConfig/PLATFORMS/' + t));
            if ('login' == this.props.navigation.getParam('param', 'default'))
              module650.NavigationService.navigate({
                url: undefined,
                title: undefined,
                router: module650.NavigationService.routers.MainRoute_Login,
                needLogin: false,
                needAccountLinking: false,
              });
            else {
              t = module498.ServiceManager.getPlatformKey(this.selectedPlatform, this.selectedRegion);
              module650.NavigationService.navigate({
                url: undefined,
                title: undefined,
                router: module650.NavigationService.routers.MainRoute_Home,
                needLogin: false,
                needAccountLinking: false,
              });
            }

            if (this.props.isLoggined) {
              if (this.selectedPlatform != this.props.platform) module613.bindAction.service.moveToOtherPlatform();
              else if (!(this.selectedRegion == this.props.region && this.state.selectedLanguage == this.props.regionLanguage)) {
                module613.bindAction.account.saveLinkingInfo(this.selectedPlatform, this.selectedRegion, this.props.accountLinkInfo);
                module613.bindAction.service.moveToOtherRegionOrLanguage(
                  this.props.platform,
                  this.props.region,
                  this.props.regionLanguage,
                  this.selectedPlatform,
                  this.selectedRegion,
                  this.state.selectedLanguage
                );
              }
              if (this.state.selectedLanguage != this.props.regionLanguage) module613.bindAction.account.setAccountLanguage(this.props.region, this.state.selectedLanguage);
            }

            if (!this.props.isFinishedDefaultSetting) module613.bindAction.system.finishDefaultSetting(true);
          }
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          return React.default.createElement(
            module799.PABackgroundView,
            null,
            React.default.createElement(
              module17.View,
              {
                style: module1013.default.title,
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
                    style: module1013.default.titleStyle,
                  },
                  this.props.uiLanguage.Select_Region_Language
                ),
                React.default.createElement(
                  module17.Text,
                  {
                    style: module1013.default.contentStyle,
                  },
                  this.props.uiLanguage.Select_Region_Language_Guide
                )
              )
            ),
            React.default.createElement(
              module17.View,
              {
                style: module1013.default.content,
              },
              React.default.createElement(
                module799.PARadioGroup,
                {
                  initValue: this.selectedRegion == this.props.region ? this.regionLanguageName : undefined,
                  canInitValue: this.selectedRegion == this.props.region && this.languages.includes(this.regionLanguageName),
                  onSelectChange: function (n) {
                    t.setState({
                      isLanguageSelected: true,
                      selectedLanguage: module498.LocalizeManager.getLangCodeByName(n),
                    });
                  },
                },
                this.languages.map(function (t) {
                  return React.default.createElement(module799.PARadioButton, {
                    key: t,
                    title: t,
                    accessibilityLabel: 'LanguageScreen_' + t,
                  });
                })
              )
            ),
            React.default.createElement(
              module17.View,
              {
                style: module1013.default.footer,
              },
              React.default.createElement(
                module17.View,
                {
                  style: {
                    flexDirection: 'row',
                  },
                },
                React.default.createElement(module799.PARoundButton, {
                  borderRadius: 32,
                  width: module498.UIManager.getWidth(0.45),
                  height: module498.UIManager.getHeight(0.055),
                  title: this.props.uiLanguage.Text_Select_Local_Pre,
                  onPress: function () {
                    return t.prev();
                  },
                }),
                React.default.createElement(module17.View, {
                  style: {
                    width: 8,
                  },
                }),
                React.default.createElement(module799.PARoundButton, {
                  borderRadius: 32,
                  width: module498.UIManager.getWidth(0.45),
                  height: module498.UIManager.getHeight(0.055),
                  isActive: this.state.isLanguageSelected,
                  title: this.props.uiLanguage.Text_Select_Lang_Next,
                  onPress: function () {
                    return t.confirm();
                  },
                  accessibilityLabel: 'LanguageScreen_Next',
                })
              ),
              React.default.createElement(
                module17.View,
                {
                  style: module1013.default.nav,
                },
                React.default.createElement(module17.Image, {
                  style: module1013.default.nonActiveNav,
                  source: module755.ImageMap.icn_nav_mo,
                }),
                React.default.createElement(module17.Image, {
                  style: module1013.default.nonActiveNav,
                  source: module755.ImageMap.icn_nav_mo,
                }),
                React.default.createElement(module17.Image, {
                  style: module1013.default.activeNav,
                  source: module755.ImageMap.icn_nav_active_mo,
                })
              )
            )
          );
        },
      },
    ]);
    return M;
  })(React.default.Component),
  A = module406.connect(function (t) {
    return {
      isLoggined: t.account.isLoggined,
      accountLinkInfo: t.account.accountLinkInfo,
      platform: t.system.platform,
      region: t.system.region,
      regionLanguage: t.system.regionLanguage,
      uiLanguage: t.system.uiLanguage,
      isFinishedDefaultSetting: t.system.isFinishedDefaultSetting,
    };
  })(_);

exports.default = A;
