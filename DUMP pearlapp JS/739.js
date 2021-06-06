exports.default = function () {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : module740;

  switch ((arguments.length > 1 ? arguments[1] : undefined).type) {
    case module716.default.FETCH_NEW_LOGIN:
    case module716.default.FETCH_LOGIN:
      return module6.default({}, t, {
        loginProgress: true,
      });

    case module716.default.AUTH_BLOCKED_ACCOUNT:
    case module716.default.AUTH_NOT_MATCH_ACCOUNT:
    case module716.default.AUTH_NOT_FOUND_CHARACTER_INFO:
    case module716.default.AUTH_WITHDRAWN_ACCOUNT:
    case module716.default.AUTH_WRONG_FIVE_MORE_TRY:
    case module716.default.AUTH_NEED_EMAIL_AUTH:
    case module716.default.AUTH_FAILED:
    case module716.default.LOGIN_FAILED:
    case module716.default.LOGIN_DUPLICATE_TOKEN:
    case module716.default.DONE_LOGIN:
      return module6.default({}, t, {
        loginProgress: false,
      });

    case module716.default.FETCH_LOGOUT:
      return module6.default({}, t, {
        logoutProgress: true,
      });

    case module716.default.FAILED_CHECK_LOGOUT_API:
    case module716.default.SAVE_LOGOUT_ACCOUNT_DATA:
      return module6.default({}, t, {
        logoutProgress: false,
      });

    case module716.default.CHECK_ACCOUNT_IS_VALID:
      return module6.default({}, t, {
        checkAccountIsValidProgress: true,
      });

    case module716.default.VALID_ACCOUNT:
    case module716.default.INVALID_ACCOUNT:
      return module6.default({}, t, {
        checkAccountIsValidProgress: false,
      });

    case module716.default.FETCH_GET_LINKING_INFO:
      return module6.default({}, t, {
        getLinkingInfoProgress: true,
      });

    case module716.default.FAILED_GET_LINKING_INFO:
    case module716.default.SUCCESS_GET_LINKING_INFO:
    case module716.default.YES_LINKING_INFO:
    case module716.default.NO_LINKING_INFO:
    case module716.default.SAVE_ACCOUNT_DATA:
      return module6.default({}, t, {
        getLinkingInfoProgress: false,
      });

    case module716.default.REFRESH_LINKING_INFO:
      return module6.default({}, t, {
        refreshLinkingInfoProgress: true,
      });

    case module716.default.DONE_REFRESH_LINKING_INFO:
      return module6.default({}, t, {
        refreshLinkingInfoProgress: false,
      });

    case module716.default.FETCH_ALLOW_MARKETING:
      return module6.default({}, t, {
        fetchAllowMarketingProgress: true,
      });

    case module716.default.FAILED_ALLOW_MARKETING:
    case module716.default.SAVE_ALLOW_MARKETING:
      return module6.default({}, t, {
        fetchAllowMarketingProgress: false,
        pushModalProgress: false,
      });

    case module716.default.SET_ACCOUNT_LANGUAGE:
      return module6.default({}, t, {
        setAccountLanguageProgress: true,
      });

    case module716.default.FAILED_SET_ACCOUNT_LANGUAGE:
    case module716.default.SUCCESS_SET_ACCOUNT_LANGUAGE:
      return module6.default({}, t, {
        setAccountLanguageProgress: false,
      });

    case module717.default.MANAGE_TOPIC:
      return module6.default({}, t, {
        manageTopicProgress: true,
      });

    case module717.default.FAILED_MANAGE_TOPIC:
    case module717.default.DONE_MANAGE_TOPIC:
      return module6.default({}, t, {
        manageTopicProgress: false,
      });

    case module717.default.TOGGLE_TO_ALL_TOPIC:
      return module6.default({}, t, {
        toggleTopicProgress: true,
      });

    case module717.default.DONE_TOGGLE_TO_ALL_TOPIC:
      return module6.default({}, t, {
        toggleTopicProgress: false,
      });

    case module717.default.SHOW_PUSH_MODAL:
      return module6.default({}, t, {
        pushModalProgress: true,
      });

    case module717.default.HIDE_PUSH_MODAL:
      return module6.default({}, t, {
        pushModalProgress: false,
      });

    case module717.default.REFRESH_INSTANCE_ID:
      return module6.default({}, t, {
        refreshInstanceIdProgress: true,
      });

    case module717.default.FAILED_REFRESH_INSTANCE_ID:
    case module717.default.DONE_REFRESH_INSTANCE_ID:
      return module6.default({}, t, {
        refreshInstanceIdProgress: false,
      });

    case module717.default.MOVE_TO_OTHER_PLATFORM:
      return module6.default({}, t, {
        moveToOtherPlatformProgress: true,
      });

    case module717.default.DONE_MOVE_TO_OTHER_PLATFORM:
      return module6.default({}, t, {
        moveToOtherPlatformProgress: false,
      });

    default:
      return t;
  }
};

var module6 = require('./6'),
  module716 = require('./716'),
  module717 = require('./717'),
  module740 = require('./740').default;

exports.defaultState = module740;
