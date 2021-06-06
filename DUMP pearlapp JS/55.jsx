require('./58');

var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  module60 = require('./60'),
  module88 = require('./88'),
  module184 = require('./184').default,
  h = React.forwardRef(function (h, y) {
    var z,
      f,
      p = h.onLayout,
      v = h.style,
      w = h.size,
      L = module56(h, ['onLayout', 'style', 'size']);

    switch (w) {
      case 'small':
        z = u.sizeSmall;
        f = 'small';
        break;

      case 'large':
        z = u.sizeLarge;
        f = 'large';
        break;

      default:
        z = {
          height: h.size,
          width: h.size,
        };
    }

    var S = module6({}, L, {
      ref: y,
      style: z,
      size: f,
    });
    return (
      <module88 onLayout={p} style={module60.compose(u.container, v)}>
        <module184 />
      </module88>
    );
  });

h.displayName = 'ActivityIndicator';
h.defaultProps = {
  animating: true,
  color: '#999999',
  hidesWhenStopped: true,
  size: 'small',
};
var u = module60.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeSmall: {
    width: 20,
    height: 20,
  },
  sizeLarge: {
    width: 36,
    height: 36,
  },
});
module.exports = h;
