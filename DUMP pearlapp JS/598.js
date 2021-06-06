var module542 = require('./542'),
  u = {
    cleanup: function () {
      module542.default.removeListenersForRegistrations(Object.keys(module542.default._reverseLookup));
    },
  };

exports.default = u;
