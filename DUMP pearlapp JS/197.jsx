var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module6 = require('./6');

function c() {
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

var module198 = require('./198'),
  React = require('react'),
  module192 = require('./192'),
  module202 = require('./202'),
  module203 = require('./203'),
  module75 = require('./75'),
  module183 = require('./183'),
  module211 = require('./211'),
  module82 = require('./82'),
  w = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 30,
  },
  x = {
    validAttributes: module6({}, module192.UIView, {
      isHighlighted: true,
      numberOfLines: true,
      ellipsizeMode: true,
      allowFontScaling: true,
      maxFontSizeMultiplier: true,
      disabled: true,
      selectable: true,
      selectionColor: true,
      adjustsFontSizeToFit: true,
      minimumFontScale: true,
      textBreakStrategy: true,
      onTextLayout: true,
      onInlineViewLayout: true,
      dataDetectorType: true,
    }),
    directEventTypes: {
      topTextLayout: {
        registrationName: 'onTextLayout',
      },
      topInlineViewLayout: {
        registrationName: 'onInlineViewLayout',
      },
    },
    uiViewClassName: 'RCTText',
  },
  P = (function (f, ...args) {
    module9(x, f);

    var module192 = x,
      module75 = c(),
      y = function () {
        var t,
          n = module13(module192);

        if (module75) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function x() {
      var n;
      module7(this, x);
      (n = y.call(this, ...args)).state = module6({}, module203.Mixin.touchableGetInitialState(), {
        isHighlighted: false,
        createResponderHandlers: n._createResponseHandlers.bind(module12(n)),
        responseHandlers: null,
      });
      return n;
    }

    module8(
      x,
      [
        {
          key: 'render',
          value: function () {
            var t = this.props;
            if (C(t))
              t = module6({}, t, this.state.responseHandlers, {
                isHighlighted: this.state.isHighlighted,
              });
            if (null != t.selectionColor)
              t = module6({}, t, {
                selectionColor: module82(t.selectionColor),
              });
            return (
              <module202.Consumer>
                {function (n) {
                  return n ? (
                    <V />
                  ) : (
                    <module202.Provider value>
                      <M />
                    </module202.Provider>
                  );
                }}
              </module202.Consumer>
            );
          },
        },
        {
          key: '_createResponseHandlers',
          value: function () {
            var t = this;
            return {
              onStartShouldSetResponder: function () {
                var n = t.props.onStartShouldSetResponder,
                  o = (null != n && n()) || C(t.props);
                if (o) t._attachTouchHandlers();
                return o;
              },
              onResponderGrant: function (n, o) {
                module211(t.touchableHandleResponderGrant)(n, o);
                if (null != t.props.onResponderGrant) t.props.onResponderGrant.call(t, n, o);
              },
              onResponderMove: function (n) {
                module211(t.touchableHandleResponderMove)(n);
                if (null != t.props.onResponderMove) t.props.onResponderMove.call(t, n);
              },
              onResponderRelease: function (n) {
                module211(t.touchableHandleResponderRelease)(n);
                if (null != t.props.onResponderRelease) t.props.onResponderRelease.call(t, n);
              },
              onResponderTerminate: function (n) {
                module211(t.touchableHandleResponderTerminate)(n);
                if (null != t.props.onResponderTerminate) t.props.onResponderTerminate.call(t, n);
              },
              onResponderTerminationRequest: function () {
                var n = t.props.onResponderTerminationRequest;
                return !!module211(t.touchableHandleResponderTerminationRequest)() && (null == n || n());
              },
            };
          },
        },
        {
          key: '_attachTouchHandlers',
          value: function () {
            var t = this;

            if (null == this.touchableGetPressRectOffset) {
              for (var n in module203.Mixin) 'function' == typeof module203.Mixin[n] && (this[n] = module203.Mixin[n].bind(this));

              this.touchableHandleActivePressIn = function () {
                if (!t.props.suppressHighlighting && C(t.props))
                  t.setState({
                    isHighlighted: true,
                  });
              };

              this.touchableHandleActivePressOut = function () {
                if (!t.props.suppressHighlighting && C(t.props))
                  t.setState({
                    isHighlighted: false,
                  });
              };

              this.touchableHandlePress = function (n) {
                if (null != t.props.onPress) t.props.onPress(n);
              };

              this.touchableHandleLongPress = function (n) {
                if (null != t.props.onLongPress) t.props.onLongPress(n);
              };

              this.touchableGetPressRectOffset = function () {
                return null == t.props.pressRetentionOffset ? w : t.props.pressRetentionOffset;
              };
            }
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, n) {
            return null == n.responseHandlers && C(t)
              ? {
                  responseHandlers: n.createResponderHandlers(),
                }
              : null;
          },
        },
      ]
    );
    return x;
  })(React.Component);

P.defaultProps = {
  accessible: true,
  allowFontScaling: true,
  ellipsizeMode: 'tail',
};
P.viewConfig = x;

var C = function (t) {
    return null != t.onPress || null != t.onLongPress || null != t.onStartShouldSetResponder;
  },
  M = module183(x.uiViewClassName, function () {
    return x;
  }),
  V =
    null == module75.getViewManagerConfig('RCTVirtualText')
      ? M
      : module183('RCTVirtualText', function () {
          return {
            validAttributes: module6({}, module192.UIView, {
              isHighlighted: true,
              maxFontSizeMultiplier: true,
            }),
            uiViewClassName: 'RCTVirtualText',
          };
        }),
  L = React.forwardRef(function (t, n) {
    return <P />;
  });

L.displayName = 'Text';
L.propTypes = module198;
module.exports = L;
