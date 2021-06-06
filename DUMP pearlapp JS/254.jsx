var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module6 = require('./6');

function u() {
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

require('./88');

require('./261');

require('./87');

var h,
  f,
  module225 = require('./225'),
  module58 = require('./58'),
  React = require('react'),
  module90 = require('./90'),
  module255 = require('./255'),
  module262 = require('./262'),
  module60 = require('./60'),
  module18 = require('./18'),
  module263 = require('./263'),
  module182 = require('./182'),
  module177 = require('./177');

require('./264');

function A(t) {
  var n = module6({}, module255.Mixin);

  for (var o in n) 'function' == typeof n[o] && (n[o] = n[o].bind(t));

  return n;
}

h = module182('RCTScrollView');
f = module182('RCTScrollContentView');

var E = React.createContext(null),
  x = Object.freeze({
    horizontal: true,
  }),
  M = Object.freeze({
    horizontal: false,
  }),
  I = (function (w) {
    module9(L, w);

    var module182 = L,
      I = u(),
      z = function () {
        var t,
          n = module13(module182);

        if (I) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function L(n) {
      var l;

      for (var s in (module7(this, L),
      ((l = z.call(this, n))._scrollResponder = A(module12(l))),
      (l._scrollAnimatedValue = new module225.Value(0)),
      (l._scrollAnimatedValueAttachment = null),
      (l._stickyHeaderRefs = new Map()),
      (l._headerLayoutYs = new Map()),
      (l.state = module6(
        {
          layoutHeight: null,
        },
        module255.Mixin.scrollResponderMixinGetInitialState()
      )),
      (l._handleScroll = function (t) {
        l._scrollResponder.scrollResponderHandleScroll(t);
      }),
      (l._handleLayout = function (t) {
        if (true === l.props.invertStickyHeaders)
          l.setState({
            layoutHeight: t.nativeEvent.layout.height,
          });
        if (l.props.onLayout) l.props.onLayout(t);
      }),
      (l._handleContentOnLayout = function (t) {
        var n = t.nativeEvent.layout,
          o = n.width,
          s = n.height;
        if (l.props.onContentSizeChange) l.props.onContentSizeChange(o, s);
      }),
      (l._scrollViewRef = null),
      (l._setScrollViewRef = function (t) {
        l._scrollViewRef = t;
      }),
      (l._innerViewRef = null),
      (l._setInnerViewRef = function (t) {
        l._innerViewRef = t;
      }),
      module255.Mixin))
        'function' == typeof module255.Mixin[s] && s.startsWith('scrollResponder') && (module12(l)[s] = module255.Mixin[s].bind(module12(l)));

      Object.keys(module255.Mixin)
        .filter(function (t) {
          return 'function' != typeof module255.Mixin[t];
        })
        .forEach(function (t) {
          module12(l)[t] = module255.Mixin[t];
        });
      return l;
    }

    module8(L, [
      {
        key: 'UNSAFE_componentWillMount',
        value: function () {
          this._scrollResponder.UNSAFE_componentWillMount();

          this._scrollAnimatedValue = new module225.Value(this.props.contentOffset ? this.props.contentOffset.y : 0);

          this._scrollAnimatedValue.setOffset(this.props.contentInset ? this.props.contentInset.top : 0);

          this._stickyHeaderRefs = new Map();
          this._headerLayoutYs = new Map();
        },
      },
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (t) {
          var n = this.props.contentInset ? this.props.contentInset.top : 0,
            o = t.contentInset ? t.contentInset.top : 0;
          if (n !== o) this._scrollAnimatedValue.setOffset(o || 0);
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          this._updateAnimatedNodeAttachment();
        },
      },
      {
        key: 'componentDidUpdate',
        value: function () {
          this._updateAnimatedNodeAttachment();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._scrollResponder.componentWillUnmount();

          if (this._scrollAnimatedValueAttachment) this._scrollAnimatedValueAttachment.detach();
        },
      },
      {
        key: 'setNativeProps',
        value: function (t) {
          if (this._scrollViewRef) this._scrollViewRef.setNativeProps(t);
        },
      },
      {
        key: 'getScrollResponder',
        value: function () {
          return this;
        },
      },
      {
        key: 'getScrollableNode',
        value: function () {
          return module90.findNodeHandle(this._scrollViewRef);
        },
      },
      {
        key: 'getInnerViewNode',
        value: function () {
          return module90.findNodeHandle(this._innerViewRef);
        },
      },
      {
        key: 'getNativeScrollRef',
        value: function () {
          return this._scrollViewRef;
        },
      },
      {
        key: 'scrollTo',
        value: function (t, n, o) {
          var l, s, c;

          if ('number' == typeof t) {
            console.warn('`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.');
            s = t;
            l = n;
            c = o;
          } else if (t) {
            s = t.y;
            l = t.x;
            c = t.animated;
          }

          this._scrollResponder.scrollResponderScrollTo({
            x: l || 0,
            y: s || 0,
            animated: false !== c,
          });
        },
      },
      {
        key: 'scrollToEnd',
        value: function (t) {
          var n = false !== (t && t.animated);

          this._scrollResponder.scrollResponderScrollToEnd({
            animated: n,
          });
        },
      },
      {
        key: 'scrollWithoutAnimationTo',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0,
            n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0;
          console.warn('`scrollWithoutAnimationTo` is deprecated. Use `scrollTo` instead');
          this.scrollTo({
            x: n,
            y: t,
            animated: false,
          });
        },
      },
      {
        key: 'flashScrollIndicators',
        value: function () {
          this._scrollResponder.scrollResponderFlashScrollIndicators();
        },
      },
      {
        key: '_getKeyForIndex',
        value: function (t, n) {
          var o = n[t];
          return o && o.key;
        },
      },
      {
        key: '_updateAnimatedNodeAttachment',
        value: function () {
          if (this._scrollAnimatedValueAttachment) this._scrollAnimatedValueAttachment.detach();
          if (this.props.stickyHeaderIndices && this.props.stickyHeaderIndices.length > 0)
            this._scrollAnimatedValueAttachment = module225.attachNativeEvent(this._scrollViewRef, 'onScroll', [
              {
                nativeEvent: {
                  contentOffset: {
                    y: this._scrollAnimatedValue,
                  },
                },
              },
            ]);
        },
      },
      {
        key: '_setStickyHeaderRef',
        value: function (t, n) {
          if (n) this._stickyHeaderRefs.set(t, n);
          else this._stickyHeaderRefs.delete(t);
        },
      },
      {
        key: '_onStickyHeaderLayout',
        value: function (t, n, o) {
          var l = this.props.stickyHeaderIndices;

          if (l) {
            var s = React.Children.toArray(this.props.children);

            if (o === this._getKeyForIndex(t, s)) {
              var c = n.nativeEvent.layout.y;

              this._headerLayoutYs.set(o, c);

              var p = l[l.indexOf(t) - 1];

              if (null != p) {
                var u = this._stickyHeaderRefs.get(this._getKeyForIndex(p, s));

                if (u && u.setNextHeaderY) u.setNextHeaderY(c);
              }
            }
          }
        },
      },
      {
        key: 'render',
        value: function () {
          var t,
            n,
            o = this;
          n = f;
          module18(undefined !== (t = h), 'ScrollViewClass must not be undefined');
          module18(undefined !== n, 'ScrollContentContainerViewClass must not be undefined');
          var l = [true === this.props.horizontal && b.contentContainerHorizontal, this.props.contentContainerStyle],
            s = {};
          if (this.props.onContentSizeChange)
            s = {
              onLayout: this._handleContentOnLayout,
            };
          var c = this.props.stickyHeaderIndices,
            u = this.props.children;

          if (null != c && c.length > 0) {
            var R = React.Children.toArray(this.props.children);
            u = R.map(function (t, n) {
              var l = t ? c.indexOf(n) : -1;

              if (l > -1) {
                var s = t.key,
                  p = c[l + 1],
                  u = o.props.StickyHeaderComponent || module262;
                return (
                  <u
                    key={s}
                    ref={function (t) {
                      return o._setStickyHeaderRef(s, t);
                    }}
                    nextHeaderLayoutY={o._headerLayoutYs.get(o._getKeyForIndex(p, R))}
                    onLayout={function (t) {
                      return o._onStickyHeaderLayout(n, t, s);
                    }}
                    scrollAnimatedValue={o._scrollAnimatedValue}
                    inverted={o.props.invertStickyHeaders}
                    scrollViewHeight={o.state.layoutHeight}
                  >
                    {t}
                  </u>
                );
              }

              return t;
            });
          }

          u = <E.Provider value={true === this.props.horizontal ? x : M}>{u}</E.Provider>;

          var _ = Array.isArray(c) && c.length > 0,
            S = <n>{u}</n>,
            w = undefined !== this.props.alwaysBounceHorizontal ? this.props.alwaysBounceHorizontal : this.props.horizontal,
            C = undefined !== this.props.alwaysBounceVertical ? this.props.alwaysBounceVertical : !this.props.horizontal,
            A = !!this.props.DEPRECATED_sendUpdatedChildFrames,
            I = true === this.props.horizontal ? b.baseHorizontal : b.baseVertical,
            z = module6({}, this.props, {
              alwaysBounceHorizontal: w,
              alwaysBounceVertical: C,
              style: [I, this.props.style],
              onContentSizeChange: null,
              onLayout: this._handleLayout,
              onMomentumScrollBegin: this._scrollResponder.scrollResponderHandleMomentumScrollBegin,
              onMomentumScrollEnd: this._scrollResponder.scrollResponderHandleMomentumScrollEnd,
              onResponderGrant: this._scrollResponder.scrollResponderHandleResponderGrant,
              onResponderReject: this._scrollResponder.scrollResponderHandleResponderReject,
              onResponderRelease: this._scrollResponder.scrollResponderHandleResponderRelease,
              onResponderTerminate: this._scrollResponder.scrollResponderHandleTerminate,
              onResponderTerminationRequest: this._scrollResponder.scrollResponderHandleTerminationRequest,
              onScrollBeginDrag: this._scrollResponder.scrollResponderHandleScrollBeginDrag,
              onScrollEndDrag: this._scrollResponder.scrollResponderHandleScrollEndDrag,
              onScrollShouldSetResponder: this._scrollResponder.scrollResponderHandleScrollShouldSetResponder,
              onStartShouldSetResponder: this._scrollResponder.scrollResponderHandleStartShouldSetResponder,
              onStartShouldSetResponderCapture: this._scrollResponder.scrollResponderHandleStartShouldSetResponderCapture,
              onTouchEnd: this._scrollResponder.scrollResponderHandleTouchEnd,
              onTouchMove: this._scrollResponder.scrollResponderHandleTouchMove,
              onTouchStart: this._scrollResponder.scrollResponderHandleTouchStart,
              onTouchCancel: this._scrollResponder.scrollResponderHandleTouchCancel,
              onScroll: this._handleScroll,
              scrollBarThumbImage: module177(this.props.scrollBarThumbImage),
              scrollEventThrottle: _ ? 1 : this.props.scrollEventThrottle,
              sendMomentumEvents: !(!this.props.onMomentumScrollBegin && !this.props.onMomentumScrollEnd),
              DEPRECATED_sendUpdatedChildFrames: A,
              snapToStart: false !== this.props.snapToStart,
              snapToEnd: false !== this.props.snapToEnd,
              pagingEnabled: true === this.props.pagingEnabled && null == this.props.snapToInterval && null == this.props.snapToOffsets,
            }),
            L = this.props.decelerationRate;

          if (null != L) z.decelerationRate = module263(L);
          var N = this.props.refreshControl;
          return N ? (
            <t>
              {module58.isTV ? null : N}
              {S}
            </t>
          ) : (
            <t>{S}</t>
          );
        },
      },
    ]);
    return L;
  })(React.Component);

