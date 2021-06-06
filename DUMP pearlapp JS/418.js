exports.__esModule = true;
exports.whenMapDispatchToPropsIsFunction = t;
exports.whenMapDispatchToPropsIsMissing = p;
exports.whenMapDispatchToPropsIsObject = s;

var module419 = require('./419'),
  module422 = require('./422');

function t(o) {
  return 'function' == typeof o ? module422.wrapMapToPropsFunc(o, 'mapDispatchToProps') : undefined;
}

function p(o) {
  return o
    ? undefined
    : module422.wrapMapToPropsConstant(function (o) {
        return {
          dispatch: o,
        };
      });
}

function s(t) {
  return t && 'object' == typeof t
    ? module422.wrapMapToPropsConstant(function (n) {
        return module419.bindActionCreators(t, n);
      })
    : undefined;
}

var c = [t, p, s];
exports.default = c;
