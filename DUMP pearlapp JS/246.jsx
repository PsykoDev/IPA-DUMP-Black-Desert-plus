var module247 = require('./247'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module6 = require('./6');

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

var module164 = require('./164'),
  React = require('react'),
  module88 = require('./88'),
  module248 = require('./248'),
  module60 = require('./60'),
  module18 = require('./18'),
  _ = module6({}, module248.defaultProps, {
    numColumns: 1,
    removeClippedSubviews: false,
  }),
  w = (function (_) {
    module9(P, _);

    var w = P,
      k = f(),
      R = function () {
        var t,
          n = module13(w);

        if (k) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function P(o) {
      var s;
      module7(this, P);
      (s = R.call(this, o))._virtualizedListPairs = [];

      s._captureRef = function (t) {
        s._listRef = t;
      };

      s._getItem = function (t, n) {
        var o = s.props.numColumns;

        if (o > 1) {
          for (var l = [], u = 0; u < o; u++) {
            var c = t[n * o + u];
            if (null != c) l.push(c);
          }

          return l;
        }

        return t[n];
      };

      s._getItemCount = function (t) {
        return t ? Math.ceil(t.length / s.props.numColumns) : 0;
      };

      s._keyExtractor = function (t, n) {
        var o = s.props,
          l = o.keyExtractor,
          u = o.numColumns;

        if (u > 1) {
          module18(
            Array.isArray(t),
            'FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.',
            u
          );
          return t
            .map(function (t, o) {
              return l(t, n * u + o);
            })
            .join(':');
        } else return l(t, n);
      };

      s._renderer = function () {
        var n = s.props,
          o = n.ListItemComponent,
          l = n.renderItem,
          u = n.numColumns,
          c = n.columnWrapperStyle,
          f = function (t) {
            return o ? <o /> : l ? l(t) : null;
          };

        return module247({}, o ? 'ListItemComponent' : 'renderItem', function (t) {
          if (u > 1) {
            var n = t.item,
              o = t.index;
            module18(Array.isArray(n), 'Expected array of items with numColumns > 1');
            return (
              <module88 style={module60.compose(I.row, c)}>
                {n.map(function (n, s) {
                  var l = f({
                    item: n,
                    index: o * u + s,
                    separators: t.separators,
                  });
                  return null != l ? <React.Fragment key={s}>{l}</React.Fragment> : null;
                })}
              </module88>
            );
          }

          return f(t);
        });
      };

      s._checkProps(s.props);

      if (s.props.viewabilityConfigCallbackPairs)
        s._virtualizedListPairs = s.props.viewabilityConfigCallbackPairs.map(function (t) {
          return {
            viewabilityConfig: t.viewabilityConfig,
            onViewableItemsChanged: s._createOnViewableItemsChanged(t.onViewableItemsChanged),
          };
        });
      else if (s.props.onViewableItemsChanged)
        s._virtualizedListPairs.push({
          viewabilityConfig: s.props.viewabilityConfig,
          onViewableItemsChanged: s._createOnViewableItemsChanged(s.props.onViewableItemsChanged),
        });
      return s;
    }

    module8(P, [
      {
        key: 'scrollToEnd',
        value: function (t) {
          if (this._listRef) this._listRef.scrollToEnd(t);
        },
      },
      {
        key: 'scrollToIndex',
        value: function (t) {
          if (this._listRef) this._listRef.scrollToIndex(t);
        },
      },
      {
        key: 'scrollToItem',
        value: function (t) {
          if (this._listRef) this._listRef.scrollToItem(t);
        },
      },
      {
        key: 'scrollToOffset',
        value: function (t) {
          if (this._listRef) this._listRef.scrollToOffset(t);
        },
      },
      {
        key: 'recordInteraction',
        value: function () {
          if (this._listRef) this._listRef.recordInteraction();
        },
      },
      {
        key: 'flashScrollIndicators',
        value: function () {
          if (this._listRef) this._listRef.flashScrollIndicators();
        },
      },
      {
        key: 'getScrollResponder',
        value: function () {
          if (this._listRef) return this._listRef.getScrollResponder();
        },
      },
      {
        key: 'getScrollableNode',
        value: function () {
          if (this._listRef) return this._listRef.getScrollableNode();
        },
      },
      {
        key: 'setNativeProps',
        value: function (t) {
          if (this._listRef) this._listRef.setNativeProps(t);
        },
      },
    ]);
    module8(P, [
      {
        key: 'componentDidUpdate',
        value: function (t) {
          module18(
            t.numColumns === this.props.numColumns,
            'Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component.'
          );
          module18(t.onViewableItemsChanged === this.props.onViewableItemsChanged, 'Changing onViewableItemsChanged on the fly is not supported');
          module18(!module164(t.viewabilityConfig, this.props.viewabilityConfig), 'Changing viewabilityConfig on the fly is not supported');
          module18(t.viewabilityConfigCallbackPairs === this.props.viewabilityConfigCallbackPairs, 'Changing viewabilityConfigCallbackPairs on the fly is not supported');

          this._checkProps(this.props);
        },
      },
      {
        key: '_checkProps',
        value: function (t) {
          var n = t.getItem,
            o = t.getItemCount,
            s = t.horizontal,
            l = t.numColumns,
            u = t.columnWrapperStyle,
            c = t.onViewableItemsChanged,
            f = t.viewabilityConfigCallbackPairs;
          module18(!n && !o, 'FlatList does not support custom data formats.');
          if (l > 1) module18(!s, 'numColumns does not support horizontal.');
          else module18(!u, 'columnWrapperStyle not supported for single column lists');
          module18(!(c && f), 'FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.');
        },
      },
      {
        key: '_pushMultiColumnViewable',
        value: function (t, n) {
          var o = this.props,
            s = o.numColumns,
            l = o.keyExtractor;
          n.item.forEach(function (o, u) {
            module18(null != n.index, 'Missing index!');
            var f = n.index * s + u;
            t.push(
              module6({}, n, {
                item: o,
                key: l(o, f),
                index: f,
              })
            );
          });
        },
      },
      {
        key: '_createOnViewableItemsChanged',
        value: function (t) {
          var n = this;
          return function (o) {
            var s = n.props.numColumns;
            if (t)
              if (s > 1) {
                var l = [],
                  u = [];
                o.viewableItems.forEach(function (t) {
                  return n._pushMultiColumnViewable(u, t);
                });
                o.changed.forEach(function (t) {
                  return n._pushMultiColumnViewable(l, t);
                });
                t({
                  viewableItems: u,
                  changed: l,
                });
              } else t(o);
          };
        },
      },
      {
        key: 'render',
        value: function () {
          return <module248 />;
        },
      },
    ]);
    return P;
  })(React.PureComponent);

class w {
  constructor(o) {
    var s;
    module7(this, P);
    (s = R.call(this, o))._virtualizedListPairs = [];

    s._captureRef = function (t) {
      s._listRef = t;
    };

    s._getItem = function (t, n) {
      var o = s.props.numColumns;

      if (o > 1) {
        for (var l = [], u = 0; u < o; u++) {
          var c = t[n * o + u];
          if (null != c) l.push(c);
        }

        return l;
      }

      return t[n];
    };

    s._getItemCount = function (t) {
      return t ? Math.ceil(t.length / s.props.numColumns) : 0;
    };

    s._keyExtractor = function (t, n) {
      var o = s.props,
        l = o.keyExtractor,
        u = o.numColumns;

      if (u > 1) {
        module18(
          Array.isArray(t),
          'FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.',
          u
        );
        return t
          .map(function (t, o) {
            return l(t, n * u + o);
          })
          .join(':');
      } else return l(t, n);
    };

    s._renderer = function () {
      var n = s.props,
        o = n.ListItemComponent,
        l = n.renderItem,
        u = n.numColumns,
        c = n.columnWrapperStyle,
        f = function (t) {
          return o ? <o /> : l ? l(t) : null;
        };

      return module247({}, o ? 'ListItemComponent' : 'renderItem', function (t) {
        if (u > 1) {
          var n = t.item,
            o = t.index;
          module18(Array.isArray(n), 'Expected array of items with numColumns > 1');
          return (
            <module88 style={module60.compose(I.row, c)}>
              {n.map(function (n, s) {
                var l = f({
                  item: n,
                  index: o * u + s,
                  separators: t.separators,
                });
                return null != l ? <React.Fragment key={s}>{l}</React.Fragment> : null;
              })}
            </module88>
          );
        }

        return f(t);
      });
    };

    s._checkProps(s.props);

    if (s.props.viewabilityConfigCallbackPairs)
      s._virtualizedListPairs = s.props.viewabilityConfigCallbackPairs.map(function (t) {
        return {
          viewabilityConfig: t.viewabilityConfig,
          onViewableItemsChanged: s._createOnViewableItemsChanged(t.onViewableItemsChanged),
        };
      });
    else if (s.props.onViewableItemsChanged)
      s._virtualizedListPairs.push({
        viewabilityConfig: s.props.viewabilityConfig,
        onViewableItemsChanged: s._createOnViewableItemsChanged(s.props.onViewableItemsChanged),
      });
    return s;
  }

  scrollToEnd(t) {
    if (this._listRef) this._listRef.scrollToEnd(t);
  }

  scrollToIndex(t) {
    if (this._listRef) this._listRef.scrollToIndex(t);
  }

  scrollToItem(t) {
    if (this._listRef) this._listRef.scrollToItem(t);
  }

  scrollToOffset(t) {
    if (this._listRef) this._listRef.scrollToOffset(t);
  }

  recordInteraction() {
    if (this._listRef) this._listRef.recordInteraction();
  }

  flashScrollIndicators() {
    if (this._listRef) this._listRef.flashScrollIndicators();
  }

  getScrollResponder() {
    if (this._listRef) return this._listRef.getScrollResponder();
  }

  getScrollableNode() {
    if (this._listRef) return this._listRef.getScrollableNode();
  }

  setNativeProps(t) {
    if (this._listRef) this._listRef.setNativeProps(t);
  }
}

w.defaultProps = _;
var I = module60.create({
  row: {
    flexDirection: 'row',
  },
});
module.exports = w;
