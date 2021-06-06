var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module541 = require('./541'),
  module596 = require('./596'),
  module507 = require('./507'),
  module510 = require('./510');

function y() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var _ = (function (t) {
  module9.default(k, t);

  var u = k,
    module541 = y(),
    _ = function () {
      var t,
        n = module13.default(u);

      if (module541) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function k(t, u) {
    var o;
    module7.default(this, k);
    (o = _.call(this, u))._storage = t;
    return o;
  }

  module8.default(k, [
    {
      key: 'toString',
      value: function () {
        return 'gs://' + this._storage.app.options.storageBucket + this.path;
      },
    },
    {
      key: 'child',
      value: function (t) {
        return new k(this._storage, this.path + '/' + t);
      },
    },
    {
      key: 'delete',
      value: function () {
        return module510.getNativeModule(this._storage).delete(this.path);
      },
    },
    {
      key: 'getDownloadURL',
      value: function () {
        return module510.getNativeModule(this._storage).getDownloadURL(this.path);
      },
    },
    {
      key: 'getMetadata',
      value: function () {
        return module510.getNativeModule(this._storage).getMetadata(this.path);
      },
    },
    {
      key: 'updateMetadata',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        return module510.getNativeModule(this._storage).updateMetadata(this.path, t);
      },
    },
    {
      key: 'downloadFile',
      value: function (t) {
        return new module596.default(module596.DOWNLOAD_TASK, module510.getNativeModule(this._storage).downloadFile(this.path, t), this);
      },
    },
    {
      key: 'putFile',
      value: function (t) {
        var u = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
          n = module507.isIOS ? t.replace('file://', '') : t;
        if (n.includes('%')) n = decodeURIComponent(n);
        return new module596.default(module596.UPLOAD_TASK, module510.getNativeModule(this._storage).putFile(this.path, n, u), this);
      },
    },
    {
      key: 'fullPath',
      get: function () {
        return this.path;
      },
    },
    {
      key: 'put',
      get: function () {
        return this.putFile;
      },
    },
  ]);
  return k;
})(module541.default);

exports.default = _;
