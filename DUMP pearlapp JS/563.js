var module7 = require('./7'),
  module554 = require('./554'),
  module555 = require('./555'),
  module510 = require('./510'),
  o = (function () {
    function t(s) {
      module7.default(this, t);
      this._firestore = s;
      this._writes = [];
    }

    module8.default(t, [
      {
        key: 'commit',
        value: function () {
          return module510.getNativeModule(this._firestore).documentBatch(this._writes);
        },
      },
      {
        key: 'delete',
        value: function (t) {
          this._writes.push({
            path: t.path,
            type: 'DELETE',
          });

          return this;
        },
      },
      {
        key: 'set',
        value: function (t, u, s) {
          var n = module555.buildNativeMap(u);

          this._writes.push({
            data: n,
            options: s,
            path: t.path,
            type: 'SET',
          });

          return this;
        },
      },
      {
        key: 'update',
        value: function (t) {
          for (var u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++) s[p - 1] = arguments[p];

          var o = module554.parseUpdateArgs(s, 'WriteBatch.update');

          this._writes.push({
            data: module555.buildNativeMap(o),
            path: t.path,
            type: 'UPDATE',
          });

          return this;
        },
      },
    ]);
    return t;
  })();

exports.default = o;