class I {
  constructor(n) {
    var l;

    for (var s in (module7(this, L),
    ((l = z.call(this, n))._scrollResponder = A(module12(l))),
    (l._scrollAnimatedValue = new module225.Value(0)),
    (l._scrollAnimatedValueAttachment = null),
    (l._stickyHeaderRefs = new Map()),
    (l._headerLayoutYs = new Map()),
    (l.state = module6(
      {
        layoutHeight: null,
      },
      module255.Mixin.scrollResponderMixinGetInitialState()
    )),
    (l._handleScroll = function (t) {
      l._scrollResponder.scrollResponderHandleScroll(t);
    }),
    (l._handleLayout = function (t) {
      if (true === l.props.invertStickyHeaders)
        l.setState({
          layoutHeight: t.nativeEvent.layout.height,
        });
      if (l.props.onLayout) l.props.onLayout(t);
    }),
    (l._handleContentOnLayout = function (t) {
      var n = t.nativeEvent.layout,
        o = n.width,
        s = n.height;
      if (l.props.onContentSizeChange) l.props.onContentSizeChange(o, s);
    }),
    (l._scrollViewRef = null),
    (l._setScrollViewRef = function (t) {
      l._scrollViewRef = t;
    }),
    (l._innerViewRef = null),
    (l._setInnerViewRef = function (t) {
      l._innerViewRef = t;
    }),
    module255.Mixin))
      'function' == typeof module255.Mixin[s] && s.startsWith('scrollResponder') && (module12(l)[s] = module255.Mixin[s].bind(module12(l)));

    Object.keys(module255.Mixin)
      .filter(function (t) {
        return 'function' != typeof module255.Mixin[t];
      })
      .forEach(function (t) {
        module12(l)[t] = module255.Mixin[t];
      });
    return l;
  }

