var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13'),
  module318 = require('./318');

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

require('./319');

require('./58');

var React = require('react'),
  module60 = require('./60'),
  R = (function (t, ...args) {
    module9.default(w, t);

    var R = w,
      _ = p(),
      S = function () {
        var t,
          n = module13.default(R);

        if (_) {
          var o = module13.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11.default(this, t);
      };

    function w() {
      var t;
      module7.default(this, w);

      (t = S.call(this, ...args))._handleChange = function (n) {
        if (null != t._nativeSwitchRef) {
          var o = true === t.props.value;

          t._nativeSwitchRef.setNativeProps({
            value: o,
          });

          if (null != t.props.onChange) t.props.onChange(n);
          if (null != t.props.onValueChange) t.props.onValueChange(n.nativeEvent.value);
        }
      };

      t._handleSwitchNativeComponentRef = function (n) {
        t._nativeSwitchRef = n;
      };

      return t;
    }

    module8.default(w, [
      {
        key: 'render',
        value: function () {
          var t,
            l = this.props,
            u = l.disabled,
            c = l.ios_backgroundColor,
            s = l.style,
            f = l.thumbColor,
            p = l.trackColor,
            R = l.value,
            _ = module56.default(l, ['disabled', 'ios_backgroundColor', 'onChange', 'onValueChange', 'style', 'thumbColor', 'trackColor', 'value']),
            S = f,
            w = null == p ? undefined : p.false,
            k = null == p ? undefined : p.true,
            T = _,
            V = T.thumbTintColor,
            N = T.tintColor,
            x = T.onTintColor;

          if (null != V) S = V;
          if (null != N) w = N;
          if (null != x) k = x;
          var D = {
            disabled: u,
            onTintColor: k,
            style: module60.compose(
              {
                height: 31,
                width: 51,
              },
              module60.compose(
                s,
                null == c
                  ? null
                  : {
                      backgroundColor: c,
                      borderRadius: 16,
                    }
              )
            ),
            thumbTintColor: S,
            tintColor: w,
            value: true === R,
          };
          return <module318.default />;
        },
      },
    ]);
    return w;
  })(React.Component),
  b = function () {
    return false;
  },
  y = function () {
    return true;
  };

module.exports = R;
