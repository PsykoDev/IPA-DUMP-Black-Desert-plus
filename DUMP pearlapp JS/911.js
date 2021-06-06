var module912 = require('./912'),
  module860 = require('./860'),
  l = Object.prototype,
  c = l.hasOwnProperty,
  o = l.propertyIsEnumerable,
  p = module912(
    (function () {
      return arguments;
    })()
  )
    ? module912
    : function (t) {
        return module860(t) && c.call(t, 'callee') && !o.call(t, 'callee');
      };

module.exports = p;
