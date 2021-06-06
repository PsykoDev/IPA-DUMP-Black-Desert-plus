var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module1098 = require('./1098'),
  module1099 = require('./1099'),
  module755 = require('./755'),
  module799 = require('./799');

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

var w = (function (t) {
    module9.default(b, t);

    var n = b,
      module406 = E(),
      w = function () {
        var t,
          o = module13.default(n);

        if (module406) {
          var u = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, u);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function b() {
      module7.default(this, b);
      return w.apply(this, arguments);
    }

    module8.default(b, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.uiLanguage,
            o = t.navigation,
            u = t.isLoggined;
          return React.default.createElement(
            module17.SafeAreaView,
            {
              style: [
                module1098.default.container,
                {
                  backgroundColor: '#645148',
                },
              ],
            },
            React.default.createElement(
              module17.View,
              {
                style: [
                  module1098.default.title,
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: u ? 'space-between' : 'center',
                  },
                ],
              },
              React.default.createElement(module17.View, {
                style: {
                  marginStart: u ? 40 : 0,
                },
              }),
              React.default.createElement(
                module17.Text,
                {
                  style: {
                    fontSize: 20,
                    color: 'white',
                  },
                },
                n.Text_Alarm_List
              ),
              React.default.createElement(module799.PAImageButton, {
                style: {
                  marginEnd: 16,
                },
                width: 24,
                visible: u,
                source: module755.ImageMap.icn_alarm_setting_mo,
                onPress: function () {
                  return o.navigate('MainRoute_NotificationSetting');
                },
                accessibilityLabel: 'RightMenu_NotifiactionSetting',
              })
            ),
            React.default.createElement(module799.BorderLine, {
              color: module755.Color.borderLine,
              marginTop: 0,
              marginBottom: 0,
            }),
            u &&
              React.default.createElement(
                module17.View,
                {
                  style: module1098.default.content,
                },
                React.default.createElement(module1099.default, null)
              )
          );
        },
      },
    ]);
    return b;
  })(React.Component),
  b = module406.connect(function (t) {
    return {
      region: t.system.region,
      uiLanguage: t.system.uiLanguage,
      accessToken: t.account.accessToken,
      isLoggined: t.account.isLoggined,
    };
  })(w);

exports.default = b;
