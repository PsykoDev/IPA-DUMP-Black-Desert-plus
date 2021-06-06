exports.SafeAreaProvider = function (t) {
  var n = t.children,
    l = t.initialSafeAreaInsets,
    o = React.useContext(c),
    s = React.useState(l || o),
    p = module26.default(s, 2),
    C = p[0],
    A = p[1],
    y = React.useCallback(function (t) {
      A(t.nativeEvent.insets);
    }, []);
  return (
    <module662.default style={S.fill} onInsetsChange={y}>
      {null != C ? <c.Provider value={C}>{n}</c.Provider> : null}
    </module662.default>
  );
};

exports.useSafeArea = C;

exports.SafeAreaView = function (t) {
  var n = t.style,
    u = module56.default(t, ['style']),
    v = C();
  return <module17.View />;
};

var module6 = require('./6'),
  module56 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module26 = require('@babel/runtime/helpers/slicedToArray'),
  React = require('react'),
  module17 = require('./17'),
  module662 = require('./662'),
  c = React.createContext(null);

exports.SafeAreaContext = c;
var S = module17.StyleSheet.create({
    fill: {
      flex: 1,
    },
  }),
  p = c.Consumer;

function C() {
  var t = React.useContext(c);
  if (null == t) throw new Error('No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.');
  return t;
}

exports.SafeAreaConsumer = p;
