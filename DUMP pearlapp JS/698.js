var module7 = require('./7'),
  module12 = require('./12'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17');

function T() {
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

function h(t, n, u) {
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

var v = (function (t, ...args) {
  module9.default(b, t);

  var n = b,
    React = T(),
    v = function () {
      var t,
        u = module13.default(n);

      if (React) {
        var o = module13.default(this).constructor;
        t = Reflect.construct(u, arguments, o);
      } else t = u.apply(this, arguments);

      return module11.default(this, t);
    };

  function b() {
    var t;
    module7.default(this, b);
    t = v.call(this, ...args);
    h(module12.default(t), 'previouslyFocusedTextInput', null);
    h(module12.default(t), 'startTimestamp', 0);
    h(module12.default(t), 'keyboardTimeout', undefined);
    h(module12.default(t), 'clearKeyboardTimeout', function () {
      if (undefined !== t.keyboardTimeout) {
        clearTimeout(t.keyboardTimeout);
        t.keyboardTimeout = undefined;
      }
    });
    h(module12.default(t), 'handlePageChangeStart', function () {
      if (t.props.enabled) {
        t.clearKeyboardTimeout();
        var n = module17.TextInput.State.currentlyFocusedField();
        module17.TextInput.State.blurTextInput(n);
        t.previouslyFocusedTextInput = n;
        t.startTimestamp = Date.now();
      }
    });
    h(module12.default(t), 'handlePageChangeConfirm', function () {
      if (t.props.enabled) {
        t.clearKeyboardTimeout();
        var n = t.previouslyFocusedTextInput;
        if ('android' === module17.Platform.OS) module17.Keyboard.dismiss();
        else if (n) module17.TextInput.State.blurTextInput(n);
        t.previouslyFocusedTextInput = null;
      }
    });
    h(module12.default(t), 'handlePageChangeCancel', function () {
      if (t.props.enabled) {
        t.clearKeyboardTimeout();
        var n = t.previouslyFocusedTextInput;
        if (n)
          Date.now() - t.startTimestamp < 100
            ? (t.keyboardTimeout = setTimeout(function () {
                module17.TextInput.State.focusTextInput(n);
                t.previouslyFocusedTextInput = null;
              }, 100))
            : (module17.TextInput.State.focusTextInput(n), (t.previouslyFocusedTextInput = null));
      }
    });
    return t;
  }

  module8.default(b, [
    {
      key: 'componentWillUnmount',
      value: function () {
        this.clearKeyboardTimeout();
      },
    },
    {
      key: 'render',
      value: function () {
        return this.props.children({
          onPageChangeStart: this.handlePageChangeStart,
          onPageChangeConfirm: this.handlePageChangeConfirm,
          onPageChangeCancel: this.handlePageChangeCancel,
        });
      },
    },
  ]);
  return b;
})(React.Component);

exports.default = v;
