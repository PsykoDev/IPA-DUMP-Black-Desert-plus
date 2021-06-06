require('./58');

var module24 = require('./24'),
  n = module24.getEnforcing('ExceptionsManager'),
  c = {
    reportFatalException: function (t, o, c) {
      n.reportFatalException(t, o, c);
    },
    reportSoftException: function (t, o, c) {
      n.reportSoftException(t, o, c);
    },
    updateExceptionMessage: function (t, o, c) {
      n.updateExceptionMessage(t, o, c);
    },
    dismissRedbox: function () {},
    reportException: function (t) {
      if (t.isFatal) c.reportFatalException(t.message, t.stack, t.id);
      else c.reportSoftException(t.message, t.stack, t.id);
    },
  },
  p = c;

exports.default = p;
