var module97 = require('./97');

module.exports = {
  showErrorDialog: function (o) {
    var t,
      c = o.componentStack,
      p = o.error;
    t = p instanceof Error ? p : 'string' == typeof p ? new module97.SyntheticError(p) : new module97.SyntheticError('Unspecified error');

    try {
      t.componentStack = c;
    } catch (n) {}

    module97.handleException(t, false);
    return false;
  },
};
