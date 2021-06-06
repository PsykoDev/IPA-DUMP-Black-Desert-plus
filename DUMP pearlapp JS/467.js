var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module468 = require('./468');

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

var v = (function (t) {
  module9.default(R, t);

  var v = R,
    h = p(),
    y = function () {
      var t,
        n = module13.default(v);

      if (h) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function R() {
    module7.default(this, R);
    return y.apply(this, arguments);
  }

  module8.default(R, [
    {
      key: 'render',
      value: function () {
        var t = this.props.navigation.state,
          n = t.routes[t.index].key,
          o = this.props.descriptors[n],
          u = o.getComponent();
        return React.default.createElement(module468.default, {
          component: u,
          navigation: o.navigation,
          screenProps: this.props.screenProps,
        });
      },
    },
  ]);
  return R;
})(React.default.Component);

exports.default = v;
