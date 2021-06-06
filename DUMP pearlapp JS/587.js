var module6 = require('./6'),
  module7 = require('./7'),
  module510 = require('./510'),
  c = (function () {
    function t(u) {
      module7.default(this, t);
      this.shouldAutoComplete = true;
      var o = module510.getNativeModule(u);
      this._backgroundFetchResult = {
        noData: o.backgroundFetchResultNoData,
        newData: o.backgroundFetchResultNewData,
        failure: o.backgroundFetchResultFailed,
      };
    }

    module8.default(t, [
      {
        key: 'backgroundFetchResult',
        get: function () {
          return module6.default({}, this._backgroundFetchResult);
        },
      },
    ]);
    return t;
  })();

exports.default = c;
