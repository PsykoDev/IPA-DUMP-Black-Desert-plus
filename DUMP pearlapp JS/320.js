var module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module6 = require('./6'),
  module321 = require('./321');

function p() {
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

var React = require('react');

require('./82');

function k(t) {
  return {
    backgroundColor:
      null != t.backgroundColor
        ? {
            value: t.backgroundColor,
            animated: t.animated,
          }
        : null,
    barStyle:
      null != t.barStyle
        ? {
            value: t.barStyle,
            animated: t.animated,
          }
        : null,
    translucent: t.translucent,
    hidden:
      null != t.hidden
        ? {
            value: t.hidden,
            animated: t.animated,
            transition: t.showHideTransition,
          }
        : null,
    networkActivityIndicatorVisible: t.networkActivityIndicatorVisible,
  };
}

var v = (function (t, ...args) {
  module9.default(h, t);

  var module6 = h,
    React = p(),
    v = function () {
      var t,
        n = module13.default(module6);

      if (React) {
        var l = module13.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module11.default(this, t);
    };

  function h() {
    var t;
    module7.default(this, h);
    (t = v.call(this, ...args))._stackEntry = null;
    return t;
  }

  module8.default(
    h,
    [
      {
        key: 'componentDidMount',
        value: function () {
          this._stackEntry = h.pushStackEntry(this.props);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          h.popStackEntry(this._stackEntry);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function () {
          this._stackEntry = h.replaceStackEntry(this._stackEntry, this.props);
        },
      },
      {
        key: 'render',
        value: function () {
          return null;
        },
      },
    ],
    [
      {
        key: 'setHidden',
        value: function (t, n) {
          n = n || 'none';
          h._defaultProps.hidden.value = t;
          module321.default.setHidden(t, n);
        },
      },
      {
        key: 'setBarStyle',
        value: function (t, n) {
          n = n || false;
          h._defaultProps.barStyle.value = t;
          module321.default.setStyle(t, n);
        },
      },
      {
        key: 'setNetworkActivityIndicatorVisible',
        value: function (t) {
          h._defaultProps.networkActivityIndicatorVisible = t;
          module321.default.setNetworkActivityIndicatorVisible(t);
        },
      },
      {
        key: 'setBackgroundColor',
        value: function (t, n) {
          console.warn('`setBackgroundColor` is only available on Android');
        },
      },
      {
        key: 'setTranslucent',
        value: function (t) {
          console.warn('`setTranslucent` is only available on Android');
        },
      },
      {
        key: 'pushStackEntry',
        value: function (t) {
          var n = k(t);

          h._propsStack.push(n);

          h._updatePropsStack();

          return n;
        },
      },
      {
        key: 'popStackEntry',
        value: function (t) {
          var n = h._propsStack.indexOf(t);

          if (-1 !== n) h._propsStack.splice(n, 1);

          h._updatePropsStack();
        },
      },
      {
        key: 'replaceStackEntry',
        value: function (t, n) {
          var l = k(n),
            o = h._propsStack.indexOf(t);

          if (-1 !== o) h._propsStack[o] = l;

          h._updatePropsStack();

          return l;
        },
      },
    ]
  );
  return h;
})(React.Component);

v._propsStack = [];
v._defaultProps = k({
  animated: false,
  showHideTransition: 'fade',
  backgroundColor: 'black',
  barStyle: 'default',
  translucent: false,
  hidden: false,
  networkActivityIndicatorVisible: false,
});
v._updateImmediate = null;
v._currentValues = null;
v.currentHeight = module321.default.getConstants().HEIGHT;
v.defaultProps = {
  animated: false,
  showHideTransition: 'fade',
};

v._updatePropsStack = function () {
  clearImmediate(v._updateImmediate);
  v._updateImmediate = setImmediate(function () {
    var t = v._propsStack,
      module7 = v._defaultProps,
      l = v._currentValues,
      o = t.reduce(function (t, n) {
        for (var l in n) null != n[l] && (t[l] = n[l]);

        return t;
      }, module6.default({}, module7));
    if (!(l && l.barStyle.value === o.barStyle.value)) module321.default.setStyle(o.barStyle.value, o.barStyle.animated || false);
    if (!(l && l.hidden.value === o.hidden.value)) module321.default.setHidden(o.hidden.value, o.hidden.animated ? o.hidden.transition : 'none');
    if (!(l && l.networkActivityIndicatorVisible === o.networkActivityIndicatorVisible)) module321.default.setNetworkActivityIndicatorVisible(o.networkActivityIndicatorVisible);
    v._currentValues = o;
  });
};

module.exports = v;
