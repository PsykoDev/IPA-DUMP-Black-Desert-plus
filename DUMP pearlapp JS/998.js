var module999 = require('./999'),
  module860 = require('./860');

module.exports = function l(t, o, c, f, _) {
  return t === o || (null == t || null == o || (!module860(t) && !module860(o)) ? t != t && o != o : module999(t, o, c, f, l, _));
};
