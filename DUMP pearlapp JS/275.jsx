var module6 = require('./6'),
  module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function u(t) {
  var n = f();
  return function () {
    var o,
      s = module13(t);

    if (n) {
      var c = module13(this).constructor;
      o = Reflect.construct(s, arguments, c);
    } else o = s.apply(this, arguments);

    return module11(this, o);
  };
}

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

var React = require('react'),
  module88 = require('./88'),
  module248 = require('./248'),
  module18 = require('./18'),
  y = (function (l) {
    module9(f, l);
    var p = u(f);

    function f(s, c) {
      var l;
      module7(this, f);

      (l = p.call(this, s, c))._keyExtractor = function (t, n) {
        var o = l._subExtractor(n);

        return o ? o.key : String(n);
      };

      l._convertViewable = function (n) {
        module18(null != n.index, 'Received a broken ViewToken');

        var o = l._subExtractor(n.index);

        if (!o) return null;
        var s = o.section.keyExtractor || l.props.keyExtractor;
        return module6({}, n, {
          index: o.index,
          key: s(n.item, o.index),
          section: o.section,
        });
      };

      l._onViewableItemsChanged = function (t) {
        var n = t.viewableItems,
          s = t.changed;
        if (l.props.onViewableItemsChanged)
          l.props.onViewableItemsChanged({
            viewableItems: n.map(l._convertViewable, module12(l)).filter(Boolean),
            changed: s.map(l._convertViewable, module12(l)).filter(Boolean),
          });
      };

      l._renderItem = function (t) {
        var n = t.item,
          o = t.index,
          s = l._subExtractor(o);

        if (!s) return null;
        var c = s.index;

        if (null == c) {
          var p = s.section;

          if (true === s.header) {
            var u = l.props.renderSectionHeader;
            return u
              ? u({
                  section: p,
                })
              : null;
          }

          var f = l.props.renderSectionFooter;
          return f
            ? f({
                section: p,
              })
            : null;
        }

        var S = s.section.renderItem || l.props.renderItem,
          v = l._getSeparatorComponent(o, s);

        module18(S, 'no renderItem!');
        return (
          <_
            SeparatorComponent={v}
            LeadingSeparatorComponent={0 === c ? l.props.SectionSeparatorComponent : undefined}
            cellKey={s.key}
            index={c}
            item={n}
            leadingItem={s.leadingItem}
            leadingSection={s.leadingSection}
            onUpdateSeparator={l._onUpdateSeparator}
            prevCellKey={(l._subExtractor(o - 1) || {}).key}
            ref={function (t) {
              l._cellRefs[s.key] = t;
            }}
            renderItem={S}
            section={s.section}
            trailingItem={s.trailingItem}
            trailingSection={s.trailingSection}
          />
        );
      };

      l._onUpdateSeparator = function (t, n) {
        var o = l._cellRefs[t];
        if (o) o.updateSeparatorProps(n);
      };

      l._cellRefs = {};

      l._captureRef = function (t) {
        l._listRef = t;
      };

      l.state = l._computeState(s);
      return l;
    }

    module8(f, [
      {
        key: 'scrollToLocation',
        value: function (n) {
          for (var o = n.itemIndex, s = 0; s < n.sectionIndex; s++) o += this.props.getItemCount(this.props.sections[s].data) + 2;

          var c = n.viewOffset || 0;
          if (n.itemIndex > 0 && this.props.stickySectionHeadersEnabled) c += this._listRef._getFrameMetricsApprox(o - n.itemIndex).length;
          var l = module6({}, n, {
            viewOffset: c,
            index: o,
          });

          this._listRef.scrollToIndex(l);
        },
      },
      {
        key: 'getListRef',
        value: function () {
          return this._listRef;
        },
      },
    ]);
    module8(f, [
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (t) {
          this.setState(this._computeState(t));
        },
      },
      {
        key: '_computeState',
        value: function (n) {
          var o = n.ListHeaderComponent ? 1 : 0,
            s = [],
            c = n.sections
              ? n.sections.reduce(function (t, c) {
                  s.push(t + o);
                  return t + n.getItemCount(c.data) + 2;
                }, 0)
              : 0;
          return {
            childProps: module6({}, n, {
              renderItem: this._renderItem,
              ItemSeparatorComponent: undefined,
              data: n.sections,
              getItemCount: function () {
                return c;
              },
              getItem: function (t, o) {
                return x(n, t, o);
              },
              keyExtractor: this._keyExtractor,
              onViewableItemsChanged: n.onViewableItemsChanged ? this._onViewableItemsChanged : undefined,
              stickyHeaderIndices: n.stickySectionHeadersEnabled ? s : undefined,
            }),
          };
        },
      },
      {
        key: 'render',
        value: function () {
          return <module248 />;
        },
      },
      {
        key: '_subExtractor',
        value: function (t) {
          for (var n = t, o = this.props, s = o.getItem, c = o.getItemCount, l = o.keyExtractor, p = o.sections, u = 0; u < p.length; u++) {
            var f = p[u],
              h = f.data,
              S = f.key || String(u);
            if ((n -= 1) >= c(h) + 1) n -= c(h) + 1;
            else
              return -1 === n
                ? {
                    section: f,
                    key: S + ':header',
                    index: null,
                    header: true,
                    trailingSection: p[u + 1],
                  }
                : n === c(h)
                ? {
                    section: f,
                    key: S + ':footer',
                    index: null,
                    header: false,
                    trailingSection: p[u + 1],
                  }
                : {
                    section: f,
                    key: S + ':' + (f.keyExtractor || l)(s(h, n), n),
                    index: n,
                    leadingItem: s(h, n - 1),
                    leadingSection: p[u - 1],
                    trailingItem: s(h, n + 1),
                    trailingSection: p[u + 1],
                  };
          }
        },
      },
      {
        key: '_getSeparatorComponent',
        value: function (t, n) {
          if (!(n = n || this._subExtractor(t))) return null;
          var o = n.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent,
            s = this.props.SectionSeparatorComponent,
            c = t === this.state.childProps.getItemCount() - 1,
            l = n.index === this.props.getItemCount(n.section.data) - 1;
          return s && l ? s : !o || l || c ? null : o;
        },
      },
    ]);
    return f;
  })(React.PureComponent);

