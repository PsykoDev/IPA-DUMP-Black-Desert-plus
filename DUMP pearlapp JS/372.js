var regeneratorRuntime = require('regenerator-runtime'),
  module7 = require('./7'),
  module373 = require('./373'),
  c = (function () {
    function t() {
      module7.default(this, t);
    }

    module8.default(t, null, [
      {
        key: 'open',
        value: function (t) {
          return regeneratorRuntime.default.async(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (!module373.default) {
                      n.next = 4;
                      break;
                    }

                    return n.abrupt('return', module373.default.open(t));

                  case 4:
                    return n.abrupt(
                      'return',
                      Promise.reject({
                        message: 'TimePickerAndroid is not supported on this platform.',
                      })
                    );

                  case 5:
                  case 'end':
                    return n.stop();
                }
            },
            null,
            null,
            null,
            Promise
          );
        },
      },
    ]);
    return t;
  })();

c.timeSetAction = 'timeSetAction';
c.dismissedAction = 'dismissedAction';
module.exports = c;
