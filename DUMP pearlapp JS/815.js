var module6 = require('./6'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module755 = require('./755'),
  module806 = require('./806');

function w() {
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

var x = (function (t) {
  module9.default(S, t);

  var n = S,
    x = w(),
    E = function () {
      var t,
        l = module13.default(n);

      if (x) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(l, arguments, o);
      } else t = l.apply(this, arguments);

      return module11.default(this, t);
    };

  function S(t) {
    module7.default(this, S);
    return E.call(this, t);
  }

  module8.default(S, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return this.props.visible
          ? React.default.createElement(
              module806.default,
              {
                onPress: function () {
                  return t.props.onPress();
                },
                accessibilityLabel: this.props.accessibilityLabel,
              },
              React.default.createElement(
                module17.View,
                {
                  style: [b.content, this.props.style],
                },
                React.default.createElement(
                  module17.Text,
                  {
                    style: module6.default({}, b.titleText, this.props.titleStyle),
                  },
                  this.props.title
                ),
                React.default.createElement(
                  module17.View,
                  {
                    style: b.valueAndArrowContainer,
                  },
                  React.default.createElement(
                    module17.Text,
                    {
                      style: b.valueText,
                    },
                    this.props.value
                  ),
                  React.default.createElement(
                    module17.View,
                    {
                      style: {
                        width: 20,
                        height: 20,
                      },
                    },
                    React.default.createElement(module17.Image, {
                      style: b.arrowImage,
                      source: module755.ImageMap.icn_alarm_top_next_mo,
                    })
                  )
                )
              )
            )
          : null;
      },
    },
  ]);
  return S;
})(React.Component);

exports.default = x;
x.defaultProps = {
  style: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingStart: 16,
    paddingEnd: 16,
  },
  titleStyle: {},
  title: 'Undefined',
  value: '',
  visible: true,
  onPress: function () {
    return null;
  },
};
var b = module17.StyleSheet.create({
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: module755.Color.optionText,
    fontSize: 18,
  },
  valueAndArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueText: {
    color: '#927F75',
    textAlign: 'right',
    marginRight: 10,
    fontSize: 14,
  },
  arrowImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    tintColor: '#696A6B',
  },
});
