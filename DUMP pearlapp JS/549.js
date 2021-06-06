var module7 = require('./7'),
  module550 = require('./550'),
  f = (function () {
    function t(u, f) {
      module7.default(this, t);
      this._document = new module550.default(u, f.document);
      this._newIndex = f.newIndex;
      this._oldIndex = f.oldIndex;
      this._type = f.type;
    }

    module8.default(t, [
      {
        key: 'doc',
        get: function () {
          return this._document;
        },
      },
      {
        key: 'newIndex',
        get: function () {
          return this._newIndex;
        },
      },
      {
        key: 'oldIndex',
        get: function () {
          return this._oldIndex;
        },
      },
      {
        key: 'type',
        get: function () {
          return this._type;
        },
      },
    ]);
    return t;
  })();

exports.default = f;
