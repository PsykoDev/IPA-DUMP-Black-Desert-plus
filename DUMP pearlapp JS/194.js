var module195 = require('./195'),
  c = module195.checkMergeObjectArg,
  n = module195.checkMergeIntoObjectArg;

module.exports = function (t, o) {
  if ((n(t), null != o)) for (var f in (c(o), o)) Object.prototype.hasOwnProperty.call(o, f) && (t[f] = o[f]);
};
