var module7 = require('./7'),
  module554 = require('./554'),
  module555 = require('./555'),
  module550 = require('./550'),
  module510 = require('./510'),
  p = (function () {
    function t(u, s) {
      module7.default(this, t);
      this._meta = s;
      this._commandBuffer = [];
      this._firestore = u;
      this._pendingResult = undefined;
    }

    module8.default(t, [
      {
        key: '_prepare',
        value: function () {
          this._commandBuffer = [];
          this._pendingResult = undefined;
        },
      },
      {
        key: 'get',
        value: function (t) {
          var n = this;
          return module510
            .getNativeModule(this._firestore)
            .transactionGetDocument(this._meta.id, t.path)
            .then(function (t) {
              return new module550.default(n._firestore, t);
            });
        },
      },
      {
        key: 'set',
        value: function (t, n, u) {
          this._commandBuffer.push({
            type: 'set',
            path: t.path,
            data: module555.buildNativeMap(n),
            options: u || {},
          });

          return this;
        },
      },
      {
        key: 'update',
        value: function (t) {
          for (var n = arguments.length, u = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) u[o - 1] = arguments[o];

          var h = module554.parseUpdateArgs(u, 'Transaction.update');

          this._commandBuffer.push({
            type: 'update',
            path: t.path,
            data: module555.buildNativeMap(h),
          });

          return this;
        },
      },
      {
        key: 'delete',
        value: function (t) {
          this._commandBuffer.push({
            type: 'delete',
            path: t.path,
          });

          return this;
        },
      },
    ]);
    return t;
  })();

exports.default = p;
