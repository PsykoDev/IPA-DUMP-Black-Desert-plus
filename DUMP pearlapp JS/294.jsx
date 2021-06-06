var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function f() {
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

require('./58');

var module258 = require('./258'),
  module260 = require('./260'),
  React = require('react'),
  module60 = require('./60'),
  module88 = require('./88'),
  _ = (function (_) {
    module9(C, _);

    var R = C,
      k = f(),
      L = function () {
        var t,
          n = module13(R);

        if (k) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function C(t) {
      var n;
      module7(this, C);
      (n = L.call(this, t))._frame = null;
      n._subscriptions = [];
      n._initialFrameHeight = 0;

      n._onKeyboardChange = function (t) {
        if (null != t) {
          var o = t.duration,
            s = t.easing,
            u = t.endCoordinates,
            c = n._relativeKeyboardHeight(u);

          if (n.state.bottom !== c) {
            if (o && s)
              module260.configureNext({
                duration: o > 10 ? o : 10,
                update: {
                  duration: o > 10 ? o : 10,
                  type: module260.Types[s] || 'keyboard',
                },
              });
            n.setState({
              bottom: c,
            });
          }
        } else
          n.setState({
            bottom: 0,
          });
      };

      n._onLayout = function (t) {
        n._frame = t.nativeEvent.layout;
        if (!n._initialFrameHeight) n._initialFrameHeight = n._frame.height;
      };

      n.state = {
        bottom: 0,
      };
      n.viewRef = React.createRef();
      return n;
    }

    module8(C, [
      {
        key: '_relativeKeyboardHeight',
        value: function (t) {
          var n = this._frame;
          if (!n || !t) return 0;
          var o = t.screenY - this.props.keyboardVerticalOffset;
          return (n.y + n.height - o) ** 0;
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          this._subscriptions = [module258.addListener('keyboardWillChangeFrame', this._onKeyboardChange)];
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._subscriptions.forEach(function (t) {
            t.remove();
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var o = this.props,
            s = o.behavior,
            u = o.children,
            c = o.contentContainerStyle,
            l = o.enabled,
            f = o.style,
            h = module56(o, ['behavior', 'children', 'contentContainerStyle', 'enabled', 'keyboardVerticalOffset', 'style']),
            y = l ? this.state.bottom : 0;

          switch (s) {
            case 'height':
              var _;

              if (null != this._frame && this.state.bottom > 0)
                _ = {
                  height: this._initialFrameHeight - y,
                  flex: 0,
                };
              return <module88>{u}</module88>;

            case 'position':
              return (
                <module88>
                  <module88
                    style={module60.compose(c, {
                      bottom: y,
                    })}
                  >
                    {u}
                  </module88>
                </module88>
              );

            case 'padding':
              return <module88>{u}</module88>;

            default:
              return <module88>{u}</module88>;
          }
        },
      },
    ]);
    return C;
  })(React.Component);

class _ {
  constructor(t) {
    var n;
    module7(this, C);
    (n = L.call(this, t))._frame = null;
    n._subscriptions = [];
    n._initialFrameHeight = 0;

    n._onKeyboardChange = function (t) {
      if (null != t) {
        var o = t.duration,
          s = t.easing,
          u = t.endCoordinates,
          c = n._relativeKeyboardHeight(u);

        if (n.state.bottom !== c) {
          if (o && s)
            module260.configureNext({
              duration: o > 10 ? o : 10,
              update: {
                duration: o > 10 ? o : 10,
                type: module260.Types[s] || 'keyboard',
              },
            });
          n.setState({
            bottom: c,
          });
        }
      } else
        n.setState({
          bottom: 0,
        });
    };

    n._onLayout = function (t) {
      n._frame = t.nativeEvent.layout;
      if (!n._initialFrameHeight) n._initialFrameHeight = n._frame.height;
    };

    n.state = {
      bottom: 0,
    };
    n.viewRef = React.createRef();
    return n;
  }

  _relativeKeyboardHeight(t) {
    var n = this._frame;
    if (!n || !t) return 0;
    var o = t.screenY - this.props.keyboardVerticalOffset;
    return (n.y + n.height - o) ** 0;
  }

  componentDidMount() {
    this._subscriptions = [module258.addListener('keyboardWillChangeFrame', this._onKeyboardChange)];
  }

  componentWillUnmount() {
    this._subscriptions.forEach(function (t) {
      t.remove();
    });
  }

  render() {
    var o = this.props,
      s = o.behavior,
      u = o.children,
      c = o.contentContainerStyle,
      l = o.enabled,
      f = o.style,
      h = module56(o, ['behavior', 'children', 'contentContainerStyle', 'enabled', 'keyboardVerticalOffset', 'style']),
      y = l ? this.state.bottom : 0;

    switch (s) {
      case 'height':
        var _;

        if (null != this._frame && this.state.bottom > 0)
          _ = {
            height: this._initialFrameHeight - y,
            flex: 0,
          };
        return <module88>{u}</module88>;

      case 'position':
        return (
          <module88>
            <module88
              style={module60.compose(c, {
                bottom: y,
              })}
            >
              {u}
            </module88>
          </module88>
        );

      case 'padding':
        return <module88>{u}</module88>;

      default:
        return <module88>{u}</module88>;
    }
  }
}

_.defaultProps = {
  enabled: true,
  keyboardVerticalOffset: 0,
};
module.exports = _;
