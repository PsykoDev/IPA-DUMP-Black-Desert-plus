var module7 = require('./7'),
  h = (function () {
    function t(u) {
      module7.default(this, t);
      this.path = u ? (u.length > 1 && u.endsWith('/') ? u.substring(0, u.length - 1) : u) : '/';
    }

    module8.default(t, [
      {
        key: 'key',
        get: function () {
          return '/' === this.path ? null : this.path.substring(this.path.lastIndexOf('/') + 1);
        },
      },
    ]);
    return t;
  })();

exports.default = h;
