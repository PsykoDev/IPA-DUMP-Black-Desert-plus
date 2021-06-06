var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module1015 = require('./1015'),
  module799 = require('./799'),
  module613 = require('./613'),
  module755 = require('./755'),
  module498 = require('./498'),
  module609 = require('./609');

function L() {
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

var E = (function (t) {
    module9.default(x, t);

    var module406 = x,
      E = L(),
      S = function () {
        var t,
          n = module13.default(module406);

        if (E) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function x(t) {
      var l;
      module7.default(this, x);
      (l = S.call(this, t)).state = {
        isSelectedRegion: false,
        selectedRegion: undefined,
      };
      l.selectedPlatform = l.props.navigation.getParam('selectedPlatform');
      return l;
    }

    module8.default(x, [
      {
        key: 'prev',
        value: function () {
          this.props.navigation.goBack();
        },
      },
      {
        key: 'next',
        value: function () {
          if (this.state.selectedRegion)
            this.props.isLoggined && 'PC' == this.props.platform && this.props.region != this.state.selectedRegion
              ? module609.simpleAlert({
                  content: this.props.uiLanguage.Alert_Need_Logout_To_Move,
                  confirmText: this.props.uiLanguage.Yes,
                  confirmOnPress: function () {
                    module613.bindAction.account.fetchLogout();
                  },
                  cancelText: this.props.uiLanguage.No,
                })
              : this.move();
        },
      },
      {
        key: 'move',
        value: function () {
          this.props.navigation.navigate('Beginning_Language', {
            selectedPlatform: this.selectedPlatform,
            selectedRegion: this.state.selectedRegion,
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
            null,
            React.default.createElement(
              module17.View,
              {
                style: module1015.default.title,
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
                    style: module1015.default.titleStyle,
                  },
                  this.props.uiLanguage.Text_Select_Local
                ),
                React.default.createElement(
                  module17.Text,
                  {
                    style: module1015.default.contentStyle,
                  },
                  this.props.uiLanguage.Text_Select_Local_Guide
                )
              )
            ),
            React.default.createElement(
              module17.View,
              {
                style: module1015.default.content,
              },
              React.default.createElement(
                module799.PARadioGroup,
                {
                  initValue: this.props.platform == this.selectedPlatform ? this.props.region : undefined,
                  canInitValue: this.props.platform == this.selectedPlatform && module498.ServiceManager.getRegions(this.selectedPlatform).includes(this.props.region),
                  onSelectChange: function (n) {
                    t.setState({
                      selectedRegion: n,
                      isSelectedRegion: true,
                    });
                  },
                },
                module498.ServiceManager.getRegions(this.selectedPlatform).map(function (t) {
                  return React.default.createElement(module799.PARadioButton, {
                    key: t,
                    title: t,
                    accessibilityLabel: 'RegionScreen_' + t,
                  });
                })
              )
            ),
            React.default.createElement(
              module17.View,
              {
                style: module1015.default.footer,
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
                  isActive: this.state.isSelectedRegion,
                  borderRadius: 32,
                  width: module498.UIManager.getWidth(0.45),
                  height: module498.UIManager.getHeight(0.055),
                  title: this.props.uiLanguage.Text_Select_Local_Next,
                  onPress: function () {
                    return t.next();
                  },
                  accessibilityLabel: 'RegionScreen_Next',
                })
              ),
              React.default.createElement(
                module17.View,
                {
                  style: module1015.default.nav,
                },
                React.default.createElement(module17.Image, {
                  style: module1015.default.nonActiveNav,
                  source: module755.ImageMap.icn_nav_mo,
                }),
                React.default.createElement(module17.Image, {
                  style: module1015.default.activeNav,
                  source: module755.ImageMap.icn_nav_active_mo,
                }),
                React.default.createElement(module17.Image, {
                  style: module1015.default.nonActiveNav,
                  source: module755.ImageMap.icn_nav_mo,
                })
              )
            )
          );
        },
      },
    ]);
    return x;
  })(React.default.Component),
  S = module406.connect(function (t) {
    return {
      isLoggined: t.account.isLoggined,
      uiLanguage: t.system.uiLanguage,
      platform: t.system.platform,
      region: t.system.region,
    };
  })(E);

exports.default = S;
