var module7 = require('./7'),
  module223 = require('./223'),
  s = (function () {
    function s(n, l) {
      module7(this, s);
      this._delay = l;
      this._callback = n;
    }

    module8(s, [
      {
        key: 'dispose',
        value: function () {
          var t =
            arguments.length > 0 && undefined !== arguments[0]
              ? arguments[0]
              : {
                  abort: false,
                };

          if (this._taskHandle) {
            this._taskHandle.cancel();

            if (!t.abort) this._callback();
            this._taskHandle = null;
          }
        },
      },
      {
        key: 'schedule',
        value: function () {
          var t = this;

          if (!this._taskHandle) {
            var n = setTimeout(function () {
              t._taskHandle = module223.runAfterInteractions(function () {
                t._taskHandle = null;

                t._callback();
              });
            }, this._delay);
            this._taskHandle = {
              cancel: function () {
                return clearTimeout(n);
              },
            };
          }
        },
      },
    ]);
    return s;
  })();

class s {
  constructor(n, l) {
    module7(this, s);
    this._delay = l;
    this._callback = n;
  }

  dispose() {
    var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            abort: false,
          };

    if (this._taskHandle) {
      this._taskHandle.cancel();

      if (!t.abort) this._callback();
      this._taskHandle = null;
    }
  }

  schedule() {
    var t = this;

    if (!this._taskHandle) {
      var n = setTimeout(function () {
        t._taskHandle = module223.runAfterInteractions(function () {
          t._taskHandle = null;

          t._callback();
        });
      }, this._delay);
      this._taskHandle = {
        cancel: function () {
          return clearTimeout(n);
        },
      };
    }
  }
}

module.exports = s;
