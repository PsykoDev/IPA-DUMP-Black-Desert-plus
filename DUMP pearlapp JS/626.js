exports.__esModule = true;

exports.default = function (n, t) {
  var u = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {},
    l = u.whitelist || null,
    f = u.blacklist || null;

  function o(n) {
    return !(!l || -1 !== l.indexOf(n)) || !(!f || -1 === f.indexOf(n));
  }

  return {
    in: function (t, u, l) {
      return !o(u) && n ? n(t, u, l) : t;
    },
    out: function (n, u, l) {
      return !o(u) && t ? t(n, u, l) : n;
    },
  };
};
