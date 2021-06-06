var module6 = require('./6'),
  module64 = require('./64'),
  module75 = require('./75'),
  module172 = require('./172'),
  module18 = require('./18'),
  module173 = require('./173'),
  module175 = require('./175'),
  module82 = require('./82'),
  module176 = require('./176'),
  module177 = require('./177'),
  module85 = require('./85'),
  module20 = require('./20');

var C = false;

function E(n) {
  var t = module75.getConstants();
  if (t.ViewManagerNames || t.LazyViewManagersEnabled) n = T(n, module75.getDefaultEventTypes());
  else {
    n.bubblingEventTypes = T(n.bubblingEventTypes, t.genericBubblingEventTypes);
    n.directEventTypes = T(n.directEventTypes, t.genericDirectEventTypes);
  }
}

function T(n, t) {
  if (!t) return n;
  if (!n) return t;

  for (var s in t)
    if (t.hasOwnProperty(s)) {
      var o = t[s];

      if (n.hasOwnProperty(s)) {
        var u = n[s];
        if ('object' == typeof o && 'object' == typeof u) o = T(u, o);
      }

      n[s] = o;
    }

  return n;
}

function w(n) {
  switch (n) {
    case 'CATransform3D':
      return module173;

    case 'CGPoint':
      return module175;

    case 'CGSize':
      return module85;

    case 'UIEdgeInsets':
      return module172;
  }

  return null;
}

function I(n) {
  switch (n) {
    case 'CGColor':
    case 'UIColor':
      return module82;

    case 'CGColorArray':
    case 'UIColorArray':
      return module176;

    case 'CGImage':
    case 'UIImage':
    case 'RCTImageSource':
      return module177;

    case 'Color':
      return module82;

    case 'ColorArray':
      return module176;
  }

  return null;
}

module.exports = function (o) {
  var c = module75.getViewManagerConfig(o);
  module18(null != c && null != c.NativeProps, 'requireNativeComponent: "%s" was not found in the UIManager.', o);

  for (var l = c.baseModuleName, v = c.bubblingEventTypes, b = c.directEventTypes, p = c.NativeProps; l; ) {
    var f = module75.getViewManagerConfig(l);

    if (f) {
      v = module6({}, f.bubblingEventTypes, v);
      b = module6({}, f.directEventTypes, b);
      p = module6({}, f.NativeProps, p);
      l = f.baseModuleName;
    } else {
      module20(false, 'Base module "%s" does not exist', l);
      l = null;
    }
  }

  var T = {};

  for (var N in p) {
    var M = p[N],
      P = w(M),
      h = I(M);
    T[N] = (null == P && null == h) || {
      diff: P,
      process: h,
    };
  }

  T.style = module64;
  module6(c, {
    uiViewClassName: o,
    validAttributes: T,
    bubblingEventTypes: v,
    directEventTypes: b,
  });

  if (!C) {
    E(c);
    C = true;
  }

  return c;
};
