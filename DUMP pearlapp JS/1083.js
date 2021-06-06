exports.createTransitioningComponent = P;

var module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module6 = require('./6'),
  React = require('react'),
  module17 = require('./17'),
  module1033 = require('./1033');

function y(t) {
  var n = k();
  return function () {
    var o,
      u = module13.default(t);

    if (n) {
      var s = module13.default(this).constructor;
      o = Reflect.construct(u, arguments, s);
    } else o = u.apply(this, arguments);

    return module11.default(this, o);
  };
}

function k() {
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

var M = React.default.createContext();

function x(t, n) {
  var o = {
    type: t,
  };
  if ('durationMs' in n) o.durationMs = n.durationMs;
  if ('interpolation' in n) o.interpolation = n.interpolation;
  if ('type' in n) o.animation = n.type;
  if ('delayMs' in n) o.delayMs = n.delayMs;
  if ('propagation' in n) o.propagation = n.propagation;
  return o;
}

function T(t) {
  return function (n) {
    return React.default.createElement(M.Consumer, null, function (o) {
      return React.default.createElement(
        t,
        module6.default(
          {
            context: o,
          },
          n
        )
      );
    });
  };
}

var C = (function (t) {
    module9.default(l, t);
    var n = y(l);

    function l() {
      module7.default(this, l);
      return n.apply(this, arguments);
    }

    module8.default(l, [
      {
        key: 'componentDidMount',
        value: function () {
          this.props.context.push(x('in', this.props));
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.children || null;
        },
      },
    ]);
    return l;
  })(React.default.Component),
  R = (function (t) {
    module9.default(l, t);
    var n = y(l);

    function l() {
      module7.default(this, l);
      return n.apply(this, arguments);
    }

    module8.default(l, [
      {
        key: 'componentDidMount',
        value: function () {
          this.props.context.push(x('change', this.props));
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.children || null;
        },
      },
    ]);
    return l;
  })(React.default.Component),
  w = (function (t) {
    module9.default(l, t);
    var n = y(l);

    function l() {
      module7.default(this, l);
      return n.apply(this, arguments);
    }

    module8.default(l, [
      {
        key: 'componentDidMount',
        value: function () {
          this.props.context.push(x('out', this.props));
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.children || null;
        },
      },
    ]);
    return l;
  })(React.default.Component),
  D = (function (t, ...args) {
    module9.default(l, t);
    var n = y(l);

    function l() {
      var t;
      module7.default(this, l);
      (t = n.call(this, ...args)).transitions = [];
      return t;
    }

    module8.default(l, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = x('group', this.props);
          t.transitions = this.transitions;
          this.props.context.push(t);
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            M.Provider,
            {
              value: this.transitions,
            },
            this.props.children
          );
        },
      },
    ]);
    return l;
  })(React.default.Component),
  E = (function (t, ...args) {
    module9.default(l, t);
    var n = y(l);

    function l() {
      var t;
      module7.default(this, l);
      (t = n.call(this, ...args)).transitions = [];
      return t;
    }

    module8.default(l, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = x('group', this.props);
          t.sequence = true;
          t.transitions = this.transitions;
          this.props.context.push(t);
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            M.Provider,
            {
              value: this.transitions,
            },
            this.props.children
          );
        },
      },
    ]);
    return l;
  })(React.default.Component);

function P(t) {
  return (function (l, ...args) {
    module9.default(k, l);
    var f = y(k);

    function k() {
      var n;
      module7.default(this, k);
      (n = f.call(this, ...args)).propTypes = t.propTypes;
      n.transitions = [];
      n.viewRef = React.default.createRef();
      return n;
    }

    module8.default(k, [
      {
        key: 'componentDidMount',
        value: function () {
          if (this.props.animateMount) this.animateNextTransition();
        },
      },
      {
        key: 'setNativeProps',
        value: function (t) {
          this.viewRef.current.setNativeProps(t);
        },
      },
      {
        key: 'animateNextTransition',
        value: function () {
          var t = module17.findNodeHandle(this.viewRef.current);
          module1033.default.animateNextTransition(t, {
            transitions: this.transitions,
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var o = this.props,
            u = o.transition,
            s = module56.default(o, ['transition']);
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              M.Provider,
              {
                value: this.transitions,
              },
              u
            ),
            React.default.createElement(
              t,
              module6.default({}, s, {
                ref: this.viewRef,
                collapsable: false,
              })
            )
          );
        },
      },
    ]);
    return k;
  })(React.default.Component);
}

var N = {
  View: P(module17.View),
};
exports.Transitioning = N;
var _ = {
  Sequence: T(E),
  Together: T(D),
  In: T(C),
  Out: T(w),
  Change: T(R),
};
exports.Transition = _;
