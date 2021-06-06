var module7 = require('./7'),
  o = (function () {
    function t() {
      module7.default(this, t);
      this._props = {
        startMuted: true,
      };
    }

    module8.default(t, [
      {
        key: 'build',
        value: function () {
          return this._props;
        },
      },
      {
        key: 'setStartMuted',
        value: function () {
          var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
          this._props.startMuted = t;
          return this;
        },
      },
    ]);
    return t;
  })();

exports.default = o;
