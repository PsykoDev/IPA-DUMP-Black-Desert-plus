require('./58');

var module67 = require('./67');

module.exports = function (t) {
  if (undefined === t || null === t) return t;
  var u = module67(t);
  return null !== u && undefined !== u ? (u = ((u << 24) | (u >>> 8)) >>> 0) : undefined;
};
