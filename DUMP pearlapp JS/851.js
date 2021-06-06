exports.default = function (t) {
  var n, x;

  x = n = (function (n) {
    module9.default(F, n);

    var PropTypes = F,
      k = R(),
      x = function () {
        var t,
          n = module13.default(PropTypes);

        if (k) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function F() {
      module7.default(this, F);
      return x.apply(this, arguments);
    }

    module8.default(F, [
      {
        key: 'render',
        value: function () {
          var n = this.props,
            s = n.style,
            u = n.iconStyle,
            c = n.children,
            f = module56.default(n, ['style', 'iconStyle', 'children']),
            y = module989.default(f, O, 'style', 'name', 'size', 'color'),
            P = module989.default(f, T),
            R = module861.default(f, Object.keys(y), Object.keys(P), 'iconStyle', 'borderRadius', 'backgroundColor');
          y.style = u ? [C.icon, u] : C.icon;
          var k = module989.default(this.props, 'color'),
            x = module989.default(this.props, 'backgroundColor', 'borderRadius');
          return React.default.createElement(
            module849.TouchableHighlight,
            module6.default(
              {
                style: [C.touchable, x],
              },
              P
            ),
            React.default.createElement(
              module849.View,
              module6.default(
                {
                  style: [C.container, x, s],
                },
                R
              ),
              React.default.createElement(t, y),
              module852.default(c)
                ? React.default.createElement(
                    module849.Text,
                    {
                      style: [C.text, k],
                    },
                    c
                  )
                : c
            )
          );
        },
      },
    ]);
    return F;
  })(React.PureComponent);

  n.propTypes = {
    backgroundColor: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
    borderRadius: PropTypes.default.number,
    color: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
    size: PropTypes.default.number,
    iconStyle: PropTypes.default.any,
    style: PropTypes.default.any,
    children: PropTypes.default.node,
  };
  n.defaultProps = {
    backgroundColor: k,
    borderRadius: 5,
    color: 'white',
    size: 20,
  };
  return x;
};

var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module852 = require('./852'),
  module861 = require('./861'),
  module989 = require('./989'),
  React = require('react'),
  PropTypes = require('prop-types'),
  module849 = require('./849');

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

var C = module849.StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 8,
    },
    touchable: {
      overflow: 'hidden',
    },
    icon: {
      marginRight: 10,
    },
    text: {
      fontWeight: '600',
      backgroundColor: 'transparent',
    },
  }),
  k = '#007AFF',
  O = ['ellipsizeMode', 'numberOfLines', 'textBreakStrategy', 'selectable', 'suppressHighlighting', 'allowFontScaling', 'adjustsFontSizeToFit', 'minimumFontScale'],
  T = [
    'accessible',
    'accessibilityLabel',
    'accessibilityHint',
    'accessibilityComponentType',
    'accessibilityRole',
    'accessibilityStates',
    'accessibilityTraits',
    'onFocus',
    'onBlur',
    'disabled',
    'onPress',
    'onPressIn',
    'onPressOut',
    'onLayout',
    'onLongPress',
    'nativeID',
    'testID',
    'delayPressIn',
    'delayPressOut',
    'delayLongPress',
    'activeOpacity',
    'underlayColor',
    'selectionColor',
    'onShowUnderlay',
    'onHideUnderlay',
    'hasTVPreferredFocus',
    'tvParallaxProperties',
  ];
