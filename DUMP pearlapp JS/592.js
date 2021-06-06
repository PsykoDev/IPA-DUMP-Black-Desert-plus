var module7 = require('./7'),
  module510 = require('./510'),
  c = (function () {
    function t(n, f) {
      module7.default(this, t);
      this._perf = n;
      this.identifier = f;
    }

    module8.default(t, [
      {
        key: 'getAttribute',
        value: function (t) {
          return module510.getNativeModule(this._perf).getTraceAttribute(this.identifier, t);
        },
      },
      {
        key: 'getAttributes',
        value: function () {
          return module510.getNativeModule(this._perf).getTraceAttributes(this.identifier);
        },
      },
      {
        key: 'getMetric',
        value: function (t) {
          return module510.getNativeModule(this._perf).getTraceLongMetric(this.identifier, t);
        },
      },
      {
        key: 'incrementMetric',
        value: function (t, u) {
          return module510.getNativeModule(this._perf).incrementTraceMetric(this.identifier, t, u);
        },
      },
      {
        key: 'putAttribute',
        value: function (t, u) {
          return module510.getNativeModule(this._perf).putTraceAttribute(this.identifier, t, u);
        },
      },
      {
        key: 'putMetric',
        value: function (t, u) {
          return module510.getNativeModule(this._perf).putTraceMetric(this.identifier, t, u);
        },
      },
      {
        key: 'removeAttribute',
        value: function (t) {
          return module510.getNativeModule(this._perf).removeTraceAttribute(this.identifier, t);
        },
      },
      {
        key: 'start',
        value: function () {
          return module510.getNativeModule(this._perf).startTrace(this.identifier);
        },
      },
      {
        key: 'stop',
        value: function () {
          return module510.getNativeModule(this._perf).stopTrace(this.identifier);
        },
      },
    ]);
    return t;
  })();

exports.default = c;
