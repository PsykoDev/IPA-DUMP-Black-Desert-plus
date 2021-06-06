var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17');

function h() {
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

function v() {
  return (v =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var u = arguments[n];

        for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (t[o] = u[o]);
      }

      return t;
    }).apply(this, arguments);
}

function y(t, n, u) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: u,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = u;
  return t;
}

exports.default = function (t, T) {
  var _, x;

  x = _ = (function (_, ...args) {
    module9.default(F, _);

    var x = F,
      G = h(),
      I = function () {
        var t,
          n = module13.default(x);

        if (G) {
          var u = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function F() {
      var t;
      module7.default(this, F);
      t = I.call(this, ...args);
      y(module12.default(t), '_previouslyFocusedTextInput', null);
      y(module12.default(t), '_handleGestureBegin', function () {
        t._previouslyFocusedTextInput = module17.TextInput.State.currentlyFocusedField();
        if (t._previouslyFocusedTextInput) module17.TextInput.State.blurTextInput(t._previouslyFocusedTextInput);
        if (t.props.onGestureBegin) t.props.onGestureBegin();
      });
      y(module12.default(t), '_handleGestureCanceled', function () {
        if (t._previouslyFocusedTextInput) module17.TextInput.State.focusTextInput(t._previouslyFocusedTextInput);
        if (t.props.onGestureCanceled) t.props.onGestureCanceled();
      });
      y(module12.default(t), '_handleGestureEnd', function () {
        t._previouslyFocusedTextInput = null;
        if (t.props.onGestureFinish) t.props.onGestureFinish();
      });
      y(module12.default(t), '_handleTransitionStart', function (n, u) {
        if (n.index !== u.index) {
          var o = module17.TextInput.State.currentlyFocusedField();
          if (o) module17.TextInput.State.blurTextInput(o);
        }

        var s = t.props.onTransitionStart || T.onTransitionStart;
        if (s) s(n, u);
      });
      return t;
    }

    module8.default(F, [
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            t,
            v({}, this.props, {
              onGestureBegin: this._handleGestureBegin,
              onGestureCanceled: this._handleGestureCanceled,
              onGestureEnd: this._handleGestureEnd,
              onTransitionStart: this._handleTransitionStart,
            })
          );
        },
      },
    ]);
    return F;
  })(React.default.Component);

  y(_, 'router', t.router);
  y(_, 'navigationOptions', t.navigationOptions);
  return x;
};
