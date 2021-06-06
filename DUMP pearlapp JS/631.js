var t,
  module633 = require('./633'),
  f = (t = module633) && 'object' == typeof t && 'default' in t ? t.default : t;

Object.keys(module633).forEach(function (t) {
  if ('default' !== t)
    Object.defineProperty(exports, t, {
      enumerable: true,
      get: function () {
        return module633[t];
      },
    });
});
exports.default = f;
