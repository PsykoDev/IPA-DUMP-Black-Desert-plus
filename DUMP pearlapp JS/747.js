var regeneratorRuntime = require('regenerator-runtime'),
  module6 = require('./6'),
  module7 = require('./7'),
  module501 = require('./501'),
  module500 = require('./500'),
  module613 = require('./613'),
  h = {
    notice: {
      channelID: 'notice',
      channelName: 'Text_Notice_Channel_Id',
      channelImportance: module501.default.notifications.Android.Importance.Default,
    },
    gameNotice: {
      channelID: 'gameNotice',
      channelName: 'Text_Game_Notice_Channel_Id',
      channelImportance: module501.default.notifications.Android.Importance.Default,
    },
    bossNotice: {
      channelID: 'bossNotice',
      channelName: 'Text_Boss_Notice_Channel_Id',
      channelImportance: module501.default.notifications.Android.Importance.Default,
    },
  };

exports.androidNotificationChannel = h;

var N = (function () {
  function n() {
    module7.default(this, n);
  }

  module8.default(n, [
    {
      key: 'initChannelLanguage',
      value: function () {
        var n = module6.default({}, h);
        Object.keys(n).map(function (t) {
          n[t].channelName = module613.store.getState().system.uiLanguage[n[t].channelName];
        });
        return n;
      },
    },
    {
      key: 'createChannel',
      value: function (n, o) {
        var module7,
          module8,
          f = arguments;
        return regeneratorRuntime.default.async(
          function (s) {
            for (;;)
              switch ((s.prev = s.next)) {
                case 0:
                  module7 = f.length > 2 && undefined !== f[2] ? f[2] : module501.default.notifications.Android.Importance.Default;
                  module8 = new module501.default.notifications.Android.Channel(n, o, module7);
                  s.next = 4;
                  return regeneratorRuntime.default.awrap(module501.default.notifications().android.createChannel(module8));

                case 4:
                case 'end':
                  return s.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      },
    },
    {
      key: 'initChannelForAndroid',
      value: function () {
        var n = this,
          t = this.initChannelLanguage();
        Object.keys(t).map(function (o) {
          var c = t[o];
          n.createChannel(c.channelID, c.channelName, c.channelImportance);
        });
      },
    },
    {
      key: 'buildNotification',
      value: function (n, t, o, c) {
        var l = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : undefined,
          s = arguments.length > 5 && undefined !== arguments[5] ? arguments[5] : module501.default.notifications.Android.Priority.Default,
          h = new module501.default.notifications.Notification().setNotificationId(n).setTitle(t).setBody(o).setData(c);
        if (module500.SystemManager.isAndroid()) h.android.setPriority(s).android.setChannelId(l).android.setAutoCancel(true);
        return h;
      },
    },
    {
      key: 'scheduleNotification',
      value: function (n, t, o) {
        module501.default.notifications().scheduleNotification(n, {
          fireDate: t.getTime(),
          repeatInterval: o,
        });
      },
    },
    {
      key: 'getScheduleNotifications',
      value: function () {
        return module501.default.notifications().getScheduledNotifications();
      },
    },
    {
      key: 'cancelNotification',
      value: function (n) {
        module501.default.notifications().cancelNotification(n);
      },
    },
    {
      key: 'cancelAllNotifications',
      value: function () {
        module501.default.notifications().cancelAllNotifications();
      },
    },
  ]);
  return n;
})();

exports.default = N;
