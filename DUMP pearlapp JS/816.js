var module6 = require('./6'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module806 = require('./806'),
  module755 = require('./755');

function y() {
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

var S = (function (t) {
  module9.default(z, t);

  var n = z,
    S = y(),
    T = function () {
      var t,
        o = module13.default(n);

      if (S) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(o, arguments, l);
      } else t = o.apply(this, arguments);

      return module11.default(this, t);
    };

  function z() {
    module7.default(this, z);
    return T.apply(this, arguments);
  }

  module8.default(z, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return this.props.visible
          ? React.default.createElement(
              module806.default,
              {
                onPress: function () {
                  if (t.props.enabled) t.props.onPress(!t.props.value);
                },
                isActive: this.props.enabled,
                accessibilityLabel: this.props.accessibilityLabel,
              },
              React.default.createElement(
                module17.View,
                {
                  style: [C.container, this.props.style],
                },
                React.default.createElement(
                  module17.Text,
                  {
                    style: this.props.enabled
                      ? module6.default({}, C.abledTitle, {
                          fontSize: this.props.fontSize,
                        })
                      : module6.default({}, C.disabledTitle, {
                          fontSize: this.props.fontSize,
                        }),
                  },
                  this.props.title
                ),
                React.default.createElement(module17.Switch, {
                  style: {
                    transform: [
                      {
                        scaleX: 0.8,
                      },
                      {
                        scaleY: 0.8,
                      },
                    ],
                  },
                  thumbColor: this.props.enabled ? module755.Color.white : 'rgb(185, 185, 185)',
                  trackColor: {
                    true: module755.Color.activeButton,
                    false: '',
                  },
                  onValueChange: function () {
                    if (t.props.enabled) t.props.onPress(!t.props.value);
                  },
                  value: this.props.value,
                  disabled: !this.props.enabled,
                })
              )
            )
          : null;
      },
    },
  ]);
  return z;
})(React.Component);

exports.default = S;
S.defaultProps = {
  style: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingStart: 16,
    paddingEnd: 16,
  },
  width: '100%',
  title: undefined,
  fontSize: 18,
  onPress: function () {
    return null;
  },
  value: undefined,
  visible: true,
  enabled: true,
};
var C = module17.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  abledTitle: {
    color: module755.Color.optionText,
    fontSize: 18,
  },
  disabledTitle: {
    color: module755.Color.inactiveText,
    fontSize: 18,
  },
});
