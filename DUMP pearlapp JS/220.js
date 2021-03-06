var t,
  module124 = require('./124'),
  module221 = require('./221'),
  module18 = require('./18'),
  s = 1,
  f = 1,
  v = false,
  c = [],
  N = {
    enableQueue: function () {
      v = true;
    },
    disableQueue: function () {
      module18.default(module221.default, 'Native animated module is not available');
      v = false;

      for (var t = 0, n = c.length; t < n; t++) {
        var o = c[t];
        module221.default.connectAnimatedNodes(o[0], o[1]);
      }

      c.length = 0;
    },
    createAnimatedNode: function (t, n) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.createAnimatedNode(t, n);
    },
    startListeningToAnimatedNodeValue: function (t) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.startListeningToAnimatedNodeValue(t);
    },
    stopListeningToAnimatedNodeValue: function (t) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.stopListeningToAnimatedNodeValue(t);
    },
    connectAnimatedNodes: function (t, n) {
      module18.default(module221.default, 'Native animated module is not available');
      if (v) c.push([t, n]);
      else module221.default.connectAnimatedNodes(t, n);
    },
    disconnectAnimatedNodes: function (t, n) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.disconnectAnimatedNodes(t, n);
    },
    startAnimatingNode: function (t, n, o, s) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.startAnimatingNode(t, n, o, s);
    },
    stopAnimation: function (t) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.stopAnimation(t);
    },
    setAnimatedNodeValue: function (t, n) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.setAnimatedNodeValue(t, n);
    },
    setAnimatedNodeOffset: function (t, n) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.setAnimatedNodeOffset(t, n);
    },
    flattenAnimatedNodeOffset: function (t) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.flattenAnimatedNodeOffset(t);
    },
    extractAnimatedNodeOffset: function (t) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.extractAnimatedNodeOffset(t);
    },
    connectAnimatedNodeToView: function (t, n) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.connectAnimatedNodeToView(t, n);
    },
    disconnectAnimatedNodeFromView: function (t, n) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.disconnectAnimatedNodeFromView(t, n);
    },
    dropAnimatedNode: function (t) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.dropAnimatedNode(t);
    },
    addAnimatedEventToView: function (t, n, o) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.addAnimatedEventToView(t, n, o);
    },
    removeAnimatedEventFromView: function (t, n, o) {
      module18.default(module221.default, 'Native animated module is not available');
      module221.default.removeAnimatedEventFromView(t, n, o);
    },
  },
  p = {
    opacity: true,
    transform: true,
    borderRadius: true,
    borderBottomEndRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true,
    borderBottomStartRadius: true,
    borderTopEndRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderTopStartRadius: true,
    elevation: true,
    shadowOpacity: true,
    shadowRadius: true,
    scaleX: true,
    scaleY: true,
    translateX: true,
    translateY: true,
  },
  A = {
    translateX: true,
    translateY: true,
    scale: true,
    scaleX: true,
    scaleY: true,
    rotate: true,
    rotateX: true,
    rotateY: true,
    rotateZ: true,
    perspective: true,
  },
  b = {
    inputRange: true,
    outputRange: true,
    extrapolate: true,
    extrapolateRight: true,
    extrapolateLeft: true,
  };

var h = false;
module.exports = {
  API: N,
  addWhitelistedStyleProp: function (t) {
    p[t] = true;
  },
  addWhitelistedTransformProp: function (t) {
    A[t] = true;
  },
  addWhitelistedInterpolationParam: function (t) {
    b[t] = true;
  },
  validateStyles: function (t) {
    for (var n in t) if (!p.hasOwnProperty(n)) throw new Error("Style property '" + n + "' is not supported by native animated module");
  },
  validateTransform: function (t) {
    t.forEach(function (t) {
      if (!A.hasOwnProperty(t.property)) throw new Error("Property '" + t.property + "' is not supported by native animated module");
    });
  },
  validateInterpolation: function (t) {
    for (var n in t) if (!b.hasOwnProperty(n)) throw new Error("Interpolation property '" + n + "' is not supported by native animated module");
  },
  generateNewNodeTag: function () {
    return s++;
  },
  generateNewAnimationId: function () {
    return f++;
  },
  assertNativeAnimatedModule: function () {
    module18.default(module221.default, 'Native animated module is not available');
  },
  shouldUseNativeDriver: function (t) {
    if (true !== t.useNativeDriver || module221.default) return t.useNativeDriver || false;
    else {
      if (!h) {
        console.warn(
          'Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. More info: https://github.com/facebook/react-native/issues/11094#issuecomment-263240420'
        );
        h = true;
      }

      return false;
    }
  },
  transformDataType: function (t) {
    return 'string' != typeof t ? t : /deg$/.test(t) ? ((parseFloat(t) || 0) * Math.PI) / 180 : t;
  },

  get nativeEventEmitter() {
    if (!t) t = new module124.default(module221.default);
    return t;
  },
};
