var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function l() {
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

var module225 = require('./225'),
  React = require('react'),
  module60 = require('./60'),
  module88 = require('./88'),
  f = module225.createAnimatedComponent(module88),
  v = (function (p, ...args) {
    module9(x, p);

    var module60 = x,
      module88 = l(),
      v = function () {
        var t,
          n = module13(module60);

        if (module88) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function x() {
      var n;
      module7(this, x);
      (n = v.call(this, ...args)).state = {
        measured: false,
        layoutY: 0,
        layoutHeight: 0,
        nextHeaderLayoutY: n.props.nextHeaderLayoutY,
      };

      n._onLayout = function (t) {
        n.setState({
          measured: true,
          layoutY: t.nativeEvent.layout.y,
          layoutHeight: t.nativeEvent.layout.height,
        });
        n.props.onLayout(t);
        var o = React.Children.only(n.props.children);
        if (o.props.onLayout) o.props.onLayout(t);
      };

      return n;
    }

    module8(x, [
      {
        key: 'setNextHeaderY',
        value: function (t) {
          this.setState({
            nextHeaderLayoutY: t,
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.inverted,
            o = t.scrollViewHeight,
            u = this.state,
            s = u.measured,
            l = u.layoutHeight,
            p = u.layoutY,
            h = u.nextHeaderLayoutY,
            y = [-1, 0],
            v = [0, 0];
          if (s)
            if (n) {
              if (null != o) {
                var x = p + l - o;

                if (x > 0) {
                  y.push(x);
                  v.push(0);
                  y.push(x + 1);
                  v.push(1);
                  var H = (h || 0) - l - o;

                  if (H > x) {
                    y.push(H, H + 1);
                    v.push(H - x, H - x);
                  }
                }
              }
            } else {
              y.push(p);
              v.push(0);
              var Y = (h || 0) - l;

              if (Y >= p) {
                y.push(Y, Y + 1);
                v.push(Y - p, Y - p);
              } else {
                y.push(p + 1);
                v.push(1);
              }
            }
          var R = this.props.scrollAnimatedValue.interpolate({
              inputRange: y,
              outputRange: v,
            }),
            C = React.Children.only(this.props.children);
          return (
            <f
              collapsable={false}
              onLayout={this._onLayout}
              style={[
                C.props.style,
                L.header,
                {
                  transform: [
                    {
                      translateY: R,
                    },
                  ],
                },
              ]}
            >
              <C style={L.fill} onLayout={undefined} />
            </f>
          );
        },
      },
    ]);
    return x;
  })(React.Component),
  L = module60.create({
    header: {
      zIndex: 10,
    },
    fill: {
      flex: 1,
    },
  });

class v {
  constructor() {
    var n;
    module7(this, x);
    (n = v.call(this, ...args)).state = {
      measured: false,
      layoutY: 0,
      layoutHeight: 0,
      nextHeaderLayoutY: n.props.nextHeaderLayoutY,
    };

    n._onLayout = function (t) {
      n.setState({
        measured: true,
        layoutY: t.nativeEvent.layout.y,
        layoutHeight: t.nativeEvent.layout.height,
      });
      n.props.onLayout(t);
      var o = React.Children.only(n.props.children);
      if (o.props.onLayout) o.props.onLayout(t);
    };

    return n;
  }

  setNextHeaderY(t) {
    this.setState({
      nextHeaderLayoutY: t,
    });
  }

  render() {
    var t = this.props,
      n = t.inverted,
      o = t.scrollViewHeight,
      u = this.state,
      s = u.measured,
      l = u.layoutHeight,
      p = u.layoutY,
      h = u.nextHeaderLayoutY,
      y = [-1, 0],
      v = [0, 0];
    if (s)
      if (n) {
        if (null != o) {
          var x = p + l - o;

          if (x > 0) {
            y.push(x);
            v.push(0);
            y.push(x + 1);
            v.push(1);
            var H = (h || 0) - l - o;

            if (H > x) {
              y.push(H, H + 1);
              v.push(H - x, H - x);
            }
          }
        }
      } else {
        y.push(p);
        v.push(0);
        var Y = (h || 0) - l;

        if (Y >= p) {
          y.push(Y, Y + 1);
          v.push(Y - p, Y - p);
        } else {
          y.push(p + 1);
          v.push(1);
        }
      }
    var R = this.props.scrollAnimatedValue.interpolate({
        inputRange: y,
        outputRange: v,
      }),
      C = React.Children.only(this.props.children);
    return (
      <f
        collapsable={false}
        onLayout={this._onLayout}
        style={[
          C.props.style,
          L.header,
          {
            transform: [
              {
                translateY: R,
              },
            ],
          },
        ]}
      >
        <C style={L.fill} onLayout={undefined} />
      </f>
    );
  }
}

module.exports = v;