class y {
  constructor(s, c) {
    var l;
    module7(this, f);

    (l = p.call(this, s, c))._keyExtractor = function (t, n) {
      var o = l._subExtractor(n);

      return o ? o.key : String(n);
    };

    l._convertViewable = function (n) {
      module18(null != n.index, 'Received a broken ViewToken');

      var o = l._subExtractor(n.index);

      if (!o) return null;
      var s = o.section.keyExtractor || l.props.keyExtractor;
      return module6({}, n, {
        index: o.index,
        key: s(n.item, o.index),
        section: o.section,
      });
    };

    l._onViewableItemsChanged = function (t) {
      var n = t.viewableItems,
        s = t.changed;
      if (l.props.onViewableItemsChanged)
        l.props.onViewableItemsChanged({
          viewableItems: n.map(l._convertViewable, module12(l)).filter(Boolean),
          changed: s.map(l._convertViewable, module12(l)).filter(Boolean),
        });
    };

    l._renderItem = function (t) {
      var n = t.item,
        o = t.index,
        s = l._subExtractor(o);

      if (!s) return null;
      var c = s.index;

      if (null == c) {
        var p = s.section;

        if (true === s.header) {
          var u = l.props.renderSectionHeader;
          return u
            ? u({
                section: p,
              })
            : null;
        }

        var f = l.props.renderSectionFooter;
        return f
          ? f({
              section: p,
            })
          : null;
      }

      var S = s.section.renderItem || l.props.renderItem,
        v = l._getSeparatorComponent(o, s);

      module18(S, 'no renderItem!');
      return (
        <_
          SeparatorComponent={v}
          LeadingSeparatorComponent={0 === c ? l.props.SectionSeparatorComponent : undefined}
          cellKey={s.key}
          index={c}
          item={n}
          leadingItem={s.leadingItem}
          leadingSection={s.leadingSection}
          onUpdateSeparator={l._onUpdateSeparator}
          prevCellKey={(l._subExtractor(o - 1) || {}).key}
          ref={function (t) {
            l._cellRefs[s.key] = t;
          }}
          renderItem={S}
          section={s.section}
          trailingItem={s.trailingItem}
          trailingSection={s.trailingSection}
        />
      );
    };

    l._onUpdateSeparator = function (t, n) {
      var o = l._cellRefs[t];
      if (o) o.updateSeparatorProps(n);
    };

    l._cellRefs = {};

    l._captureRef = function (t) {
      l._listRef = t;
    };

    l.state = l._computeState(s);
    return l;
  }

