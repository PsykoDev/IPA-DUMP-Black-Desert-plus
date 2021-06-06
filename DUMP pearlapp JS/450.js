var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function v() {
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

function y(t, o, n) {
  if (o in t)
    Object.defineProperty(t, o, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[o] = n;
  return t;
}

var React = (function (t, ...args) {
  module9.default(h, t);

  var o = h,
    React = v(),
    p = function () {
      var t,
        n = module13.default(o);

      if (React) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function h() {
    var t;
    module7.default(this, h);
    t = p.call(this, ...args);
    y(module12.default(t), '_actionSubscription', undefined);
    y(module12.default(t), '_willFocusSubscription', undefined);
    y(module12.default(t), '_willBlurSubscription', undefined);
    y(module12.default(t), '_didFocusSubscription', undefined);
    y(module12.default(t), '_didBlurSubscription', undefined);
    y(module12.default(t), '_refocusSubscription', undefined);
    y(module12.default(t), '_lastWillBlurKey', undefined);
    y(module12.default(t), '_lastWillFocusKey', undefined);
    y(module12.default(t), '_lastDidBlurKey', undefined);
    y(module12.default(t), '_lastDidFocusKey', undefined);
    y(module12.default(t), '_handleAction', function (o) {
      var n,
        l = o.state,
        u = o.lastState,
        s = o.action,
        c = o.type,
        f = o.context,
        v = t.props,
        y = v.navigation,
        _ = v.onEvent;

      if (y.isFocused()) {
        var p = u ? (null === (n = u.routes) || undefined === n ? undefined : n[u.index]) : undefined,
          h = l.routes[l.index],
          F = {
            context: ''
              .concat(h.key, ':')
              .concat(s.type, '_')
              .concat(f || 'Root'),
            state: h,
            lastState: p,
            action: s,
            type: c,
          };

        if ((null === p || undefined === p ? undefined : p.key) !== h.key) {
          t._emitWillFocus(h.key, F);

          if (null === p || undefined === p ? undefined : p.key) t._emitWillBlur(p.key, F);
        }

        if ((null === u || undefined === u ? undefined : u.isTransitioning) !== l.isTransitioning && false === l.isTransitioning) {
          if (t._lastWillBlurKey) t._emitDidBlur(t._lastWillBlurKey, F);
          if (t._lastWillFocusKey) t._emitDidFocus(t._lastWillFocusKey, F);
        }

        _(h.key, 'action', F);
      }
    });
    y(module12.default(t), '_handleWillFocus', function (o) {
      var n,
        l = o.lastState,
        u = o.action,
        s = o.context,
        c = o.type,
        f = t.props.navigation,
        v = f.state.routes[f.state.index];

      t._emitWillFocus(v.key, {
        context: ''
          .concat(v.key, ':')
          .concat(u.type, '_')
          .concat(s || 'Root'),
        state: v,
        lastState:
          null === l || undefined === l
            ? undefined
            : null === (n = l.routes) || undefined === n
            ? undefined
            : n.find(function (t) {
                return t.key === v.key;
              }),
        action: u,
        type: c,
      });
    });
    y(module12.default(t), '_handleWillBlur', function (o) {
      var n,
        l = o.lastState,
        u = o.action,
        s = o.context,
        c = o.type,
        f = t.props.navigation,
        v = f.state.routes[f.state.index];

      t._emitWillBlur(v.key, {
        context: ''
          .concat(v.key, ':')
          .concat(u.type, '_')
          .concat(s || 'Root'),
        state: v,
        lastState:
          null === l || undefined === l
            ? undefined
            : null === (n = l.routes) || undefined === n
            ? undefined
            : n.find(function (t) {
                return t.key === v.key;
              }),
        action: u,
        type: c,
      });
    });
    y(module12.default(t), '_handleDidFocus', function (o) {
      var n = o.lastState,
        l = o.action,
        u = o.context,
        s = o.type,
        c = t.props.navigation;

      if (t._lastWillFocusKey) {
        var f,
          v = c.state.routes.find(function (o) {
            return o.key === t._lastWillFocusKey;
          });
        if (v)
          t._emitDidFocus(v.key, {
            context: ''
              .concat(v.key, ':')
              .concat(l.type, '_')
              .concat(u || 'Root'),
            state: v,
            lastState:
              null === n || undefined === n
                ? undefined
                : null === (f = n.routes) || undefined === f
                ? undefined
                : f.find(function (t) {
                    return t.key === v.key;
                  }),
            action: l,
            type: s,
          });
      }
    });
    y(module12.default(t), '_handleDidBlur', function (o) {
      var n = o.lastState,
        l = o.action,
        u = o.context,
        s = o.type,
        c = t.props.navigation;

      if (t._lastWillBlurKey) {
        var f,
          v = c.state.routes.find(function (o) {
            return o.key === t._lastWillBlurKey;
          });
        if (v)
          t._emitDidBlur(v.key, {
            context: ''
              .concat(v.key, ':')
              .concat(l.type, '_')
              .concat(u || 'Root'),
            state: v,
            lastState:
              null === n || undefined === n
                ? undefined
                : null === (f = n.routes) || undefined === f
                ? undefined
                : f.find(function (t) {
                    return t.key === v.key;
                  }),
            action: l,
            type: s,
          });
      }
    });
    y(module12.default(t), '_handleRefocus', function () {
      var o = t.props,
        n = o.onEvent,
        l = o.navigation;
      n(l.state.routes[l.state.index].key, 'refocus');
    });
    y(module12.default(t), '_emitWillFocus', function (o, n) {
      if ((t._lastWillBlurKey === o && (t._lastWillBlurKey = undefined), t._lastWillFocusKey !== o)) {
        t._lastDidFocusKey = undefined;
        t._lastWillFocusKey = o;
        var l = t.props,
          u = l.navigation;
        l.onEvent(o, 'willFocus', n);
        if ('boolean' != typeof u.state.isTransitioning || (true !== u.state.isTransitioning && !u.dangerouslyGetParent())) t._emitDidFocus(o, n);
      }
    });
    y(module12.default(t), '_emitWillBlur', function (o, n) {
      if ((t._lastWillFocusKey === o && (t._lastWillFocusKey = undefined), t._lastWillBlurKey !== o)) {
        t._lastDidBlurKey = undefined;
        t._lastWillBlurKey = o;
        var l = t.props,
          u = l.navigation;
        l.onEvent(o, 'willBlur', n);
        if ('boolean' != typeof u.state.isTransitioning || (true !== u.state.isTransitioning && !u.dangerouslyGetParent())) t._emitDidBlur(o, n);
      }
    });
    y(module12.default(t), '_emitDidFocus', function (o, n) {
      if (t._lastWillFocusKey === o && t._lastDidFocusKey !== o) {
        t._lastDidFocusKey = o;
        t.props.onEvent(o, 'didFocus', n);
      }
    });
    y(module12.default(t), '_emitDidBlur', function (o, n) {
      if (t._lastWillBlurKey === o && t._lastDidBlurKey !== o) {
        t._lastDidBlurKey = o;
        t.props.onEvent(o, 'didBlur', n);
      }
    });
    return t;
  }

  module8.default(h, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this.props.navigation;
        this._actionSubscription = t.addListener('action', this._handleAction);
        this._willFocusSubscription = t.addListener('willFocus', this._handleWillFocus);
        this._willBlurSubscription = t.addListener('willBlur', this._handleWillBlur);
        this._didFocusSubscription = t.addListener('didFocus', this._handleDidFocus);
        this._didBlurSubscription = t.addListener('didBlur', this._handleDidBlur);
        this._refocusSubscription = t.addListener('refocus', this._handleRefocus);
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        var t, o, n, l, u, s;
        if (!(null === (t = this._actionSubscription) || undefined === t)) t.remove();
        if (!(null === (o = this._willFocusSubscription) || undefined === o)) o.remove();
        if (!(null === (n = this._willBlurSubscription) || undefined === n)) n.remove();
        if (!(null === (l = this._didFocusSubscription) || undefined === l)) l.remove();
        if (!(null === (u = this._didBlurSubscription) || undefined === u)) u.remove();
        if (!(null === (s = this._refocusSubscription) || undefined === s)) s.remove();
      },
    },
    {
      key: 'render',
      value: function () {
        return null;
      },
    },
  ]);
  return h;
})(require('react').Component);

exports.default = React;
