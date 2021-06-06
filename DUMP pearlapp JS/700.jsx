var React = require('react'),
  module17 = require('./17'),
  module437 = require('./437'),
  module655 = require('./655'),
  module669 = require('./669'),
  module701 = require('./701'),
  module702 = require('./702');

function p() {
  return (p =
    Object.assign ||
    function (t) {
      for (var o = 1; o < arguments.length; o++) {
        var n = arguments[o];

        for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
      }

      return t;
    }).apply(this, arguments);
}

var h = React.memo(function (t) {
  var o,
    l = t.scene,
    c = t.previous,
    h = t.layout,
    y = t.insets,
    T = t.navigation,
    H = t.styleInterpolator,
    k = l.descriptor.options,
    b = 'function' != typeof k.headerTitle && undefined !== k.headerTitle ? k.headerTitle : undefined !== k.title ? k.title : l.route.routeName;
  if (undefined !== k.headerBackTitle) o = k.headerBackTitle;
  else if (c) {
    var w = c.descriptor.options;
    o = 'function' != typeof w.headerTitle && undefined !== w.headerTitle ? w.headerTitle : undefined !== w.title ? w.title : c.route.routeName;
  }
  var O = React.useCallback(
    module702.default(function () {
      T.dispatch(
        module437.StackActions.pop({
          key: l.route.key,
        })
      );
    }, 50),
    [T, l.route.key]
  );
  return <module669.default />;
});
Object.defineProperty(h, 'HEIGHT', {
  get: function () {
    console.warn("Deprecation in 'createStackNavigator': 'Header.HEIGHT' will be removed in a future version. Use 'useHeaderHeight' or 'HeaderHeightContext' instead");
    return module669.getDefaultHeaderHeight(module17.Dimensions.get('window'), module655.getStatusBarHeight(true));
  },
});
var y = h;
exports.default = y;
