exports.convertState = o;
exports.currentState = f;

var module6 = require('./6'),
  module1114 = require('./1114'),
  module1113 = require('./1113');

function o(t) {
  return 'boolean' == typeof t.isInternetReachable
    ? t
    : module6.default({}, t, {
        isInternetReachable: module1114.default.currentState(),
      });
}

function f() {
  return module1113.default.getCurrentState();
}

var l = {
  convertState: o,
  currentState: f,
};
exports.default = l;