  UNSAFE_componentWillMount() {
    this._scrollResponder.UNSAFE_componentWillMount();

    this._scrollAnimatedValue = new module225.Value(this.props.contentOffset ? this.props.contentOffset.y : 0);

    this._scrollAnimatedValue.setOffset(this.props.contentInset ? this.props.contentInset.top : 0);

    this._stickyHeaderRefs = new Map();
    this._headerLayoutYs = new Map();
  }

  UNSAFE_componentWillReceiveProps(t) {
    var n = this.props.contentInset ? this.props.contentInset.top : 0,
      o = t.contentInset ? t.contentInset.top : 0;
    if (n !== o) this._scrollAnimatedValue.setOffset(o || 0);
  }

  componentDidMount() {
    this._updateAnimatedNodeAttachment();
  }

  componentDidUpdate() {
    this._updateAnimatedNodeAttachment();
  }

  componentWillUnmount() {
    this._scrollResponder.componentWillUnmount();

    if (this._scrollAnimatedValueAttachment) this._scrollAnimatedValueAttachment.detach();
  }

  setNativeProps(t) {
    if (this._scrollViewRef) this._scrollViewRef.setNativeProps(t);
  }

  getScrollResponder() {
    return this;
  }

  getScrollableNode() {
    return module90.findNodeHandle(this._scrollViewRef);
  }

