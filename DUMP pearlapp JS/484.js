exports.default = function (t) {
  var c,
    f,
    y = module438.withNavigation(
      ((f = c =
        (function (n) {
          module9.default(f, n);
          var c = h(f);

          function f() {
            module7.default(this, f);
            return c.apply(this, arguments);
          }

          module8.default(f, [
            {
              key: 'componentDidMount',
              value: function () {
                var t = this;
                this._subscription = this.props.navigation.addListener('refocus', function () {
                  var n = t.getNode();
                  if (t.props.navigation.isFocused() && null !== n)
                    null != n.scrollToTop
                      ? n.scrollToTop()
                      : null != n.scrollTo
                      ? n.scrollTo({
                          y: 0,
                        })
                      : null != n.scrollResponderScrollTo &&
                        n.scrollResponderScrollTo({
                          y: 0,
                        });
                });
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                if (null != this._subscription) this._subscription.remove();
              },
            },
            {
              key: 'getNode',
              value: function () {
                return null === this._scrollRef
                  ? null
                  : this._scrollRef.getScrollResponder
                  ? this._scrollRef.getScrollResponder()
                  : this._scrollRef.getNode
                  ? this._scrollRef.getNode()
                  : this._scrollRef;
              },
            },
            {
              key: 'render',
              value: function () {
                var n = this;
                return React.default.createElement(
                  t,
                  R(
                    {
                      ref: function (t) {
                        n._scrollRef = t;
                      },
                    },
                    this.props
                  )
                );
              },
            },
          ]);
          return f;
        })(React.default.PureComponent)),
      N(c, 'displayName', 'withNavigationScrolling('.concat(t.displayName || t.name, ')')),
      f)
    ),
    _ = (function (t, ...args) {
      module9.default(f, t);
      var c = h(f);

      function f() {
        var t;
        module7.default(this, f);
        t = c.call(this, ...args);
        N(module12.default(t), '_captureRef', function (n) {
          t._innerRef = n;
          if (t.props.onRef) t.props.onRef(n);
        });
        N(module12.default(t), 'setNativeProps', function () {
          var n;
          return (n = t._innerRef.getNode()).setNativeProps.apply(n, arguments);
        });
        N(module12.default(t), 'getScrollResponder', function () {
          var n;
          return (n = t._innerRef.getNode()).getScrollResponder.apply(n, arguments);
        });
        N(module12.default(t), 'getScrollableNode', function () {
          var n;
          return (n = t._innerRef.getNode()).getScrollableNode.apply(n, arguments);
        });
        N(module12.default(t), 'getInnerViewNode', function () {
          var n;
          return (n = t._innerRef.getNode()).getInnerViewNode.apply(n, arguments);
        });
        N(module12.default(t), 'scrollTo', function () {
          var n;
          return (n = t._innerRef.getNode()).scrollTo.apply(n, arguments);
        });
        N(module12.default(t), 'scrollToEnd', function () {
          var n;
          return (n = t._innerRef.getNode()).scrollToEnd.apply(n, arguments);
        });
        N(module12.default(t), 'scrollWithoutAnimationTo', function () {
          var n;
          return (n = t._innerRef.getNode()).scrollWithoutAnimationTo.apply(n, arguments);
        });
        N(module12.default(t), 'flashScrollIndicators', function () {
          var n;
          return (n = t._innerRef.getNode()).flashScrollIndicators.apply(n, arguments);
        });
        return t;
      }

      module8.default(f, [
        {
          key: 'render',
          value: function () {
            return React.default.createElement(
              y,
              R({}, this.props, {
                onRef: this._captureRef,
              })
            );
          },
        },
      ]);
      return f;
    })(React.default.PureComponent);

  N(_, 'displayName', 'NavigationAwareScrollable('.concat(t.displayName || t.name, ')'));
  return module412.default(_, t);
};

var module12 = require('./12'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module412 = require('./412'),
  module438 = require('./438');

function h(t) {
  var n = y();
  return function () {
    var o,
      l = module13.default(t);

    if (n) {
      var u = module13.default(this).constructor;
      o = Reflect.construct(l, arguments, u);
    } else o = l.apply(this, arguments);

    return module11.default(this, o);
  };
}

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

function R() {
  return (R =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && (t[l] = o[l]);
      }

      return t;
    }).apply(this, arguments);
}

function N(t, n, o) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
}
