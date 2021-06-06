var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module1140 = require('./1140'),
  module1142 = require('./1142'),
  module755 = require('./755'),
  module799 = require('./799'),
  module498 = require('./498'),
  module609 = require('./609'),
  module651 = require('./651');

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

var x = (function (t) {
    module9.default(B, t);

    var n = B,
      module406 = S(),
      x = function () {
        var t,
          o = module13.default(n);

        if (module406) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, l);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function B(t) {
      module7.default(this, B);
      return x.call(this, t);
    }

    module8.default(B, [
      {
        key: 'render',
        value: function () {
          var t = this,
            n = module498.ServiceManager.getPlatformKey(this.props.platform, this.props.region),
            o = module498.RemoteConfigManager.getConfig('boss')[n][this.props.region];
          return React.default.createElement(
            module17.ScrollView,
            null,
            React.default.createElement(
              module17.View,
              {
                style: {
                  flex: 1,
                  alignItems: 'center',
                  marginTop: 36,
                  marginBottom: 36,
                },
              },
              React.default.createElement(
                module17.View,
                {
                  style: {
                    alignItems: 'center',
                  },
                },
                React.default.createElement(
                  module17.View,
                  {
                    style: {
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 65,
                      height: 25,
                      borderColor: module755.Color.borderLine,
                      borderRadius: 6,
                      borderWidth: 2,
                      marginBottom: 4,
                    },
                  },
                  React.default.createElement(
                    module17.Text,
                    {
                      style: {
                        fontSize: 16,
                        color: module755.Color.mainText,
                        fontWeight: 'bold',
                      },
                    },
                    this.props.region
                  )
                ),
                React.default.createElement(
                  module17.Text,
                  {
                    style: {
                      color: module755.Color.mainText,
                    },
                  },
                  o.TimeZone
                ),
                React.default.createElement(
                  module17.Text,
                  {
                    style: {
                      fontSize: 24,
                      color: module755.Color.black,
                      marginBottom: 24,
                    },
                  },
                  this.props.uiLanguage.Text_World_Boss_TimeTable
                ),
                React.default.createElement(
                  module17.Text,
                  {
                    style: {
                      color: module755.Color.mainText,
                      textAlign: 'center',
                      marginStart: 4,
                      marginEnd: 4,
                    },
                  },
                  this.props.uiLanguage.Text_World_Boss_TimeTable_Description
                )
              ),
              React.default.createElement(
                module799.PARoundButton,
                {
                  style: {
                    marginTop: 24,
                    marginBottom: 36,
                  },
                  width: module498.UIManager.getWidth(0.9),
                  title: this.props.uiLanguage.Text_Setting_World_Boss_Notification,
                  fontSize: 18,
                  onPress: function () {
                    if (t.props.topics.AlldayNoNight)
                      return module609.simpleAlert({
                        content: t.props.uiLanguage.Alert_Need_Allow_Notification_Night,
                        confirmText: t.props.uiLanguage.Confirm,
                      });
                    module651.NavigationService.navigate({
                      url: undefined,
                      title: undefined,
                      router: module651.NavigationService.routers.MainRoute_BossNotificationSetting,
                      needLogin: true,
                      needAccountLinking: true,
                      disableCheckAccount: true,
                    });
                  },
                  accessibilityLabel: 'BossTimeTableScreen_ScheduleButton',
                },
                React.default.createElement(module17.Image, {
                  style: {
                    width: 30,
                    resizeMode: 'contain',
                  },
                  source: module755.ImageMap.icn_alarm_bell,
                })
              ),
              React.default.createElement(module1142.default, {
                title: this.props.uiLanguage.Text_WeekDay,
              }),
              React.default.createElement(module1140.default, {
                uiLanguage: this.props.uiLanguage,
                dayOfWeek: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
                bossData: o.Boss,
                timeZone: o.TimeZone,
                accessibilityLabel: 'BossTimeTableScreen_Weekday',
              }),
              React.default.createElement(module17.View, {
                style: {
                  marginBottom: 36,
                },
              }),
              React.default.createElement(module1142.default, {
                title: this.props.uiLanguage.Text_Weekend,
              }),
              React.default.createElement(module1140.default, {
                uiLanguage: this.props.uiLanguage,
                dayOfWeek: ['SAT', 'SUN'],
                bossData: o.Boss,
                timeZone: o.TimeZone,
                accessibilityLabel: 'BossTimeTableScreen_Weekend',
              })
            )
          );
        },
      },
    ]);
    return B;
  })(React.Component),
  B = module406.connect(function (t) {
    return {
      uiLanguage: t.system.uiLanguage,
      platform: t.system.platform,
      region: t.system.region,
      isLoggined: t.account.isLoggined,
      topics: t.service.topics,
    };
  })(x);

exports.default = B;