  getInnerViewNode() {
    return module90.findNodeHandle(this._innerViewRef);
  }

  getNativeScrollRef() {
    return this._scrollViewRef;
  }

  scrollTo(t, n, o) {
    var l, s, c;

    if ('number' == typeof t) {
      console.warn('`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.');
      s = t;
      l = n;
      c = o;
    } else if (t) {
      s = t.y;
      l = t.x;
      c = t.animated;
    }

    this._scrollResponder.scrollResponderScrollTo({
      x: l || 0,
      y: s || 0,
      animated: false !== c,
    });
  }

  scrollToEnd(t) {
    var n = false !== (t && t.animated);

    this._scrollResponder.scrollResponderScrollToEnd({
      animated: n,
    });
  }

  scrollWithoutAnimationTo() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0,
      n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0;
    console.warn('`scrollWithoutAnimationTo` is deprecated. Use `scrollTo` instead');
    this.scrollTo({
      x: n,
      y: t,
      animated: false,
    });
  }

  flashScrollIndicators() {
    this._scrollResponder.scrollResponderFlashScrollIndicators();
  }

  _getKeyForIndex(t, n) {
    var o = n[t];
    return o && o.key;
  }

  _updateAnimatedNodeAttachment() {
    if (this._scrollAnimatedValueAttachment) this._scrollAnimatedValueAttachment.detach();
    if (this.props.stickyHeaderIndices && this.props.stickyHeaderIndices.length > 0)
      this._scrollAnimatedValueAttachment = module225.attachNativeEvent(this._scrollViewRef, 'onScroll', [
        {
          nativeEvent: {
            contentOffset: {
              y: this._scrollAnimatedValue,
            },
          },
        },
      ]);
  }

  _setStickyHeaderRef(t, n) {
    if (n) this._stickyHeaderRefs.set(t, n);
    else this._stickyHeaderRefs.delete(t);
  }

  _onStickyHeaderLayout(t, n, o) {
    var l = this.props.stickyHeaderIndices;

    if (l) {
      var s = React.Children.toArray(this.props.children);

      if (o === this._getKeyForIndex(t, s)) {
        var c = n.nativeEvent.layout.y;

        this._headerLayoutYs.set(o, c);

        var p = l[l.indexOf(t) - 1];

        if (null != p) {
          var u = this._stickyHeaderRefs.get(this._getKeyForIndex(p, s));

          if (u && u.setNextHeaderY) u.setNextHeaderY(c);
        }
      }
    }
  }

  render() {
    var t,
      n,
      o = this;
    n = f;
    module18(undefined !== (t = h), 'ScrollViewClass must not be undefined');
    module18(undefined !== n, 'ScrollContentContainerViewClass must not be undefined');
    var l = [true === this.props.horizontal && b.contentContainerHorizontal, this.props.contentContainerStyle],
      s = {};
    if (this.props.onContentSizeChange)
      s = {
        onLayout: this._handleContentOnLayout,
      };
    var c = this.props.stickyHeaderIndices,
      u = this.props.children;

    if (null != c && c.length > 0) {
      var R = React.Children.toArray(this.props.children);
      u = R.map(function (t, n) {
        var l = t ? c.indexOf(n) : -1;

        if (l > -1) {
          var s = t.key,
            p = c[l + 1],
            u = o.props.StickyHeaderComponent || module262;
          return (
            <u
              key={s}
              ref={function (t) {
                return o._setStickyHeaderRef(s, t);
              }}
              nextHeaderLayoutY={o._headerLayoutYs.get(o._getKeyForIndex(p, R))}
              onLayout={function (t) {
                return o._onStickyHeaderLayout(n, t, s);
              }}
              scrollAnimatedValue={o._scrollAnimatedValue}
              inverted={o.props.invertStickyHeaders}
              scrollViewHeight={o.state.layoutHeight}
            >
              {t}
            </u>
          );
        }

        return t;
      });
    }

    u = <E.Provider value={true === this.props.horizontal ? x : M}>{u}</E.Provider>;

    var _ = Array.isArray(c) && c.length > 0,
      S = <n>{u}</n>,
      w = undefined !== this.props.alwaysBounceHorizontal ? this.props.alwaysBounceHorizontal : this.props.horizontal,
      C = undefined !== this.props.alwaysBounceVertical ? this.props.alwaysBounceVertical : !this.props.horizontal,
      A = !!this.props.DEPRECATED_sendUpdatedChildFrames,
      I = true === this.props.horizontal ? b.baseHorizontal : b.baseVertical,
      z = module6({}, this.props, {
        alwaysBounceHorizontal: w,
        alwaysBounceVertical: C,
        style: [I, this.props.style],
        onContentSizeChange: null,
        onLayout: this._handleLayout,
        onMomentumScrollBegin: this._scrollResponder.scrollResponderHandleMomentumScrollBegin,
        onMomentumScrollEnd: this._scrollResponder.scrollResponderHandleMomentumScrollEnd,
        onResponderGrant: this._scrollResponder.scrollResponderHandleResponderGrant,
        onResponderReject: this._scrollResponder.scrollResponderHandleResponderReject,
        onResponderRelease: this._scrollResponder.scrollResponderHandleResponderRelease,
        onResponderTerminate: this._scrollResponder.scrollResponderHandleTerminate,
        onResponderTerminationRequest: this._scrollResponder.scrollResponderHandleTerminationRequest,
        onScrollBeginDrag: this._scrollResponder.scrollResponderHandleScrollBeginDrag,
        onScrollEndDrag: this._scrollResponder.scrollResponderHandleScrollEndDrag,
        onScrollShouldSetResponder: this._scrollResponder.scrollResponderHandleScrollShouldSetResponder,
        onStartShouldSetResponder: this._scrollResponder.scrollResponderHandleStartShouldSetResponder,
        onStartShouldSetResponderCapture: this._scrollResponder.scrollResponderHandleStartShouldSetResponderCapture,
        onTouchEnd: this._scrollResponder.scrollResponderHandleTouchEnd,
        onTouchMove: this._scrollResponder.scrollResponderHandleTouchMove,
        onTouchStart: this._scrollResponder.scrollResponderHandleTouchStart,
        onTouchCancel: this._scrollResponder.scrollResponderHandleTouchCancel,
        onScroll: this._handleScroll,
        scrollBarThumbImage: module177(this.props.scrollBarThumbImage),
        scrollEventThrottle: _ ? 1 : this.props.scrollEventThrottle,
        sendMomentumEvents: !(!this.props.onMomentumScrollBegin && !this.props.onMomentumScrollEnd),
        DEPRECATED_sendUpdatedChildFrames: A,
        snapToStart: false !== this.props.snapToStart,
        snapToEnd: false !== this.props.snapToEnd,
        pagingEnabled: true === this.props.pagingEnabled && null == this.props.snapToInterval && null == this.props.snapToOffsets,
      }),
      L = this.props.decelerationRate;

    if (null != L) z.decelerationRate = module263(L);
    var N = this.props.refreshControl;
    return N ? (
      <t>
        {module58.isTV ? null : N}
        {S}
      </t>
    ) : (
      <t>{S}</t>
    );
  }
}

I.Context = E;
var b = module60.create({
  baseVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    overflow: 'scroll',
  },
  baseHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'row',
    overflow: 'scroll',
  },
  contentContainerHorizontal: {
    flexDirection: 'row',
  },
});
module.exports = I;
