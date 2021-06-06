var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module402 = require('./402'),
  module17 = require('./17'),
  PropTypes = require('prop-types');

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

var v = (function (t) {
  module9.default(E, t);

  var n = E,
    PropTypes = C(),
    v = function () {
      var t,
        l = module13.default(n);

      if (PropTypes) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(l, arguments, o);
      } else t = l.apply(this, arguments);

      return module11.default(this, t);
    };

  function E(t) {
    var n;
    module7.default(this, E);

    (n = v.call(this, t)).showUnderlay = function () {
      if (n.hasPressHandler()) {
        n.setState({
          extraChildStyle: {
            opacity: n.props.activeOpacity,
          },
          extraUnderlayStyle: {
            backgroundColor: n.props.underlayColor,
          },
        });
        if (n.props.onShowUnderlay) n.props.onShowUnderlay();
      }
    };

    n.hasPressHandler = function () {
      return n.props.onPress || n.props.onPressIn || n.props.onPressOut || n.props.onLongPress;
    };

    n.hideUnderlay = function () {
      n.setState({
        extraChildStyle: null,
        extraUnderlayStyle: null,
      });
      if (n.props.onHideUnderlay) n.props.onHideUnderlay();
    };

    n.onStateChange = function (t, l) {
      if (l === module402.TOUCHABLE_STATE.BEGAN) n.showUnderlay();
      else if (!(l !== module402.TOUCHABLE_STATE.UNDETERMINED && l !== module402.TOUCHABLE_STATE.MOVED_OUTSIDE)) n.hideUnderlay();
    };

    n.state = {
      extraChildStyle: null,
      extraUnderlayStyle: null,
    };
    return n;
  }

  module8.default(E, [
    {
      key: 'renderChildren',
      value: function () {
        if (!this.props.children) return React.default.createElement(module17.View, null);
        var t = React.default.Children.only(this.props.children);
        return React.default.cloneElement(t, {
          style: module17.StyleSheet.compose(t.props.style, this.state.extraChildStyle),
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.style,
          u = undefined === n ? {} : n,
          s = module56.default(t, ['style']),
          f = this.state.extraUnderlayStyle;
        return React.default.createElement(
          module402.default,
          module6.default({}, s, {
            style: [u, f],
            onStateChange: this.onStateChange,
          }),
          this.renderChildren()
        );
      },
    },
  ]);
  return E;
})(React.Component);

exports.default = v;
v.defaultProps = module6.default({}, module402.default.defaultProps, {
  activeOpacity: 0.85,
  delayPressOut: 100,
  underlayColor: 'black',
});
v.propTypes = module6.default({}, module402.default.publicPropTypes, {
  activeOpacity: PropTypes.default.number,
  underlayColor: PropTypes.default.string,
  style: PropTypes.default.any,
  onShowUnderlay: PropTypes.default.func,
  onHideUnderlay: PropTypes.default.func,
});
