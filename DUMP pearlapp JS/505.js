var module17 = require('./17'),
  v = {},
  u = {},
  module51 = new (require('./51').default)();

exports.SharedEventEmitter = module51;

exports.getAppEventName = function (t, n) {
  return t.app.name + '-' + n;
};

var p = function (t, u) {
    var o = u.app.name + '-' + t,
      p = module17.NativeModules[t];
    if (!v[o]) v[o] = new module17.NativeEventEmitter(p);
    return v[o];
  },
  E = function (t, n, v) {
    if (!u[v]) {
      p(t, n).addListener(v, function (t) {
        if (t.appName) module51.emit(t.appName + '-' + v, t);
        else module51.emit(v, t);
      });
      u[v] = true;
    }
  };

exports.initialiseNativeModuleEventEmitter = function (t, n) {
  var v = n.events,
    u = n.moduleName;
  if (v && v.length) for (var o = 0, p = v.length; o < p; o++) E(u, t, v[o]);
};
