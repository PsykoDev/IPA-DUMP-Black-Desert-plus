var module7 = require('./7'),
  module509 = require('./509'),
  module510 = require('./510'),
  l = (function () {
    function t(o, l, c) {
      if ((module7.default(this, t), !l.moduleName)) throw new Error('Missing module name');
      if (!l.namespace) throw new Error('Missing namespace');
      var f = l.moduleName;
      this._app = o;
      this._customUrlOrRegion = c;
      this.namespace = l.namespace;
      module510.initialiseNativeModule(this, l, c);
      module509.initialiseLogger(this, o.name + ':' + f.replace('RNFirebase', ''));
    }

    module8.default(t, [
      {
        key: 'app',
        get: function () {
          return this._app;
        },
      },
      {
        key: 'log',
        get: function () {
          return module509.getLogger(this);
        },
      },
    ]);
    return t;
  })();

exports.default = l;
