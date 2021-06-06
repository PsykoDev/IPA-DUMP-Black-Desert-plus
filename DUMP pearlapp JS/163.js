require('./58');

var module75 = require('./75'),
  u = null,
  t = new Set();

module.exports = {
  currentlyFocusedField: function () {
    return u;
  },
  focusTextInput: function (t) {
    if (u !== t && null !== t) {
      u = t;
      module75.focus(t);
    }
  },
  blurTextInput: function (t) {
    if (u === t && null !== t) {
      u = null;
      module75.blur(t);
    }
  },
  registerInput: function (n) {
    t.add(n);
  },
  unregisterInput: function (n) {
    t.delete(n);
  },
  isTextInput: function (n) {
    return t.has(n);
  },
};
