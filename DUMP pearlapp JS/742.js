exports.fetchNewLogin = function (n) {
  return {
    type: module716.default.FETCH_NEW_LOGIN,
    loginPayload: n,
  };
};

exports.fetchLogin = function (n, u) {
  return {
    type: module716.default.FETCH_LOGIN,
    id: n,
    pw: u,
  };
};

exports.fetchLogout = function () {
  return {
    type: module716.default.FETCH_LOGOUT,
  };
};

exports.fetchGetLinkingInfo = function (n) {
  return {
    type: module716.default.FETCH_GET_LINKING_INFO,
    url: n,
  };
};

exports.refreshLinkingInfo = function () {
  return {
    type: module716.default.REFRESH_LINKING_INFO,
  };
};

exports.fetchAllowMarketing = function (n) {
  return {
    type: module716.default.FETCH_ALLOW_MARKETING,
    allowMarketing: n,
  };
};

exports.setAccountLanguage = function (n, u) {
  return {
    type: module716.default.SET_ACCOUNT_LANGUAGE,
    region: n,
    regionLanguageCode: u,
  };
};

exports.checkAccountIsValid = function () {
  return {
    type: module716.default.CHECK_ACCOUNT_IS_VALID,
  };
};

exports.saveLinkingInfo = function (n, u, o) {
  return {
    type: module716.default.DO_SAVE_LINKING_INFO,
    platform: n,
    region: u,
    linkingInfo: o,
  };
};

exports.changeToken = function (n, u) {
  return {
    type: module716.default.CHANGE_TOKEN,
    accessToken: n,
    refreshToken: u,
  };
};

var module716 = require('./716');
