exports.__esModule = true;
exports.whenMapStateToPropsIsFunction = t;
exports.whenMapStateToPropsIsMissing = n;

var module422 = require('./422');

function t(t) {
  return 'function' == typeof t ? module422.wrapMapToPropsFunc(t, 'mapStateToProps') : undefined;
}

function n(t) {
  return t
    ? undefined
    : module422.wrapMapToPropsConstant(function () {
        return {};
      });
}

var u = [t, n];
exports.default = u;
