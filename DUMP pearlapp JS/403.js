var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module17 = require('./17'),
  module402 = require('./402'),
  React = require('react'),
  PropTypes = require('prop-types');

function O() {
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

var T = (function (t, ...args) {
  module9.default(S, t);

  var n = S,
    PropTypes = O(),
    T = function () {
      var t,
        l = module13.default(n);

      if (PropTypes) {
        var u = module13.default(this).constructor;
        t = Reflect.construct(l, arguments, u);
      } else t = l.apply(this, arguments);

      return module11.default(this, t);
    };

  function S() {
    var t;
    module7.default(this, S);

    (t = T.call(this, ...args)).getChildStyleOpacityWithDefault = function () {
      var n = module17.StyleSheet.flatten(t.props.style) || {};
      return null == n.opacity ? 1 : n.opacity;
    };

    t.opacity = new module17.Animated.Value(t.getChildStyleOpacityWithDefault());

    t.setOpacityTo = function (n, l) {
      module17.Animated.timing(t.opacity, {
        toValue: n,
        duration: l,
        easing: module17.Easing.inOut(module17.Easing.quad),
        useNativeDriver: true,
      }).start();
    };

    t.onStateChange = function (n, l) {
      if (l === module402.TOUCHABLE_STATE.BEGAN) t.setOpacityTo(t.props.activeOpacity, 0);
      else if (!(l !== module402.TOUCHABLE_STATE.UNDETERMINED && l !== module402.TOUCHABLE_STATE.MOVED_OUTSIDE)) t.setOpacityTo(t.getChildStyleOpacityWithDefault(), 150);
    };

    return t;
  }

  module8.default(S, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.style,
          c = undefined === n ? {} : n,
          o = module56.default(t, ['style']);
        return React.default.createElement(
          module402.default,
          module6.default({}, o, {
            style: [
              c,
              {
                opacity: this.opacity,
              },
            ],
            onStateChange: this.onStateChange,
          }),
          this.props.children ? this.props.children : React.default.createElement(module17.View, null)
        );
      },
    },
  ]);
  return S;
})(React.Component);

exports.default = T;
T.defaultProps = module6.default({}, module402.default.defaultProps, {
  activeOpacity: 0.2,
});
T.propTypes = module6.default({}, module402.default.publicPropTypes, {
  style: PropTypes.default.any,
  activeOpacity: PropTypes.default.number,
});
