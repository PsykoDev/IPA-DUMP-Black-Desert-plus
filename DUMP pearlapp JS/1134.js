var module6 = require('./6'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module799 = require('./799'),
  module755 = require('./755');

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

var v = (function (t) {
  module9.default(x, t);

  var v = x,
    V = w(),
    b = function () {
      var t,
        n = module13.default(v);

      if (V) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function x(t) {
    var n;
    module7.default(this, x);
    (n = b.call(this, t)).state = {
      animatedValue: new module17.Animated.Value(0),
      isClosed: true,
    };
    return n;
  }

  module8.default(x, [
    {
      key: 'expandingView',
      value: function () {
        module17.Animated.timing(this.state.animatedValue, {
          toValue: 1,
          duration: 0,
          delay: 0,
        }).start();
      },
    },
    {
      key: 'collapsingView',
      value: function () {
        module17.Animated.timing(this.state.animatedValue, {
          toValue: 0,
          duration: 100,
          delay: 50,
        }).start();
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          l = React.default.Children.map(this.props.children, function (n, l) {
            return React.default.cloneElement(n, {
              visible: !t.state.isClosed,
            });
          });
        return this.props.visible
          ? React.default.createElement(
              module17.View,
              {
                style: {
                  width: '100%',
                  flex: 1,
                },
                accessibilityLabel: this.props.accessibilityLabel,
              },
              React.default.createElement(
                module799.PATouchable,
                {
                  onPress: function () {
                    t.props.onPress();
                    if (t.state.isClosed) t.expandingView();
                    else t.collapsingView();
                    t.setState({
                      isClosed: !t.state.isClosed,
                    });
                  },
                },
                React.default.createElement(
                  module17.View,
                  {
                    style: [C.content, this.props.style],
                    ref: function (n) {
                      t.bossFolder = n;
                    },
                  },
                  React.default.createElement(
                    module17.View,
                    {
                      style: {
                        flexDirection: 'row',
                        alignItems: 'center',
                      },
                    },
                    React.default.createElement(module799.PACirCle, {
                      width: 8,
                      height: 8,
                      backgroundColor: this.props.oneOrMoreActive ? module755.Color.bossActiveCircle : module755.Color.bossUnactiveCircle,
                    }),
                    React.default.createElement(module17.Image, {
                      style: {
                        width: 30,
                        resizeMode: 'contain',
                        marginLeft: 8,
                      },
                      source: module755.ImageMap.icn_boss,
                    }),
                    React.default.createElement(
                      module17.Text,
                      {
                        style: module6.default({}, C.titleText, this.props.titleStyle),
                      },
                      this.props.title
                    )
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
                      style: module6.default({}, C.arrowImage, this.state.isClosed ? C.downRotate : C.upRotate),
                      source: module755.ImageMap.icn_alarm_top_next_mo,
                    })
                  )
                )
              ),
              React.default.createElement(
                module17.Animated.View,
                {
                  style: {
                    width: '100%',
                    height: '100%',
                    opacity: this.state.animatedValue,
                  },
                },
                l
              )
            )
          : null;
      },
    },
  ]);
  return x;
})(React.default.Component);

exports.default = v;
v.defaultProps = {
  style: {},
  titleStyle: {},
  title: 'Undefined',
  value: '',
  visible: true,
  onPress: function () {
    return null;
  },
};
var C = module17.StyleSheet.create({
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
    paddingStart: 16,
    paddingEnd: 16,
  },
  titleText: {
    color: module755.Color.optionText,
    fontSize: 22,
    paddingStart: 12,
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
  downRotate: {
    transform: [
      {
        rotate: '90deg',
      },
    ],
  },
  upRotate: {
    transform: [
      {
        rotate: '270deg',
      },
    ],
  },
});
