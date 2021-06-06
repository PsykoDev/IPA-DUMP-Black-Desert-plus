require('./58');

require('./90');

var n,
  module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module316 = require('./316'),
  React = require('react'),
  module60 = require('./60'),
  c = React.forwardRef(function (t, c) {
    var p = module60.compose(n.slider, t.style),
      v = t.onValueChange,
      h = t.onSlidingComplete,
      C = module56.default(t, ['onValueChange', 'onSlidingComplete']),
      S = v
        ? function (n) {
            v(n.nativeEvent.value);
          }
        : null,
      V = S,
      R = h
        ? function (n) {
            h(n.nativeEvent.value);
          }
        : null;
    return <module316.default />;
  });

c.defaultProps = {
  disabled: false,
  value: 0,
  minimumValue: 0,
  maximumValue: 1,
  step: 0,
};
n = module60.create({
  slider: {
    height: 40,
  },
});
module.exports = c;
