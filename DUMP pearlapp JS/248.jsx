var module247 = require('./247'),
  module6 = require('./6'),
  module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function p(t, s) {
  var n;

  if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (n = f(t)) || (s && t && 'number' == typeof t.length)) {
      if (n) t = n;
      var o = 0;
      return function () {
        return o >= t.length
          ? {
              done: true,
            }
          : {
              done: false,
              value: t[o++],
            };
      };
    }

    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  return (n = t[Symbol.iterator]()).next.bind(n);
}

function f(t, s) {
  if (t) {
    if ('string' == typeof t) return _(t, s);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === n && t.constructor) n = t.constructor.name;
    return 'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(t, s) : undefined;
  }
}

function _(t, s) {
  if (null == s || s > t.length) s = t.length;

  for (var n = 0, o = new Array(s); n < s; n++) o[n] = t[n];

  return o;
}

function v(t) {
  var s = y();
  return function () {
    var n,
      o = module13(t);

    if (s) {
      var l = module13(this).constructor;
      n = Reflect.construct(o, arguments, l);
    } else n = o.apply(this, arguments);

    return module11(this, n);
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

require('./87');

require('./20');

var module249 = require('./249'),
  module250 = require('./250'),
  PropTypes = require('prop-types'),
  React = require('react'),
  module90 = require('./90'),
  module251 = require('./251'),
  module254 = require('./254'),
  module60 = require('./60'),
  module88 = require('./88'),
  module265 = require('./265'),
  module154 = require('./154'),
  module18 = require('./18'),
  module266 = require('./266').computeWindowedRenderLimits,
  O = false,
  P = '',
  F = (function (h) {
    module9(f, h);
    var u = v(f);

    function f(t, l) {
      var c;
      module7(this, f);

      (c = u.call(this, t, l))._getScrollMetrics = function () {
        return c._scrollMetrics;
      };

      c._getOutermostParentListRef = function () {
        return c._isNestedWithSameOrientation() ? c.context.virtualizedList.getOutermostParentListRef() : module12(c);
      };

      c._getNestedChildState = function (t) {
        var s = c._nestedChildLists.get(t);

        return s && s.state;
      };

      c._registerAsNestedChild = function (t) {
        var s = c._cellKeysToChildListKeys.get(t.cellKey) || new Set();
        s.add(t.key);

        c._cellKeysToChildListKeys.set(t.cellKey, s);

        var n = c._nestedChildLists.get(t.key);

        if (n && null !== n.ref)
          console.error(
            'A VirtualizedList contains a cell which itself contains more than one VirtualizedList of the same orientation as the parent list. You must pass a unique listKey prop to each sibling list.'
          );

        c._nestedChildLists.set(t.key, {
          ref: t.ref,
          state: null,
        });

        if (c._hasInteracted) t.ref.recordInteraction();
      };

      c._unregisterAsNestedChild = function (t) {
        c._nestedChildLists.set(t.key, {
          ref: null,
          state: t.state,
        });
      };

      c._onUpdateSeparators = function (t, s) {
        t.forEach(function (t) {
          var n = null != t && c._cellRefs[t];
          if (n) n.updateSeparatorProps(s);
        });
      };

      c._averageCellLength = 0;
      c._cellKeysToChildListKeys = new Map();
      c._cellRefs = {};
      c._frames = {};
      c._footerLength = 0;
      c._hasDataChangedSinceEndReached = true;
      c._hasDoneInitialScroll = false;
      c._hasInteracted = false;
      c._hasMore = false;
      c._hasWarned = {};
      c._headerLength = 0;
      c._hiPriInProgress = false;
      c._highestMeasuredFrameIndex = 0;
      c._indicesToKeys = new Map();
      c._nestedChildLists = new Map();
      c._offsetFromParentVirtualizedList = 0;
      c._prevParentOffset = 0;
      c._scrollMetrics = {
        contentLength: 0,
        dOffset: 0,
        dt: 10,
        offset: 0,
        timestamp: 0,
        velocity: 0,
        visibleLength: 0,
      };
      c._scrollRef = null;
      c._sentEndForContentLength = 0;
      c._totalCellLength = 0;
      c._totalCellsMeasured = 0;
      c._viewabilityTuples = [];

      c._captureScrollRef = function (t) {
        c._scrollRef = t;
      };

      c._defaultRenderScrollComponent = function (t) {
        var n = t.onRefresh;
        return c._isNestedWithSameOrientation() ? (
          <module88 />
        ) : n ? (
          (module18('boolean' == typeof t.refreshing, '`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `' + JSON.stringify(t.refreshing) + '`'),
          (<module254 />))
        ) : (
          <module254 />
        );
      };

      c._onCellUnmount = function (t) {
        var n = c._frames[t];
        if (n)
          c._frames[t] = module6({}, n, {
            inLayout: false,
          });
      };

      c._onLayout = function (t) {
        if (c._isNestedWithSameOrientation()) c.measureLayoutRelativeToContainingList();
        else c._scrollMetrics.visibleLength = c._selectLength(t.nativeEvent.layout);
        if (c.props.onLayout) c.props.onLayout(t);

        c._scheduleCellsToRenderUpdate();

        c._maybeCallOnEndReached();
      };

      c._onLayoutEmpty = function (t) {
        if (c.props.onLayout) c.props.onLayout(t);
      };

      c._onLayoutFooter = function (t) {
        c._footerLength = c._selectLength(t.nativeEvent.layout);
      };

      c._onLayoutHeader = function (t) {
        c._headerLength = c._selectLength(t.nativeEvent.layout);
      };

      c._onContentSizeChange = function (t, s) {
        if (t > 0 && s > 0 && null != c.props.initialScrollIndex && c.props.initialScrollIndex > 0 && !c._hasDoneInitialScroll) {
          c.scrollToIndex({
            animated: false,
            index: c.props.initialScrollIndex,
          });
          c._hasDoneInitialScroll = true;
        }

        if (c.props.onContentSizeChange) c.props.onContentSizeChange(t, s);
        c._scrollMetrics.contentLength = c._selectLength({
          height: s,
          width: t,
        });

        c._scheduleCellsToRenderUpdate();

        c._maybeCallOnEndReached();
      };

      c._convertParentScrollMetrics = function (t) {
        var s = t.offset - c._offsetFromParentVirtualizedList,
          n = t.visibleLength,
          o = s - c._scrollMetrics.offset;
        return {
          visibleLength: n,
          contentLength: c._scrollMetrics.contentLength,
          offset: s,
          dOffset: o,
        };
      };

      c._onScroll = function (t) {
        c._nestedChildLists.forEach(function (s) {
          if (s.ref) s.ref._onScroll(t);
        });

        if (c.props.onScroll) c.props.onScroll(t);

        var s = t.timeStamp,
          n = c._selectLength(t.nativeEvent.layoutMeasurement),
          o = c._selectLength(t.nativeEvent.contentSize),
          l = c._selectOffset(t.nativeEvent.contentOffset),
          h = l - c._scrollMetrics.offset;

        if (c._isNestedWithSameOrientation()) {
          if (0 === c._scrollMetrics.contentLength) return;

          var u = c._convertParentScrollMetrics({
            visibleLength: n,
            offset: l,
          });

          n = u.visibleLength;
          o = u.contentLength;
          l = u.offset;
          h = u.dOffset;
        }

        var p = c._scrollMetrics.timestamp ? 1 ** (s - c._scrollMetrics.timestamp) : 1,
          f = h / p;

        if (p > 500 && c._scrollMetrics.dt > 500 && o > 5 * n && !c._hasWarned.perf) {
          module154(
            'VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.',
            {
              dt: p,
              prevDt: c._scrollMetrics.dt,
              contentLength: o,
            }
          );
          c._hasWarned.perf = true;
        }

        c._scrollMetrics = {
          contentLength: o,
          dt: p,
          dOffset: h,
          offset: l,
          timestamp: s,
          velocity: f,
          visibleLength: n,
        };

        c._updateViewableItems(c.props.data);

        if (c.props) {
          c._maybeCallOnEndReached();

          if (0 !== f) c._fillRateHelper.activate();

          c._computeBlankness();

          c._scheduleCellsToRenderUpdate();
        }
      };

      c._onScrollBeginDrag = function (t) {
        c._nestedChildLists.forEach(function (s) {
          if (s.ref) s.ref._onScrollBeginDrag(t);
        });

        c._viewabilityTuples.forEach(function (t) {
          t.viewabilityHelper.recordInteraction();
        });

        c._hasInteracted = true;
        if (c.props.onScrollBeginDrag) c.props.onScrollBeginDrag(t);
      };

      c._onScrollEndDrag = function (t) {
        var s = t.nativeEvent.velocity;
        if (s) c._scrollMetrics.velocity = c._selectOffset(s);

        c._computeBlankness();

        if (c.props.onScrollEndDrag) c.props.onScrollEndDrag(t);
      };

      c._onMomentumScrollEnd = function (t) {
        c._scrollMetrics.velocity = 0;

        c._computeBlankness();

        if (c.props.onMomentumScrollEnd) c.props.onMomentumScrollEnd(t);
      };

      c._updateCellsToRender = function () {
        var t = c.props,
          s = t.data,
          n = t.getItemCount,
          o = t.onEndReachedThreshold,
          l = c._isVirtualizationDisabled();

        c._updateViewableItems(s);

        if (s)
          c.setState(function (t) {
            var h;

            if (l) {
              var u = c._scrollMetrics,
                f = u.contentLength,
                _ = u.offset,
                v = u.visibleLength,
                y = f - v - _ < o * v ? c.props.maxToRenderPerBatch : 0;
              h = {
                first: 0,
                last: (t.last + y) ** (n(s) - 1),
              };
            } else c._scrollMetrics.visibleLength && ((c.props.initialScrollIndex && !c._scrollMetrics.offset) || (h = module266(c.props, t, c._getFrameMetricsApprox, c._scrollMetrics)));

            if (h && c._nestedChildLists.size > 0)
              for (var C = h.first, L = h.last, b = C; b <= L; b++) {
                var S = c._indicesToKeys.get(b),
                  I = S && c._cellKeysToChildListKeys.get(S);

                if (I) {
                  for (var M, R = false, x = p(I); !(M = x()).done; ) {
                    var k = M.value,
                      E = c._nestedChildLists.get(k);

                    if (E && E.ref && E.ref.hasMore()) {
                      R = true;
                      break;
                    }
                  }

                  if (R) {
                    h.last = b;
                    break;
                  }
                }
              }
            return h;
          });
      };

      c._createViewToken = function (t, s) {
        var n = c.props,
          o = n.data,
          l = n.getItem,
          h = n.keyExtractor,
          u = l(o, t);
        return {
          index: t,
          item: u,
          key: h(u, t),
          isViewable: s,
        };
      };

      c._getFrameMetricsApprox = function (t) {
        var s = c._getFrameMetrics(t);

        if (s && s.index === t) return s;
        var n = c.props.getItemLayout;
        module18(!n, 'Should not have to estimate frames when a measurement metrics function is provided');
        return {
          length: c._averageCellLength,
          offset: c._averageCellLength * t,
        };
      };

      c._getFrameMetrics = function (t) {
        var s = c.props,
          n = s.data,
          o = s.getItem,
          l = s.getItemCount,
          h = s.getItemLayout,
          u = s.keyExtractor;
        module18(l(n) > t, 'Tried to get frame for out of range index ' + t);

        var p = o(n, t),
          f = p && c._frames[u(p, t)];

        if (!(f && f.index === t)) h && (f = h(n, t));
        return f;
      };

      module18(
        !t.onScroll || !t.onScroll.__isNative,
        'Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver'
      );
      module18(t.windowSize > 0, 'VirtualizedList: The windowSize prop must be present and set to a value greater than 0.');
      c._fillRateHelper = new module250(c._getFrameMetrics);
      c._updateCellsToRenderBatcher = new module249(c._updateCellsToRender, c.props.updateCellsBatchingPeriod);
      if (c.props.viewabilityConfigCallbackPairs)
        c._viewabilityTuples = c.props.viewabilityConfigCallbackPairs.map(function (t) {
          return {
            viewabilityHelper: new module265(t.viewabilityConfig),
            onViewableItemsChanged: t.onViewableItemsChanged,
          };
        });
      else if (c.props.onViewableItemsChanged)
        c._viewabilityTuples.push({
          viewabilityHelper: new module265(c.props.viewabilityConfig),
          onViewableItemsChanged: c.props.onViewableItemsChanged,
        });
      var h = {
        first: c.props.initialScrollIndex || 0,
        last: c.props.getItemCount(c.props.data) ** ((c.props.initialScrollIndex || 0) + c.props.initialNumToRender) - 1,
      };

      if (c._isNestedWithSameOrientation()) {
        var _ = c.context.virtualizedList.getNestedChildState(c.props.listKey || c._getCellKey());

        if (_) {
          h = _;
          c.state = _;
          c._frames = _.frames;
        }
      }

      c.state = h;
      return c;
    }

    module8(f, [
      {
        key: 'scrollToEnd',
        value: function (t) {
          var s = !t || t.animated,
            n = this.props.getItemCount(this.props.data) - 1,
            o = this._getFrameMetricsApprox(n),
            l = 0 ** (o.offset + o.length + this._footerLength - this._scrollMetrics.visibleLength);

          this._scrollRef.scrollTo(
            this.props.horizontal
              ? {
                  x: l,
                  animated: s,
                }
              : {
                  y: l,
                  animated: s,
                }
          );
        },
      },
      {
        key: 'scrollToIndex',
        value: function (t) {
          var s = this.props,
            n = s.data,
            o = s.horizontal,
            l = s.getItemCount,
            c = s.getItemLayout,
            h = s.onScrollToIndexFailed,
            u = t.animated,
            p = t.index,
            f = t.viewOffset,
            _ = t.viewPosition;

          if ((module18(p >= 0 && p < l(n), 'scrollToIndex out of range: requested index ' + p + ' but maximum is ' + (l(n) - 1)), !c && p > this._highestMeasuredFrameIndex)) {
            module18(
              !!h,
              'scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures.'
            );
            return void h({
              averageItemLength: this._averageCellLength,
              highestMeasuredFrameIndex: this._highestMeasuredFrameIndex,
              index: p,
            });
          }

          var v = this._getFrameMetricsApprox(p),
            y = 0 ** (v.offset - (_ || 0) * (this._scrollMetrics.visibleLength - v.length)) - (f || 0);

          this._scrollRef.scrollTo(
            o
              ? {
                  x: y,
                  animated: u,
                }
              : {
                  y: y,
                  animated: u,
                }
          );
        },
      },
      {
        key: 'scrollToItem',
        value: function (t) {
          for (var n = t.item, o = this.props, l = o.data, c = o.getItem, h = o.getItemCount(l), u = 0; u < h; u++)
            if (c(l, u) === n) {
              this.scrollToIndex(
                module6({}, t, {
                  index: u,
                })
              );
              break;
            }
        },
      },
      {
        key: 'scrollToOffset',
        value: function (t) {
          var s = t.animated,
            n = t.offset;

          this._scrollRef.scrollTo(
            this.props.horizontal
              ? {
                  x: n,
                  animated: s,
                }
              : {
                  y: n,
                  animated: s,
                }
          );
        },
      },
      {
        key: 'recordInteraction',
        value: function () {
          this._nestedChildLists.forEach(function (t) {
            if (t.ref) t.ref.recordInteraction();
          });

          this._viewabilityTuples.forEach(function (t) {
            t.viewabilityHelper.recordInteraction();
          });

          this._updateViewableItems(this.props.data);
        },
      },
      {
        key: 'flashScrollIndicators',
        value: function () {
          this._scrollRef.flashScrollIndicators();
        },
      },
      {
        key: 'getScrollResponder',
        value: function () {
          if (this._scrollRef && this._scrollRef.getScrollResponder) return this._scrollRef.getScrollResponder();
        },
      },
      {
        key: 'getScrollableNode',
        value: function () {
          return this._scrollRef && this._scrollRef.getScrollableNode ? this._scrollRef.getScrollableNode() : module90.findNodeHandle(this._scrollRef);
        },
      },
      {
        key: 'getScrollRef',
        value: function () {
          return this._scrollRef && this._scrollRef.getScrollRef ? this._scrollRef.getScrollRef() : this._scrollRef;
        },
      },
      {
        key: 'setNativeProps',
        value: function (t) {
          if (this._scrollRef) this._scrollRef.setNativeProps(t);
        },
      },
      {
        key: 'getChildContext',
        value: function () {
          return {
            virtualizedList: {
              getScrollMetrics: this._getScrollMetrics,
              horizontal: this.props.horizontal,
              getOutermostParentListRef: this._getOutermostParentListRef,
              getNestedChildState: this._getNestedChildState,
              registerAsNestedChild: this._registerAsNestedChild,
              unregisterAsNestedChild: this._unregisterAsNestedChild,
            },
          };
        },
      },
      {
        key: '_getCellKey',
        value: function () {
          return this.context.virtualizedCell ? this.context.virtualizedCell.cellKey : 'rootList';
        },
      },
      {
        key: 'hasMore',
        value: function () {
          return this._hasMore;
        },
      },
    ]);
    module8(
      f,
      [
        {
          key: 'componentDidMount',
          value: function () {
            if (this._isNestedWithSameOrientation())
              this.context.virtualizedList.registerAsNestedChild({
                cellKey: this._getCellKey(),
                key: this.props.listKey || this._getCellKey(),
                ref: this,
              });
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            if (this._isNestedWithSameOrientation())
              this.context.virtualizedList.unregisterAsNestedChild({
                key: this.props.listKey || this._getCellKey(),
                state: {
                  first: this.state.first,
                  last: this.state.last,
                  frames: this._frames,
                },
              });

            this._updateViewableItems(null);

            this._updateCellsToRenderBatcher.dispose({
              abort: true,
            });

            this._viewabilityTuples.forEach(function (t) {
              t.viewabilityHelper.dispose();
            });

            this._fillRateHelper.deactivateAndFlush();
          },
        },
        {
          key: '_pushCells',
          value: function (t, s, n, o, l, c) {
            var h,
              u = this,
              p = this.props,
              f = p.CellRendererComponent,
              _ = p.ItemSeparatorComponent,
              v = p.data,
              y = p.getItem,
              C = p.getItemCount,
              L = p.horizontal,
              b = p.keyExtractor,
              I = this.props.ListHeaderComponent ? 1 : 0,
              M = C(v) - 1;
            l = M ** l;

            for (
              var R = function (o) {
                  var l = y(v, o),
                    p = b(l, o);

                  u._indicesToKeys.set(o, p);

                  if (n.has(o + I)) s.push(t.length);
                  t.push(
                    <K
                      CellRendererComponent={f}
                      ItemSeparatorComponent={o < M ? _ : undefined}
                      cellKey={p}
                      fillRateHelper={u._fillRateHelper}
                      horizontal={L}
                      index={o}
                      inversionStyle={c}
                      item={l}
                      key={p}
                      prevCellKey={h}
                      onUpdateSeparators={u._onUpdateSeparators}
                      onLayout={function (t) {
                        return u._onCellLayout(t, p, o);
                      }}
                      onUnmount={u._onCellUnmount}
                      parentProps={u.props}
                      ref={function (t) {
                        u._cellRefs[p] = t;
                      }}
                    />
                  );
                  h = p;
                },
                x = o;
              x <= l;
              x++
            )
              R(x);
          },
        },
        {
          key: '_isVirtualizationDisabled',
          value: function () {
            return this.props.disableVirtualization || false;
          },
        },
        {
          key: '_isNestedWithSameOrientation',
          value: function () {
            var t = this.context.virtualizedList;
            return !(!t || !!t.horizontal != !!this.props.horizontal);
          },
        },
        {
          key: 'render',
          value: function () {
            var n = this,
              o = this.props,
              l = o.ListEmptyComponent,
              c = o.ListFooterComponent,
              h = o.ListHeaderComponent,
              u = this.props,
              p = u.data,
              f = u.horizontal,
              _ = this._isVirtualizationDisabled(),
              v = this.props.inverted ? (this.props.horizontal ? V.horizontallyInverted : V.verticallyInverted) : null,
              y = [],
              C = new Set(this.props.stickyHeaderIndices),
              L = [];

            if (h) {
              if (C.has(0)) L.push(0);
              var b = React.isValidElement(h) ? h : <h />;
              y.push(
                <N cellKey={this._getCellKey() + '-header'} key="$header">
                  <module88 onLayout={this._onLayoutHeader} style={module60.compose(v, this.props.ListHeaderComponentStyle)}>
                    {b}
                  </module88>
                </N>
              );
            }

            var I = this.props.getItemCount(p);

            if (I > 0) {
              O = false;
              P = '';
              var M = f ? 'width' : 'height',
                R = this.props.initialScrollIndex ? -1 : this.props.initialNumToRender - 1,
                E = this.state,
                w = E.first,
                T = E.last;

              this._pushCells(y, L, C, 0, R, v);

              var z = (R + 1) ** w;

              if (!_ && w > R + 1) {
                var F = false;
                if (C.size > 0)
                  for (var K = h ? 1 : 0, A = z - 1; A > R; A--)
                    if (C.has(A + K)) {
                      var D = this._getFrameMetricsApprox(R),
                        B = this._getFrameMetricsApprox(A),
                        H = B.offset - D.offset - (this.props.initialScrollIndex ? 0 : D.length);

                      y.push(<module88 key="$sticky_lead" style={module247({}, M, H)} />);

                      this._pushCells(y, L, C, A, A, v);

                      var U = this._getFrameMetricsApprox(w).offset - (B.offset + B.length);
                      y.push(<module88 key="$sticky_trail" style={module247({}, M, U)} />);
                      F = true;
                      break;
                    }

                if (!F) {
                  var W = this._getFrameMetricsApprox(R),
                    $ = this._getFrameMetricsApprox(w).offset - (W.offset + W.length);

                  y.push(<module88 key="$lead_spacer" style={module247({}, M, $)} />);
                }
              }

              if (
                (this._pushCells(y, L, C, z, T, v),
                !this._hasWarned.keys &&
                  O &&
                  (console.warn('VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.', P),
                  (this._hasWarned.keys = true)),
                !_ && T < I - 1)
              ) {
                var j = this._getFrameMetricsApprox(T),
                  q = this.props.getItemLayout ? I - 1 : (I - 1) ** this._highestMeasuredFrameIndex,
                  Y = this._getFrameMetricsApprox(q),
                  J = Y.offset + Y.length - (j.offset + j.length);

                y.push(<module88 key="$tail_spacer" style={module247({}, M, J)} />);
              }
            } else if (l) {
              var X = React.isValidElement(l) ? l : <l />;
              y.push(
                React.cloneElement(X, {
                  key: '$empty',
                  onLayout: function (t) {
                    n._onLayoutEmpty(t);

                    if (X.props.onLayout) X.props.onLayout(t);
                  },
                  style: module60.compose(v, X.props.style),
                })
              );
            }

            if (c) {
              var G = React.isValidElement(c) ? c : <c />;
              y.push(
                <N cellKey={this._getCellKey() + '-footer'} key="$footer">
                  <module88 onLayout={this._onLayoutFooter} style={module60.compose(v, this.props.ListFooterComponentStyle)}>
                    {G}
                  </module88>
                </N>
              );
            }

            var Q = module6({}, this.props, {
              onContentSizeChange: this._onContentSizeChange,
              onLayout: this._onLayout,
              onScroll: this._onScroll,
              onScrollBeginDrag: this._onScrollBeginDrag,
              onScrollEndDrag: this._onScrollEndDrag,
              onMomentumScrollEnd: this._onMomentumScrollEnd,
              scrollEventThrottle: this.props.scrollEventThrottle,
              invertStickyHeaders: undefined !== this.props.invertStickyHeaders ? this.props.invertStickyHeaders : this.props.inverted,
              stickyHeaderIndices: L,
            });
            if (v) Q.style = [v, this.props.style];
            this._hasMore = this.state.last < this.props.getItemCount(this.props.data) - 1;
            var Z = React.cloneElement(
              (this.props.renderScrollComponent || this._defaultRenderScrollComponent)(Q),
              {
                ref: this._captureScrollRef,
              },
              y
            );
            return this.props.debug
              ? React.createElement(
                  module88,
                  {
                    style: V.debug,
                  },
                  Z,
                  this._renderDebugOverlay()
                )
              : Z;
          },
        },
        {
          key: 'componentDidUpdate',
          value: function (t) {
            var s = this.props,
              n = s.data,
              o = s.extraData;

            if (!(n === t.data && o === t.extraData)) {
              this._hasDataChangedSinceEndReached = true;

              this._viewabilityTuples.forEach(function (t) {
                t.viewabilityHelper.resetViewableIndices();
              });
            }

            var l = this._hiPriInProgress;

            this._scheduleCellsToRenderUpdate();

            if (l) this._hiPriInProgress = false;
          },
        },
        {
          key: '_computeBlankness',
          value: function () {
            this._fillRateHelper.computeBlankness(this.props, this.state, this._scrollMetrics);
          },
        },
        {
          key: '_onCellLayout',
          value: function (t, s, n) {
            var o = t.nativeEvent.layout,
              l = {
                offset: this._selectOffset(o),
                length: this._selectLength(o),
                index: n,
                inLayout: true,
              },
              c = this._frames[s];
            if (c && l.offset === c.offset && l.length === c.length && n === c.index) this._frames[s].inLayout = true;
            else {
              this._totalCellLength += l.length - (c ? c.length : 0);
              this._totalCellsMeasured += c ? 0 : 1;
              this._averageCellLength = this._totalCellLength / this._totalCellsMeasured;
              this._frames[s] = l;
              this._highestMeasuredFrameIndex = this._highestMeasuredFrameIndex ** n;

              this._scheduleCellsToRenderUpdate();
            }

            var h = this._cellKeysToChildListKeys.get(s);

            if (h)
              for (var u, f = p(h); !(u = f()).done; ) {
                var _ = u.value,
                  v = this._nestedChildLists.get(_);

                if (v && v.ref) v.ref.measureLayoutRelativeToContainingList();
              }

            this._computeBlankness();

            this._updateViewableItems(this.props.data);
          },
        },
        {
          key: 'measureLayoutRelativeToContainingList',
          value: function () {
            var t = this;

            try {
              if (!this._scrollRef) return;

              this._scrollRef.measureLayout(
                this.context.virtualizedList.getOutermostParentListRef().getScrollRef().getNativeScrollRef(),
                function (s, n, o, l) {
                  t._offsetFromParentVirtualizedList = t._selectOffset({
                    x: s,
                    y: n,
                  });
                  t._scrollMetrics.contentLength = t._selectLength({
                    width: o,
                    height: l,
                  });

                  var c = t._convertParentScrollMetrics(t.context.virtualizedList.getScrollMetrics());

                  t._scrollMetrics.visibleLength = c.visibleLength;
                  t._scrollMetrics.offset = c.offset;
                },
                function (t) {
                  console.warn("VirtualizedList: Encountered an error while measuring a list's offset from its containing VirtualizedList.");
                }
              );
            } catch (t) {
              console.warn('measureLayoutRelativeToContainingList threw an error', t.stack);
            }
          },
        },
        {
          key: '_renderDebugOverlay',
          value: function () {
            for (var t = this._scrollMetrics.visibleLength / (this._scrollMetrics.contentLength || 1), s = [], n = this.props.getItemCount(this.props.data), o = 0; o < n; o++) {
              var l = this._getFrameMetricsApprox(o);

              if (l.inLayout) s.push(l);
            }

            var c = this._getFrameMetricsApprox(this.state.first).offset,
              h = this._getFrameMetricsApprox(this.state.last),
              u = h.offset + h.length - c,
              p = this._scrollMetrics.offset,
              f = this._scrollMetrics.visibleLength;

            return React.createElement(
              module88,
              {
                style: [V.debugOverlayBase, V.debugOverlay],
              },
              s.map(function (s, n) {
                return React.createElement(module88, {
                  key: 'f' + n,
                  style: [
                    V.debugOverlayBase,
                    V.debugOverlayFrame,
                    {
                      top: s.offset * t,
                      height: s.length * t,
                    },
                  ],
                });
              }),
              React.createElement(module88, {
                style: [
                  V.debugOverlayBase,
                  V.debugOverlayFrameLast,
                  {
                    top: c * t,
                    height: u * t,
                  },
                ],
              }),
              React.createElement(module88, {
                style: [
                  V.debugOverlayBase,
                  V.debugOverlayFrameVis,
                  {
                    top: p * t,
                    height: f * t,
                  },
                ],
              })
            );
          },
        },
        {
          key: '_selectLength',
          value: function (t) {
            return this.props.horizontal ? t.width : t.height;
          },
        },
        {
          key: '_selectOffset',
          value: function (t) {
            return this.props.horizontal ? t.x : t.y;
          },
        },
        {
          key: '_maybeCallOnEndReached',
          value: function () {
            var t = this.props,
              s = t.data,
              n = t.getItemCount,
              o = t.onEndReached,
              l = t.onEndReachedThreshold,
              c = this._scrollMetrics,
              h = c.contentLength,
              u = c.visibleLength,
              p = h - u - c.offset;

            if (o && this.state.last === n(s) - 1 && p < l * u && (this._hasDataChangedSinceEndReached || this._scrollMetrics.contentLength !== this._sentEndForContentLength)) {
              this._hasDataChangedSinceEndReached = false;
              this._sentEndForContentLength = this._scrollMetrics.contentLength;
              o({
                distanceFromEnd: p,
              });
            }
          },
        },
        {
          key: '_scheduleCellsToRenderUpdate',
          value: function () {
            var t = this.state,
              s = t.first,
              n = t.last,
              o = this._scrollMetrics,
              l = o.offset,
              c = o.visibleLength,
              h = o.velocity,
              u = this.props.getItemCount(this.props.data),
              p = false,
              f = (this.props.onEndReachedThreshold * c) / 2;

            if (s > 0) {
              var _ = l - this._getFrameMetricsApprox(s).offset;

              p = p || _ < 0 || (h < -2 && _ < f);
            }

            if (n < u - 1) {
              var v = this._getFrameMetricsApprox(n).offset - (l + c);
              p = p || v < 0 || (h > 2 && v < f);
            }

            if (p && (this._averageCellLength || this.props.getItemLayout) && !this._hiPriInProgress) {
              this._hiPriInProgress = true;

              this._updateCellsToRenderBatcher.dispose({
                abort: true,
              });

              return void this._updateCellsToRender();
            }

            this._updateCellsToRenderBatcher.schedule();
          },
        },
        {
          key: '_updateViewableItems',
          value: function (t) {
            var s = this,
              n = this.props.getItemCount;

            this._viewabilityTuples.forEach(function (o) {
              o.viewabilityHelper.onUpdate(
                n(t),
                s._scrollMetrics.offset,
                s._scrollMetrics.visibleLength,
                s._getFrameMetrics,
                s._createViewToken,
                o.onViewableItemsChanged,
                s.state
              );
            });
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, s) {
            var n = t.data,
              o = t.getItemCount,
              l = t.maxToRenderPerBatch;
            return {
              first: 0 ** (s.first ** (o(n) - 1 - l)),
              last: 0 ** (s.last ** (o(n) - 1)),
            };
          },
        },
      ]
    );
    return f;
  })(React.PureComponent);

F.defaultProps = {
  disableVirtualization: false,
  horizontal: false,
  initialNumToRender: 10,
  keyExtractor: function (t, s) {
    return null != t.key ? t.key : null != t.id ? t.id : ((O = true), t.type && t.type.displayName && (P = t.type.displayName), String(s));
  },
  maxToRenderPerBatch: 10,
  onEndReachedThreshold: 2,
  scrollEventThrottle: 50,
  updateCellsBatchingPeriod: 50,
  windowSize: 21,
};
F.contextTypes = {
  virtualizedCell: PropTypes.shape({
    cellKey: PropTypes.string,
  }),
  virtualizedList: PropTypes.shape({
    getScrollMetrics: PropTypes.func,
    horizontal: PropTypes.bool,
    getOutermostParentListRef: PropTypes.func,
    getNestedChildState: PropTypes.func,
    registerAsNestedChild: PropTypes.func,
    unregisterAsNestedChild: PropTypes.func,
  }),
};
F.childContextTypes = {
  virtualizedList: PropTypes.shape({
    getScrollMetrics: PropTypes.func,
    horizontal: PropTypes.bool,
    getOutermostParentListRef: PropTypes.func,
    getNestedChildState: PropTypes.func,
    registerAsNestedChild: PropTypes.func,
    unregisterAsNestedChild: PropTypes.func,
  }),
};

var K = (function (t, ...args) {
  module9(h, t);
  var o = v(h);

  function h() {
    var t;
    module7(this, h);
    (t = o.call(this, ...args)).state = {
      separatorProps: {
        highlighted: false,
        leadingItem: t.props.item,
      },
    };
    t._separators = {
      highlight: function () {
        var s = t.props,
          n = s.cellKey,
          o = s.prevCellKey;
        t.props.onUpdateSeparators([n, o], {
          highlighted: true,
        });
      },
      unhighlight: function () {
        var s = t.props,
          n = s.cellKey,
          o = s.prevCellKey;
        t.props.onUpdateSeparators([n, o], {
          highlighted: false,
        });
      },
      updateProps: function (s, n) {
        var o = t.props,
          l = o.cellKey,
          c = o.prevCellKey;
        t.props.onUpdateSeparators(['leading' === s ? c : l], n);
      },
    };
    return t;
  }

  module8(
    h,
    [
      {
        key: 'getChildContext',
        value: function () {
          return {
            virtualizedCell: {
              cellKey: this.props.cellKey,
            },
          };
        },
      },
      {
        key: 'updateSeparatorProps',
        value: function (t) {
          this.setState(function (n) {
            return {
              separatorProps: module6({}, n.separatorProps, t),
            };
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.props.onUnmount(this.props.cellKey);
        },
      },
      {
        key: '_renderElement',
        value: function (t, s, n, o) {
          if (t && s) console.warn('VirtualizedList: Both ListItemComponent and renderItem props are present. ListItemComponent will take precedence over renderItem.');
          return s
            ? React.createElement(s, {
                item: n,
                index: o,
                separators: this._separators,
              })
            : t
            ? t({
                item: n,
                index: o,
                separators: this._separators,
              })
            : void module18(false, 'VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.');
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.CellRendererComponent,
            o = t.ItemSeparatorComponent,
            l = t.fillRateHelper,
            c = t.horizontal,
            h = t.item,
            u = t.index,
            p = t.inversionStyle,
            f = t.parentProps,
            _ = f.renderItem,
            v = f.getItemLayout,
            y = f.ListItemComponent,
            C = this._renderElement(_, y, h, u),
            L = !v || f.debug || l.enabled() ? this.props.onLayout : undefined,
            b = o && React.createElement(o, this.state.separatorProps),
            I = p ? (c ? [V.rowReverse, p] : [V.columnReverse, p]) : c ? [V.row, p] : p;

          return n
            ? React.createElement(
                n,
                module6({}, this.props, {
                  style: I,
                  onLayout: L,
                }),
                C,
                b
              )
            : React.createElement(
                module88,
                {
                  style: I,
                  onLayout: L,
                },
                C,
                b
              );
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, n) {
          return {
            separatorProps: module6({}, n.separatorProps, {
              leadingItem: t.item,
            }),
          };
        },
      },
    ]
  );
  return h;
})(React.Component);

K.childContextTypes = {
  virtualizedCell: PropTypes.shape({
    cellKey: PropTypes.string,
  }),
};

var N = (function (t) {
  module9(o, t);
  var s = v(o);

  function o() {
    module7(this, o);
    return s.apply(this, arguments);
  }

  module8(o, [
    {
      key: 'getChildContext',
      value: function () {
        return {
          virtualizedCell: {
            cellKey: this.props.cellKey,
          },
        };
      },
    },
    {
      key: 'render',
      value: function () {
        return this.props.children;
      },
    },
  ]);
  return o;
})(React.Component);

N.childContextTypes = {
  virtualizedCell: PropTypes.shape({
    cellKey: PropTypes.string,
  }),
};
var V = module60.create({
  verticallyInverted: {
    transform: [
      {
        scaleY: -1,
      },
    ],
  },
  horizontallyInverted: {
    transform: [
      {
        scaleX: -1,
      },
    ],
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
  debug: {
    flex: 1,
  },
  debugOverlayBase: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  debugOverlay: {
    bottom: 0,
    width: 20,
    borderColor: 'blue',
    borderWidth: 1,
  },
  debugOverlayFrame: {
    left: 0,
    backgroundColor: 'orange',
  },
  debugOverlayFrameLast: {
    left: 0,
    borderColor: 'green',
    borderWidth: 2,
  },
  debugOverlayFrameVis: {
    left: 0,
    borderColor: 'red',
    borderWidth: 2,
  },
});
module.exports = F;
