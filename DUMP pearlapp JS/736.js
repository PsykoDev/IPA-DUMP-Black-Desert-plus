exports.default = function () {
  var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : module737,
    u = arguments.length > 1 ? arguments[1] : undefined;

  switch (u.type) {
    case module716.default.SAVE_LOGOUT_ACCOUNT_DATA:
      return module6.default({}, module737);

    case module716.default.SAVE_ACCOUNT_DATA:
      return module6.default({}, n, {
        accountID: u.accountID,
        isLoggined: u.isLoggined,
        isAccountLinking: u.isAccountLinking,
        linkingPlatform: u.linkingPlatform,
        linkingRegion: u.linkingRegion,
        userNickname: u.userNickname,
        accountLinkInfo: u.accountLinkInfo,
        allowMarketing: u.allowMarketing,
      });

    case module716.default.DONE_LOGIN:
      return module6.default({}, n, {
        accessToken: u.accessToken,
        refreshToken: u.refreshToken,
      });

    case module716.default.SAVE_LINKING_INFO:
      return module6.default({}, n, {
        isAccountLinking: u.isAccountLinking,
        userNickname: u.userNickname,
        linkingPlatform: u.linkingPlatform,
        linkingRegion: u.linkingRegion,
        accountLinkInfo: u.accountLinkInfo,
      });

    case module716.default.SAVE_ALLOW_MARKETING:
      return module6.default({}, n, {
        allowMarketing: u.allowMarketing,
      });

    case module716.default.CHANGE_TOKEN:
      return module6.default({}, n, {
        accessToken: u.accessToken,
        refreshToken: u.refreshToken,
      });

    default:
      return n;
  }
};

var module6 = require('./6'),
  module716 = require('./716'),
  module737 = require('./737').default;
