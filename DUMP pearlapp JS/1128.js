var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module1129 = require('./1129'),
  module498 = require('./498'),
  module755 = require('./755'),
  module799 = require('./799');

function V() {
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
      L = V(),
      x = function () {
        var t,
          n = module13.default(module406);

        if (L) {
          var u = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function T() {
      module7.default(this, T);
      return x.apply(this, arguments);
    }

    module8.default(T, [
      {
        key: 'gotoStore',
        value: function () {
          if (module498.SystemManager.isAndroid()) module17.Linking.openURL('market://details?id=com.pearlabyss.pearlapp');
          else module17.Linking.openURL('itms-apps://itunes.apple.com/app/apple-store/id1460559702');
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          return React.default.createElement(
            module799.PABackgroundView,
            {
              style: module1129.default.container,
            },
            React.default.createElement(module17.Image, {
              style: module1129.default.appLogo,
              source: module755.ImageMap.app_splash_mo,
            }),
            module498.SystemManager.getMarketAppVersion() === module498.SystemManager.appVersion
              ? React.default.createElement(
                  module17.Text,
                  {
                    style: module1129.default.alarmVersionText,
                  },
                  this.props.uiLanguage.Text_Newest_Version
                )
              : React.default.createElement(
                  module17.Text,
                  {
                    style: module1129.default.alarmVersionText,
                  },
                  this.props.uiLanguage.Text_Previous_Version
                ),
            React.default.createElement(
              module17.Text,
              {
                style: module1129.default.nowVersionText,
              },
              this.props.uiLanguage.Text_Latest_Version
            ),
            React.default.createElement(
              module17.Text,
              {
                style: module1129.default.nowVersionNumber,
              },
              module498.SystemManager.appVersion
            ),
            React.default.createElement(module799.PARoundButton, {
              style: {
                marginTop: 30,
                alignItems: 'center',
              },
              visible: module498.SystemManager.getMarketAppVersion() !== module498.SystemManager.appVersion,
              title: this.props.uiLanguage.Confirm_Required_Update,
              onPress: function () {
                return t.gotoStore();
              },
            })
          );
        },
      },
    ]);
    return T;
  })(React.default.Component),
  x = module406.connect(function (t) {
    return {
      uiLanguage: t.system.uiLanguage,
    };
  })(L);

exports.default = x;
