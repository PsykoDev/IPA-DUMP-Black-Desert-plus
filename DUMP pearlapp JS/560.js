var module7 = require('./7'),
  l = (function () {
    function t(n, l) {
      module7.default(this, t);
      this._latitude = n;
      this._longitude = l;
    }

    module8.default(t, [
      {
        key: 'latitude',
        get: function () {
          return this._latitude;
        },
      },
      {
        key: 'longitude',
        get: function () {
          return this._longitude;
        },
      },
    ]);
    return t;
  })();

exports.default = l;
