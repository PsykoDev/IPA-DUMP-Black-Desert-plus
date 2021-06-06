exports.default = function () {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : module719,
    n = arguments.length > 1 ? arguments[1] : undefined;

  switch (n.type) {
    case module716.default.SAVE_LOGOUT_ACCOUNT_DATA:
      return module6.default({}, module719, {
        canReceiveNotification: t.canReceiveNotification,
        bossNotifications: t.bossNotifications,
      });

    case module717.default.TOGGLE_TO_ALL_TOPIC:
      return module6.default({}, t, {
        canReceiveNotification: n.canReceiveNotification,
      });

    case module717.default.SAVE_TOPIC_TO_LOCAL:
      return module6.default({}, t, {
        topics: n.topics,
      });

    case module717.default.SAVE_SYSTEM_TOPIC_TO_LOCAL:
      return n.isActivateNotification
        ? module6.default({}, t, {
            platform: n.platform,
            region: n.region,
            langCode: n.langCode,
          })
        : module6.default({}, t, {
            platform: undefined,
            region: undefined,
            langCode: undefined,
          });

    case module717.default.FAILED_REFRESH_INSTANCE_ID:
      return module6.default({}, t, {
        canReceiveNotification: false,
      });

    case module717.default.ADD_GROUP_KEY:
      var l = module6.default({}, t.bossNotifications);
      l[n.groupKey] = {
        schedules: {},
        beforeAlarmMinutes: 15,
      };
      return module6.default({}, t, {
        bossNotifications: l,
      });

    case module717.default.ADD_BOSS_SCHEDULE:
      var c = module6.default({}, t.bossNotifications);
      c[n.groupKey].schedules[n.notificationId] = n.data;
      return module6.default({}, t, {
        bossNotifications: c,
      });

    case module717.default.REMOVE_BOSS_SCHEDULE:
      var _ = module6.default({}, t.bossNotifications);

      delete _[n.groupKey].schedules[n.notificationId];
      return module6.default({}, t, {
        bossNotifications: _,
      });

    case module717.default.CLEAR_BOSS_SCHEDULE:
      var E = module6.default({}, t.bossNotifications);
      E[n.groupKey].schedules = {};
      return module6.default({}, t, {
        bossNotifications: E,
      });

    case module717.default.COMPLETE_INIT_ANDROID_CHANNEL:
      return module6.default({}, t, {
        needInitAndroidChannel: false,
      });

    case module717.default.SET_BOSS_ALARM_MINUTE:
      var N = module6.default({}, t.bossNotifications);
      N[n.groupKey].beforeAlarmMinutes = n.minutes;
      return module6.default({}, t, {
        bossNotifications: N,
      });

    case module717.default.SET_DEVICE_TIME_ZONE:
      return module6.default({}, t, {
        timeZone: n.timeZone,
      });

    case module717.default.TOGGLE_GUILD_CHAT_KEYWORD:
      return module6.default({}, t, {
        GuildChatKeyword: n.enable,
      });

    case module717.default.SAVE_CHAT_KEYWORDS:
      return module6.default({}, t, {
        chatKeywords: n.chatKeywords,
      });

    default:
      return t;
  }
};

var module6 = require('./6'),
  module716 = require('./716'),
  module717 = require('./717'),
  module719 = require('./719').default;

exports.defaultState = module719;
