exports.default = function (t) {
  module210.default(
    'function' != typeof t || (t.prototype && t.prototype.isReactComponent),
    '`createAnimatedComponent` does not support stateless functional components; use a class component instead.'
  );

  var E = (function (k) {
    module9.default(w, k);

    var E = w,
      R = N(),
      b = function () {
        var t,
          n = module13.default(E);

        if (R) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function w(t) {
      var n;
      module7.default(this, w);
      (n = b.call(this, t))._invokeAnimatedPropsCallbackOnMount = false;

      n._animatedPropsCallback = function () {
        if (null == n._component) n._invokeAnimatedPropsCallbackOnMount = true;
        else if ('function' != typeof n._component.setNativeProps) n.forceUpdate();
        else n._component.setNativeProps(n._propsAnimated.__getValue());
      };

      n._setComponentRef = function (t) {
        if (t !== n._component) n._component = t;
      };

      n._attachProps(n.props);

      return n;
    }

    module8.default(w, [
      {
        key: 'componentWillUnmount',
        value: function () {
          this._detachPropUpdater();

          if (this._propsAnimated) this._propsAnimated.__detach();

          this._detachNativeEvents();
        },
      },
      {
        key: 'setNativeProps',
        value: function (t) {
          this._component.setNativeProps(t);
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          if (this._invokeAnimatedPropsCallbackOnMount) {
            this._invokeAnimatedPropsCallbackOnMount = false;

            this._animatedPropsCallback();
          }

          this._propsAnimated.setNativeView(this._component);

          this._attachNativeEvents();

          this._attachPropUpdater();
        },
      },
      {
        key: '_getEventViewRef',
        value: function () {
          return this._component.getScrollableNode ? this._component.getScrollableNode() : this._component;
        },
      },
      {
        key: '_attachNativeEvents',
        value: function () {
          var t = this._getEventViewRef();

          for (var n in this.props) {
            var o = this.props[n];
            if (o instanceof module1044.default) o.attachEvent(t, n);
          }
        },
      },
      {
        key: '_detachNativeEvents',
        value: function () {
          var t = this._getEventViewRef();

          for (var n in this.props) {
            var o = this.props[n];
            if (o instanceof module1044.default) o.detachEvent(t, n);
          }
        },
      },
      {
        key: '_reattachNativeEvents',
        value: function (t) {
          var n = this._getEventViewRef(),
            o = new Set(),
            s = new Set();

          for (var p in this.props) {
            var c = this.props[p];
            if (c instanceof module1044.default) s.add(c.__nodeID);
          }

          for (var u in t) {
            var l = this.props[u];
            if (l instanceof module1044.default) s.has(l.__nodeID) ? o.add(l.__nodeID) : l.detachEvent(n, u);
          }

          for (var f in this.props) {
            var v = this.props[f];
            if (v instanceof module1044.default && !o.has(v.__nodeID)) v.attachEvent(n, f);
          }
        },
      },
      {
        key: '_attachProps',
        value: function (t) {
          var n = this._propsAnimated;
          this._propsAnimated = module1070.createOrReusePropsNode(t, this._animatedPropsCallback, n);
          if (n !== this._propsAnimated && n) n.__detach();
        },
      },
      {
        key: '_updateFromNative',
        value: function (t) {
          this._component.setNativeProps(t);
        },
      },
      {
        key: '_attachPropUpdater',
        value: function () {
          var t = module17.findNodeHandle(this);
          P.set(t, this);
          if (1 === P.size) module1043.default.addListener('onReanimatedPropsChange', A);
        },
      },
      {
        key: '_detachPropUpdater',
        value: function () {
          var t = module17.findNodeHandle(this);
          P.delete(t);
          if (0 === P.size) module1043.default.removeAllListeners('onReanimatedPropsChange');
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          this._attachProps(this.props);

          this._reattachNativeEvents(t);

          this._propsAnimated.setNativeView(this._component);
        },
      },
      {
        key: '_filterNonAnimatedStyle',
        value: function (t) {
          var n = {};

          for (var o in t) {
            var s = t[o];
            if (!(s instanceof module1032.default || 'transform' === o)) n[o] = s;
          }

          return n;
        },
      },
      {
        key: '_filterNonAnimatedProps',
        value: function (t) {
          var n = {};

          for (var o in t) {
            var s = t[o];
            if ('style' === o) n[o] = this._filterNonAnimatedStyle(module17.StyleSheet.flatten(s));
            else if (s instanceof module1044.default) n[o] = C;
            else if (!(s instanceof module1032.default)) n[o] = s;
          }

          return n;
        },
      },
      {
        key: 'render',
        value: function () {
          var o = this._filterNonAnimatedProps(this.props),
            s = module17.Platform.select({
              web: {},
              default: {
                collapsable: false,
              },
            });

          return React.default.createElement(
            t,
            module6.default(
              {},
              o,
              {
                ref: this._setComponentRef,
              },
              s
            )
          );
        },
      },
      {
        key: 'getNode',
        value: function () {
          return this._component;
        },
      },
    ]);
    return w;
  })(React.default.Component);

  E.displayName = 'AnimatedComponent(' + (t.displayName || t.name || 'Component') + ')';
  return E;
};

var module6 = require('./6'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17'),
  module1043 = require('./1043'),
  module1044 = require('./1044'),
  module1032 = require('./1032'),
  module1070 = require('./1070'),
  module210 = require('./210');

function N() {
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

var P = new Map();

function A(t) {
  var n = P.get(t.viewTag);
  if (n) n._updateFromNative(t.props);
}

function C() {}
