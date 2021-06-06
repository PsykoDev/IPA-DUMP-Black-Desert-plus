var module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module296 = require('./296');

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

var React = require('react'),
  module60 = require('./60'),
  module88 = require('./88'),
  y = (function (t, ...args) {
    module9.default(w, t);

    var y = w,
      E = p(),
      R = function () {
        var t,
          n = module13.default(y);

        if (E) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function w() {
      var t;
      module7.default(this, w);
      (t = R.call(this, ...args))._hasWarnedInvalidRenderMask = false;
      return t;
    }

    module8.default(w, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            l = t.maskElement,
            c = t.children,
            s = module56.default(t, ['maskElement', 'children']);
          if (React.isValidElement(l))
            return (
              <module296.default>
                <module88 pointerEvents="none" style={module60.absoluteFill}>
                  {l}
                </module88>
                {c}
              </module296.default>
            );
          else {
            if (!this._hasWarnedInvalidRenderMask) {
              console.warn('MaskedView: Invalid `maskElement` prop was passed to MaskedView. Expected a React Element. No mask will render.');
              this._hasWarnedInvalidRenderMask = true;
            }

            return <module88>{c}</module88>;
          }
        },
      },
    ]);
    return w;
  })(React.Component);

module.exports = y;
