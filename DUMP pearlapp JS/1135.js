var regeneratorRuntime = require('regenerator-runtime'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module406 = require('./406'),
  module498 = require('./498'),
  module799 = require('./799'),
  module755 = require('./755');

function M() {
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

var b = (function (t) {
  module9.default(B, t);

  var module406 = B,
    module755 = M(),
    b = function () {
      var t,
        o = module13.default(module406);

      if (module755) {
        var n = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function B() {
    module7.default(this, B);
    return b.apply(this, arguments);
  }

  module8.default(B, [
    {
      key: 'handleAllNotification',
      value: function () {
        var t = this,
          o = this.props,
          n = o.platform,
          s = o.region,
          c = module498.ServiceManager.getPlatformKey(n, s),
          l = module498.RemoteConfigManager.getConfig('boss')[c][s].TimeZone;
        module498.RemoteConfigManager.getConfig('boss')[c][s].Boss[this.props.bossName].map(function (o) {
          var n = module498.BossNotificationManager.buildBossData(
              t.props.platform,
              t.props.region,
              t.props.bossName,
              {
                timeZone: l,
                week: o.week,
                time: o.time,
              },
              o.code
            ),
            s = module498.SystemManager.generateGroupKey(),
            c = module498.BossNotificationManager.createNotificationId(n);
          if (t.props.allBossActive) module498.BossNotificationManager.cancelNotification(s, c);
          else if (!module498.BossNotificationManager.checkNotificationExist(s, c)) {
            var f = module498.SystemManager.generateGroupKey(),
              u = t.props.bossNotifications[f].beforeAlarmMinutes;
            module498.BossNotificationManager.scheduleNotification(f, c, n, u);
          }
        });
      },
    },
    {
      key: 'handleNotification',
      value: function (t, n) {
        var s, c, l;
        return regeneratorRuntime.default.async(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  s = module498.BossNotificationManager.createNotificationId(n);
                  if (module498.BossNotificationManager.checkNotificationExist(t, s)) module498.BossNotificationManager.cancelNotification(t, s);
                  else {
                    c = module498.SystemManager.generateGroupKey();
                    l = this.props.bossNotifications[c].beforeAlarmMinutes;
                    module498.BossNotificationManager.scheduleNotification(c, s, n, l);
                  }

                case 3:
                case 'end':
                  return o.stop();
              }
          },
          null,
          this,
          null,
          Promise
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          o = this.props,
          n = o.platform,
          s = o.region,
          c = module498.ServiceManager.getPlatformKey(n, s);
        return this.props.visible
          ? React.default.createElement(
              module799.PABackgroundScrollView,
              {
                style: S.content,
              },
              React.default.createElement(module799.PASettingSwitchMenu, {
                style: {
                  paddingTop: 12,
                  paddingBottom: 12,
                  paddingStart: 16,
                  paddingEnd: 22,
                },
                onPress: this.handleAllNotification.bind(this),
                title: this.props.uiLanguage.Text_All_Boss,
                fontSize: 20,
                value: this.props.allBossActive,
                accessibilityLabel: 'TimeSettingScreen_' + this.props.bossName,
              }),
              React.default.createElement(
                module17.Text,
                {
                  style: S.subTitle,
                },
                this.props.uiLanguage.Text_Boss_Appearance_Time
              ),
              React.default.createElement(
                module17.View,
                {
                  style: S.settingContent,
                },
                module498.RemoteConfigManager.getConfig('boss')[c][s].Boss[this.props.bossName].map(function (o) {
                  var n = module498.RemoteConfigManager.getConfig('boss')[c][s].TimeZone,
                    l = module498.BossNotificationManager.getTimeDataForTitle(
                      {
                        timeZone: n,
                        week: o.week,
                        time: o.time,
                      },
                      0
                    ),
                    f = module498.BossNotificationManager.buildBossData(
                      t.props.platform,
                      t.props.region,
                      t.props.bossName,
                      {
                        timeZone: n,
                        week: o.week,
                        time: o.time,
                      },
                      o.code
                    );
                  return React.default.createElement(module799.PASettingSwitchMenu, {
                    key: o.week + o.time,
                    style: {
                      paddingTop: 12,
                      paddingBottom: 12,
                      paddingStart: 16,
                      paddingEnd: 16,
                    },
                    onPress: function () {
                      var o = module498.SystemManager.generateGroupKey();
                      t.handleNotification(o, f);
                    },
                    title: t.props.uiLanguage.Text_Week_Time.replace('${week}', t.props.uiLanguage['Text_' + l.week]).replace('${time}', l.time),
                    fontSize: 16,
                    value: undefined != t.props.bossNotifications[module498.SystemManager.generateGroupKey()].schedules[module498.BossNotificationManager.createNotificationId(f)],
                  });
                })
              )
            )
          : null;
      },
    },
  ]);
  return B;
})(React.default.Component);

b.defaultProps = {
  visible: true,
};
var S = module17.StyleSheet.create({
    content: {
      flex: 1,
      marginTop: 4,
      paddingStart: 18,
    },
    settingContent: {
      marginTop: 6,
      marginBottom: 6,
      paddingEnd: 6,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: module755.Color.optionText,
    },
    subTitle: {
      fontSize: 16,
      color: module755.Color.mainText,
      marginTop: 8,
      paddingStart: 16,
    },
  }),
  B = module406.connect(function (t) {
    return {
      accountID: t.account.accountID,
      uiLanguage: t.system.uiLanguage,
      platform: t.system.platform,
      region: t.system.region,
      bossNotifications: t.service.bossNotifications,
    };
  })(b);
exports.default = B;
