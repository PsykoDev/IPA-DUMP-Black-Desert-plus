var module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  React = require('react'),
  module17 = require('./17');

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

var h = module17.requireNativeComponent('RNCMaskedView'),
  y = (function (t, ...args) {
    module9.default(R, t);

    var y = R,
      k = v(),
      E = function () {
        var t,
          n = module13.default(y);

        if (k) {
          var l = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function R() {
      var t;
      module7.default(this, R);
      (t = E.call(this, ...args))._hasWarnedInvalidRenderMask = false;
      return t;
    }

    module8.default(R, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            l = t.maskElement,
            u = t.children,
            c = module56.default(t, ['maskElement', 'children']);
          if (React.default.isValidElement(l))
            return React.default.createElement(
              h,
              c,
              React.default.createElement(
                module17.View,
                {
                  pointerEvents: 'none',
                  style: module17.StyleSheet.absoluteFill,
                },
                l
              ),
              u
            );
          else {
            if (!this._hasWarnedInvalidRenderMask) {
              console.warn('MaskedView: Invalid `maskElement` prop was passed to MaskedView. Expected a React Element. No mask will render.');
              this._hasWarnedInvalidRenderMask = true;
            }

            return React.default.createElement(module17.View, c, u);
          }
        },
      },
    ]);
    return R;
  })(React.default.Component);

exports.default = y;
