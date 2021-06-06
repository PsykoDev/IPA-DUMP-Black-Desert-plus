var regeneratorRuntime = require('regenerator-runtime'),
  module7 = require('./7'),
  s = (function () {
    function s() {
      module7(this, s);
    }

    module8(s, null, [
      {
        key: 'open',
        value: function (t) {
          return regeneratorRuntime.async(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    throw new Error('DatePickerAndroid is not supported on this platform.');

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
        },
      },
    ]);
    return s;
  })();

s.dateSetAction = 'dateSetAction';
s.dismissedAction = 'dismissedAction';
module.exports = s;
