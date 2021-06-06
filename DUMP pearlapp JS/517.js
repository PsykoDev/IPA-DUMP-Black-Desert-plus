var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module6 = require('./6'),
  React = require('react'),
  module17 = require('./17'),
  PropTypes = require('prop-types'),
  module518 = require('./518'),
  module507 = require('./507'),
  module513 = require('./513'),
  module515 = require('./515');

function R() {
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

var T = module6.default({}, module17.ViewPropTypes, {
  size: PropTypes.default.string.isRequired,
  unitId: PropTypes.default.string.isRequired,
  request: PropTypes.default.object,
  video: PropTypes.default.object,
});
Object.keys(module518.default).forEach(function (t) {
  T[t] = PropTypes.default.func;
});
Object.keys(module518.NativeExpressEventTypes).forEach(function (t) {
  T[t] = PropTypes.default.func;
});
var j = {};

function q(t) {
  if (j[t]) return j[t];
  var n = module17.requireNativeComponent(t, z, {
    nativeOnly: {
      onBannerEvent: true,
    },
  });
  j[t] = n;
  return n;
}

var z = (function (t) {
  module9.default(S, t);

  var n = S,
    PropTypes = R(),
    E = function () {
      var t,
        u = module13.default(n);

      if (PropTypes) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, o);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function S(t) {
    var n;
    module7.default(this, S);

    (n = E.call(this, t)).onBannerEvent = function (t) {
      var u = t.nativeEvent,
        o = module12.default(n).props;
      if (o[u.type])
        if ('onAdFailedToLoad' === u.type) {
          var l = u.payload,
            s = l.code,
            c = l.message;
          o[u.type](module507.nativeToJSError(s, c));
        } else o[u.type](u.payload || {});
      if ('onSizeChange' === u.type) n.updateSize(u.payload);
      if ('onAdLoaded' === u.type && 'ios' === module17.Platform.OS) n.updateSize(u.payload);
    };

    n.updateSize = function (t) {
      var u = t.width,
        o = t.height;
      if (undefined !== u && undefined !== o)
        n.setState({
          width: u,
          height: o,
        });
    };

    n.state = {
      width: 0,
      height: 0,
    };
    n.nativeView = q(t.class);
    return n;
  }

  module8.default(S, [
    {
      key: 'render',
      value: function () {
        var t = this.props.style;
        return React.default.createElement(
          this.nativeView,
          module6.default({}, this.props, {
            style: [t, module6.default({}, this.state)],
            onBannerEvent: this.onBannerEvent,
          })
        );
      },
    },
  ]);
  return S;
})(React.default.Component);

z.propTypes = T;
z.defaultProps = {
  request: new module513.default().addTestDevice().build(),
  video: new module515.default().build(),
};
var O = z;
exports.default = O;
