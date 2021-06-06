exports.__esModule = true;

var React = (function (t) {
  if (t && t.__esModule) return t;
  var o = {};
  if (null != t)
    for (var n in t)
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        var s = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
        if (s.get || s.set) Object.defineProperty(o, n, s);
        else o[n] = t[n];
      }
  o.default = t;
  return o;
})(require('react'));

function o(t) {
  return (o =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        })(t);
}

function n(t, o) {
  if (!(t instanceof o)) throw new TypeError('Cannot call a class as a function');
}

function s(t, o) {
  for (var n = 0; n < o.length; n++) {
    var s = o[n];
    s.enumerable = s.enumerable || false;
    s.configurable = true;
    if ('value' in s) s.writable = true;
    Object.defineProperty(t, s.key, s);
  }
}

function u(t) {
  return (u = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}

function c(t) {
  if (undefined === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}

function p(t, o) {
  if ('function' != typeof o && null !== o) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(o && o.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true,
    },
  });
  if (o) f(t, o);
}

function f(t, o) {
  return (f =
    Object.setPrototypeOf ||
    function (t, o) {
      t.__proto__ = o;
      return t;
    })(t, o);
}

function l(t, o, n) {
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

var b = (function (f, ...args) {
  function b() {
    var t, s, p, f;
    n(this, b);
    p = this;
    f = (t = u(b)).call.apply(t, [this].concat(args));
    l(c((s = !f || ('object' !== o(f) && 'function' != typeof f) ? c(p) : f)), 'state', {
      bootstrapped: false,
    });
    l(c(s), '_unsubscribe', undefined);
    l(c(s), 'handlePersistorState', function () {
      if (s.props.persistor.getState().bootstrapped) {
        if (s.props.onBeforeLift)
          Promise.resolve(s.props.onBeforeLift()).finally(function () {
            return s.setState({
              bootstrapped: true,
            });
          });
        else
          s.setState({
            bootstrapped: true,
          });
        if (s._unsubscribe) s._unsubscribe();
      }
    });
    return s;
  }

  var y, h, v;
  p(b, React.PureComponent);
  y = b;
  if (
    (h = [
      {
        key: 'componentDidMount',
        value: function () {
          this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState);
          this.handlePersistorState();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this._unsubscribe) this._unsubscribe();
        },
      },
      {
        key: 'render',
        value: function () {
          return 'function' == typeof this.props.children ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading;
        },
      },
    ])
  )
    s(y.prototype, h);
  if (v) s(y, v);
  return b;
})();

exports.PersistGate = b;
l(b, 'defaultProps', {
  children: null,
  loading: null,
});
