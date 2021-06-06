var module716 = require('./716'),
  O = [
    module716.default.SUCCESS_LOGIN,
    module716.default.FAILED_LOGIN,
    module716.default.PC_NOT_MATCH_PASSWORD,
    module716.default.CONSOLE_NOT_MATCH_PASSWORD,
    module716.default.PC_NOT_MATCH_ACCOUNT,
    module716.default.CONSOLE_NOT_MATCH_ACCOUNT,
    module716.default.PC_LOCKED_ACCOUNT,
    module716.default.CONSOLE_LOCKED_ACCOUNT,
    module716.default.PC_NOT_FOUND_CHARCATER_INFO,
    module716.default.NEED_EMAIL_AUTHENTICATION,
    module716.default.ACCOUNT_API_ERROR,
  ];

exports.loginType = O;
var N = [module716.default.VALID_ACCESS_TOKEN, module716.default.INVALID_ACCESS_TOKEN, module716.default.FAILED_CHECK_ACCESS_TOKEN];
exports.accessTokenType = N;
var T = [module716.default.SUCCESS_GET_LINKING_INFO, module716.default.FAILED_GET_LINKING_INFO, module716.default.INVALID_ACCESS_TOKEN];
exports.getLinkingInfoType = T;
