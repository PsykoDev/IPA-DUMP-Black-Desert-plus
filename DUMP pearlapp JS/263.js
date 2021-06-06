require('./58');

module.exports = function (t) {
  return 'normal' === t ? 0.998 : 'fast' === t ? 0.99 : t;
};
