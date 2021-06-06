function t(t, R) {
  var E = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    if (R)
      n = n.filter(function (R) {
        return Object.getOwnPropertyDescriptor(t, R).enumerable;
      });
    E.push.apply(E, n);
  }

  return E;
}

function R(R) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      t(Object(o), true).forEach(function (t) {
        E(R, t, o[t]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(R, Object.getOwnPropertyDescriptors(o));
    else
      t(Object(o)).forEach(function (t) {
        Object.defineProperty(R, t, Object.getOwnPropertyDescriptor(o, t));
      });
  }

  return R;
}

function E(t, R, E) {
  if (R in t)
    Object.defineProperty(t, R, {
      value: E,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[R] = E;
  return t;
}

exports.OPEN_DRAWER = 'Navigation/OPEN_DRAWER';
exports.CLOSE_DRAWER = 'Navigation/CLOSE_DRAWER';
exports.TOGGLE_DRAWER = 'Navigation/TOGGLE_DRAWER';
exports.DRAWER_OPENED = 'Navigation/DRAWER_OPENED';
exports.DRAWER_CLOSED = 'Navigation/DRAWER_CLOSED';
exports.MARK_DRAWER_ACTIVE = 'Navigation/MARK_DRAWER_ACTIVE';
exports.MARK_DRAWER_SETTLING = 'Navigation/MARK_DRAWER_SETTLING';
exports.MARK_DRAWER_IDLE = 'Navigation/MARK_DRAWER_IDLE';

exports.openDrawer = function (t) {
  return R(
    {
      type: 'Navigation/OPEN_DRAWER',
    },
    t
  );
};

exports.closeDrawer = function (t) {
  return R(
    {
      type: 'Navigation/CLOSE_DRAWER',
    },
    t
  );
};

exports.toggleDrawer = function (t) {
  return R(
    {
      type: 'Navigation/TOGGLE_DRAWER',
    },
    t
  );
};
