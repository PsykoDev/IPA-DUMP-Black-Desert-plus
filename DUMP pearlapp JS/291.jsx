var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function u() {
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

var module268 = require('./268'),
  React = require('react'),
  module60 = require('./60'),
  module88 = require('./88'),
  R = (function (R, ...args) {
    module9(S, R);

    var _ = S,
      w = u(),
      P = function () {
        var t,
          n = module13(_);

        if (w) {
          var c = module13(this).constructor;
          t = Reflect.construct(n, arguments, c);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function S() {
      var t;
      module7(this, S);
      (t = P.call(this, ...args))._viewRef = null;

      t._captureRef = function (n) {
        t._viewRef = n;
      };

      return t;
    }

    module8(S, [
      {
        key: 'setNativeProps',
        value: function (t) {
          var n = this._viewRef;
          if (n) n.setNativeProps(t);
        },
      },
      {
        key: 'render',
        value: function () {
          var c = this.props,
            o = c.children,
            f = c.style,
            l = c.imageStyle,
            s = c.imageRef,
            u = module56(c, ['children', 'style', 'imageStyle', 'imageRef']);
          return (
            <module88 accessibilityIgnoresInvertColors style={f} ref={this._captureRef}>
              <module268 />
              {o}
            </module88>
          );
        },
      },
    ]);
    return S;
  })(React.Component);

class R {
  constructor() {
    var t;
    module7(this, S);
    (t = P.call(this, ...args))._viewRef = null;

    t._captureRef = function (n) {
      t._viewRef = n;
    };

    return t;
  }

  setNativeProps(t) {
    var n = this._viewRef;
    if (n) n.setNativeProps(t);
  }

  render() {
    var c = this.props,
      o = c.children,
      f = c.style,
      l = c.imageStyle,
      s = c.imageRef,
      u = module56(c, ['children', 'style', 'imageStyle', 'imageRef']);
    return (
      <module88 accessibilityIgnoresInvertColors style={f} ref={this._captureRef}>
        <module268 />
        {o}
      </module88>
    );
  }
}

module.exports = R;
