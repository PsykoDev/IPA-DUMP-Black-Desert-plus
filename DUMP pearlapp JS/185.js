var module182 = require('./182'),
  module17 = require('./17');

var p = function (n, p) {
  var f = p && p.paperComponentName ? p.paperComponentName : n;
  if (null != p && null != p.paperComponentNameDeprecated)
    if (module17.UIManager.getViewManagerConfig(n)) f = n;
    else {
      if (null == p.paperComponentNameDeprecated || !module17.UIManager.getViewManagerConfig(p.paperComponentNameDeprecated))
        throw new Error('Failed to find native component for either ' + n + ' or ' + (p.paperComponentNameDeprecated || '(unknown)'));
      f = p.paperComponentNameDeprecated;
    }
  return module182.default(f);
};

exports.default = p;
