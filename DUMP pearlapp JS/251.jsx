require('./252');

var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module253 = require('./253');

function p() {
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

require('./58');

var v,
  React = require('react');

require('./211');

v = {
  SIZE: {},
};

var _ = (function (t, ...args) {
  module9.default(N, t);

  var v = N,
    _ = p(),
    y = function () {
      var t,
        s = module13.default(v);

      if (_) {
        var n = module13.default(this).constructor;
        t = Reflect.construct(s, arguments, n);
      } else t = s.apply(this, arguments);

      return module11.default(this, t);
    };

  function N() {
    var t;
    module7.default(this, N);
    (t = y.call(this, ...args))._lastNativeRefreshing = false;

    t._onRefresh = function () {
      t._lastNativeRefreshing = true;
      if (t.props.onRefresh) t.props.onRefresh();
      t.forceUpdate();
    };

    return t;
  }

  module8.default(N, [
    {
      key: 'componentDidMount',
      value: function () {
        this._lastNativeRefreshing = this.props.refreshing;
      },
    },
    {
      key: 'componentDidUpdate',
      value: function (t) {
        if (this.props.refreshing !== t.refreshing) this._lastNativeRefreshing = this.props.refreshing;
        else if (this.props.refreshing !== this._lastNativeRefreshing && this._setNativePropsOnRef) {
          this._setNativePropsOnRef({
            refreshing: this.props.refreshing,
          });

          this._lastNativeRefreshing = this.props.refreshing;
        }
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          o = this.props,
          f = module56.default(o, ['enabled', 'colors', 'progressBackgroundColor', 'size', 'progressViewOffset']);
        return <module253.default />;
      },
    },
  ]);
  return N;
})(React.Component);

_.SIZE = v.SIZE;
module.exports = _;
