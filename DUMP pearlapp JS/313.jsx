var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module60 = require('./60'),
  module314 = require('./314');

function C() {
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

var R = (function (t, ...args) {
  module9.default(V, t);

  var n = V,
    module60 = C(),
    R = function () {
      var t,
        o = module13.default(n);

      if (module60) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function V() {
    var t;
    module7.default(this, V);

    (t = R.call(this, ...args))._onChange = function (n) {
      if (t.props.onChange) t.props.onChange(n);
      if (t.props.onValueChange) t.props.onValueChange(n.nativeEvent.value);
    };

    return t;
  }

  module8.default(V, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.forwardedRef,
          f = t.style,
          l = module56.default(t, ['forwardedRef', 'onValueChange', 'style']);
        return <module314.default />;
      },
    },
  ]);
  return V;
})(React.Component);

R.defaultProps = {
  values: [],
  enabled: true,
};
var w = module60.default.create({
    segmentedControl: {
      height: 28,
    },
  }),
  V = React.forwardRef(function (t, n) {
    return <R />;
  });
module.exports = V;
