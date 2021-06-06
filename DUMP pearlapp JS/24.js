exports.get = o;

exports.getEnforcing = function (n) {
  var u = o(n);
  module18.default(null != u, "TurboModuleRegistry.getEnforcing(...): '" + n + "' could not be found. Verify that a module by this name is registered in the native binary.");
  return u;
};

var module18 = require('./18'),
  module25 = require('./25'),
  l = globals.__turboModuleProxy;

function o(n) {
  if (!globals.RN$Bridgeless) {
    var t = module25[n];
    if (null != t) return t;
  }

  return null != l ? l(n) : null;
}
