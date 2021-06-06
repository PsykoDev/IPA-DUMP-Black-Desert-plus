var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module498 = require('./498'),
  module799 = require('./799'),
  module755 = require('./755'),
  module613 = require('./613'),
  module1133 = require('./1133');

function B() {
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

var M = (function (t) {
    module9.default(_, t);

    var module406 = _,
      M = B(),
      N = function () {
        var t,
          o = module13.default(module406);

        if (M) {
          var n = module13.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module11.default(this, t);
      };

    function _() {
      module7.default(this, _);
      return N.apply(this, arguments);
    }

    module8.default(_, [
      {
        key: 'checkOneOrMoreBossActive',
        value: function (t) {
          var o = module498.SystemManager.generateGroupKey();

          for (var n in this.props.bossNotifications[o].schedules) if (n.includes(t)) return true;

          return false;
        },
      },
      {
        key: 'checkAllBossActive',
        value: function (t) {
          var o = 0,
            n = 0,
            s = this.props,
            c = s.platform,
            u = s.region,
            l = module498.ServiceManager.getPlatformKey(c, u);

          for (var f in module498.RemoteConfigManager.getConfig('boss')[l][u].Boss[t]) o += 1;

          var p = module498.SystemManager.generateGroupKey();

          for (var v in this.props.bossNotifications[p].schedules) v.includes(t) && (n += 1);

          return o == n;
        },
      },
      {
        key: 'changebeforeBossMinutes',
        value: function (t) {
          var o = module498.SystemManager.generateGroupKey();

          if (this.props.bossNotifications[o].beforeAlarmMinutes != t) {
            module613.bindAction.service.setBossMinutes(o, t);
            var n = this.props.bossNotifications[o].schedules;
            module498.BossNotificationManager.clearNotification(o);
            Object.keys(n).map(function (s) {
              var c = n[s];
              module498.BossNotificationManager.scheduleNotification(o, s, c, t);
            });
          }
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            o = module498.ServiceManager.getPlatformKey(this.props.platform, this.props.region),
            n = module498.SystemManager.generateGroupKey(),
            s = this.props.bossNotifications[n].beforeAlarmMinutes;
          return React.default.createElement(
            module799.PABackgroundScrollView,
            {
              style: {
                marginTop: 16,
                marginBottom: 16,
              },
            },
            React.default.createElement(
              module17.Text,
              {
                style: {
                  fontSize: 18,
                  color: module755.Color.mainText,
                  marginStart: 16,
                  marginBottom: 24,
                },
              },
              this.props.uiLanguage.Text_Setting_Notification_Time
            ),
            React.default.createElement(
              module17.View,
              {
                style: {
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginBottom: 32,
                },
              },
              [5, 15, 30, 60].map(function (o, n) {
                return React.default.createElement(module1133.TimeSelectBox, {
                  key: n,
                  selected: s === o,
                  title: t.props.uiLanguage.Text_Minutes_Ago.replace('${minute}', o.toString()),
                  onPress: function () {
                    t.changebeforeBossMinutes(o);
                  },
                  accessibilityLabel: 'BossSettingScreen_' + o,
                });
              })
            ),
            React.default.createElement(
              module17.Text,
              {
                style: {
                  fontSize: 18,
                  color: module755.Color.mainText,
                  marginStart: 16,
                  marginBottom: 16,
                },
              },
              this.props.uiLanguage.Push_Notification_Title
            ),
            Object.keys(module498.RemoteConfigManager.getConfig('boss')[o][this.props.region].Boss).map(function (o) {
              return React.default.createElement(
                module1133.DownFolder,
                {
                  key: o,
                  title: t.props.uiLanguage['Text_' + o],
                  oneOrMoreActive: t.checkOneOrMoreBossActive(o),
                  accessibilityLabel: 'BossSettingScreen_' + o,
                },
                React.default.createElement(module1133.TimeSettingScreen, {
                  bossName: o,
                  allBossActive: t.checkAllBossActive(o),
                })
              );
            })
          );
        },
      },
    ]);
    return _;
  })(React.default.Component),
  N = module406.connect(function (t) {
    return {
      accountID: t.account.accountID,
      uiLanguage: t.system.uiLanguage,
      platform: t.system.platform,
      region: t.system.region,
      bossNotifications: t.service.bossNotifications,
    };
  })(M);

exports.default = N;
