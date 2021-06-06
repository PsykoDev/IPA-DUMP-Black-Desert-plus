var regeneratorRuntime = require('regenerator-runtime');

exports.default = function (n) {
  return regeneratorRuntime.default.async(
    function (n) {
      for (;;)
        switch ((n.prev = n.next)) {
          case 0:
            return n.abrupt('return', Promise.resolve());

          case 1:
          case 'end':
            return n.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};
