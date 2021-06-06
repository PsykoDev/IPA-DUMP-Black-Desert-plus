var module6 = require('./6'),
  module7 = require('./7'),
  module9 = require('./9'),
  module11 = require('./11'),
  module13 = require('./13');

function l() {
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

require('./212');

var React = require('react'),
  module60 = require('./60'),
  module197 = require('./197'),
  module213 = require('./213'),
  module88 = require('./88'),
  module18 = require('./18'),
  y = (function (t) {
    module9(R, t);

    var module60 = R,
      y = l(),
      v = function () {
        var t,
          n = module13(module60);

        if (y) {
          var o = module13(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module11(this, t);
      };

    function R() {
      module7(this, R);
      return v.apply(this, arguments);
    }

    module8(R, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.accessibilityLabel,
            o = t.color,
            s = t.onPress,
            c = t.touchSoundDisabled,
            u = t.title,
            l = t.hasTVPreferredFocus,
            b = t.nextFocusDown,
            y = t.nextFocusForward,
            v = t.nextFocusLeft,
            R = t.nextFocusRight,
            P = t.nextFocusUp,
            S = t.disabled,
            w = t.testID,
            L = [D.button],
            E = [D.text];
          if (o)
            E.push({
              color: o,
            });
          var T = [];

          if (S) {
            L.push(D.buttonDisabled);
            E.push(D.textDisabled);
            T.push('disabled');
          }

          module18('string' == typeof u, 'The title prop of a Button must be a string');
          var A = u,
            I = module213;
          return (
            <I
              accessibilityLabel={n}
              accessibilityRole="button"
              accessibilityStates={T}
              hasTVPreferredFocus={l}
              nextFocusDown={b}
              nextFocusForward={y}
              nextFocusLeft={v}
              nextFocusRight={R}
              nextFocusUp={P}
              testID={w}
              disabled={S}
              onPress={s}
              touchSoundDisabled={c}
            >
              <module88 style={L}>
                <module197 style={E} disabled={S}>
                  {A}
                </module197>
              </module88>
            </I>
          );
        },
      },
    ]);
    return R;
  })(React.Component),
  D = module60.create({
    button: {},
    text: module6(
      {
        textAlign: 'center',
        padding: 8,
      },
      {
        color: '#007AFF',
        fontSize: 18,
      }
    ),
    buttonDisabled: {},
    textDisabled: {
      color: '#cdcdcd',
    },
  });

class y {
  constructor() {
    module7(this, R);
    return v.apply(this, arguments);
  }

  render() {
    var t = this.props,
      n = t.accessibilityLabel,
      o = t.color,
      s = t.onPress,
      c = t.touchSoundDisabled,
      u = t.title,
      l = t.hasTVPreferredFocus,
      b = t.nextFocusDown,
      y = t.nextFocusForward,
      v = t.nextFocusLeft,
      R = t.nextFocusRight,
      P = t.nextFocusUp,
      S = t.disabled,
      w = t.testID,
      L = [D.button],
      E = [D.text];
    if (o)
      E.push({
        color: o,
      });
    var T = [];

    if (S) {
      L.push(D.buttonDisabled);
      E.push(D.textDisabled);
      T.push('disabled');
    }

    module18('string' == typeof u, 'The title prop of a Button must be a string');
    var A = u,
      I = module213;
    return (
      <I
        accessibilityLabel={n}
        accessibilityRole="button"
        accessibilityStates={T}
        hasTVPreferredFocus={l}
        nextFocusDown={b}
        nextFocusForward={y}
        nextFocusLeft={v}
        nextFocusRight={R}
        nextFocusUp={P}
        testID={w}
        disabled={S}
        onPress={s}
        touchSoundDisabled={c}
      >
        <module88 style={L}>
          <module197 style={E} disabled={S}>
            {A}
          </module197>
        </module88>
      </I>
    );
  }
}

module.exports = y;
