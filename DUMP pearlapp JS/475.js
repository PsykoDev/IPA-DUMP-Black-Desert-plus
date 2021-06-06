var t = function (t, n) {
  var o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 'light',
    u = t.state,
    l = t.router,
    v = t.getChildNavigation(u.routes[u.index].key);
  return l.getScreenOptions(v, n, o);
};

exports.default = t;
