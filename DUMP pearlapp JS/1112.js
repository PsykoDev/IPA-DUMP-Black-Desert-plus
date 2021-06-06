exports.setup = w;
exports.tearDown = _;
exports.latest = b;
exports.add = D;
exports.remove = E;

var module6 = require('./6'),
  module1113 = require('./1113'),
  module1114 = require('./1114'),
  module1115 = require('./1115'),
  l = 'netInfo.networkStatusDidChange',
  c = false,
  v = null,
  s = null,
  h = new Set(),
  p = null;

function S() {
  return module1115.default.currentState().then(function (t) {
    module1114.default.update(t);
    var n = module1115.default.convertState(t);
    p = n;
    return n;
  });
}

function w() {
  if (!c) {
    v = module1113.default.eventEmitter.addListener(l, function (t) {
      module1114.default.update(t);
      var n = module1115.default.convertState(t);
      p = n;
      h.forEach(function (t) {
        return t(n);
      });
    });
    S();
    s = module1114.default.addSubscription(function (t) {
      if (p) {
        var u = module6.default({}, p, {
          isInternetReachable: t,
        });
        p = u;
        h.forEach(function (t) {
          return t(u);
        });
      }
    });
    c = true;
  }
}

function _() {
  if (c) {
    if (v) v.remove();
    h.clear();
    module1114.default.clear();
    if (s) s();
    c = false;
  }
}

function b() {
  return p ? Promise.resolve(p) : S();
}

function D(t) {
  h.add(t);
  if (p) t(p);
  else b().then(t);
}

function E(t) {
  h.delete(t);
}

var I = {
  setup: w,
  tearDown: _,
  latest: b,
  add: D,
  remove: E,
};
exports.default = I;
