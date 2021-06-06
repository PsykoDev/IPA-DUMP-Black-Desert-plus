var module26 = require('@babel/runtime/helpers/slicedToArray'),
  module6 = require('./6'),
  module247 = require('./247'),
  module547 = require('./547'),
  module507 = require('./507'),
  o = function t(n, l) {
    return 1 === n.length ? module247.default({}, n[0], l) : module247.default({}, n[0], t(n.slice(1), l));
  },
  h = function t(n, f, s) {
    return 1 === f.length
      ? module6.default({}, n, module247.default({}, f[0], s))
      : n[f[0]]
      ? module6.default({}, n, module247.default({}, f[0], t(n[f[0]], f.slice(1), s)))
      : module6.default({}, n, module247.default({}, f[0], o(f.slice(1), s)));
  };

exports.mergeFieldPathData = h;

exports.parseUpdateArgs = function (t, l) {
  var u = {};

  if (1 === t.length) {
    if (!module507.isObject(t[0])) throw new Error(l + ' failed: If using a single update argument, it must be an object.');
    u = module26.default(t, 1)[0];
  } else {
    if (t.length % 2 == 1) throw new Error(l + ' failed: The update arguments must be either a single object argument, or equal numbers of key/value pairs.');

    for (var o = 0; o < t.length; o += 2) {
      var c = t[o],
        b = t[o + 1];
      if (module507.isString(c)) u[c] = b;
      else {
        if (!(c instanceof module547.default)) throw new Error(l + ' failed: Argument at index ' + o + ' must be a string or FieldPath');
        u = h(u, c._segments, b);
      }
    }
  }

  return u;
};
