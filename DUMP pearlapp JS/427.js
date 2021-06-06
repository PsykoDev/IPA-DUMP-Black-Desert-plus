exports.__esModule = true;
exports.defaultMergeProps = u;
exports.wrapMergePropsFunc = o;
exports.whenMergePropsIsFunction = f;
exports.whenMergePropsIsOmitted = c;

var module6 = require('./6');

require('./423');

function u(n, u, o) {
  return module6.default({}, o, {}, n, {}, u);
}

function o(n) {
  return function (t, u) {
    u.displayName;
    var o,
      f = u.pure,
      c = u.areMergedPropsEqual,
      s = false;
    return function (t, u, p) {
      var v = n(t, u, p);
      if (s) {
        if (!(f && c(v, o))) o = v;
      } else {
        s = true;
        o = v;
      }
      return o;
    };
  };
}

function f(n) {
  return 'function' == typeof n ? o(n) : undefined;
}

function c(n) {
  return n
    ? undefined
    : function () {
        return u;
      };
}

var s = [f, c];
exports.default = s;