  scrollToLocation(n) {
    for (var o = n.itemIndex, s = 0; s < n.sectionIndex; s++) o += this.props.getItemCount(this.props.sections[s].data) + 2;

    var c = n.viewOffset || 0;
    if (n.itemIndex > 0 && this.props.stickySectionHeadersEnabled) c += this._listRef._getFrameMetricsApprox(o - n.itemIndex).length;
    var l = module6({}, n, {
      viewOffset: c,
      index: o,
    });

    this._listRef.scrollToIndex(l);
  }

  getListRef() {
    return this._listRef;
  }
}

y.defaultProps = module6({}, module248.defaultProps, {
  data: [],
});

var _ = (function (o, ...args) {
  module9(p, o);
  var l = u(p);

  function p() {
    var o;
    module7(this, p);
    (o = l.call(this, ...args)).state = {
      separatorProps: {
        highlighted: false,
        leadingItem: o.props.item,
        leadingSection: o.props.leadingSection,
        section: o.props.section,
        trailingItem: o.props.trailingItem,
        trailingSection: o.props.trailingSection,
      },
      leadingSeparatorProps: {
        highlighted: false,
        leadingItem: o.props.leadingItem,
        leadingSection: o.props.leadingSection,
        section: o.props.section,
        trailingItem: o.props.item,
        trailingSection: o.props.trailingSection,
      },
    };
    o._separators = {
      highlight: function () {
        ['leading', 'trailing'].forEach(function (t) {
          return o._separators.updateProps(t, {
            highlighted: true,
          });
        });
      },
      unhighlight: function () {
        ['leading', 'trailing'].forEach(function (t) {
          return o._separators.updateProps(t, {
            highlighted: false,
          });
        });
      },
      updateProps: function (n, s) {
        var c = o.props,
          l = c.LeadingSeparatorComponent,
          p = c.cellKey,
          u = c.prevCellKey;
        if ('leading' === n && null != l)
          o.setState(function (n) {
            return {
              leadingSeparatorProps: module6({}, n.leadingSeparatorProps, s),
            };
          });
        else o.props.onUpdateSeparator(('leading' === n && u) || p, s);
      },
    };
    return o;
  }

  module8(
    p,
    [
      {
        key: 'updateSeparatorProps',
        value: function (n) {
          this.setState(function (o) {
            return {
              separatorProps: module6({}, o.separatorProps, n),
            };
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.LeadingSeparatorComponent,
            o = t.SeparatorComponent,
            s = t.item,
            c = t.index,
            l = t.section,
            p = this.props.renderItem({
              item: s,
              index: c,
              section: l,
              separators: this._separators,
            }),
            u = n && <n />,
            f = o && <o />;
          return u || f ? (
            <module88>
              {u}
              {p}
              {f}
            </module88>
          ) : (
            p
          );
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function (n, o) {
          return {
            separatorProps: module6({}, o.separatorProps, {
              leadingItem: n.item,
              leadingSection: n.leadingSection,
              section: n.section,
              trailingItem: n.trailingItem,
              trailingSection: n.trailingSection,
            }),
            leadingSeparatorProps: module6({}, o.leadingSeparatorProps, {
              leadingItem: n.leadingItem,
              leadingSection: n.leadingSection,
              section: n.section,
              trailingItem: n.item,
              trailingSection: n.trailingSection,
            }),
          };
        },
      },
    ]
  );
  return p;
})(React.Component);

function x(t, n, o) {
  if (!n) return null;

  for (var s = o - 1, c = 0; c < n.length; c++) {
    var l = n[c],
      p = l.data,
      u = t.getItemCount(p);
    if (-1 === s || s === u) return l;
    if (s < u) return t.getItem(p, s);
    s -= u + 2;
  }

  return null;
}

module.exports = y;
