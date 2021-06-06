var module7 = require('./7'),
  module551 = require('./551'),
  module547 = require('./547'),
  module561 = require('./561'),
  module507 = require('./507'),
  module555 = require('./555'),
  h = function t(n, u) {
    if (n && module507.isObject(n)) {
      var f = n[u[0]];
      return 1 === u.length ? f : t(f, u.slice(1));
    }
  },
  l = (function () {
    function t(u, l) {
      var v = this;
      module7.default(this, t);

      this.data = function () {
        return v._data;
      };

      this.get = function (t) {
        return t instanceof module547.default ? h(v._data, t._segments) : module507.deepGet(v._data, t, '.');
      };

      this._data = module555.parseNativeMap(u, l.data);
      this._metadata = l.metadata;
      this._ref = new module551.default(u, module561.default.fromName(l.path));
    }

    module8.default(t, [
      {
        key: 'exists',
        get: function () {
          return undefined !== this._data;
        },
      },
      {
        key: 'id',
        get: function () {
          return this._ref.id;
        },
      },
      {
        key: 'metadata',
        get: function () {
          return this._metadata;
        },
      },
      {
        key: 'ref',
        get: function () {
          return this._ref;
        },
      },
    ]);
    return t;
  })();

exports.default = l;
