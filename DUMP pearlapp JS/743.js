exports.refreshInstanceId = function () {
  return {
    type: module717.default.REFRESH_INSTANCE_ID,
  };
};

exports.toggleNotification = function (t) {
  return {
    type: module717.default.TOGGLE_TO_ALL_TOPIC,
    canReceiveNotification: t,
  };
};

exports.manageTopic = function (t, o) {
  return {
    type: module717.default.MANAGE_TOPIC,
    prevTopics: t,
    nextTopics: o,
  };
};

exports.manageSystemTopic = function (t, o, u, f) {
  return {
    type: module717.default.MANAGE_SYSTEM_TOPIC,
    isActivateNotification: t,
    platform: o,
    region: u,
    langCode: f,
  };
};

exports.moveToOtherPlatform = function () {
  return {
    type: module717.default.MOVE_TO_OTHER_PLATFORM,
  };
};

exports.moveToOtherRegionOrLanguage = function (t, o, u, f, _, c) {
  return {
    type: module717.default.MOVE_TO_OTHER_REGION_OR_LANGUAGE,
    prevPlatform: t,
    prevRegion: o,
    prevLangCode: u,
    nextPlatform: f,
    nextRegion: _,
    nextLangCode: c,
  };
};

exports.doneModalTopic = function () {
  return {
    type: module717.default.HIDE_PUSH_MODAL,
  };
};

exports.addGroupKey = function (t) {
  return {
    type: module717.default.ADD_GROUP_KEY,
    groupKey: t,
  };
};

exports.addBossSchedule = function (t, o, u) {
  return {
    type: module717.default.ADD_BOSS_SCHEDULE,
    groupKey: t,
    notificationId: o,
    data: u,
  };
};

exports.removeBossSchedule = function (t, o) {
  return {
    type: module717.default.REMOVE_BOSS_SCHEDULE,
    groupKey: t,
    notificationId: o,
  };
};

exports.clearBossSchedule = function (t) {
  return {
    type: module717.default.CLEAR_BOSS_SCHEDULE,
    groupKey: t,
  };
};

exports.completeInitAndroidChannel = function () {
  return {
    type: module717.default.COMPLETE_INIT_ANDROID_CHANNEL,
  };
};

exports.setBossMinutes = function (t, o) {
  return {
    type: module717.default.SET_BOSS_ALARM_MINUTE,
    groupKey: t,
    minutes: o,
  };
};

exports.setDeviceTimeZone = function (t) {
  return {
    type: module717.default.SET_DEVICE_TIME_ZONE,
    timeZone: t,
  };
};

exports.toggleGuildChatKeyword = function (t) {
  return {
    type: module717.default.TOGGLE_GUILD_CHAT_KEYWORD,
    enable: t,
  };
};

exports.getKeywordList = function (t) {
  return {
    type: module717.default.GET_KEYWORD_LIST,
    accessToken: t,
  };
};

exports.setKeywordList = function (t, o) {
  return {
    type: module717.default.SET_KEYWORD_LIST,
    chatKeywords: t,
    doLocalSave: o,
  };
};

exports.saveChatKeywords = function (t) {
  return {
    type: module717.default.SAVE_CHAT_KEYWORDS,
    chatKeywords: t,
  };
};

var module717 = require('./717');
